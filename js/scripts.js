const upperLower = word => {
  if (word.length > 5) {
    console.log(word.toUpperCase());
  } else console.log(word.toLowerCase());
};
upperLower('ordenador');

const upperLower2 = word => {
  word.length > 5 ? word.toUpperCase() : word.toLowerCase();
};

const verbs = (verb1, verb2) => {
  const resultVerb1 = checkVerb(verb1);
  const resultVerb2 = checkVerb(verb2);
  console.log(`${resultVerb1} y ${resultVerb2}`);
};
const checkVerb = verb => {
  if (verb.endsWith('ar')) {
    return `El verbo ${verb} es de la primera conjugación`;
  } else if (verb.endsWith('er')) {
    return `El verbo ${verb} es de la segunda conjugación`;
  } else if (verb.endsWith('ir')) {
    return `El verbo ${verb} es de la tercera conjugación`;
  }
  return `El verbo ${verb} no es correcto`;
};

verbs('andar', 'correr');

const generareRandomNumberMax = max => {
  return Math.floor(Math.random() * max);
};
const checkGenerateWord = word => {
  const numberRandom1 = generareRandomNumberMax(word.length);
  const numberRandom2 = generareRandomNumberMax(word.length);
  return word.charAt(numberRandom1) + word.charAt(numberRandom2);
};
const generateWord = (word1, word2, word3) => {
  const lettersFromWord1 = checkGenerateWord(word1);
  const lettersFromWord2 = checkGenerateWord(word2);
  const lettersFromWord3 = checkGenerateWord(word3);
  console.log(lettersFromWord1 + lettersFromWord2 + lettersFromWord3);
};

generateWord('hola', 'adios', 'calla');

const separateNameDomain = email => {
  const user = email.substring(0, [email.indexOf('@')]);
  const domain = email.substring(email.indexOf('@') + 1);
  console.log(`El usuario es ${user} y el dominio es ${domain}`);
};

separateNameDomain('sheila@gmail.com');

const randomLetter = word => {
  const randomNumber = Math.floor(Math.random() * word.length);
  console.log(word.charAt(randomNumber));
};
randomLetter('hola');

const intercalateUpperLower = word => {
  console.log(
    word.charAt(0).toLowerCase() +
      word.charAt(1).toUpperCase() +
      word.charAt(2).toLowerCase() +
      word.charAt(3).toUpperCase() +
      word.charAt(4).toLowerCase()
  );
};

intercalateUpperLower('adios');

const generateUserName = (name, surname) => {
  const firstLetter = name.charAt(0);
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(firstLetter + surname.toLowerCase() + randomNumber);
};
generateUserName('Sheila', 'Garcia');
