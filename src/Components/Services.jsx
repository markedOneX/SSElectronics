import React from "react";
import Card from "./Card";
import DataRec from "../Design/DataRec.png";
import Legacy from "../Design/Legacy.png";
import Others from "../Design/Others.png";
import PhotoCam from "../Design/PhotoCam.png";
import TV from "../Design/TV.png";
import VideoCam from "../Design/VideoCam.png";

function Services() {
  return (
    <div className="container cardbox">
      <div className="row">
        <div className="col-sm-4">
          <Card
            title={"LED/LCD"}
            desc={"Services for LED/LCD TVs, Monitors, Smart TVs"}
            src={TV}
          />
        </div>
        <div className="col-sm-4">
          <Card
            title={"Video Camera"}
            desc={"Services for Camcorders, Professional Video Cameras"}
            src={VideoCam}
          />
        </div>
        <div className="col-sm-4">
          <Card
            title={"Photo Camera"}
            desc={"Services for Digital Cameras, Compact Cameras, DSLR"}
            src={PhotoCam}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <Card
            title={"Legacy Hardware"}
            desc={"We also repair old legacy hardware such as VCR, VHS, Radios"}
            src={Legacy}
          />
        </div>
        <div className="col-sm-4">
          <Card
            title={"Data Recovery"}
            desc={
              "Memory Cards, Harddisks, SSDs, Pen Drives. We'll recover your lost data for you."
            }
            src={DataRec}
          />
        </div>
        <div className="col-sm-4">
          <Card
            title={"Others"}
            desc={
              "Did we miss something? Let us know your requirement and we'll figure it out."
            }
            src={Others}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
