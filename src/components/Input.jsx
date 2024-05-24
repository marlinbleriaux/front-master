import React from "react";
import { PropTypes } from "prop-types";
import Tooltip from "./Tooltip";

const AInput = ({
  htmlFor = "",
  style,
  classs = "",
  label = "",
  required = false,
  tooltip = "",
  type = "text",
  value = undefined,
  prefix = "",
  suffix = "",
  placeholder = "",
  supporting = "",
  disabled = false,
  valid,
  id = "",
  onChange,
  register = [],
  name = "",
}) => {
  function clas() {
    if (disabled)
      return (
        "form-input w-full " +
        "disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed " +
        (prefix != ""
          ? "pl-12"
          : suffix != ""
          ? "pr-12"
          : suffix != "" && prefix != ""
          ? "pl-12 pr-12"
          : "")
      );
    if (valid == true)
      return (
        "form-input w-full " +
        "border-emerald-300" +
        (prefix != ""
          ? "pl-12"
          : suffix != ""
          ? "pr-12"
          : suffix != "" && prefix != ""
          ? "pl-12 pr-12"
          : "")
      );
    else if (valid == false)
      return (
        "form-input w-full " +
        "border-rose-300" +
        (prefix != ""
          ? "pl-12"
          : suffix != ""
          ? "pr-12"
          : suffix != "" && prefix != ""
          ? "pl-12 pr-12"
          : "")
      );
    return (
      "form-input w-full " +
      (prefix != ""
        ? "pl-12"
        : suffix != ""
        ? "pr-12"
        : suffix != "" && prefix != ""
        ? "pl-12 pr-12"
        : "")
    );
  }
  return (
    <div>
      {/* Start */}
      <div>
        <div className="flex items-center justify-between">
          {label != "" && (
            <label
              className="block text-sm font-medium"
              htmlFor={htmlFor != "" ? htmlFor : id}
            >
              {label} {required && <span className="text-rose-500">*</span>}
            </label>
          )}
          {tooltip != "" && (
            <Tooltip className="ml-2" bg="dark" size="md">
              <div className="text-sm text-slate-200">{tooltip}</div>
            </Tooltip>
          )}
        </div>
        <div className={prefix != "" || suffix != "" ? "relative" : ""}>
          <input
            name={name}
            id={id}
            style={style}
            className={clas() + " " + classs}
            type={type}
            value={value}
            disabled={disabled}
            required={required}
            placeholder={placeholder}
            onChange={(e) => {
              if (onChange) onChange(e.target.value);
            }}
            register={register}
          />
          {prefix != "" && (
            <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
              <span className="text-sm text-slate-400 font-medium px-3">
                {prefix}
              </span>
            </div>
          )}
          {suffix != "" && (
            <div className="absolute inset-0 left-auto flex items-center pointer-events-none">
              <span className="text-sm text-slate-400 font-medium px-3">
                {suffix}
              </span>
            </div>
          )}
        </div>
        {supporting && <div className="text-xs mt-1">{supporting}</div>}
      </div>
      {/* End */}
    </div>
  );
};

AInput.propTypes = {
  placeholder: PropTypes.string,
  htmlFor: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  hgt: PropTypes.number,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  tooltip: PropTypes.string,
  onChange: PropTypes.func,
};

AInput.defaultProps = {
  placeholder: "",
  htmlFor: "",
  type: "text",
  label: "",
  disabled: false,
  required: false,
  tooltip: "",
  value: "",
  onChange: ()=> {},
};
export default AInput;
