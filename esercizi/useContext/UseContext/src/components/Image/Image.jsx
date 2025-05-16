

import { useContext } from "react";
import { PostContext } from "../../context/PostContext";


export default function Image() {
  const post = useContext(PostContext)
  return (
    <>
      <img src={post.imgUrl} alt={post.description} />
    </>
  )
} 
