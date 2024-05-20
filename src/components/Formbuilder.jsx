import $ from '../utility/jq';

import { useEffect, useRef } from "react";
import "./styles/formbuilder.style.css";

import "jquery-ui-sortable";
import "formBuilder";

const fields = [
    {
    name: 'Accounts',
    controls: [
      {
        type: 'text',
        subtype: 'text',        
        label: 'Account Name',
        required: true,
      }
    ]
},
{
    name: 'generalFields',
    controls : [
      {
        type: 'text',
        subtype: 'text',        
        label: 'Account Name1',
        required: true,
      }
    ]
}
]

const formData = [
  {
    type: "header",
    subtype: "h1",
    label: "formBuilder in Check"
  },
  {
    type: "paragraph",
    label: "This is a demonstration of formBuilder running in a React project."
  }
];

function Formbuilder() {
  const fb = useRef();

// AccountRemoter.getAccount(function(result, event) {
//     //callback stuff
//     console.log(result)
// });

  
  useEffect(() => {
    $(fb.current).formBuilder({ formData, fields });
  }, [])

  return (
    <div id="fb-editor" ref={fb} />
  )
}

export default Formbuilder