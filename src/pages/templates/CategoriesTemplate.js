import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "../../css/categoriesTemplate.css";
function CategoriesTemplate() {
  let navigate = useNavigate();
  //getting the author name from URL
  let location = useLocation().pathname;
  let split = location.slice(location.lastIndexOf("/") + 1);
  let categoryName = split.replace(/-/g, " ");
  //query your database to only return posts in this category

  let posts = [
    {
      title: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
      author: "SIEMON BREKKE",
      authorURL: "/authors/siemon-brekke",
      category: (
        <span onClick={() => navigate("../../categories/photography")}>
          {categoryName}
        </span>
      ),
    },
  ];
  return (
    <div className="CategoriesTemplate">
      <div className="container">
        <h2>{categoryName}</h2>
        <div className="posts-wrapper">
          <Row style={{ padding: "25px 10px" }}>
            {posts.map((post) => {
              return (
                <Col lg={4} className="post-tile">
                  <div
                    className="post-image"
                    onClick={() => navigate("/posts/example")}
                  ></div>
                  <div className="info-text">
                    <div className="category-link">{post.category}</div>
                    <h3
                      className="post-title"
                      onClick={() => navigate("/posts/example")}
                    >
                      {post.title}
                    </h3>
                    <div
                      className="post-author"
                      onClick={() => navigate(`${post.authorURL}`)}
                    >
                      BY {post.author}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default CategoriesTemplate;
