import $ from '../utility/jq';
import "formBuilder/dist/form-render.min";

export default function FormRender(data) {
    const addLineBreaks = (data) => data.replace(new RegExp("><", "g"), ">\n<");
    
    const $markup = $("<div/>");
    $markup.formRender({ formData: data });
    
    const fHtml = addLineBreaks($markup.formRender("html"));
    return fHtml;
}

