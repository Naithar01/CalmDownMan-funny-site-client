import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import CategoryPostList from "./page/CategoryPage";

import MainPage from "./page/MainPage";
import ReadPostPage from "./page/ReadPostPage";

// Updated - Category Page (post list)

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:category" element={<CategoryPostList />} />
        <Route path="/:category/:postid" element={<ReadPostPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
