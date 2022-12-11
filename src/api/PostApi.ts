export type Post = {
  id: number;
  title: string;
  content: number;
  category_id: number;
  author_id: number;
  created_at: Date;
  updated_at: Date;
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
