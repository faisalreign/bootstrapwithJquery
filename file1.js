// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var message = document.querySelector('.message');
var text = document.getElementById('text');
var send = document.getElementById('send');
var clear = document.getElementById('clear');
//click event
send.addEventListener('click', delieverMessage);
function delieverMessage() {
    var textValue = text.nodeValue;
    message.innerHTML = textValue;
}
//second click
clear.addEventListener('click', clearField);
function clearField() {
    message.innerHTML = '';
    text.nodeValue = '';
}
//# sourceMappingURL=file1.js.map