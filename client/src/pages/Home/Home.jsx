import "./home.css"

import { Header } from "../../components/Header/Header"
import Posts from "../../components/Posts/Posts"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { Topbar } from "../../components/Topbar/Topbar"

export const Home = () => {
  return (
    <>
    <Topbar/>
    <Header/>
    <div className="home">   
        <Posts/>
        <Sidebar/>
    </div>
    </>
    
  )
}

