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
      {props.eng === true ? <h1>Welcome</h1> : <h1>Benvenuti</h1>}
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
      {props.eng === true ? (
        <div className="description">
          <p className="descr-par">
            We offer you a fully equipped studio apartment to have a pleasant
            and relaxing experience.
            <br />
            <br />
            At your disposal:
            <br />- Private parking next to the entrance door
            <br />- Tv
            <br />- Wi-fi
            <br />- Inverter air conditioner (summer - winter)
            <br />- Fridge
            <br />
            <br /> You will find a welcome kit with a snack and all the
            necessary tools for cooking. In the apartment will also be at your
            disposal: blankets, sheets, pillows, towels and bath towels for each
            guest. The room has a comfortable double bed, large wardrobe and the
            possibility of a third bed on request, which you will find ready at
            your arrival. The bathroom has a large shower, dispenser with shower
            gel and shampoo.
          </p>
        </div>
      ) : (
        <div className="description">
          <p className="descr-par">
            Il nostro obiettivo è offrirvi un monolocale attrezzato al meglio
            affinché il vostro soggiorno sia un'esperienza piacevole e
            rilassante.
            <br />
            <br />A vostra disposizione:
            <br />- Parcheggio privato adiacente alla porta di ingresso
            <br />- Tv
            <br />- Wi-fi
            <br />- Condizionatore Inverter (estate - inverno)
            <br />- Frigorifero
            <br />
            <br /> Al vostro arrivo troverete un kit di benvenuto con uno
            spuntino e tutti gli utensili necessari per la preparazione dei
            pasti. Nell'appartamento inoltre saranno a vostra disposizione:
            coperte, lenzuola, cuscini, asciugamani e teli bagno per ogni
            ospite. La camera dispone di comodo letto matrimoniale, ampio
            armadio e possibilità di terzo letto su richiesta, che troverete già
            pronti al vostro arrivo. Il bagno ha un'ampia doccia, dispenser con
            bagno schiuma e shampoo.
          </p>
        </div>
      )}
    </div>
  );}
