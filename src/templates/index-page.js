import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import about1 from "../img/about-image-1.png";
import about2 from "../img/about-image-2.png";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `middle left`,
        backgroundAttachment: `fixed`
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column"
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow: "#005400 0.5rem 0px 0px, #005400 -0.5rem 0px 0px",
            backgroundColor: "#005400",
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow: "#005400 0.5rem 0px 0px, #005400 -0.5rem 0px 0px",
            backgroundColor: "#005400",
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  {/* <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div> */}
                </div>
                <div className="columns">
                  <div className="column is-12" id="about">
                    <h3 className="has-text-weight-semibold is-size-2">
                      About
                    </h3>
                    <p>
                      Consideration of the future is a key element of
                      sustainability. The basic idea behind sustainability is
                      that the current generation can meet its needs without
                      compromising the ability of future generations to meet
                      their needs (Brundtland Report, 1987).
                    </p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12" id="plans">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Plans & Commitments
                    </h3>
                    <p>
                      CSUDH Sustainability Department is dedicated to: Promoting
                      a culture of sustainability through the College community
                      by engaging the powerful education, research and service
                      traditions of CSUDH. We want to promote sustainable
                      practices that recognize the need to manage human
                      interactions with ecosystems to minimize impacts of use,
                      conserve the regenerative capacity of the natural
                      environment, and promote its ecological integrity.{" "}
                    </p>
                  </div>
                </div>
                {/* <Features gridItems={intro.blurbs} /> */}
                {/* <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div> */}
                <div className="columns">
                  <div className="column is-12" id="events">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Events
                    </h3>
                    <BlogRoll />
                    {/* <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div> */}
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12" id="academics">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Academics & Research
                    </h3>
                    <p className="columns">
                      <div className="column is-6">
                        <img src={about1} />
                      </div>
                      <div className="column is-6">
                        <img src={about2} />
                      </div>
                    </p>
                  </div>
                </div>
                {/* <div className="columns">
                  <div className="column is-12" id="get-involved">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Get Involved
                    </h3>
                    <p>{description}</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
