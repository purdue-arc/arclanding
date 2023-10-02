import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, so here's some updates!
        </h1>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
            <Article
              imgUrl={blog01}
              date="MM/DD/YYYY"
              title="Sample Title 5"
            />
          </div>

          <div className="gpt3__blog-container_groupB">
            <Article
              imgUrl={blog02}
              date="MM/DD/YYYY"
              title="Sample Title 1"
            />
            <Article
              imgUrl={blog03}
              date="MM/DD/YYYY"
              title="Sample Title 2"
            />
            <Article
              imgUrl={blog04}
              date="MM/DD/YYYY"
              title="Sample Title 3"
            />
            <Article
              imgUrl={blog05}
              date="MM/DD/YYYY"
              title="Sample Title 4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
