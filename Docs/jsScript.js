function callPage(e) {
    console.log(e.innerText);
    var frame = document.querySelector("#frame");
    frame.src = "/Components/"+ e.innerText + "/" + e.innerText + ".html";
    frame.attributes["title"].value = e.innerText;
}