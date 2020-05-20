import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, Row, Col } from "reactstrap";
import data from "./../../fixtures/data.json";

const SingleViewPage = React.memo(() => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  const getMatchArticle = useCallback(
    (slug) => {
      let match = data.find((item) => item.slug === slug);
      setArticle(match);
    },
    [setArticle]
  );

  useEffect(() => {
    getMatchArticle(slug);
  }, [getMatchArticle, slug]);

  return (
    <React.Fragment>
      <Header />
      <Container className="single-view-page">
        {article && (
          <Row>
            <Col xl="6">
              <img
                src={require("./../../assets/images/" + article.image)}
                alt={article.image}
                className="article-image"
              />
              <span className="article-tag">{article.tag}</span>
            </Col>
            <Col xl="6 article-right">
              <h1 className="article-title">{article.title}</h1>
              <ul className="questions">
                {article.questions.map((question, index) => (
                  <li key={index}>
                    <h5 className="question-number">Question {index + 1}</h5>
                    <p className="question-body">{question}</p>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        )}
      </Container>
      <Footer />
    </React.Fragment>
  );
});

export default SingleViewPage;
