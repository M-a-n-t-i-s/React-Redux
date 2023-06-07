import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://cs7.pikabu.ru/post_img/big/2019/03/26/11/1553625291161446207.jpg' />
            { props.message }
            <div>
                <span> {props.like} like</span>
            </div>

        </div>
    )
}

export default Post;