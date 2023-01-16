import React, { useState } from "react";
import "../App.css";
import Select from "react-select";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
const formSchema = Yup.object({
  companyname: Yup.string().required("companyname is required"),
  industry: Yup.string().required("industry is required"),
});
const Form = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSizeOption, setSelectedSizeOption] = useState("1 - 20");

  // formik
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      toast(`🦄 Wow so easy! ${values}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    validationSchema: formSchema,
  });
  const notify = () =>
    toast(`🦄 Wow so easy!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div className="header">
        <ToastContainer />
        <img src="/images/Solid_lines.svg"></img>
        <div className="title">It’s a delight to have you onboard</div>
        <div className="subtitle">
          <div> Help us know you better.</div>
          (This is how we optimize Wobot as per your business needs)
        </div>
        <div className="inputdiv">
          Company name
          <input
            className="input"
            placeholder=" e.g. Example Inc"
            value={formik.values.companyname}
            onChange={formik.handleChange("companyname")}
            onBlur={formik.handleBlur("companyname")}
          ></input>
          <div className="errortext">
            {formik.touched.companyname && formik.errors.companyname}
          </div>
        </div>
        <div className="inputdiv">
          Industry
          <Select
            className="w-100"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            value={formik.values.industry}
            // onChange={formik.handleChange("companyname")}
            // onBlur={formik.handleBlur("industry")}
          />
          <div className="errortext">
            {formik.touched.industry && formik.errors.industry}
          </div>
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
        <button className="startedbutton" type="submit" onClick={notify}>
          Get Started
        </button>
      </div>
    </form>
  );
};

export default Form;
