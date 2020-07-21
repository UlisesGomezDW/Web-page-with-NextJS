import Link from 'next/link'
const Navbar = () =>(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link href="/"><a className="navbar-brand">Github</a></Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link href="/"><a className="nav-item nav-link active">Home <span className="sr-only">(current)</span></a></Link>
            <Link href="/users/"><a className="nav-item nav-link">Usuarios</a></Link>
            <Link href="/history/"><a className="nav-item nav-link">Historia</a></Link>
          </div>
        </div>
      </nav>
)
export default Navbar