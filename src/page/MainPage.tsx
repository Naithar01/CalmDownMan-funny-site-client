import { useEffect, useState } from "react";
import { GetMainPagePost, Post } from "../api/PostApi";
import MainPagePostList from "../components/Post/PostList";
import style from "../styles/pages/main.module.css";

const MainPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    GetPosts();
  }, []);

  const GetPosts = async () => {
    const datas: Post[] = await GetMainPagePost();

    setPosts(datas);
  };

  return (
    <main className={style.main_page}>
      <section className="left"></section>
      <section className={style.main_page_list}>
        {/* Title */}
        <section className={style.main_page_list_title}>
          Main Page Post Category Name
        </section>
        {/* Notice */}
        <section
          id="notice"
          className={style.main_page_list_post_list}
        ></section>
        {/* Post List */}
        <section className={style.main_page_list_post_list}>
          {posts &&
            posts.length &&
            posts.map((post) => <MainPagePostList key={post.id} post={post} />)}
        </section>
      </section>
      <section></section>
    </main>
  );
};

export default MainPage;
