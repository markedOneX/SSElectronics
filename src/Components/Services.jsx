import React from "react";
import Card from "./Card";

function Services() {
  return (
    <div className="container cardbox">
      <div className="row">
        <div className="col-sm-4">
          <Card
            title={"LED/LCD"}
            desc={"Services for LED/LCD TVs, Monitors, Smart TVs"}
            src={
              "https://cdn.pixabay.com/photo/2013/07/12/14/49/flatscreen-148843_960_720.png"
            }
          />
        </div>
        <div className="col-sm-4">
          <Card
            title={"Video Camera"}
            desc={"Services for Camcorders, Professional Video Cameras"}
            src={
              "https://cdn.pixabay.com/photo/2016/04/01/12/20/camera-1300668_960_720.png"
            }
          />
        </div>
        <div className="col-sm-4">
          <Card
            title={"Photo Camera"}
            desc={"Services for Digital Cameras, Compact Cameras, DSLR"}
            src={
              "https://cdn.pixabay.com/photo/2017/02/01/10/47/avatars-2029585_960_720.png"
            }
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <Card
            title={"Legacy Hardware"}
            desc={"We also repair old legacy hardware such as VCR, VHS, Radios"}
            src={
              "https://cdn.pixabay.com/photo/2019/05/07/16/55/stereo-system-4186417_960_720.png"
            }
          />
        </div>
        <div className="col-sm-4">
          <Card
            title={"Data Recovery"}
            desc={
              "Memory Cards, Harddisks, SSDs, Pen Drives. We'll recover your lost data for you."
            }
            src={
              "https://cdn.pixabay.com/photo/2012/04/12/20/42/hard-30576_960_720.png"
            }
          />
        </div>
        <div className="col-sm-4">
          <Card
            title={"Others"}
            desc={
              "Did we miss something? Let us know your requirement and we'll figure it out."
            }
            src={
              "https://cdn.pixabay.com/photo/2013/07/13/12/42/stereo-system-160146_960_720.png"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
