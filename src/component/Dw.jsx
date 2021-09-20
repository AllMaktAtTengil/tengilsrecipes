import React, { Component } from "react";
import dw from "../Images/vampiredw.png";
class Dw extends Component {
  render() {
    return (
      <div className="vampire">
        <div className="dw">
          <img src={dw} alt="example" />
        </div>
        <h1>
          Jag rekommenderar <span>ALLTID</span>
        </h1>
        <img
          src="https://www.foodfolder.se/media/4283/image.jpeg?center=0.54666666666666663,0.49777777777777776&mode=crop&width=1200&height=630&rnd=131171088230000000"
          alt="example"
        />
      </div>
    );
  }
}
export default Dw;
