import {Link} from "react-router-dom"
import "pagues/proyectos";

	const Header= ()=>{
		return(<div className="Header">
			<header className="divContainer">
				<h1><Link to="/index.jsx" className="conector2" >WT</Link></h1>
				<ul className="lista">
					<ol><button>About me</button></ol>
					<ol><button><Link to="/proyectos.jsx" className="conector">Contacto</Link></button></ol>
					<ol><button>Proyectos</button></ol>

				</ul>
<button className="idioma">EN/ES</button>
		</header>
	</div>
		)
	}


	export default Header;