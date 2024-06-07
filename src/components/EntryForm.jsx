import { useState } from "react";
import Selector from "./entry_form/Selector";

function EntryForm({ setPage }) {
  const [selData, setSelData] = useState({
    primaryObj: '',
    relatedObjs: []
  })

  const [formName, setFormName] = useState('');

  function handleInputChange(e) {
    setFormName(e.target.value);
  }

  function handleSubmit() {
    if (
      formName.length === 0 ||
      selData.primaryObj.length === 0
    ) {
      return;
    }
    setPage("FORMBUILDER");
  }

  return (
    <>
      {/* <EntryFormHeader handleSubmit={handleSubmit} /> */}
      <div className="w-full px-4">
        <div className="flex gap-4 items-start justify-center">
          {/* Form Name */}
          <div className="w-[18rem]">
            <label className="form-control w-full max-w-xs">
              <label className="text-lg py-2 text-[#9797ff] font-medium">Form name</label>
              <input
                type="text"
                placeholder="Enter form name"
                className="input input-bordered w-full max-w-xs border-[#9797ff]"
                onChange={(e) => handleInputChange(e)}
              />
            </label>
          </div>

          <div className="border-l-2 border-[#9797ff] h-[100vh] px-4">
            <p className="text-2xl py-2 text-[#9797ff]">
              Create Data Structure
            </p>
            <p className="py-4">
              To create a form, first define the data structure of objects you
              intend to use. This will simplify and improve the form building
              process.
            </p>
            <p className="font-medium">Primary Object</p>

            <div className="relative">
              <Selector setSelData={setSelData} />

              <div
                className="absolute top-0 r-0 bg-white w-min px-6 py-1 rounded-md right-0 text-[#9797ff] border-2 border-[#9797ff] hover:bg-[#9797ff] hover:text-white cursor-pointer"
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
