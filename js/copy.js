function copyBYDATE() {
  var link = "https://www.example.com"; // Inserisci il link qui
  var tempInput = document.createElement("input");
  tempInput.value = link;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}
