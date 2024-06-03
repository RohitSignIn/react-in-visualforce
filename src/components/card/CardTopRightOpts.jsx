import { useContext } from "react";
import FormsContext from "../../context/FormsContext";

function CardTopRightOpts({ formId, draft }) {
  const { handleChange } = useContext(FormsContext);

  function handleDraftClose() {
    if (confirm("Are you sure you want to delete this draft?")) {
      handleChange(formId, "draft", false);
    }
  }

  return (
    <div className="absolute right-0 top-0">
      <div className="flex gap-[3rem] bg-[#e6ecef] py-2 px-4 rounded-bl-md items-center">
        {/* Draft Cross Btn */}
        {draft && (
          <div className="badge badge-white gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-4 h-4 stroke-current"
              onClick={handleDraftClose}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            Draft
          </div>
        )}

        <div className="flex gap-4">
          <div>
            <a href="#" className="text-[#9797ff] text-sm">
              Edit
            </a>
          </div>
          <p className="font-thin text-[#d3dde1]">|</p>
          <div>
            <a href="#" className="text-[#9797ff] text-sm">
              Duplicate
            </a>
          </div>
          <p className="font-thin text-[#d3dde1]">|</p>
          <div>
            <a href="#" className="text-[#9797ff] text-sm">
              Preview
            </a>
          </div>
          <p className="font-thin text-[#d3dde1]">|</p>
          <div>
            <a href="#" className="text-[#9797ff] text-sm">
              Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTopRightOpts;
