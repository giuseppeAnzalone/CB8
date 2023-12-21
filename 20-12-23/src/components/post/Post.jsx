import { useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import "./index.css";

const Post = ({ postData }) => {
  const { title, body, tags, reactions, userId } = postData;
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      });
  }, []);

  return (
    <div className="Post">
      <h3 className="User__Name">
        {userData.firstName} {userData.lastName}
      </h3>
      <h3 className="Post__title">{title}</h3>
      <p className="Post__content">{body}</p>
      <div className="Post__info">
        <div className="Post__info--gift">
          <span>
            <FaThumbsUp />
          </span>
          <span>{` ${reactions}`}</span>
        </div>
        <ul className="Post__info--categories">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Post;
