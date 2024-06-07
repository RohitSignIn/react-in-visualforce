import $ from "../utility/jq";
import { useEffect, useRef, useState } from "react";

import "jquery-ui-sortable";
import "formBuilder";

import axios from "axios";
import FormRender from "./FormRender";

import './styles/formbuilder.style.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

const fields = [
  {
    name: "Accounts",
    controls: [
      {
        type: "button",
        label: "Custom Button",      },
      {
        label: "New Section",
        attrs: {
          type: "section",
        },
        icon: "🌟",
      },
      {
        label: "Star Rating",
        attrs: {
          type: "starRating",
        },
        icon: "🌟",
      },
      {
        type: "autocomplete",
        label: "Custom Autocomplete1",
        required: true,
        values: [
          { label: "SQL" },
          { label: "C#" },
          { label: "JavaScript" },
          { label: "Java" },
          { label: "Python" },
          { label: "C++" },
          { label: "PHP" },
          { label: "Swift" },
          { label: "Ruby" },
        ],
      },
      {
        label: 'Star Rating',
        attrs: {
          type: 'starRating',
        },
        icon: '🌟',
      },
      {
        type: "checkbox-group",
        subtype: "custom-group",
        label: "Custom Checkbox Group w/Sub Type",
        required: true,
        values: [{ label: "Option 1" }, { label: "Option 2" }],
      },
    ],
  },
  {
    name: "generalFields",
    controls: [
      {
        type: "text",
        label: "Account Name",
        required: true,
      },
      {
        type: "text",
        label: "Account Name1 ",
        required: true,
      },
      {
        type: "checkbox-group",
        subtype: "custom-group",
        label: "Custom Checkbox Group w/Sub Type",
        required: true,
        values: [{ label: "Option 1" }, { label: "Option 2" }],
      },
      {
        type: "checkbox-group",
        subtype: "custom-group",
        label: "Custom Checkbox Group w/Sub Type",
        required: true,
        values: [{ label: "Option 1" }, { label: "Option 2" }],
      },
    ],
  },
];

const formData = [
  {
    type: "header",
    subtype: "h1",
    label: "formBuilder in Check",
  },
  {
    type: "paragraph",
    label: "This is a demonstration of formBuilder running in a React project.",
  },
  {
    type: 'button',
    subtype: 'submit',
    label: 'Submit',
    className: 'form-submit-btn'
  },
];

const templates = {
  starRating: function (fieldData) {
    return {
      field: '<span id="' + fieldData.name + '">',
      onRender: () => {
        $(document.getElementById(fieldData.name)).rateYo({ rating: 3.6 });
      },
    };
  },

  section: function (fieldData) {
    return {
      field:
        '<span id="' +
        fieldData.name +
        '"><hr style="border: 2px dashed #9797ff;" />',
      onRender: () => {
        $(document.getElementById(fieldData.name));
      },
    };
  },
};

function Formbuilder() {
  const fb = useRef();
  const [builderCf, setBuilderCf] = useState(null);

  useEffect(() => {
    setBuilderCf($(fb.current).formBuilder({ formData, fields, templates }));
  }, []);

  async function handleBtnClick() {
    const data = FormRender(builderCf.actions.getData("json"));
    // const url = "https://express-formbuilder-check.onrender.com/formSubmit";

    const url = "http://localhost:3000/formSubmit";
    const res = await axios.post(url, { data: `${data}` });

    console.log(res);
  }

  async function handleFormRender() {
    console.log(FormRender(builderCf.actions.getData("json")));
  }

  function handleAddNewSection() {
    var field = {
      type: 'section',
      class: 'form-control',
      label: 'Title'
    }
    var index = undefined
    builderCf.actions.addField(field, index)
  }

  return (
    <>
        <div className="p-2">
          <div id="build-wrap" ref={fb} className="build-wrap container py-4" style={{position: 'relative'}}>
            <button onClick={handleAddNewSection} id="appendSection" className="addSectionBtn" data-label="Appended Section" type="button">Add New Section</button>
          </div>
          <button
            className="btn btn-md"
            style={{background: 'var(--mainColor)', color: '#ffffff'}}
            onClick={handleBtnClick}
          >
            Create Template
          </button>
          <button
            className="btn btn-md rounded"
            style={{border: '2px solid var(--mainColor)', color: 'var(--mainColor)'}}
            onClick={handleFormRender}
          >
            Preview
          </button>
        </div>
    </>
  );
}

export default Formbuilder;
