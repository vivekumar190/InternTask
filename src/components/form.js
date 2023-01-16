import React, { useState } from "react";
import "../App.css";
import Select from "react-select";

const options = [
  { value: "Information Technology", label: "Information Technology" },
  { value: "Oil and Natural Gas", label: "Oil and Natural Gas" },
  { value: "Space Tech", label: "Space Tech" },
];
const sizeoptions = [
  { value: "1-20", label: "1-20" },
  { value: "21-50", label: "21-50" },
  { value: "51-200", label: "51-200" },
  { value: "201-500", label: "201-500" },
  { value: "500+", label: "500+" },
];
const Form = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSizeOption, setSelectedSizeOption] = useState("1 - 20");
  return (
    <div className="form">
      <div className="header">
        <img src="/images/Solid_lines.svg"></img>
        <div className="title">It’s a delight to have you onboard</div>
        <div className="subtitle">
          <div> Help us know you better.</div>
          (This is how we optimize Wobot as per your business needs)
        </div>
        <div className="inputdiv">
          Company name
          <input className="input" placeholder=" e.g. Example Inc"></input>
        </div>
        <div className="inputdiv">
          Industry
          <Select
            className="w-100"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </div>
        <div className="inputdiv">
          Company size
          <div className="sizerow">
            {sizeoptions.map((size) => (
              <div
                className={
                  selectedSizeOption === size.label
                    ? "sizeselectedcol"
                    : "sizecol"
                }
                onClick={() => setSelectedSizeOption(size.label)}
              >
                {size.label}
              </div>
            ))}
          </div>
        </div>
        <button className="startedbutton">Get Started</button>
      </div>
    </div>
  );
};

export default Form;
