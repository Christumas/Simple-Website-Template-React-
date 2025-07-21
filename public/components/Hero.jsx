import React from "react";

function Hero() {
  const Hero = (
    <main className="hero">
      <div className="brandMessage">
        <h2 className="promise">Our promise</h2>
        <p className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
          molestiae natus reprehenderit.
        </p>
      </div>

      <div className="brandImage">
        <img
          id="brandPic"
          src="https://picsum.photos/400"
          alt="brand picture"
        />
      </div>
    </main>
  );

  return Hero;
}

export default Hero;
