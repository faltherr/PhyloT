import React from "react";

const Checkbox = props => {
  return (
    <input type="checkbox" {...props} />
  );
};

export default Checkbox

// See https://codesandbox.io/s/32lz1kyynm?module=/example.js for details on adding custom props and action creators