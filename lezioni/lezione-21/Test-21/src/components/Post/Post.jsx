import Comment from '../Comment/Comment';
import Description from '../Description/Description';
import Imege from '../Imege/Imege';
import LikeButton from '../LikeButton/LikeButton';
import './Post.css';

export default function Post({post}) {

    return(
        <>
            <div className='post'>
                <Imege url = {post.urlImg}/>
                <Description title = {post.descr}/>
                <LikeButton />
                <br />
                <Comment/>
            </div>
        </>
    );
}