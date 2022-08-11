import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import { AnimatePresence } from "framer-motion";
import About from "../pages/About";
import LatestPosts from "../pages/LatestPosts";
import PostTemplate from "../pages/templates/PostTemplate";
import AuthorTemplate from "../pages/templates/AuthorTemplate";
import CategoriesTemplate from "../pages/templates/CategoriesTemplate";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/latest" element={<LatestPosts />} />
        <Route path="/posts/example" element={<PostTemplate />} />
        <Route path="/authors/:author" element={<AuthorTemplate />} />
        <Route path="/categories/:category" element={<CategoriesTemplate />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
