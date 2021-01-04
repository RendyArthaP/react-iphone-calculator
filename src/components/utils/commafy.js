import React from 'react';

const commafy = (value) => {
  if(value === "0") return value;

  let output = "";
  let decimal = "";
  let isNeg = false;

   if(value.includes(".")) {
     output = value.subString(0, value.indexOf("."));
     decimal = value .subString(value.indexOf("."));
   } else {
     output = value;
   }

   if(parseFloat(value) < 0) {
     isNeg = true;
     output = output.substring(1);
   }

   return isNeg
      ? "-" + parseFloat(output).toLocaleString() + decimal
      : parseFloat(output).toLocaleString() + decimal;
}
 
export default commafy;