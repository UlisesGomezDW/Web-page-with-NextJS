import Container from './../components/container'
import Head from 'next/head'
const App = () =>(
	<Container>
	<Head>
		<title>Home</title>
	</Head>
	<h1 style={{textAlign: "center"}}>Github</h1>
	<div className="alert alert-ligth" role="alert">
        <p>Es un servicio de alojamiento que ofrece a los desarrolladores repositorios de software usando el sistema de control de versiones, Git.
		GitHub te permite trabajar llevando un control de las versiones de tu proyecto, por ejemplo si un día decides subir el código y los archivos de una primera parte de tu proyecto y al siguiente día otra versión y así sucesivamente todos los días, entonces te das cuenta que se están creando siempre diferentes  versiones de tu proyecto,  todo se va almacenando en un repositorio que debes de crear para tu proyecto.También te permite llevar un control de versiones cuando estas  trabajando en equipo con otros Desarrolladores, por ejemplo si tu equipo de Desarrollo de un proyecto esta conformado por 3 personas o más, cada miembro del equipo va ir subiendo su propio avance del proyecto y pueden cometer el error de chancar lo que el otro desarrollador puede haber subido al repositorio, entonces para que no pase esto GitHub lanza un mensaje que nos alerta que estas subiendo un versión obsoleta o que no corresponde.
		</p>
		<img src="https://miro.medium.com/max/1125/1*wotzQboYWAfaj-7bvGNIkQ.png" alt="github"/>
	 </div>
	</Container>
)
export default App