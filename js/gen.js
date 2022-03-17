const PwEl = document.getElementById("pw");  
 const copyEl = document.getElementById("copy");  
 const generateEl = document.getElementById("generate"); 
 const lengthPw = document.getElementById("pwlength");  
 const upperLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";  
 const lowerLetters = "abcdefghijklmnopqrstuvwxyz";  
 const numbers = "0123456789";  
 const symbol = "~!@#$%^&*()_+=|";  
 function getLowercase() {  
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];  
 }  
 function getUppercase() {  
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];  
 }  
 function getNumber() {  
  return numbers[Math.floor(Math.random() * numbers.length)];  
 }  
 function getSymbol() {  
  return symbol[Math.floor(Math.random() * symbol.length)];  
 }  
 function generatePassword() {  
  const len = lengthPw.value;  
  let password = "";  
  for (let i = 0; i < len; i++) {  
   const x = generateX();  
   password += x;  
  }  
  PwEl.innerText = password;  
 }  
 function generateX() {  
  const xs = [];  
   xs.push(getUppercase());  
   xs.push(getLowercase());  
   xs.push(getNumber());  
   xs.push(getSymbol());  
  if (xs.length === 0) return "";  
  return xs[Math.floor(Math.random() * xs.length)];  
 } 
 window.onload = generatePassword();
 generateEl.addEventListener("click", generatePassword);  
 copyEl.addEventListener("click", () => {  
  const textarea = document.createElement("textarea");  
  const password = PwEl.innerText;  
  if (!password) {  
   return;  
  }  
  textarea.value = password;  
  document.body.appendChild(textarea);  
  textarea.select();  
  document.execCommand("copy");  
  textarea.remove();  
 });