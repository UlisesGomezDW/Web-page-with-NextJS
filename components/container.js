import Head from 'next/head'
import Navbar from './navbar'
const Container = ({children}) =>(
	<div>
		<Head>
			<title>Next Dev</title>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/lux/bootstrap.min.css" integrity="sha384-smnSwzHqW1zKbeuSMsAM/fMQpkk7HY11LuHiwT8snL/W2QBoZtVCT4H5x1CEcJCs" crossorigin="anonymous"></link>
		</Head>
		<Navbar/>
		<div className="p-4">
			{children}
		</div>
  	</div>
)
export default Container