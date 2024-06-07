import { useContext } from "react";

import FormsContext from "../../context/FormsContext";

import { MdCancel } from "react-icons/md";

function CardTopRightOpts({ formId, draft }) {
  const { handleChange } = useContext(FormsContext);

  function handleDraftClose() {
    if (confirm("Are you sure you want to delete this draft?")) {
      handleChange(formId, "draft", false);
    }
  }

  return (
    <div className="position-absolute"
    style={{right: '0', top: '0'}}
    >
      <div className="d-flex py-2 px-4 align-items-center"
      style={{gap: '3rem', background: '#e6ecef', borderBottomLeftRadius: "8px"}}
      >
        {/* Draft Cross Btn */}
        {draft && (
          <div className="d-flex gap-1 px-2 rounded"
          style={{height: '1.4rem', background: '#ffffff'}}
          >
            <p style={{fontSize: '0.8rem'}}><MdCancel onClick={handleDraftClose} style={{cursor: 'pointer'}} /></p>
            <p style={{fontSize: '0.8rem'}}>Draft</p>
          </div>
        )}

        <div className="d-flex gap-4">
          <div>
            <a href="#" className="h6 text-decoration-none" style={{color: 'var(--mainColor)'}}>
              Edit
            </a>
          </div>
          <p style={{border: '1px solid #d3dde1', height: '1.5rem', margin: 0}}></p>
          <div>
            <a href="#" className="h6 text-decoration-none" style={{color: 'var(--mainColor)'}}>
              Duplicate
            </a>
          </div>
          <p style={{border: '1px solid #d3dde1', height: '1.5rem', margin: 0}}></p>
          <div>
            <a href="#" className="h6 text-decoration-none" style={{color: 'var(--mainColor)'}}>
              Preview
            </a>
          </div>
          <p style={{border: '1px solid #d3dde1', height: '1.5rem', margin: 0}}></p>
          <div>
            <a href="#" className="h6 text-decoration-none" style={{color: 'var(--mainColor)'}}>
              Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTopRightOpts;
