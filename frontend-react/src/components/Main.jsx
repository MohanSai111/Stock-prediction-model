import React from "react";
import Button from "./Button";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center bg-light-dark rounded">
          <h1 className="text-light">Stock Prediction Portal</h1>
          <p className="text-light  lead" >
            Stock prediction models aim to forecast future price movements or
            trends using historical data, technical indicators, and sometimes
            sentiment analysis to aid investment decisions. While the stock
            market is inherently noisy and volatile, modern approaches leverage
            Machine Learning (ML) and Deep Learning (DL) to identify non-linear
            patterns that traditional statistical models often miss.{" "}
          </p>
         <Button text="login" class="btn-outline-info"/>
        </div>
      </div>
    </>
  );
};

export default Main;
