import React from "react";
import plants from "../../../data";

const SinglePlant = () => {
  return (
      <>
      {plants.map(plant => {
          const {id, name, blurb, origin, care} = plant;
          return <article key={id} className="plant">
          <h3>
            <a className="link--flower">{name}</a>
            <sup>{id}</sup>
          </h3>
          <h4 className="plant--botanical-name">Bromeliaceae</h4>
          <p>
            {blurb}
          </p>
          <dl className="plant--details">
            <div className="plant--details__item">
              <dt>Native Areas:</dt>
              <dd>{origin}</dd>
            </div>
            <div className="plant--details__item">
              <dt>Care:</dt>
              <dd>{care}</dd>
            </div>
          </dl>
        </article>
      })}
      </>
  )
};

export default SinglePlant;
