import React, { useEffect, useRef, useState } from "react";
// import PhoneInput from "react-phone-input-2";
import api from "../services/api";
import axios from "axios";
import "react-phone-input-2/lib/style.css";
import { PropTypes } from "prop-types";

import PI from "react-phone-input-2";
const ReactPhoneInput = PI.default ? PI.default : PI;

const PhoneInput2 = ({
  onChange,
  value = "",
  onChangeValid,
  color = "black",
  className="",
  ref,
}) => {
  const phoneInput = useRef(null);
  const [countryInfo, setCountryInfo] = useState();

  // const getGeoInfo = () => {
  //   axios
  //     .get("https://ipapi.co/json/")
  //     .then((response) => {
  //       console.log(response.data);
  //       setCountryInfo(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getGeoInfo();
  // }, []);

  function validatePhone(txtPhone) {
    var filter = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    // var filter = /^((\+[1-9]{1,4}[ \-])|(\([0-9]{2,3}\)[ \-])|([0-9]{2,4})[ \-])?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(txtPhone)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <ReactPhoneInput
        // country={countryInfo?.country}
        // country={countryInfo?.country?.toLowerCase()}
        value={value}
        ref={phoneInput}
        placeholder={"Numero de telephone"}
        onChange={(phone) => {
          onChange(phone);
        }}
        isValid={(value, country, inputNumber, countries) => {
          onChangeValid(validatePhone(value));
        }}
        inputStyle={{
          width: "100%",
          flex: 1,
          color: color,
          background: "white",
          borderColor: "rgb(226,232,240)",
        }}
        
        containerStyle={{
          width: "100%",
          flex: 1,
          borderColor: "rgb(226,232,240)",
        }}
        buttonStyle={{ borderColor: "rgb(226,232,240)" }}
        enableSearch
      />
    </>
  );
};

PhoneInput2.propTypes = {
  placeholder: PropTypes.string,
  // value: PropTypes.string,
  color: PropTypes.string,
  className:PropTypes.string,
  onChange: PropTypes.func,
  onChangeValid: PropTypes.func,
};

PhoneInput2.defaultProps = {
  placeholder: "",
  value: "",
  color: "black",
  className:"form-input w-full focus:border-primary-500 box-border focus:font-semibold font-semibold py-2 px-5 mb-2 border-1",
  onChange: null,
  onChangeValid: () => {},
};

export default PhoneInput2;
