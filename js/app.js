// SetItem in localStorage
document.getElementById("htmlCode").addEventListener('input', ()=>{
    const htmlStorage = document.getElementById('htmlCode').value
    localStorage.setItem('htmlStorage', htmlStorage);
})
document.getElementById("cssCode").addEventListener('input', ()=>{
    const cssStorage = document.getElementById('cssCode').value
    localStorage.setItem('cssStorage', cssStorage);
})
document.getElementById("jsCode").addEventListener('input', ()=>{
    const jsStorage = document.getElementById('jsCode').value
    localStorage.setItem('jsStorage', jsStorage);
})

// getItem in localStorage
const htmlSavedStorage = localStorage.getItem('htmlStorage') || "<div>\n\n</div>";
const cssSavedStorage = localStorage.getItem('cssStorage') || "<style>\n\n</style>";
const jsSavedStorage = localStorage.getItem('jsStorage') || "<script>\n\n</script>";

// equal value on localStorage with value i write on document;
document.getElementById('htmlCode').value = htmlSavedStorage
document.getElementById('cssCode').value = cssSavedStorage
document.getElementById('jsCode').value = jsSavedStorage

function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = "" + document.getElementById("cssCode").value + "";
    var jsCode = "" + document.getElementById("jsCode").value + "";

    // SetItem in localStorage;
    localStorage.setItem('htmlStorage', htmlCode);
    localStorage.setItem('cssStorage', cssCode);
    localStorage.setItem('jsStorage', jsCode);

    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}

// when user load page or revisit the page , 
// find the svaed code he had written ;
window.onload= function(){
    showPreview()
}

// show in small screen
function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

// show in small screen
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