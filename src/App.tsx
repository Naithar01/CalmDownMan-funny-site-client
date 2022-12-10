import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";

import MainPage from "./page/MainPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
