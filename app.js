var translateButton, translateInput, translateOutput;
translateButton = document.querySelector("#translateBtn");

translateInput = document.querySelector("#userInput");

translateOutput = document.querySelector("#output");

translateButton.addEventListener("click", buttonClickHandler);

var url = "https://api.funtranslations.com/translate/chef.json";

function buttonClickHandler() {
  var input = translateInput.value;
  var finalURL = constructURL(input);
  fetch(finalURL)
    .then((response) => response.json())
    .then((json) => {
      translateOutput.innerText = json.contents.translated;
    })
    .catch(() => alert("some error occured"));
}

function constructURL(inputText) {
  var encodedURI = encodeURI(inputText);
  return `${url}?text=${encodedURI}`;
}
