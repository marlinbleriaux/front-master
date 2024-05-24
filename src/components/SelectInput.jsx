import React, { useState, useRef, useEffect, Fragment } from "react";
import Transition from "../utils/Transition";
import Select, { components } from "react-select";

const SelectInput = ({
  option = [],
  onChange,
  label = "name",
  value = "value",
  imgSrc = [],
  placeholder,
  selectedOption,
  order = true,
  refresh = false,
  isClearable = true,
  isDisabled = false,
  labelI = "",
}) => {
  const [fetchingData, setFetchingData] = useState(false);
  const [focus, setFocus] = useState(true);

  const [listItem, setListItem] = useState(option);
  const [search, setSearch] = useState("");

  const SortArray = (x, y) =>
    x[label]
      ?.toString()
      ?.toLowerCase()
      ?.localeCompare(y[label]?.toString()?.toLowerCase());

  const filterOption = [...option].sort(SortArray);

  const [filteredFrom, setFilteredFrom] = useState(filterOption);

  useEffect(() => {
    if (order) {
      setFilteredFrom([...option].sort(SortArray));
    } else {
      setListItem([...option]);
      setFilteredFrom([...option]);
    }
  }, [option]);

  const findFilm = (query) => {
    if (query !== "") {
      const filt = [...option].filter((item) =>
        item[label]?.toString().toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFrom(filt);
    } else {
      setFilteredFrom([...filterOption]);
    }
  };

  const Option = (props) => {
    var scr = props.data;
    imgSrc.forEach((elt) => {
      if (scr != undefined || scr != null) scr = scr[elt];
    });
    return (
      <Fragment>
        <components.Option {...props}>
          <div className="flex">
            {imgSrc !== "" && imgSrc.length > 0 && (
              <img
                src={scr}
                style={{ height: "25px", width: "25px", marginRight: "10px" }}
              />
            )}
            <span>{props.data[label]}</span>
          </div>
        </components.Option>
      </Fragment>
    );
  };

  const SingleValue = (props) => {
    var scr = props.data;
    imgSrc.forEach((elt) => {
      if (scr != undefined || scr != null) scr = scr[elt];
    });
    return (
      <Fragment>
        <components.SingleValue {...props}>
          <div className="flex">
            {imgSrc !== "" && imgSrc.length > 0 && (
              <img
                src={scr}
                style={{ height: "25px", width: "25px", marginRight: "10px" }}
              />
            )}
            <span>{props.data[label]}</span>
          </div>
        </components.SingleValue>
      </Fragment>
    );
  };

  const Menu = (props) => {
    const changeOptionsData = () => {
      // setFetchingData(true);
      // setTimeout(() => {
      //   setFetchingData(false);
      //   props.selectProps.options = [];
      // }, );
    };

    return (
      <Fragment>
        <components.Menu {...props}>
          <div>
            {fetchingData ? (
              <span className="fetching">Fetching data...</span>
            ) : (
              <div>{props.children}</div>
            )}
            {refresh && (
              <button
                className={"change-data"}
                onClick={changeOptionsData}
                disabled={fetchingData}
              >
                Change data
              </button>
            )}
          </div>
        </components.Menu>
      </Fragment>
    );
  };

  return (
    <div className="App">
      {labelI != "" && (
        <label className="block text-sm font-medium">{labelI}</label>
      )}
      <Select
        onChange={(e) => {
          onChange(e[value]);
          setFilteredFrom(filterOption);
          if (focus) setFocus(!focus);
        }}
        onInputChange={(e) => {
          findFilm(e);
        }}
        // value={selectedOption}
        // defaultValue={selectedOption}
        inputValue={focus ? selectedOption : undefined}
        onFocus={() => {
          if (focus) setFocus(!focus);
        }}
        options={filteredFrom.length >= 1 ? filteredFrom : [{}]}
        components={{ Option, Menu, SingleValue }}
        // isDisabled={fetchingData}
        // fetchingData={fetchingData}
        placeholder={placeholder}
        isDisabled={isDisabled}
        // isClearable={isClearable}
        styles={{
          singleValue: (provided) => ({
            ...provided,
            flex: 1,
            display: "flex",
            padding: 3,
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
          }),
          control: (styles) => ({
            ...styles,
            backgroundColor: "white",
            color: "#000",
            borderColor: "rgb(226, 232, 240)",
          }),
          option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            // const color = chroma(data.color);
            return {
              ...styles,
              backgroundColor: isFocused
                ? "#e9ecef"
                : isSelected
                ? "rgba(210, 210, 210,0.6)"
                : undefined,
              flex: 1,
              color: "#000",
              cursor: isDisabled ? "not-allowed" : "progress",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            };
          },
        }}
      />
    </div>
  );
};

export default SelectInput;
