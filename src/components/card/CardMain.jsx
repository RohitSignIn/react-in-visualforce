import { BsArrow90DegDown } from "react-icons/bs";
import CheckBoxArea from "./CheckBoxArea";

function CardMain({formId, formName, primaryObj, formStatus, lastModified }) {
  return (
    <div className="ml-[2.5rem] flex w-full h-[200px] items-center px-4">
      <div>
        <label className="text-3xl">{formName}</label>
        <div className="text-[#c9c9c9] flex gap-2 text-base py-[1rem] italic">
          <div>Primary Object: </div>

          <div className="flex flex-col">
            <div>{primaryObj.object}</div>

            {/* If Remark Present */}
            {primaryObj.remark && (
              <div>
                <div className="flex gap-2">
                  <div>
                    <BsArrow90DegDown className="transform rotate-270" />
                  </div>
                  <div>{primaryObj.remark}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          {/* CheckBoxArea */}
          <CheckBoxArea formId={formId} formStatus={formStatus} lastModified={lastModified} />
        </div>
      </div>
    </div>
  );
}

export default CardMain;
