import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FindPostByPostIdCategoryTitle, Post } from "../api/PostApi";

import style from "../styles/pages/readpost.module.css";

const ReadPostPage = () => {
  const [post, setPost] = useState<Post>();
  const { category, postid } = useParams();

  const GetPost = useCallback(async () => {
    if (category && postid) {
      const data = await FindPostByPostIdCategoryTitle(category, postid);

      setPost(data);
    }
  }, [category, postid]);

  useEffect(() => {
    GetPost();
  }, [GetPost]);

  return (
    <>
      {post && (
        <div className={style.read_post}>
          {/* Redirect Header */}
          <header className={style.read_post_redirect_category}>
            <Link to={`/${post.category.title}`}>
              {post.category.title} &gt;
            </Link>
          </header>
          <div className={style.read_post_item}>
            {/* Post Header - User Info (Post title, Category title, Author name) */}
            <div className={style.read_post_item_info}>
              <header className={style.read_post_item_info_header}>
                <div className={style.read_post_item_info_header_category}>
                  <span>{post.category.title}</span>
                </div>
                <span>{post.title}</span>
              </header>
              <div className={style.read_post_item_info_user_info}>
                <span>{post.author.username}</span>
                <span>{new Date(post.created_at).toLocaleString()}</span>
              </div>
            </div>
            {/* Post Content */}
            <div className={style.read_post_item_content}>{post.content}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReadPostPage;
