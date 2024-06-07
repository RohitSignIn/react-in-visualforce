export default function addSubField({ ...args }) {
  if (args.selectedField) {
    args.allRelatedObjData.push(args.selectedField);
    args.setAllRelatedObjData([...args.allRelatedObjData]);
  }
}
