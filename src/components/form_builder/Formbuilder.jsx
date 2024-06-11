import { useEffect, useRef, useState } from "react";

import $ from "../../utility/jq";

import axios from "axios";

import "jquery-ui-sortable";
import "formBuilder";

import FormRender from "./FormRender";
import { fields, formData, templates } from "./data";

import './styles/formBuilder.style.css'
import Header from "../header/Header";

// Keep name as Formbuilder because of collision.
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
    <Header handleBtnClick={handleBtnClick} handleFormRender={handleFormRender} />
        <div className="p-2">
          <div id="build-wrap" ref={fb} className="build-wrap container py-4" style={{position: 'relative'}}>
            <button onClick={handleAddNewSection} id="appendSection" className="addSectionBtn" data-label="Appended Section" type="button">Add New Section</button>
          </div>
        </div>
    </>
  );
}

export default Formbuilder;