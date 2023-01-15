import { Sidebar } from "../../components/Sidebar/Sidebar"
import { Topbar } from "../../components/Topbar/Topbar"
import "./settings.css"

function Settings() {
  return (
    <>
    <Topbar/>
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <div className="settingsPP">
                    <img src="https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <label htmlFor="fileInput" >
                        <i class="settingsPPIcon fa-regular fa-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder="Username" />
                <label>Email</label>
                <input type="email" placeholder="Email" />
                <label>Password</label>
                <input type="password" placeholder="Password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
    </>
  )
}

export default Settings