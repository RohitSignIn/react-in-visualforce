export default function searchData({...args}) {
    const regexp = new RegExp(args.searchStr, "i");
    let filterData;
    if (args.searchStr != "") {
      filterData = args.objs.filter((obj) => regexp.test(obj.objectName));
    } else {
      filterData = args.objs;
    }
    args.setFilterData(filterData);
  }