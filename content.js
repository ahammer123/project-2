// var elements = document.getElementsByTagName('*');
//
// for (var i = 0; i < elements.length; i++) {
//    var element = elements[i];
//    //console.log( element );
//    //element.style.setProperty('border','solid 1px red');
//
//    var r = Math.floor(Math.random()*134);
//    var g = Math.floor(Math.random()*39);
//    var b = Math.floor(Math.random()*234);
//    var c = "rgb(" + r + "," + g + "," + b + ")";
//
//    element.style.setProperty('background-color',c);
//
// }

var html = document.querySelector('html');
var walker = document.createTreeWalker(html,NodeFilter.SHOW_TEXT);

var node;
while (node = walker.nextNode()) {
  node.nodeValue = node.nodeValue.replace(/election/gi,'Pissing Contest');
}
