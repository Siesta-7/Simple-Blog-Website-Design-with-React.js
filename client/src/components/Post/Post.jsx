import "./post.css"
export const Post = () =>{
  return (
    <div className='post'>
        <div className='postInfo'>
            <img className='postImg' src='https://images.pexels.com/photos/217250/pexels-photo-217250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <div className='postCats'>
                <span className='postCat'>Life</span>
                <span className='postCat'>Music</span>
            </div>
            <span className='postTitle'>Ut enim ad minim veniam</span>
            <hr/>
            <span className='postDate'>1 hour ago</span>
            <p className="postDesc" >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.Ut enim ad minim veniam quis nostrud exercitation
             ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
             voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>
    </div>
  )
}
