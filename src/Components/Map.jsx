import React from "react";

function Map() {
  return (
    <div className="mapclass d-flex justify-content-center">
      <div className="contacttitle">
        <h3 className="p-4">Find us on Maps</h3>
      </div>

      <div className="frameclass">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1605.3979836756737!2d74.57731794641309!3d16.860978083123317!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa14f60e33d6bfb67!2sShree%20Sai%20Electronics%20777!5e0!3m2!1sen!2sin!4v1652349455603!5m2!1sen!2sin"
          width="800"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
