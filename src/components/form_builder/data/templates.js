const templates = {
    starRating: function (fieldData) {
      return {
        field: '<span id="' + fieldData.name + '">',
        onRender: () => {
          $(document.getElementById(fieldData.name)).rateYo({ rating: 3.6 });
        },
      };
    },
  
    section: function (fieldData) {
      return {
        field:
          '<span id="' +
          fieldData.name +
          '"><hr style="border: 2px dashed #9797ff;" />',
        onRender: () => {
          $(document.getElementById(fieldData.name));
        },
      };
    },
  };

export default templates;