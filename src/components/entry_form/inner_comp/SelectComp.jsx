import SelectListComp from "./SelectListComp";
import SelectListCatg from "./SelectListCatg";
import { Spinner } from "react-bootstrap";
import RelatedObjSelector from "../RelatedObjSelector";
import HorizLine from "./HorizLine";

import { MdDelete } from "react-icons/md";

function SelectComp({ ...args }) {

  return (
    <div className="position-relative" style={{ width: "18rem" }}>
      <div className="w-100">
        {args.data.objs.length > 0 ? (
          <div className="d-flex justify-content-between">
            <div
              className="py-2 px-4 w-100 text-white"
              style={{
                background: "var(--mainColor)",
                color: "#ffffff",
                cursor: "pointer",
                borderTopRightRadius: `${
                  !args.recurssionDeleteObj ? "15px" : "none"
                }`,
              }}
              onClick={() => args.setOpen(!args.open)}
            >
              {!args.selectedField
                ? "Select Option"
                : args.selectedField.objectName}
            </div>

            {args.recurssionDeleteObj && (
              <div
                className="py-2 px-2 text-white"
                onClick={args.recurssionDeleteObj}
                style={{
                  background: "var(--mainColor)",
                  color: "#ffffff",
                  cursor: "pointer",
                  borderLeft: "2px solid #fff",
                  borderTopRightRadius: "15px",
                }}
              >
                <MdDelete style={{ fill: "#ffffff", fontSize: "1.5rem" }} />
              </div>
            )}
          </div>
        ) : (
          <Spinner
            animation="grow"
            style={{ background: "var(--mainColor)" }}
          />
        )}

        {args.open && (
          <ul
            className={`position-absolute bg-white z-[1] p-2 d-flex flex-column flex-wrap rounded w-100 mt-2 border-2`}
            style={{
              background: "#ffffff",
              zIndex: 1,
              border: "2px solid var(--mainColor)",
              fontSize: "0.87rem",
              lineHeight: "1.25rem",
            }}
          >
            <div className="w-100">
              <input
                onChange={(e) => args.handleFilterData(e.target.value)}
                type="text"
                className="w-100 p-2 rounded-top"
                style={{ border: "2px solid #e7e7e7", outline: "none" }}
              />
            </div>

            {args.filterData && args.filterData.length > 0 && (
              <div
                className="scroll-custom my-2 px-2"
                style={{
                  overflow: "auto",
                  height: "200px",
                  background: "#ffffff",
                }}
              >
                {args.filterData.map((obj, indx) => {
                  return (
                    <div
                      key={obj.objectName}
                      className="list-h rounded py-2 px-2"
                      style={{ cursor: "pointer", width: "18rem !important" }}
                    >
                      {!obj.groupName ||
                      (indx > 0 &&
                        obj.groupName ===
                          args.filterData[indx - 1].groupName) ? (
                        <SelectListComp
                          obj={obj}
                          handleFieldSelect={args.handleFieldSelect}
                        />
                      ) : (
                        <>
                          <SelectListCatg groupName={obj.groupName} />
                          <SelectListComp
                            obj={obj}
                            handleFieldSelect={args.handleFieldSelect}
                          />
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </ul>
        )}
      </div>

      <div>
        {args.allRelatedObjData &&
          args.allRelatedObjData.length > 0 &&
          args.allRelatedObjData.map((obj, indx) => {
            return (
              <div key={indx}>
                <RelatedObjSelector
                  obj={args.selectedField}
                  setSelData={args.setSelData}
                  recId={1}
                  recurssionDeleteObj={args.deleteRelatedObj}
                />
              </div>
            );
          })}
      </div>

      {args.data.objs.length > 0 && args.data && (
        <>
          <div
            style={{
              position: "relative",
              paddingLeft: "2rem",
              marginTop: "1.5rem",
            }}
          >
            <HorizLine />
            <div
              className="addRelObj"
              style={{
                color: "var(--mainColor)",
                cursor: "pointer",
                borderTop: "1px dashed var(--mainColor)",
                borderLeft: "1px dashed var(--mainColor)",
                borderRight: "1px dashed var(--mainColor)",
                marginTop: "1rem",
                padding: "0.2rem 0.6rem",
                borderTopRightRadius: "15px",
                textAlign: "center",
              }}
              onClick={args.handleAddSubField}
            >
              Add Related Object
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SelectComp;
