const express = require('express');
const admin = require('firebase-admin');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const serviceAccount = require('./path/to/your/serviceAccountKey.json');

const app = express();
const PORT = process.env.PORT || 3001;

// Inicialize o Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://console.firebase.google.com/u/0/project/estacaodigital-7533a/authentication/users?hl=pt',
});

// Configuração do express-session
app.use(cookieParser());
app.use(
  session({
    secret: 'secretpassword', // Altere isso para uma string mais segura em um ambiente de produção
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 60 * 60 * 1000 }, // Configuração do cookie (ajuste conforme necessário)
  })
);

// Middleware para verificar a autenticação do usuário em cada requisição
const checkAuth = (req, res, next) => {
  if (req.session && req.session.userData) {
    req.user = req.session.userData;
    return next();
  } else {
    console.error('Erro ao verificar sessão');
    res.status(401).json({ error: 'Não autorizado' });
  }
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota para login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRecord = await admin.auth().getUserByEmail(email);
    const uid = userRecord.uid;

    // Crie um token personalizado que expire em 1 hora
    const sessionCookie = await admin.auth().createSessionCookie(uid, { expiresIn: 60 * 60 * 1000 });

    // Configure o cookie na resposta e armazene as informações do usuário na sessão
    req.session.userData = {
      uid: uid,
      // Outras informações do usuário que você deseja armazenar na sessão
    };

    res.cookie('session', sessionCookie, { maxAge: 60 * 60 * 1000, httpOnly: true });
    res.json({ status: 'success' });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

// Rota para logout
app.post('/api/logout', (req, res) => {
  // Limpe as informações da sessão e remova o cookie
  req.session.destroy();
  res.clearCookie('session');
  res.json({ status: 'success' });
});

// Rota protegida - somente usuários autenticados podem acessar
app.get('/api/protected', checkAuth, (req, res) => {
  res.json({ message: 'Rota protegida, usuário autenticado', user: req.user });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
