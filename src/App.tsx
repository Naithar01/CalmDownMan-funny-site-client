import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";

import MainPage from "./page/MainPage";
import ReadPostPage from "./page/ReadPostPage";

// Main Page = All Post
// ReadPost Page = select category & post id

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:category/:postid" element={<ReadPostPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
