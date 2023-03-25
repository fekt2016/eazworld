import React, { useState } from "react";
import classes from "./CustomSelect.module.css";
import Select, { components } from "react-select";

const Option = (props) => {
  return (
    <components.Option {...props} className="currency-option">
      <img
        src={props.data.icon}
        alt="logo"
        className={classes["currency-img"]}
      />
      {props.data.label}
    </components.Option>
  );
};

const CustomSelect = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.options[0]);

  const currencyHandleChange = (value) => {
    setSelectedOption(value);
  };

  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <img
        src={selectedOption.icon}
        alt="s-logo"
        className={classes["selected-logo"]}
      />
      {children}
    </components.SingleValue>
  );
  return (
    <div className={classes.group}>
      <label htmlFor="currency">{props.label}</label>
      <Select
        name={props.name}
        value={selectedOption}
        options={props.options}
        onChange={currencyHandleChange}
        className={classes.select}
        styles={{
          singleValue: (base) => ({
            ...base,
            display: "flex",
            alignItems: "center",
          }),
        }}
        components={{
          Option,
          SingleValue,
        }}
      />
    </div>
  );
};

export default CustomSelect;
