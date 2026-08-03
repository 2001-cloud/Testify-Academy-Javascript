function numberOfVowels(str) {
  let number = 0;

  for (let i = 0; i < str.length; i++) {
      if (
        str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u"
) {
  number++;
};

};
return number;
};

console.log(numberOfVowels("hello"));
console.log(numberOfVowels("world"));
console.log(numberOfVowels("javascript"));
console.log(numberOfVowels("challenge"));