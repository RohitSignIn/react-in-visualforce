import { useState } from "react";

import Selector from "./entry_form/Selector";
import { generatedDataStruc, newFormPayloadStruc } from "../helperFunc/entryFormInitObjStruc";

import './styles/entryFormCommon.css'
import { createNewForm } from "../helperFunc/fetchObjects";

function EntryForm({ setPage }) {
  const [selData, setSelData] = useState(generatedDataStruc)

  const [formName, setFormName] = useState('');

  function handleInputChange(e) {
    setFormName(e.target.value);
  }

  function handleSubmit() {
    if (
      formName.length === 0 ||
      selData.obj.length === 0
    ) {
      return;
    }

    let stringRelatedObject = selData.relatedObjs;
    stringRelatedObject.unshift(selData.obj)

    stringRelatedObject = JSON.stringify(stringRelatedObject)

    const payload = {...newFormPayloadStruc, formName:formName, primaryObject: selData.obj.objectName, relatedObject: stringRelatedObject}
    console.log(payload)
    
    try {
      createNewForm(payload)
      setPage("FORMBUILDER");
    } catch(e) {
      console.log(e.message, 'boom')
    }

  }

  return (
    <>
      {/* <EntryFormHeader handleSubmit={handleSubmit} /> */}
      <div className="w-100">
        <div className="d-flex gap-4 align-items-start justify-content-center my-2">
          {/* Form Name */}
          <div style={{width: '18rem'}}>
            <label className="w-100" style={{width: 'max-content'}}>
              <label className="h4 py-2 h5"
              style={{color: 'var(--mainColor)'}}
              >Form name</label>
              <input
                type="text"
                placeholder="Enter form name"
                className="form-control w-100 shadow-none"
                style={{width: 'max-content'}}
                onChange={(e) => handleInputChange(e)}
              />
            </label>
          </div>

          <div className="px-4"
          style={{borderLeft: '2px solid var(--mainColor)', height: '100vh'}}
          >
            <p className="h5 py-2" style={{color: 'var(--mainColor)'}}>
              Create Data Structure
            </p>
            <p className="">
              To create a form, first define the data structure of objects you
              intend to use. This will simplify and improve the form building
              process.
            </p>
            <p className="h6">Primary Object</p>

            <div className="position-relative">

              <Selector setSelData={setSelData} />

              <div
                className="create-btn position-absolute px-2 py-1 rounded"
                style={{top: '0', right: '0', background: '#ffffff', width: 'min-content', color: 'var(--mainColor)', border: '2px solid var(--mainColor)'}}
                onClick={handleSubmit}
              >
                Create
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EntryForm;
