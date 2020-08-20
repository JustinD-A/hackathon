// piglatin function
// access the string, split correctly, for each word create a catch string, translate word to piglatin

function pigTrans(string) {
  const strArr = string.split(' ');
  return strArr.map(word => {
    return word
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
  }).join(' ');
}

// console.log(pigTrans('thing, one and two'));
document.querySelector('body').style.backgroundColor = 'green';




// chrome.runtime.onInstalled.addListener(function(

// need an event listener to trigger this script
document.addEventListener('DOMContentLoaded', function(event) {
// chrome.runtime.onInstalled.addListener(function() {
  document.querySelector('body').style.backgroundColor = 'green';
  // navigate the DOM
    // if the element has a text value
        // change the inner text to the value of invoking pigtrans with the text value as the arg
});

// $('element').value   
//

