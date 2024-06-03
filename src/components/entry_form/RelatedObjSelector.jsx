import { useState } from "react";

import "./scrollStyle.css";
import { subObjsData } from "./testingData.js";

function RelatedObjSelector({ objs, setSelData, recId }) {
  // data is initially null you have to fetch data here
  const [allRelatedObjData, setAllRelatedObjData] = useState([]);

  const initialState = {
    obj: "",
    objs: objs,
    subObjs: [],
    relatedObjects: [
      {
        objSel: "",
        objs: "",
        relatedObjects: [],
      },
    ],
  };

  const [data, setData] = useState(initialState);
  const [filterData, setFilterData] = useState(objs);

  const [selectedField, setSelectedField] = useState(null);

  // handle Initial Data FETCH
  // function initialFetchData(){
  // }

  // User Search Filter
  function handleFilterData(searchStr) {
    const regexp = new RegExp(searchStr, "i");
    let filterData;
    if (searchStr != "") {
      filterData = objs.filter((obj) => regexp.test(obj.objectName));
    } else {
      filterData = objs;
    }
    setFilterData(filterData);
  }

  // On Obj Select
  function handleFieldSelect(field) {
    // // Set Selected Field
    setSelectedField(field);
    //  We get SubObj fetched only in params. only need to change obj
    setData({ ...data, obj: field, subObjs: subObjsData });
    
    // // Fetch data according to selected field - Modify Later - API FETCH
    // setSubObjs(subObjsData);

    if(selectedField !== null) {
      setData(initialState);
      // If Rechanges happens - remove all selects comes under that particular select
      let allData = allRelatedObjData;
      allData.splice(recId)
      setAllRelatedObjData([...allData]);

      setSelData((prevData) => {
        let relObjs = prevData.relatedObjs;
        relObjs.splice(recId-1);
        relObjs.push(field)
        return { ...prevData, relatedObjs: relObjs };
      });

      setAllRelatedObjData([])

    } else {
      setSelData((prevData) => {
        const relObjs = prevData.relatedObjs;
        relObjs.push(field);
        return { ...prevData, relatedObjs: relObjs };
      });
    }
  }

  // On Add Related Object Click
  function handleAddSubField() {
    if (data.subObjs.length) {
      allRelatedObjData.push(data.subObjs);
      setAllRelatedObjData([...allRelatedObjData]);
    }
  }


  return (
    <div className="pl-[2rem] py-2 w-min">
      {/* Select Field UI Starts */}
      <div className="w-[18rem]">
        <div className="absolute border-[1px] w-[50%] border-[#9797ff] left-0 border-dashed"></div>
        <div className="dropdown w-full">
          <div
            tabIndex={0}
            role="button"
            className="py-2 px-4 w-full bg-[#9797ff] text-white rounded-t-md"
          >
            {!selectedField ? "Select Option" : selectedField}
          </div>
          <ul
            tabIndex={0}
            className="bg-white dropdown-content z-[1] menu p-2 shadow rounded-md w-full mt-2 border-2 border-[#9797ff]"
          >
            <div className="w-full">
              <input
                onChange={(e) => handleFilterData(e.target.value)}
                type="text"
                className="outline-none w-full text-md p-2 border-2 rounded-t-md"
              />
            </div>

            {filterData.length > 0 && (
              <div className="scroll-custom h-[200px] overflow-auto bg-white my-2 px-2">
                {filterData.map((obj, indx) => {
                  return (
                    <div key={obj.objectName}>
                      {obj.objectReferenceField.fieldType === "" ||
                      (indx > 0 &&
                        obj.objectReferenceField.fieldType ===
                          filterData[indx - 1].objectReferenceField
                            .fieldType) ? (
                        <li onClick={() => handleFieldSelect(obj.objectName)}>
                          <a>{obj.objectName}</a>
                        </li>
                      ) : (
                        <>
                          <li className="bg-[#9797ff] text-white uppercase font-medium rounded-t-md">
                            <a>{obj.objectReferenceField.fieldType}</a>
                          </li>
                          <li onClick={() => handleFieldSelect(obj.objectName)}>
                            <a>{obj.objectName}</a>
                          </li>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </ul>
        </div>
        {data.subObjs.length > 0 && (
          <div
            className="text-[#9797ff] cursor-pointer"
            onClick={handleAddSubField}
          >
            Add Related Object
          </div>
        )}
      </div>
      {/* Select Field UI Ends */}

      {/* On Click Add Relation Objects */}
      <div>
        {allRelatedObjData &&
          allRelatedObjData.map((obj, indx) => {
            return (
              <div key={indx}>
                <RelatedObjSelector
                  // allRelatedObjData={allRelatedObjData}
                  objs={obj}
                  setSelData={setSelData}
                  recId = {recId + 1}
                  // setAllRelatedObjData={setAllRelatedObjData}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default RelatedObjSelector;
