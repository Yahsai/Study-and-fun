function elementfromHTML(html){
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

const navLogo  = "https://raw.githubusercontent.com/Yahsai/Study-and-fun/master/public/resources/images/BannerLogo_white.png"

const myHeader = elementfromHTML(`
  <header>
        <div class="header_nav">
            <a href="#"><img src=${navLogo} alt="" class="nav_logo"></a>
            <nav>
                <ul>
                    <li><a href="#Home">Hogar</a></li>
                    <li><a href="./public/El Gatito 0.4/index.html">Juego</a></li>
                    <li><a href="#AboutUs">Sobre Nosotros</a></li>
                </ul>
            </nav>
            <div id="userIcon">
            <a href="public/pages/user/login.html"><button>Register</button></a>
            </div>
        </div>
    </header>
  `);

document.body.appendChild(myHeader);