import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.9506580369202!2d28.05696431551931!3d45.430495979100556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b6deeff09b12b7%3A0x341569ba69416dbc!2sIV%20Future%20SRL!5e0!3m2!1sro!2sro!4v1594645368940!5m2!1sro!2sro"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
