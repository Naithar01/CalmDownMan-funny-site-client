import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { FindPostByCategory, Post } from "../api/PostApi";

const CategoryPostList = () => {
  const { category } = useParams();
  const [post, setPost] = useState<Post[]>();

  const GetPost = useCallback(async () => {
    if (category) {
      const data = await FindPostByCategory(category);

      setPost(data);
    }
  }, [category]);

  useEffect(() => {
    GetPost();
  }, [GetPost]);

  return (
    <div>
      Page Name = {category}
      <br />
      <hr />
      {post?.length}
      <br />
      <hr />
      {JSON.stringify(post)}
    </div>
  );
};

export default CategoryPostList;
