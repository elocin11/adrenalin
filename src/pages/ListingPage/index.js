import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Article from "../../components/Article";
import data from "./../../fixtures/data.json";
import { Container, Row, Col } from "reactstrap";

const ListingPage = React.memo(() => (
  <React.Fragment>
    <Header />
    <Container>
      <Row>
        {data.map(({ id, title_long, tag, thumb, slug }) => (
          <Col key={id} xl={6} lg={6} className="mb-5">
            <Article
              title_long={title_long}
              tag={tag}
              thumb={thumb}
              slug={slug}
            />
          </Col>
        ))}
      </Row>
    </Container>
    <Footer />
  </React.Fragment>
));

export default ListingPage;
