import { useParams } from "react-router-dom";

const ReadPostPage = () => {
  const { category, postid } = useParams();

  return (
    <div>
      {category} <br />
      {postid}
    </div>
  );
};

export default ReadPostPage;
