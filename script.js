var fullText = "";
function addFile(){

  fullText += new Date() +  document.getElementById("text").value + "\n";
var names = [fullText];

var data = new Blob(names, {type: 'text/plain'});

var url = window.URL.createObjectURL(data);
document.getElementById('download_link').href = url;
}