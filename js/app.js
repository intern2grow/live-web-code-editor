document.getElementById("htmlCode").value="<div>\n\n</div>";
document.getElementById("cssCode").value="<style>\n\n</style>";
document.getElementById("jsCode").value="<script>\n\n</script>";


window.onload = function() {
    var savedHtmlCode = localStorage.getItem('htmlCode');
    var savedCssCode = localStorage.getItem('cssCode');
    var savedJsCode = localStorage.getItem('jsCode');
    var savedFrame = localStorage.getItem('frame');

    if(savedHtmlCode) document.getElementById("htmlCode").value = savedHtmlCode;
    if(savedCssCode) document.getElementById("cssCode").value = savedCssCode;
    if(savedJsCode) document.getElementById("jsCode").value = savedJsCode;
    if(frame) document.getElementById("preview-window").contentWindow.document=  frame
    if(savedFrame) {
        var frame = document.getElementById("preview-window").contentWindow.document;
        frame.open();
        frame.write(savedFrame);
        frame.close();
    }
};

function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";


    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();

    localStorage.setItem('htmlCode',htmlCode)
    localStorage.setItem('cssCode',cssCode)
    localStorage.setItem('jsCode',jsCode)
    localStorage.setItem('frame', frame.documentElement.innerHTML);


}

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
