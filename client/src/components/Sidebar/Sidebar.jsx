import "./sidebar.css"
export const Sidebar = ()=> {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">
                ABOUT ME
            </span >
            <img className="sidebarImg" src="https://images.pexels.com/photos/613508/pexels-photo-613508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>           
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Hobbies</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>            
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW ME</span>
            <div className="sidebarSocial">
                <i class="sidebarIcon fa-brands fa-square-facebook"></i>
                <i class="sidebarIcon fa-brands fa-square-pinterest"></i>
                <i class="sidebarIcon fa-brands fa-square-instagram"></i>
                <i class="sidebarIcon fa-brands fa-square-twitter"></i>
            </div>
        </div>
    </div>
  )
}
