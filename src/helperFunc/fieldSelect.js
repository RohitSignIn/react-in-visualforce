import { selDataInitialState } from "./entryFormInitObjStruc";
// import { fetchSubObjs } from "./fetchObjects";

export default function fieldSelect({ ...args }) {
  if (args.field !== args.selectedField) {
    // // Set Selected Field
    args.setSelectedField(args.field);

    // Generated Data -> setSelData
    // If Primary Object change name of generated data PO on Click
    // if (!args.isRelatedObj) {
    //   args.setSelData((prev) => {
    //     return { ...prev, obj: args.field };
    //   });
    // }

    if (args.selectedField !== null) {
      // If Rechanges happens - remove all selects comes under that particular select
      if (!args.isRelatedObj) {
        args.setSelData({...selDataInitialState, obj: args.field});
      } else {
        // let allData = args.allRelatedObjData;
        // allData.splice(args.recId);
        // args.setAllRelatedObjData([...allData]);
        
        args.setSelData((prevData) => {
          let relObjs = prevData.relatedObjs;
          relObjs.splice(args.recId - 1);
          relObjs.push(args.field);
          return { ...prevData, relatedObjs: relObjs };
        });
      }
      args.setAllRelatedObjData([]);
      
      // let genData = selData.relatedObjs;
      // genData.pop();

      // No need to set or fetch data again because it's the first primary stage data will be same as fetched data
      // setData()
      // setAllRelatedObjData([])
    } else {
      // fetching SubObjs
      if(args.isRelatedObj){
        args.setSelData((prevData) => {
          const relObjs = prevData.relatedObjs;
          relObjs.push(args.field);
          return { ...prevData, relatedObjs: relObjs };
        });
      }else{
        args.setSelData((prevData) => {
          return { ...prevData, obj: args.field };
        });
      }
    }

    args.setOpen(false);
    // fetchSubObjs(args.field, args.setData);
  }
}
