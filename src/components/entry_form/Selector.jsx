import { useState } from "react";

import "./scrollStyle.css";
import RelatedObjSelector from "./RelatedObjSelector";
import { fecthData, subObjsData } from "./testingData.js";

function Selector() {
  // data is initially null you have to fetch data here
  const [selectedField, setSelectedField] = useState(null);
  const [allRelatedObjData, setAllRelatedObjData] = useState([]);
  const [data, setData] = useState(fecthData);
  const [filterData, setFilterData] = useState(data.objs);


  const [selData, setSelData] = useState({
    primaryObj: '',
    relatedObjs: []
  })

  // User Search Filter
  function handleFilterData(searchStr) {
    const regexp = new RegExp(searchStr, "i");
    let filterData;
    if (searchStr != "") {
      filterData = data.objs.filter((obj) => regexp.test(obj.objectName));
    } else {
      filterData = data.objs;
    }
    setFilterData(filterData);
  }

  // On Obj Select
  function handleFieldSelect(field) {
    if(field !== selectedField){
      // // Set Selected Field
      setSelectedField(field);
      
      // // Fetch data according to selected field - Modify Later - API FETCH
      // setSubObjs(subObjsData);
      setSelData({...selData, primaryObj: field})
      
      if(selectedField !== null){

        // If Rechanges happens - remove all selects comes under that particular select
        setAllRelatedObjData([]);
        
        // let genData = selData.relatedObjs;
        // genData.pop();
        setSelData({
          primaryObj: '',
          relatedObjs: []
        })
        
        // No need to set or fetch data again because it's the first primary stage data will be same as fetched data
        // setData()
        // setAllRelatedObjData([])
      } else {
        setData({...data, primaryObj: field, subObjs: subObjsData})
      }
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
    <div className="relative w-min">
    {allRelatedObjData && allRelatedObjData.length > 0 && <div className="absolute top-[48px] border-[1px] border-dashed border-[#9797ff] h-full"></div>}
      {/* Select Field UI Starts */}
      <div className='w-[18rem]'>
        <div className='dropdown w-full mt-2'>
          <div
            tabIndex={0}
            role='button'
            className='py-2 px-4 w-full bg-[#9797ff] text-white rounded-t-md'
          >
            {!selectedField ? "Select Option" : selectedField}
          </div>
          <ul
            tabIndex={0}
            className='bg-white dropdown-content z-[1] menu p-2 shadow rounded-md w-full mt-2 border-2 border-[#9797ff]'
          >
            <div className='w-full'>
              <input
                onChange={(e) => handleFilterData(e.target.value)}
                type='text'
                className='outline-none w-full text-md p-2 border-2 rounded-t-md'
              />
            </div>

            {filterData.length > 0 && (
              <div className='scroll-custom h-[200px] overflow-auto bg-white my-2 px-2'>
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
                          <li className='bg-[#9797ff] text-white uppercase font-medium rounded-t-md'>
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
            className='text-[#9797ff] cursor-pointer'
            onClick={handleAddSubField}
          >
            &nbsp; &nbsp; Add Related Object
          </div>
        )}
      </div>
      {/* Select Field UI Ends */}

      {/* On Click Add Relation Objects */}
      <div>
        {allRelatedObjData && allRelatedObjData.map((obj, indx) => {
          return <div key={indx}>
            <RelatedObjSelector
              // allRelatedObjData={allRelatedObjData}
              objs={obj}
              setSelData={setSelData}
              recId={1} 
              // setAllRelatedObjData={setAllRelatedObjData}
            />
          </div>
        })
        }
      </div>
    </div>
  );
}

export default Selector;
