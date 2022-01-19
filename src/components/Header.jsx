import {Link} from "react-router-dom"
import "pagues/proyectos";

	const Header= ()=>{
		return(<div className="Header">
			<header className="divContainer">
				<h1><Link to="/index.jsx" className="conector2" >IC</Link></h1>
				<ul className="lista">
					<li><button>Sobre mi</button></li>
					<li><button><Link to="/proyectos.jsx" className="conector">Contacto</Link></button></li>
					<li><button>Proyectos</button></li>
				</ul>
<button className="idioma">EN/ES</button>
		</header>
	</div>
		)
	}


	export default Header;