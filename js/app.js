document.getElementById("htmlCode").value = "<div>\n\n</div>";
document.getElementById("cssCode").value = "<style>\n\n</style>";
document.getElementById("jsCode").value = "<script>\n\n</script>";

function checkLocalStorage() {
  if (localStorage.getItem("htmlCode")) {
    let htmlStore = localStorage.getItem("htmlCode");
    document.getElementById("htmlCode").value = htmlStore;
  }
  if (localStorage.getItem("cssCode")) {
    let cssStore = localStorage.getItem("cssCode");
    document.getElementById("cssCode").value = cssStore;
  }
  if (localStorage.getItem("jsCode")) {
    let jsStore = localStorage.getItem("jsCode");
    document.getElementById("jsCode").value = jsStore;
  }
}
checkLocalStorage();

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  checkLocalStorage();
  showPreview();
}

function showPreview() {
  var htmlCode = document.getElementById("htmlCode").value;
  var cssCode = "" + document.getElementById("cssCode").value + "";
  var jsCode = "" + document.getElementById("jsCode").value + "";
  localStorage.setItem("htmlCode", htmlCode);
  localStorage.setItem("cssCode", cssCode);
  localStorage.setItem("jsCode", jsCode);
  var frame = document.getElementById("preview-window").contentWindow.document;

  frame.open();
  frame.write(
    localStorage.getItem("htmlCode") +
      localStorage.getItem("cssCode") +
      localStorage.getItem("jsCode")
  );
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
