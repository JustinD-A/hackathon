// piglatin function
// access the string, split correctly, for each word create a catch string, translate word to piglatin
function pigTrans(string) {
    if (typeof string !== 'string') return undefined;
    const strArr = string.split(' ');
    return strArr.map(word => {
      return word
      .replace(/^[aeiou]\w*/, "$&way")
      .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
    }).join(' ');
  }
  document.querySelectorAll('h1, h2, p1, p2, h, p, p3, h3, title, dl').forEach(child => {
    return child.innerHTML = pigTrans(child.innerHTML);
  })
  // console.log(pigTrans('thing, one and two'));
  // document.querySelector('body').style.backgroundColor = 'fuchsia';
  // recursively walk through the DOM
  // function nodeWalker(node) {
  //   //base case
  //   if (node.firstChild === null) node.innerHTML = pigTrans(node.innerHTML);
  //   // recursive case 
  //   node.childNodes.forEach(child => {
  //     // if (node.innerHTML) {
  //     //   node.innerHTML = pigTrans(node.innerHTML);
  //     // }
  //     nodeWalker(child);
  //   })
  // }
  // nodeWalker(document);
  // /(<h\d?>)|(<p\d?>)/g
  