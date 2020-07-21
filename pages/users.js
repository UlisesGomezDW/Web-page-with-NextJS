import Container from './../components/container'
import fetch from 'isomorphic-fetch'
import Card from './../components/cards'
import Head from 'next/head'
const Users = ({users}) =>(
	<Container>
	<Head>
		<title>Users</title>
	</Head>
	<h1 style={{textAlign: "center"}}>Github users</h1>
	<div className="container">
			<Card users={users}/>
	</div>
	</Container>
)
Users.getInitialProps = async () => {
	const response = await fetch('https://api.github.com/users?since=10')
	const users = await response.json()
	return {users}
}
export default Users