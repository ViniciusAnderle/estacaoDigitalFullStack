import 'boxicons'
import './rodape.css';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import twitter from './img/twitter.png';



function Rodape(){
    return (<>    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
    integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
<link rel="stylesheet" href="boxicons.min.css"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"/>
<link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"/>

<footer>
        <div class="container">
            <div class="row">

                <div class="col-md-2">
                    <h4>Institucional</h4>
                    <hr/>
                    <ul class="navbar-nav">
                        <li>
                            <a href="sobre.html">Sobre </a>
                        </li>
                        <li>
                            <a href="empregos.html">Empregos</a>
                        </li>

                        <li>
                            <a
                                href="https://www.procon.df.gov.br/wp-content/uploads/2019/08/Codigo-do-consumidor-FINAL.pdf">Codigo
                                de defesa do consumidor</a>
                        </li>
                        <hr/>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h4>Categorias</h4>
                    <hr/>
                    <ul class="navbar-nav">
                        <li>
                            <a href="celulares.html">Celulares</a>
                        </li>
                        <li>
                            <a href="pcs.html">Computadores</a>
                        </li>
                        <li>
                            <a href="hardware.html">Hardware</a>
                        </li>
                        <li>
                            <a href="perifericos.html">Perifericos</a>
                        </li>
                        <hr/>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h4>Atendimento</h4>
                    <hr/>
                    <ul class="navbar-nav">
                        <li>
                            <p><strong>Horário de atendimento:</strong>
                                08:00 às 20:00 -
                                Segunda a Sábado,
                                horário de Brasília
                                <em>(Exceto domingo e feriados)</em>
                            </p>
                        </li>
                        <li>
                            <p>Endereço:
                                R. Comendador Norberto, 1299
                                Santa Cruz
                                Guarapuava/PR - CEP: 85015-240
                                Central SAC:
                                (42) 99999-9999</p>
                        </li>
                        <li>
                            <p>Email:
                                <em> faleconosco@estacaodigital.com.br</em>
                            </p>
                        </li>
                        <hr/>
                    </ul>

                </div>
                <div class="col-md-4">
                    <ul>
                        <li>
                            <a
                                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjctODU3LP-AhVjkZUCHQShBIUQFnoECBEQAQ&url=https%3A%2F%2Fm.facebook.com%2Flogin%2F%3Flocale%3Dpt_PT%26refsrc%3Ddeprecated&usg=AOvVaw2qj_pjYtgEyYU-OfIeILLP"target="_blank">
                                <img src={facebook}/>
                            </a>
                            <a
                                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiZqLfp3LP-AhUHrpUCHchTBOAQFnoECBMQAQ&url=https%3A%2F%2Fwww.instagram.com%2Fexplore%2Flocations%2F1029624658%2Fpagina-inicial%2F&usg=AOvVaw1ntcqkSa0VKqoQxmwPMd8l"target="_blank">
                                <img src={instagram}/>
                            </a>
                            <a
                                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwio14fy3LP-AhU2vJUCHXL_DCwQFnoECAwQAQ&url=https%3A%2F%2Ftwitter.com%2Flogin%3Flang%3Dpt&usg=AOvVaw24nEAz2rTA9h462Y2mlmEX"target="_blank">
                                <img src={twitter}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
       </>)
 
    }
    export default Rodape;