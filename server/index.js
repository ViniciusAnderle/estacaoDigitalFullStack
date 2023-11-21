const path = require("path");
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing cookies
app.use(cookieParser());

// Middleware for sessions
app.use(
  session({
    secret: "your-secret-key", // Change this to a secure secret key
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 } // Set the session duration in milliseconds
  })
);

// Middleware for serving static files
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Handle GET requests to the /api route
app.get("/api", (req, res) => {
  // Access the session to store or retrieve data
  const sessionData = req.session;
  if (!sessionData.views) {
    sessionData.views = 1;
  } else {
    sessionData.views += 1;
  }

  res.json({ message: "Hello from server!", views: sessionData.views });
});

// All other unhandled GET requests will return the React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
