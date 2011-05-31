// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.11.2.1_A3_T1;
* @section: 15.11.2.1, 16;
* @assertion: The [[Class]] property of the newly constructed object is set to "Error";
* @description: Checking Class of the newly constructed Error object using toSting() function;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.11.2.1_A3_T1",

path: "15_Native\15.11_Error_Objects\15.11.2_The_Error_Constructor\S15.11.2.1_A3_T1.js",

assertion: "The [[Class]] property of the newly constructed object is set to \"Error\"",

description: "Checking Class of the newly constructed Error object using toSting() function",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
Error.prototype.toString=Object.prototype.toString;
var err1=new Error();
if(err1.toString()!=='[object '+ 'Error' +']'){
  $ERROR('#1: err1.toString()===\'[object Error]\'. Actual: '+err1.toString());
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});
