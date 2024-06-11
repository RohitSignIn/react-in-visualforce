const fields = [
  {
    name: "Accounts",
    controls: [
      {
        type: "button",
        label: "Custom Button",
      },
      {
        label: "New Section",
        attrs: {
          type: "section",
        },
        icon: "🌟",
      },
      {
        label: "Star Rating",
        attrs: {
          type: "starRating",
        },
        icon: "🌟",
      },
      {
        type: "autocomplete",
        label: "Custom Autocomplete1",
        required: true,
        values: [
          { label: "SQL" },
          { label: "C#" },
          { label: "JavaScript" },
          { label: "Java" },
          { label: "Python" },
          { label: "C++" },
          { label: "PHP" },
          { label: "Swift" },
          { label: "Ruby" },
        ],
      },
      {
        label: "Star Rating",
        attrs: {
          type: "starRating",
        },
        icon: "🌟",
      },
      {
        type: "checkbox-group",
        subtype: "custom-group",
        label: "Custom Checkbox Group w/Sub Type",
        required: true,
        values: [{ label: "Option 1" }, { label: "Option 2" }],
      },
    ],
  },
  {
    name: "General Fields",
    controls: [
      {
        type: "text",
        label: "Account Name",
        required: true,
      },
      {
        type: "text",
        label: "Account Name1 ",
        required: true,
      },
      {
        type: "checkbox-group",
        subtype: "custom-group",
        label: "Custom Checkbox Group w/Sub Type",
        required: true,
        values: [{ label: "Option 1" }, { label: "Option 2" }],
      },
      {
        type: "checkbox-group",
        subtype: "custom-group",
        label: "Custom Checkbox Group w/Sub Type",
        required: true,
        values: [{ label: "Option 1" }, { label: "Option 2" }],
      },
    ],
  },
];

export default fields;
