"use strict";

var butReset = document.querySelector("#btn-resets");
var resets = document.querySelector(".resets-content").innerHTML;
butReset.addEventListener("click", function () {
  resets.value = str;
  resets.select();
  document.execCommand("copy");
}); // function myFunction() {
//     /* Get the text field */
//     var copyText = document.getElementById("myInput");
//     /* Select the text field */
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); /*For mobile devices*/
//     /* Copy the text inside the text field */
//     document.execCommand("copy");
//     /* Alert the copied text */
//     alert("Copied the text: " + copyText.value);
//   }