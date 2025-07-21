import React from "react";

function Features() {
  const Features = (
    <div className="feature-grid">
      <div className="feature-card" id="card1">
        <h3 className="cardTitle">Lorem</h3>
        <img src="https://picsum.photos/200" />
        <p class="feature-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugiat
          natus magni, blanditiis laborum sunt deleniti quis quaerat. Earum
          veniam dolor.
        </p>
      </div>

      <div className="feature-card" id="card2">
        <h3 className="cardTitle">Ipsum </h3>
        <img src="https://picsum.photos/200" />
        <p class="feature-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugiat
          natus magni, blanditiis laborum sunt deleniti quis quaerat. Earum
          veniam dolor.
        </p>
      </div>

      <div className="feature-card" id="card3">
        <h3 className="cardTitle">Dolor</h3>
        <img src="https://picsum.photos/200" />
        <p className="feature-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugiat
          natus magni, blanditiis laborum sunt deleniti quis quaerat. Earum
          veniam dolor.
        </p>
      </div>
    </div>
  );

  return Features;
}

export default Features;
