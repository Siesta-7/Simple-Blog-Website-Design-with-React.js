import "./single.css"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import SinglePost from "../../components/SinglePost/SinglePost"
import { Topbar } from "../../components/Topbar/Topbar"

function Single() {
  return (
    <>  <Topbar/>
        <div className="single">     
            <SinglePost/>
            <Sidebar/>
        </div>
    </> 
  )
}

export default Single