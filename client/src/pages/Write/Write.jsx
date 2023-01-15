import { Topbar } from "../../components/Topbar/Topbar"
import "./write.css"
function Write() {
  return (
    <>
    <Topbar/>
    <div className="write">
    <img className="writeImg" src="https://images.pexels.com/photos/547494/pexels-photo-547494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i class="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea type="text" placeholder="Tell your story..." className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit" >Publish</button>
        </form>
    </div>
    </>
  )
}

export default Write