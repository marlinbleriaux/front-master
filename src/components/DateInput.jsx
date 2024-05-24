import React, { useState } from "react";
/* import Flatpickr from "react-flatpickr";


function DateInput({onValueChange,id,name,placeholder,setSvg}) { 
  const [state, setState] = useState({
    date: new Date()
  });
    const { date } = state;
    return (
      <div className="relative">
      <Flatpickr
        className="form-input pl-9 font-medium focus:border-cyan-300 w-60"
        value={date}
        options={{ allowInput: true }}
        onChange={onValueChange}
        placeholder={placeholder}
        name={name}
        id={id}
      />{setSvg =='on' &&(
        <div className="absolute text-cyan-500 inset-0 right-auto flex items-center pointer-events-none">
          <svg className="w-4 h-4 fill-current text-cyan-500 ml-3" viewBox="0 0 16 16">
            <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
          </svg> 
        </div>
      )}
    </div>
    );
} */
import { PropTypes } from "prop-types";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function DateInput({
  onChange,
  value,
  label = "",
  className = "form-input w-full focus:border-cyan-500",
  setSvg,
}) {
  const [startDate, setStartDate] = useState(
    value ? new Date(value) : new Date()
  );

  return (
    <div>
      <div className="flex items-center justify-between">
        {label != "" && (
          <label className="w-full text-sm font-medium">{label}</label>
        )}
      </div>
      <div className="relative flex items-center justify-between">
      <DatePicker
        selected={startDate}
        title={"Date ."}
        className={className}
        // value={value !== null ? new Date(value) : new Date()}
        onChange={(date) => {
          setStartDate(date);
          onChange(date);
        }}
      />
      {setSvg =='on' &&(
        <div className="absolute text-cyan-500 inset-0 flex items-center pointer-events-none ">
          <svg className="w-4 h-4 fill-current text-cyan-500 ml-3" viewBox="0 0 16 16">
            <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
          </svg> 
        </div>
      )}     
      </div>
    </div>
  );
}

DateInput.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
};

DateInput.defaultProps = {
  date: new Date(),
};
export default DateInput;
