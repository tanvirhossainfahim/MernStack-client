import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              HOT
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              BLOGS
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            CLICK TO READ MORE
          </Link>
        </span>
        <hr />
        <span className="postDate">5 hours ago</span>
      </div>
      <p className="postDesc">
      If you don’t, then you’ve come to the right place. In 1994, when blogs began, a blog was more of a personal diary that people shared online. In this online journal, you could talk about your daily life or share about things that you were doing. Then, people saw an opportunity to communicate information in a new way online. Thus began the beautiful world of blogging.
      </p>
    </div>
  );
}
