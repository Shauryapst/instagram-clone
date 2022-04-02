import react, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      userName: "shaurya",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      caption:"this is first image",
      avatar:"http://placeimg.com/80/80/people"
    },
    {
      userName: "pranshu",
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
        caption:"this is first image",
        avatar:"http://placeimg.com/80/80/people"
    },
    {
      userName: "tomar",
      imageUrl:
        "https://static.toiimg.com/thumb/msid-58475411,width-748,height-499,resizemode=4,imgsize-142947/.jpg",
      caption:"this is first image",
      avatar:"http://placeimg.com/80/80/people"
    },
  ]);
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__header__img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
          alt=""
        />
        <input
          className="app__header__search"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="post__container">
        {
          posts.map((post) => (
            <Post userName={post.userName} imageUrl={post.imageUrl} caption={post.caption} avatar={post.avatar} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
