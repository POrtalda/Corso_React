import { useContext } from "react"
import { PostContext } from "../../context/PostContext"


export default function Description() {
    const post = useContext(PostContext)
  return (
    <>
    <h3>{post.description}</h3>
    </>
  )
}
