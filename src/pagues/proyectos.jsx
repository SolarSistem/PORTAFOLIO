import Header from "components/Header.jsx";
import Footer from "components/footer.jsx";
import "styles/contacto.css"

function Proyectos (){
	return(

		<div className="contacto">
<Header/>

<div className="contacto_contenedor">
	<h4>Contacto</h4>
<label>Nombre</label>
<input className="nombre" type="text" />
<label>Correo</label>
<input className="correo" type="email" />
<label>Mensaje</label>
<input className="mensaje" type="text" />
<button type="submit">Enviar</button>
</div>




		</div>

	)
}

export default Proyectos;