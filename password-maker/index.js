const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "123456789";
const dataSymbols = "$*&\"'()@!:;,.?=+";

function generatePassword() {
    let data = [];

    if (lowercase.checked) data.push(dataLowercase);
    if (uppercase.checked) data.push(dataUppercase);
    if (numbers.checked) data.push(dataNumbers);
    if (symbols.checked) data.push(dataSymbols);

    console.log(data);
}

generateButton.addEventListener("click", generatePassword);