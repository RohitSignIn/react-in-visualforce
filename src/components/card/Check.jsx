import { useContext } from "react";
import { FaCheck } from "react-icons/fa";

import FormsContext from "../../context/FormsContext";

function Check({ check, formId }) {

  const { handleChange } = useContext(FormsContext)

  return (
    <div
      className={`transition-all ease-in-out bg-[#${
        check ? "9797ff" : "e6ecef"
      }] h-full absolute overflow-hidden w-[${
        check ? "30px" : "4px"
      }] group-hover:w-[30px]`}

      onClick={() => handleChange(formId, "check", !check)}
    >
      <div className="h-full flex items-center">
        <div className="p-2 cursor-pointer">
          <FaCheck
            className={`text-sm`}
            style={{"fill": `${check ? "#ffffff" : "#3c3d3e"}`}}
          />
        </div>
      </div>
    </div>
  );
}

export default Check;
