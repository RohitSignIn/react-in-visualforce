import RelatedObjSelector from "../RelatedObjSelector";
import HorizLine from "./HorizLine";
import SelectComp from "./SelectComp";
import SideLine from "./SideLine";

function MainSelectLayout({...args}) {
    allRelatedObjData, selectedField, data, filterData, handleFilterData, handleFieldSelect
  return (
    <>
    {args.allRelatedObjData && args.allRelatedObjData.length > 0 && <SideLine />}
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
      />
      {/* Select Field UI Ends */}

      {/* On Click Add Relation Objects */}
      <div>
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
      </div>
    </>
  )
}

export default MainSelectLayout
