import { useContext } from "react";
import FormsContext from "../../context/FormsContext";

import "./commonCheckBoxStyle.css";

function CheckBoxArea({ formId, formStatus, lastModified }) {
  const { handleChange } = useContext(FormsContext);

  function handleCheckToggle() {
    // console.log('boom', formStatus)
    handleChange(formId, "formStatus", !formStatus);
  }
  console.log(formStatus);

  return (
    <>
      <div style={{ height: "40px", display: "flex", alignItems: "center" }}>
        {formStatus && (
          <div className="switch" onClick={handleCheckToggle}>
            <input type="checkbox" checked />
            <span className="slider round"></span>
          </div>
        )}
        {!formStatus && (
          <div className="switch" onClick={handleCheckToggle}>
            <input type="checkbox" />
            <span className="slider round"></span>
          </div>
        )}
        <div className="fst-italic text-body-tertiary">{formStatus ? "Form Active" : "Form inactive"}</div>
      &nbsp;<label className="fst-italic text-black-50">
        Last modified on: <span>{lastModified}</span>
      </label>
      </div>
    </>
  );
}

export default CheckBoxArea;
// <div className="d-flex gap-1 align-items-center">
//           {
//             formStatus ? <input
//             type="checkbox"
//             className="toggle [--tglbg:#9797ff] bg-[#ffffff] hover:bg-[#ffffff] border-0 m-0 p-0"
//             checked
//             onChange={handleCheckToggle}
//           /> : <input
//             type="checkbox"
//             className="toggle [--tglbg:#e6ecef] bg-[#ffffff] hover:bg-[#ffffff] border-0 m-0 p-0"
//             onChange={handleCheckToggle}
//           />
//           }

//           <div className="flex gap-4 items-center">
//             <div className="self-start mb-1">
//               <label
//                 className="text-sm italic text-[#a9a9a9]"
//               >
//                 {formStatus ? "Form Active" : "Form inactive"}
//               </label>
//             </div>

//             <label
//               className="text-sm italic text-[#a9a9a9]"
//             >
//               Last modified on: <span>{lastModified}</span>
//             </label>
//           </div>
//         </div>
