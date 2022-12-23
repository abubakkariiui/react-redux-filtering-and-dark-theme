import React from "react";

const PostCard = ({ post, theme }) => {
  return (
    <div key={post.id} className={theme === "light" ? "post" : "post1"}>
      <h2>{post?.title}</h2>
      <hr />
      <p>{post?.body}</p>
    </div>
  );
};

export default PostCard;
