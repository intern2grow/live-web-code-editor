var savedHtmlCode = localStorage.getItem("htmlCode") || "<div>\n\n</div>";
var savedCssCode = localStorage.getItem("cssCode") || "<style>\n\n</style>";
var savedJsCode = localStorage.getItem("jsCode") || "<script>\n\n</script>";

document.getElementById("htmlCode").value = savedHtmlCode;
document.getElementById("cssCode").value = savedCssCode;
document.getElementById("jsCode").value = savedJsCode;

document.getElementById("htmlCode").addEventListener("input", function() {
  var htmlCode = document.getElementById("htmlCode").value;
  localStorage.setItem("htmlCode", htmlCode);
});

document.getElementById("cssCode").addEventListener("input", function() {
  var cssCode = document.getElementById("cssCode").value;
  localStorage.setItem("cssCode", cssCode);
});

document.getElementById("jsCode").addEventListener("input", function() {
  var jsCode = document.getElementById("jsCode").value;
  localStorage.setItem("jsCode", jsCode);
});

function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";

    localStorage.setItem("htmlCode", htmlCode);
    localStorage.setItem("cssCode", cssCode);
    localStorage.setItem("jsCode", jsCode);

    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}

window.onload = function() {
  showPreview();
};

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}  
