import Container from './../components/container'
import Head from 'next/head'
const History = () =>(
	<Container>
	<Head>
		<title>Historia</title>
	</Head>
	<h1 style={{textAlign: "center"}}>Github</h1>
	<div className="alert alert-ligth" role="alert">
        <p>Le genial plataforma GitHub fue creada por Chris Wanstrath , PJ Hyett , Tom Preston-Werner y Scott Chacon ayá por Febrero de 2008 en San Francisco – EEUU y hasta la fecha sigue estando ubicada en el mismo lugar. En Febrero de 2009 los integrantes de la compañía anuncian en una entrevista para Yahoo que GitHub ya había alcanzado más de 46 mil repositorios públicos, una buena cantidad que indicaba la popularidad que se iba a venir para Github.En Julio de ese mismo año 2009, GitHub alcanza los más de 135 mil repositorios.</p>
		<img src="https://www.solucionespm.com/wp-content/uploads/2018/11/GitHub.png" alt="github"/>
	 </div>
	</Container>
)
export default History