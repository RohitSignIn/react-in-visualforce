import { useState } from "react";
import Selector from './entry_form/Selector'

function EntryForm({ setPage }) {
  const initialData = {
    formName: "",
    primaryObj: {
      object: "Select Primary Object",
      relatedObj: [],
      remark: "",
    },
  };


  const [data, setData] = useState(initialData);

  function handleInputChange(e) {
    setData({ ...data, formName: e.target.value });
  }

  function handleSubmit() {
    if (
      data.formName.length === 0 ||
      data.primaryObj.object.length === 0 ||
      data.primaryObj.object === "Loading"
    ) {
      return;
    }
    setPage("FORMBUILDER");
  }

  // function handleAddRelatedObj(nstdIndx = 0) {
  //   const newRelatedObjField = {
  //     object: "Check",
  //     relatedObj: [],
  //   };
  //   setData((prevState) => {
  //     const currentRelatedObj = Array.isArray(prevState.primaryObj.relatedObj) ? prevState.primaryObj.relatedObj : []
  //     return {
  //       ...prevState,
  //       primaryObj: {
  //         ...prevState.primaryObj,
  //         relatedObj: [...currentRelatedObj, newRelatedObjField],
  //       },
  //     };
  //   });
  // }

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

            <Selector />

            {/* <div>
              <SearchableSetupComp opts={opts} data={data} setData={setData} />

              {data?.primaryObj.object != "Select Primary Object" &&
                data?.primaryObj.object != "" && (
                  <div onClick={() => handleAddRelatedObj(0)}>
                    Add Related Object
                  </div>
                )}

                {
                  data.primaryObj.relatedObj && data.primaryObj.relatedObj.map((obj, indx) => {
                    return <div key={indx}>
                        <SearchableSetupComp opts={opts} data={data} setData={setData} />
                    </div>
                  })
                }

            </div> */}
            {/* <SearchableSetupComp opts={opts} data={data} setData={setData} /> */}
          </div>
        </div>

        <button className="btn btn-neutral" onClick={handleSubmit}>
          Create
        </button>
      </div>
    </>
  );
}

export default EntryForm;
