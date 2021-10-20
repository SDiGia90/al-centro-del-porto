import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar";
import home from "../Pages/img-home.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import photo1 from "../img/ph-1.jpg";
import photo2 from "../img/ph-2.jpg";
import photo3 from "../img/ph-3.jpg";
import photo4 from "../img/ph-4.jpg";
import photo5 from "../img/ph-5.jpg";
import photo6 from "../img/ph-6.jpg";
export default function Home(props) {
  return (
    <div className="container-fluid">
      <Navbar eng={props.eng} />
      {props.eng === true ? <h1>Welcome</h1> : <h1>Benvenuto</h1>}
      <img
        className="img-home"
        src={home}
        width="60%"
        alt="Al centro del Porto"
      />
      {props.eng === true ? (
        <p>
          The guest house "Al Centro del Porto" is located in a quiet area,{" "}
          <br />
          very close to Civitavecchia's Harbour, the city center and a few
          minutes from the beach.
        </p>
      ) : (
        <p>
          La casa vacanze "Al Centro del Porto" è situata in una zona
          tranquilla, <br />
          vicinissima al Porto di Civitavecchia, al centro della città e a
          pochissimi minuti dal mare.
        </p>
      )}
<div className="car-div">
      <Carousel autoPlay>
        <div>
          <img className="photo" alt="" src={photo1} />
        </div>
        <div>
          <img className="photo" alt="" src={photo2} />
        </div>
        <div>
          <img className="photo" alt="" src={photo3} />
        </div>
        <div>
          <img className="photo" alt="" src={photo4} />
        </div>
        <div>
          <img className="photo" alt="" src={photo5} />
        </div>
        <div>
          <img className="photo" alt="" src={photo6} />
        </div>
      </Carousel>
      </div>
    </div>
  );}
