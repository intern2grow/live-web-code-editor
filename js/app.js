if (localStorage.getItem("live-code-editor"))
     var { htmlCode, cssCode, jsCode } = JSON.parse(
          localStorage?.getItem("live-code-editor")
     );

document.getElementById("htmlCode").value = htmlCode || "<div>\n\n</div>";
document.getElementById("cssCode").value = cssCode || "<style>\n\n</style>";
document.getElementById("jsCode").value = jsCode || "<script>\n\n</script>";
showPreview();
function showPreview() {
     var htmlCode = document.getElementById("htmlCode").value;
     var cssCode = "" + document.getElementById("cssCode").value + "";
     var jsCode = "" + document.getElementById("jsCode").value + "";
     var frame =
          document.getElementById("preview-window").contentWindow.document;
     let code = { htmlCode, cssCode, jsCode };
     localStorage.setItem("live-code-editor", JSON.stringify(code));

     frame.open();
     frame.write(htmlCode + cssCode + jsCode);
     frame.close();
}

function show(x) {
     document.getElementById("html").style.display = "none";
     document.getElementById("css").style.display = "none";
     document.getElementById("js").style.display = "none";
     document.getElementById("result").style.display = "none";
     document.getElementById(x).style.display = "block";
}

function show_all() {
     if (window.innerWidth >= 992) {
          document.getElementById("html").style.display = "block";
          document.getElementById("css").style.display = "block";
          document.getElementById("js").style.display = "block";
          document.getElementById("result").style.display = "block";
     }
     if (
          window.innerWidth < 992 &&
          document.getElementById("html").style.display == "block"
     ) {
          document.getElementById("css").style.display = "none";
          document.getElementById("js").style.display = "none";
          document.getElementById("result").style.display = "none";
     }
}
