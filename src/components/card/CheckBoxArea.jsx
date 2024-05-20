import { useContext } from "react"
import FormsContext from "../../context/FormsContext"

function CheckBoxArea({formId, formStatus, lastModified}) {

  const { handleChange } = useContext(FormsContext)

  function handleCheckToggle() {
    handleChange(formId, "formStatus", !formStatus)
  }

  return (
    <div className="flex gap-1 items-center">
            {
              formStatus ? <input
              type="checkbox"
              className="toggle [--tglbg:#7bc143] bg-white hover:bg-[#ecf0f3] border-0 m-0 p-0"
              checked
              onChange={handleCheckToggle}
            /> : <input
              type="checkbox"
              className="toggle [--tglbg:#d55555] bg-white hover:bg-[#ecf0f3] border-0 m-0 p-0"
              onChange={handleCheckToggle}
            />
            }
            
            <div className="flex gap-4 items-center">
              <div className="self-start mb-1">
                <label
                  className="text-sm italic text-[#a9a9a9]"
                >
                  {formStatus ? "Form Active" : "Form inactive"}
                </label>
              </div>

              <label
                className="text-sm italic text-[#a9a9a9]"
              >
                Last modified on: <span>{lastModified}</span>
              </label>
            </div>
          </div>
  )
}

export default CheckBoxArea
