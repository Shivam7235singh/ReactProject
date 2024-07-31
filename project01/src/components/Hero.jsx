import React from "react";

function Hero() {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THIS</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
          ducimus facilis, impedit est nemo hic possimus illum quam voluptas.
          Commodi natus cupiditate sapiente aperiam reiciendis sit vel, autem
          tempore architecto distinctio id explicabo facilis soluta, enim
          doloribus temporibus assumenda. Eius assumenda quos ea enim, optio
          laborum harum dicta nisi perspiciatis?
        </p>
        <div className="hero-btn">
            <button >Shop Now</button>
            <button  className="secondary-btn">Category</button>
        </div>
        <div className="Shopping">
            <p>Also Available on</p>
           <div className="brand-icon">

            <img src="/images/amazon.png" alt="Amazon" />
            <img src="/images/flipkart.png" alt="Flipkart" />

           </div>
        </div>
      </div>

      <div className="hero-img">
      <img src="/images/shoe_image.png" alt="hero-img" />
      </div>
    </main>
  );
}

export default Hero;
