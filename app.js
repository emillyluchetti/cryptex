const textArea = document.querySelector(".text-area");
const textResult = document.querySelector(".text_result_content_1");
const inputResult = document.querySelector(".text_result_content_2");
const inputResultDecrypt = document.querySelector(".text_result_table_input");
let textoImput = textArea.value


function removeSpecialCharacters(string) {
  return string.replace(/[^a-z0-9]/g, "");
}

console.log(textArea.value)

textArea.addEventListener("input", () =>{
  

  if(textArea.value != ""){
    inputResultDecrypt.value = textArea.value
    textResult.classList.add("disable-content");
    inputResult.classList.remove("disable-content");

  }else{
    inputResult.value = ""
    textResult.classList.remove("disable-content");
    inputResult.classList.add("disable-content");

  }
    
  
 

})












