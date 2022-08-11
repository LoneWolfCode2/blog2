import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import "../css/Home.css";
function Home() {
  let navigate = useNavigate();

  let topPost = {
    title: "JAPAN HOUSE OPENS IN mountainside TO FOSTER PREAK CREATIVITY.",
    introText:
      "Enim omittam qui id, ex quo atqui dictas complectitur. Nec ad timeam accusata, hinc justo falli id eum, ferri novum molestie eos cu.",
    author: "RETA TORPHY",
    authorURL: "/authors/reta-torphy",
    category: (
      <span onClick={() => navigate("categories/illustration")}>
        illustration
      </span>
    ),
  };

  let posts = [
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

  let featuredPosts = [
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
    <div className="home-page">
      <div className="top-post">
        {/* <div className="container"> */}
        <div className="posts-wrapper">
          <Row className="top-post-item">
            <Col
              className="top-post-image"
              // onClick={() => navigate(`/${topPost.title}`)}
              onClick={() => navigate("/posts/example")}
              lg={7}
            ></Col>
            <Col className="top-post-text" lg={5}>
              <div className="category-link">{topPost.category}</div>
              <div className="top-post-link">{topPost.categoryLink}</div>
              <h2
                className="top-post-title"
                // onClick={() => navigate(`/${topPost.title}`)}
                onClick={() => navigate("/posts/example")}
              >
                {topPost.title}
              </h2>
              <div className="post-short-text">{topPost.introText}</div>
              <div className="post-author-text-link">
                <div
                  className="post-author"
                  onClick={() => navigate(`${topPost.authorURL}`)}
                >
                  BY {topPost.author}
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* </div> */}
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
      <hr />
      <div className="posts-wrapper latest">
        <h1>LATEST POSTS</h1>
        <Row style={{ padding: "25px 10px" }}>
          {latestPosts.map((post) => {
            return (
              <Col lg={3} className="post-tile">
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
        <div className="button-wrapper">
          <Button
            variant="outlined"
            color="black"
            style={{
              marginTop: "90px",
              padding: "20px 25px",
              borderRadius: "0px",
            }}
            onClick={() => navigate("/latest")}
          >
            VIEW ALL LATEST POSTS
          </Button>
        </div>
      </div>
      <hr />
      <div className="posts-wrapper featured-posts">
        <h1>FEATURED POSTS</h1>
        <Row style={{ padding: "25px 10px" }}>
          {featuredPosts.map((post) => {
            return (
              <Col lg={6} className="post-tile">
                <div
                  className="post-image"
                  onClick={() => navigate("/posts/example")}
                ></div>
                <div className="info-text">
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
  );
}

export default Home;
