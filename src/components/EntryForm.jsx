import { useEffect, useState } from "react";
import SearchableDropdown from "./entry_form/SearchableDropdown";

function EntryForm({setPage}) {
  const [opts, setOpts] = useState(null)
  const [value, setValue] = useState("contract");


  const initialData = {
    formName: "",
    primaryObj: {
      object: "",
      remark: ""
    }
  }

  useEffect(() => {
    FormSetupController.getAllObjects(function(result , event){
      setOpts(result)
    });
  }, [])

  const [data, setData] = useState(initialData)

  function handleInputChange(e){
    setData({...data, "formName": e.target.value})
  }
  
  function handleSubmit() {
    // Task : Its Quite a taking time optimize while rendering 
    setData({...data, "primaryObj": {"object": value}})
    if(data.formName.length === 0 || data.primaryObj.object.length === 0 || data.primaryObj.object === "Loading"){
      return
    }
    setPage("FORMBUILDER")
  }

  return (
    <>
      {/* <EntryFormHeader handleSubmit={handleSubmit} /> */}
      <div className="w-full">
        <div className="flex gap-4 items-start justify-between">
          {/* Form Name */}
          <div>
            <label className="form-control w-full max-w-xs">
              <label className="text-lg py-2 font-medium">Form name</label>
              <input
                type="text"
                placeholder="Enter form name"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => handleInputChange(e)}
              />
            </label>
          </div>

          <div>
            <p className="text-2xl py-2 text-[#002944]">
              Create Data Structure
            </p>
            <p className="py-4">
              To create a form, first define the data structure of objects you
              intend to use. This will simplify and improve the form building
              process.
            </p>
            <p className="font-medium">Primary Object</p>

            {opts && (
              <SearchableDropdown
                options={opts}
                label="name"
                id="name"
                selectedVal={value}
                handleChange={(val) => setValue(val)}
                onClick={console.log("a")}
              />
            )}

          </div>
        </div>
        <button className="btn btn-neutral" onClick={handleSubmit}>Create</button>
      </div>
    </>
  );
}

export default EntryForm;
