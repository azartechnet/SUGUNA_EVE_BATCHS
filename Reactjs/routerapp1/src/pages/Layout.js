import { Outlet,Link } from "react-router-dom";
// import {Navbar,Nav,Container} from 'react-bootstrap'
// import 'bootsrap/dist/css/bootstrap.min.css';
const Layout=()=>{
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/product">Product</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}
export default Layout;