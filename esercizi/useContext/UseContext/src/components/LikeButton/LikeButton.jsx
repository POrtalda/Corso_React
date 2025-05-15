import { useContext } from "react"
import { PostContext } from "../../context/PostContext"


export default function LikeButton() {
    const post = useContext(PostContext)

    function handleLike() {
        
    }
  return (
   <>
   <button onClick={handleLike}>{post.like ? `don't like ${post.numLike}` : `like ${post.numLike}`} </button>
   </>
  )
}
