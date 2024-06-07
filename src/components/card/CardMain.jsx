import { BsArrow90DegDown } from "react-icons/bs";
import CheckBoxArea from "./CheckBoxArea";

function CardMain({formId, formName, primaryObj, formStatus, lastModified }) {
  return (
    <div className="d-flex w-100 align-items-center px-4"
    style={{marginLeft: '2.5rem', height: '200px'}}
    >
      <div>
        <label style={{fontSize: '1.8rem'}}>{formName}</label>
        <div className="d-flex gap-2 py-2 font-italic"
        style={{color: '#c9c9c9'}}
        >
          <div>Primary Object: </div>

          <div className="d-flex flex-column">
            <div>{primaryObj.object}</div>

            {/* If Remark Present */}
            {primaryObj.remark && (
              <div>
                <div className="d-flex gap-2">
                  <div>
                    <BsArrow90DegDown style={{transform: 'rotate(270deg)'}} />
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
