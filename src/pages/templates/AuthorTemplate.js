import React from "react";
import "../../css/AuthorTemplate.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

function AuthorTemplate() {
  let navigate = useNavigate();
  //getting the author name from URL
  let location = useLocation().pathname;
  let split = location.slice(location.lastIndexOf("/") + 1);
  let authorName = split.replace(/-/g, " ");

  //example of posts already sorted from database
  //note how here category links are different - we are on a dynamic route

  let posts = [
    {
      title: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
      author: "SIEMON BREKKE",
      authorURL: "/authors/siemon-brekke",
      category: (
        <span onClick={() => navigate("../../categories/photography")}>
          photography
        </span>
      ),
    },
    {
      title: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
      author: "SIEMON BREKKE",
      authorURL: "/authors/siemon-brekke",
      category: (
        <span onClick={() => navigate("../../categories/photography")}>
          photography
        </span>
      ),
    },
  ];

  return (
    <div className="AuthorTemplate">
      <div className="title-section">
        <div className="container">
          <div className="author-container">
            <h2 className="author-template">POSTS BY </h2>
            <h2 className="author-name"> {authorName} </h2>
          </div>
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
    </div>
  );
}

export default AuthorTemplate;
