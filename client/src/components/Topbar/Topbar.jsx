import "./topbar.css"
import { Link } from "react-router-dom";

export const Topbar = ()=> {
  const user = true
  return (
    <div className="top">
        <div className="topLeft">
        <i class="topIcon fa-brands fa-square-facebook"></i>
        <i class="topIcon fa-brands fa-square-pinterest"></i>
        <i class="topIcon fa-brands fa-square-instagram"></i>
        <i class="topIcon fa-brands fa-square-twitter"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
            <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                <li className="topListItem"><Link className="link" to ="/about">ABOUT</Link></li>
                <li className="topListItem"><Link className="link" to ="/contact">CONTACT</Link></li>
                <li className="topListItem"><Link className="link" to ="/write">WRITE</Link></li>
                <li className="topListItem">{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className="topRight">
        {user ? 
        (<img className="topImg" src="https://images.pexels.com/photos/14967402/pexels-photo-14967402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />) 
        : (<>
          <Link className="link" to="/login" >LOGIN</Link>
          <Link className="link" to="/register">REGISTER</Link></>)}

            <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
  }

