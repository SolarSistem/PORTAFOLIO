import html from "media/html.png"
import css from "media/css.png"
import js from "media/javascript.png"
import react from "media/react.png"
import node from "media/node.png"
import mongoDB from "media/mongoDB.png"
const Main = ()=>{
return(
<div className="Main">
<main>
			<section className="contenedor">
     <div className="seccion1 caja1">
						<h3>Sobre mi</h3>
						<p>Hola, mi nombre es Ismael Alexander Carvajal González tengo 25 años y soy desarrollador web, dentro de lo que he logrado en estos ultimos años se puede resaltar crear una aplicasion para una empresa del sector de la conectividad wifi que permite el cambio de contraseña y gestion de usuario dentro de la empresa con la que tiene contratada el servicio de internet</p>
			</div>
			</section>
			<section className="contenedor2 ">
				<div><img src={html} alt="imagen del logo de html" width="200px" height="200px"   /><p>html</p></div>
				<div><img src={css} alt="imagen del logo de css" width="200px"   /><p>css</p></div>
				<div><img src={js} alt="imagen del logo de js" width="200px"   /><p>js</p></div>
				<div><img src={react} alt="imagen del logo de react" width="200px" height="200px"  /><p>React</p></div>
				<div><img src={node} alt="imagen del logo de node" width="200px"   /><p>node</p></div>
				<div><img src={mongoDB} alt="imagen del logo de mongoDB" width="200px"   /><p>MongoDB</p></div>
			</section>
		</main>
</div>
	)
}


export default Main;