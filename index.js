// Create multiple "forever and ever" blocks vertically stacked
const everContainer = document.getElementById("ever-container");

for (let i = 0; i < 50; i++) {
  const textDiv = document.createElement("div");
  textDiv.className = "column-text";
  textDiv.innerHTML = "<br>and<br>ever";
  everContainer.appendChild(textDiv);
}
