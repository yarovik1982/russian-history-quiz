import { Link } from "react-router"


function Header() {
   return (
      <header className="App-header">
         <Link to={'/quiz'}>Quiz</Link>
      </header>
   )
}

export default Header
