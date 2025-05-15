import Comment from "../Comment/Comment";
import Description from "../Description/Description";
import Image from "../Image/Image";
import LikeButton from "../LikeButton/LikeButton";


export default function Post() {
  return (
    <>
    <Image/>
    <Description/>
    <LikeButton/>
    <hr/>
    <Comment/>
    </>
  )
}
