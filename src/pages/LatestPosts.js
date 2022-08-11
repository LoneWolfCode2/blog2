import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/latestposts.css";
import { Row, Col } from "react-bootstrap";
function LatestPosts() {
  let navigate = useNavigate();
  let latestPosts = [
    {
      title: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
      author: "Alessandra Ortiz",
      authorURL: "/authors/alessandra-ortiz",
      category: (
        <span onClick={() => navigate("categories/photography")}>
          photography
        </span>
      ),
    },
    {
      title: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
      author: "Alessandra Ortiz",
      authorURL: "/authors/alessandra-ortiz",
      category: (
        <span onClick={() => navigate("categories/photography")}>
          photography
        </span>
      ),
    },
    {
      title: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
      author: "Alessandra Ortiz",
      authorURL: "/authors/alessandra-ortiz",
      category: (
        <span onClick={() => navigate("categories/photography")}>
          photography
        </span>
      ),
    },
    {
      title: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
      author: "Alessandra Ortiz",
      authorURL: "/authors/alessandra-ortiz",
      category: (
        <span onClick={() => navigate("categories/photography")}>
          photography
        </span>
      ),
    },
    {
      title: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
      author: "Alessandra Ortiz",
      authorURL: "/authors/alessandra-ortiz",
      category: (
        <span onClick={() => navigate("categories/photography")}>
          photography
        </span>
      ),
    },
    {
      title: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
      author: "Alessandra Ortiz",
      authorURL: "/authors/alessandra-ortiz",
      category: (
        <span onClick={() => navigate("categories/photography")}>
          photography
        </span>
      ),
    },
    {
      title: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
      author: "Alessandra Ortiz",
      authorURL: "/authors/alessandra-ortiz",
      category: (
        <span onClick={() => navigate("categories/photography")}>
          photography
        </span>
      ),
    },
    {
      title: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
      author: "Alessandra Ortiz",
      authorURL: "/authors/alessandra-ortiz",
      category: (
        <span onClick={() => navigate("categories/photography")}>
          photography
        </span>
      ),
    },
  ];
  return (
    <div className="latest-posts">
      <div className="latest-container">
        <h2>LATEST POSTS</h2>
        <div className="posts-wrapper">
          <Row style={{ padding: "25px 10px" }}>
            {latestPosts.map((post) => {
              return (
                <Col lg={4} className="post-tile">
                  <div className="post-image"></div>
                  <div className="info-text">
                    <div className="category-link">{post.category}</div>
                    <h3 className="post-title">{post.title}</h3>
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

export default LatestPosts;
