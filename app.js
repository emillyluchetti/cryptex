const textArea = document.querySelector(".text-area");
const textResult = document.querySelector(".result_content_1");
const inputResult = document.querySelector(".result_content_2");
const inputResultDecrypt = document.querySelector(".result_input");
const btn_criptografar = document.querySelector("#btn_encrypt");
const btn_descriptografar = document.querySelector("#btn_decrypt");
const btn_copy = document.querySelector("#btn_copy");


textArea.addEventListener("input", ({ data }) => {
 
  if (data === null) {
    
  } else if (
    data.match(new RegExp(/[A-ZÁÀÃÂÉÈẼÊÍÌĨÎÓÒÕÔÚÙŨÛÇáàãâéèẽêíìĩîóòõôúùũûç0-9]/))
  ) {
    textArea.value = textArea.value.slice(0, -1);
  } else {
    if (textArea.value != "") {
      inputResultDecrypt.value = textArea.value;
      textResult.classList.add("disable-content");
      inputResult.classList.remove("disable-content");
    } else {
      inputResult.value = "";
      textResult.classList.remove("disable-content");
      inputResult.classList.add("disable-content");
    }
  }
});

function criptografar(string) {
  const result = string
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  return result;
}

function descriptografar(string) {
  const result = string
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  return result;
}

btn_criptografar.addEventListener("click", () => {
  const result = criptografar(textArea.value);
  inputResultDecrypt.value = result;
});

btn_descriptografar.addEventListener("click", () => {
  const result = descriptografar(textArea.value);
  inputResultDecrypt.value = result;
});

btn_copy.addEventListener("click", () => {
  try {
    navigator.clipboard.writeText(inputResultDecrypt.value);
    console.log("texto copiado!");
  } catch {
    console.log("falha");
  }
});

















