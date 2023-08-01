function addHtmlElements(id, count) {
    var targetedDiv = document.getElementById(id);
    for (let i = 1; i <= count; i++) {
        targetedDiv.appendChild(document.createElement("h2")).appendChild(document.createTextNode(`This is ${i} h2`));
        // targetedDiv.appendChild(document.createElement('img')).setAttribute("src", "./All_Gizah_Pyramids.jpg")
    }
    targetedDiv.appendChild(document.createElement('img')).setAttribute("src", "./All_Gizah_Pyramids.jpg")
}
addHtmlElements("red", 10);
addHtmlElements("blue", 20);
addHtmlElements("green", 30);
addHtmlElements("black", 40);
