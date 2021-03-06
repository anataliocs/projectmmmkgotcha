import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home"/>

        <section className="page-section" id="listen">
          <div className="container">
            <h2 className="text-center mt-0">We are on all the major platforms!</h2>
            <hr className="divider my-4"/>
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-spotify text-success mb-4"></i>
                  <h3 className="h4 mb-2">Spotify</h3>
                  <a className="btn btn-outline-success btn-sm" href="https://open.spotify.com/show/72CNszMWtEEiPWjYUZPz8B?si=Ok2wOWLjQRa2wgErHRd8Nw">Check it out!</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-google-play text-info mb-4"></i>
                  <h3 className="h4 mb-2">Google Podcasts</h3>
                  <a className="btn btn-outline-info btn-sm" href="https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy9lZTk2NWU4L3BvZGNhc3QvcnNz">Listen!</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-apple text-dark mb-4"></i>
                  <h3 className="h4 mb-2">Apple Podcasts</h3>
                  <a className="btn btn-outline-dark btn-sm" href="https://podcasts.apple.com/podcast/id1482918951">Tune in!</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-youtube text-danger mb-4"></i>
                  <h3 className="h4 mb-2">Youtube</h3>
                  <a className="btn btn-outline-danger btn-sm" href="https://www.youtube.com/channel/UCiHNos07gWjaDPwNdKi9uUg">Watch!</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-4">We are also on your favorite Podcast apps!</h2>

            <a className="d-block" href="https://anchor.fm/carrie-arbogast" target="_blank">
              Anchor</a>
            <a className="d-block" href="https://www.breaker.audio/project-mmmk-gotcha" target="_blank">
              Breaker</a>
            <a className="d-block" href="https://overcast.fm/itunes1482918951/project-mmmk-gotcha" target="_blank">
              Overcast</a>
            <a className="d-block" href="https://pca.st/95nsi2li" target="_blank">
              Pocket Casts</a>
            <a className="d-block" href="https://radiopublic.com/project-mmmk-gotcha-WlQr5w" target="_blank">
              Radio Public</a>
            <a className="d-block" href="https://castro.fm/podcast/7c17a882-5b38-4f42-bd91-2a38c70a0414" target="_blank">
              Castro</a>
            <a className="d-block" href="https://www.listennotes.com/podcasts/project-mmmk-gotcha-carrie-arbogast-jNdC5wx2-hc/" target="_blank">
              Listen Notes</a>

          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Let's Get In Touch!</h2>
                <hr className="divider my-4"/>
                <p className="text-muted mb-5">Send us feedback! <br/>Wanna guest star or be interviewed?</p>
              </div>
            </div>
            <div className="row">

              <div className="col-lg-4 text-center">
                <div className="mt-5">
                <i className="fas fa-envelope fa-4x text-primary"></i>
                  <h3 className="h4 mb-2">Send us an Email!</h3>
                <a className="d-block" href="mailto:projectmmmkgotcha@gmail.com"
                  target="_blank" rel="noopener noreferrer">projectmmmkgotcha@gmail.com</a>
                </div>
              </div>

              <div className="col-lg-4 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-facebook text-dark mb-4"></i>
                  <h3 className="h4 mb-2">Facebook</h3>
                  <a className="btn btn-outline-dark btn-sm" href="https://www.facebook.com/ProjectMmmkGotcha/">Message us!</a>
                </div>
              </div>

              <div className="col-lg-4 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-twitter text-info mb-4"></i>
                  <h3 className="h4 mb-2">Twitter</h3>
                  <a className="btn btn-outline-info btn-sm" href="https://twitter.com/GotchaMmmk">Tweet @ us!</a>
                </div>
              </div>

            </div>
          </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
        </PortfolioModal>
      </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
