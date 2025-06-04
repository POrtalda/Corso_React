import Comment from '../Comment/Comment';
import Description from '../Description/Description';
import Image from '../Image/Image';
import LikeButton from '../LikeButton/LikeButton';
import './Post.css';

export default function Post({post}) {

    return(
        <>
           <div className='post'>
                <Image url={post.urlImg} />
                <Description title={post.descr} />
                <LikeButton />
                <br />
                <Comment />
           </div>
        </>
    );
}