import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Article = React.memo(({ title_long, tag, thumb, slug }) => (
  <article className="article">
    <img
      src={require("./../../assets/images/" + thumb)}
      alt="title"
      className="article-thumb"
    />
    <span className="article-tag">{tag}</span>
    <h4 className="article-title">{title_long}</h4>
    <Link to={`/${slug}`} className="article-link">
      View case study
    </Link>
  </article>
));

Article.propTypes = {
  id: PropTypes.number,
  title_long: PropTypes.string,
  tag: PropTypes.string,
  thumb: PropTypes.string,
  slug: PropTypes.string,
};

export default Article;
