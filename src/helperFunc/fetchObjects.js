import { fecthData, subObjsData } from '../components/entry_form/testingData'

export function fetchAllObjs(setData) {
    try {
        FormSetupController.getAllObjects(function (result, event) {
          setData((prev) => {
            return {...prev, objs: result}
          });
          // console.log(result)
        });
      } catch (e) {
        // console.log(e.message);
        setData(fecthData)
      }
}

export function fetchSubObjs(field, setData) {
  // console.log(field)
    try {
      (function () {
        FormSetupController.getSingleObjectDescribe(field.objectApiName, (res, event) => {
          // console.log(res);
          setData((prev) => {
            return { ...prev, obj: field, objs: res }
          });
        });
      })();
    } catch (e) {
      // console.log(e.message, 'boom');
      setData((prev) => {
        return {...prev, obj: field, objs: subObjsData}
      })
    }
  }


  export function createNewForm(payload) {
    // console.log(field)
      try {
        (function () {
          FormSetupController.createForm(payload.formName, payload.primaryObject , payload.relatedObject, (res, event) => {
            console.log(res);
          });
        })();
      } catch (e) {
        throw(e.message)
      }
    }