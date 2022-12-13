import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { FindPostByCategory, Post } from "../api/PostApi";
import MainPagePostList from "../components/Post/PostList";
import style from "../styles/pages/category.module.css";

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
    <div className={style.page}>
      <div className={style.title}>{category}</div>
      <div className={style.content}>
        {post &&
          post?.map((post) => <MainPagePostList key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default CategoryPostList;
