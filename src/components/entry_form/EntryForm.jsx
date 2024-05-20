import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function EntryForm({setPage}) {
  // let navigate = useNavigate(); 

  const initialData = {
    formName: "",
    primaryObj: {
      object: "",
      remark: ""
    }
  }

  const [data, setData] = useState(initialData)

  function handleInputChange(e){
    setData({...data, "formName": e.target.value})
  }
  
  function handleSelectChange(e){
    setData({...data, "primaryObj": {"object": e.target.value}})
  }

  function handleSubmit() {
    if(data.formName.length === 0 || data.primaryObj.object.length === 0){
      return
    }
    setPage("FORMBUILDER")
  }

  console.log(data)

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

            <select className="select select-bordered w-full max-w-xs"
              onChange={(e) => handleSelectChange(e)}
            >
              <option>Who shot first?</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            {/* <div className="my-4 ml-[-10px]">
               <button className="btn btn-info text-2xl text-white">Create</button>
          </div> */}
          </div>
        </div>
        <button className="btn btn-neutral" onClick={handleSubmit}>Create</button>
      </div>
    </>
  );
}

export default EntryForm;
