import { Link } from "react-router-dom"
const Homepage = () =>{
    return(
        <>
        <h1>home page </h1>
        <Link to={'/about'}>Goto About page</Link>

        </>
    )
}
export default Homepage