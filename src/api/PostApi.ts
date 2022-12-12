export type Post = {
  id: number;
  title: string;
  content: number;
  category: PostList_Category;
  author: PostList_Author;
  created_at: Date;
  updated_at: Date;
};

type PostList_Category = {
  id: number;
  title: string;
};

type PostList_Author = {
  id: number;
  username: string;
};

export const GetMainPagePost = async () => {
  return await fetch("http://localhost:8080/api/post/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data.datas;
    });
};

// Find post / post id / category title
export const FindPostByPostIdCategoryTitle = async (
  category: string,
  postid: string
) => {
  return await fetch(`http://localhost:8080/api/post/${category}/${postid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
