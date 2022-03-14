import React, { Fragment, useContext } from "react";
import { healthCareContext } from "../App";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

function Home() {
  let context = useContext(healthCareContext);

  return (
    <Container>
      <br></br>
      <Carousel variant="dark">
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 mx-auto"
            src="https://i.graphicmama.com/blog/wp-content/uploads/2021/05/20071350/Free-Food-PowerPoint-Template-22.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 mx-auto"
            src="https://s3.amazonaws.com/prezitemplates/next-templates/thumbnails/cgofnv51mkvhm84f.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 mx-auto"
            src="https://i.pinimg.com/originals/cd/41/05/cd4105d8fbd397deb61131702391a81d.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="home container text-decoration-none" style={{display:"grid",gridTemplateColumns:"3fr 3fr 3fr",textAlign:"center",marginTop:"25px"}}>
        {context.data.map((e, i) => {
          return (
            <Fragment key={i}>
              <Link
                to={`/` + e.name.replace(/ /g, "").toLowerCase()}
                className="text-decoration-none"
              >
                <div
                  className="home-item-wrapper justify-content-center p-3"
                  style={{textDecoration: "none"}}
                  onClick={() => {
                    let dataprint = context.data.findIndex(
                      (f) => f.name === e.name
                    );
                    context["dataprint"] = dataprint;
                  }}
                >
                  <img className="home-image" style={{borderRadius: "10px",height:"250px",width:"250px"}} src={e.image} alt={e.name}></img>
                  <div className="m-3 lead text-dark fw-bold text-center">
                    {e.name}
                  </div>
                </div>
              </Link>
            </Fragment>
          );
        })}
      </div>
      <hr />
      <footer>
        <h5 className="bg-dark text-light text-center">
          @2022 Health Care Products
        </h5>
      </footer>
    </Container>
  );
}
export default Home;
