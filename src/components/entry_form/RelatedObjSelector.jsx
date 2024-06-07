import { useEffect, useState } from "react";

import searchData from "../../helperFunc/searchData";
import fieldSelect from "../../helperFunc/fieldSelect";
import { mainDataInitialState } from "../../helperFunc/entryFormInitObjStruc";
import addSubField from "../../helperFunc/addSubField";

import "./styles/scrollStyle.css";
import SelectComp from "./inner_comp/SelectComp";
import HorizLine from "./inner_comp/HorizLine";
// import CustomSpinner from "../spinner/CustomSpinner";
import { fetchSubObjs } from "../../helperFunc/fetchObjects";
import SideLine from "./inner_comp/SideLine";

function RelatedObjSelector({ obj, setSelData, recId, recurssionDeleteObj }) {
  // data is initially null you have to fetch data here
  // const [loader, setLoader] = useState(true);
  const [open, setOpen] = useState(false);
  const [allRelatedObjData, setAllRelatedObjData] = useState([]);
  const [data, setData] = useState(mainDataInitialState);
  const [filterData, setFilterData] = useState([]);
  const [selectedField, setSelectedField] = useState(null);


  useEffect(() => {
    // field, setData
    fetchSubObjs(obj, setData);
  }, []);

  useEffect(() => {
    if(data.objs && data.objs.length > 0){
      setFilterData(data.objs)
    }
  }, [data]);

  // User Search Filter
  function handleFilterData(searchStr) {
    const objs = data.objs;
    searchData({ objs, searchStr, setFilterData });
  }

  function handleFieldSelect(field) {
    fieldSelect({
      field,
      recId,
      allRelatedObjData,
      selectedField,
      setOpen,
      setSelectedField,
      setSelData,
      setAllRelatedObjData,
      setData,
      isRelatedObj: true,
    });
  }

  function handleAddSubField() {
    addSubField({ selectedField, allRelatedObjData, setAllRelatedObjData });
  }

  function deleteRelatedObj() {
    setSelData((prevData) => {
      let relObjs = prevData.relatedObjs;
      relObjs.splice(recId, 1);
      return { ...prevData, relatedObjs: relObjs };
    });
  
    setAllRelatedObjData((prevData) => {
      const relObjs = prevData
      // console.log(relObjs, prevData, 'check boom')
      relObjs.splice(recId - 1, 1);
      return [ ...relObjs ];
    });
  }

  return (
    <div
      className="my-3 w-min position-relative"
      style={{ paddingLeft: "4rem", width: "min-content" }}
    >
      <SideLine />
      <HorizLine />

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
        recurssionDeleteObj={recurssionDeleteObj}
      />
      {/* Select Field UI Ends */}

      {/* On Click Add Relation Objects */}
      {/* <div>
        {allRelatedObjData &&
          allRelatedObjData.map((obj, indx) => {
            return (
              <div key={indx}>
                <RelatedObjSelector
                  // allRelatedObjData={allRelatedObjData}
                  obj={selectedField}
                  setSelData={setSelData}
                  recId={recId + 1}
                  // setAllRelatedObjData={setAllRelatedObjData}
                />
              </div>
            );
          })}
      </div> */}
    </div>
  );
}

export default RelatedObjSelector;
