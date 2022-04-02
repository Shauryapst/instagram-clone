import React from "react";
import "./Post.css";
function Post(props) {
  return (
    <div className="post">
      <div className="post__user">
        <img
          class="post__user__avatar"
          src={props.avatar}
          alt=""
        />
        <span className="post__user__name">{props.userName}</span>
      </div>
      <img className="post__img" src={props.imageUrl} alt="" />

      <div className="post__caption">
        {<strong>{props.userName}</strong> }
        <span className="post__caption">{"  "+ props.caption}</span>
      </div>
    </div>
  );
}

export default Post;
