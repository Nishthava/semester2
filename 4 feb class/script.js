const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const button = document.getElementById("btn");
const logContent = document.getElementById("log-content");


function addLog(text) {
  const div = document.createElement("div");
  div.textContent = text;
  div.style.marginBottom = "6px";
  logContent.appendChild(div);
}


function clearLogs() {
  logContent.innerHTML = "";
}


grandparent.addEventListener(
  "click",
  () => addLog("Grandparent - Capturing"),
  true
);

parent.addEventListener(
  "click",
  () => addLog("Parent - Capturing"),
  true
);


button.addEventListener("click", (e) => {
  clearLogs();
  addLog("Button - Target");

});

-
parent.addEventListener(
  "click",
  () => addLog("Parent - Bubbling")
);

grandparent.addEventListener(
  "click",
  () => addLog("Grandparent - Bubbling")
);

