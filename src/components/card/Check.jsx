import { useContext } from "react";
import { FaCheck } from "react-icons/fa";

import FormsContext from "../../context/FormsContext";

function Check({ check, formId }) {

  const { handleChange } = useContext(FormsContext)

  return (
    <div
    className="position-absolute overflow-hidden h-100"
      style={{background: `${check ? 'var(--mainColor)' : '#e6ecef'}`, width: `${check ? "30px" : "30px"}`}}
      onClick={() => handleChange(formId, "check", !check)}
    >
      <div className="h-100 d-flex align-items-center">
        <div className="p-2"
        style={{cursor: 'pointer'}}
        >
          <FaCheck
            className={`h6`}
            style={{"fill": `${check ? "#ffffff" : "#3c3d3e"}`}}
          />
        </div>
      </div>
    </div>
  );
}

export default Check;
