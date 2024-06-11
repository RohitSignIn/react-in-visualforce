import { useEffect, useState } from "react";

import searchData from "../../helperFunc/searchData";
import { mainDataInitialState } from "../../helperFunc/entryFormInitObjStruc";
import { fetchAllObjs } from "../../helperFunc/fetchObjects";
import fieldSelect from "../../helperFunc/fieldSelect";
import addSubField from "../../helperFunc/addSubField";

import SideLine from "./inner_comp/SideLine";
import SelectComp from "./inner_comp/SelectComp";

import "./styles/scrollStyle.css";
import "./styles/listStyle.css";

function Selector({ setSelData }) {
  // const [loader, setLoader] = useState(true);
  const [selectedField, setSelectedField] = useState(null);
  const [allRelatedObjData, setAllRelatedObjData] = useState([]);
  const [data, setData] = useState(mainDataInitialState);
  const [filterData, setFilterData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchAllObjs(setData);
  }, []);

  useEffect(() => {
    if (data.objs.length > 0) {
      setFilterData(data.objs);
    }
  }, [data]);

  function handleFilterData(searchStr) {
    const objs = data.objs;
    searchData({ objs, searchStr, setFilterData });
  }

  function handleFieldSelect(field) {
    fieldSelect({
      field,
      selectedField,
      setOpen,
      setSelectedField,
      setSelData,
      setAllRelatedObjData,
      setData,
      isRelatedObj: false,
    });
  }

  function handleAddSubField() {
    addSubField({ selectedField, allRelatedObjData, setAllRelatedObjData });
  }
  

  function deleteRelatedObj() {
    setSelData((prevData) => {
      return { ...prevData, relatedObjs: [] };
    });
  
    setAllRelatedObjData([]);
  }

  return (
    <div className="position-relative" style={{ width: "min-content" }}>
      {/* Side Dashed Line - Vertical Line */}
      {data.objs.length > 0 && <SideLine />}

      {/* Select Field UI Starts */}
      <SelectComp
        open={open}
        selectedField={selectedField}
        data={data}
        filterData={filterData}
        handleFilterData={handleFilterData}
        handleFieldSelect={handleFieldSelect}
        handleAddSubField={handleAddSubField}
        setOpen={setOpen}
        allRelatedObjData={allRelatedObjData}
        setSelData={setSelData}
        deleteRelatedObj={deleteRelatedObj}
      />
      {/* Select Field UI Ends */}

      {/* Call Related Obj component as per allRelatedObjData - Recurssion */}
      {/* <div>
        {allRelatedObjData &&
          allRelatedObjData.map((obj, indx) => {
            return (
              <div key={indx}>
                <RelatedObjSelector
                  obj={selectedField}
                  setSelData={setSelData}
                  recId={1}
                />
              </div>
            );
          })}
      </div> */}
    </div>
  );
}

export default Selector;