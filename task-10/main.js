let string = "I am programming on Python.";
const space = (string) => {
  let newArray = [];
  let num = 0;
  let isSpace = false;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") {
      newArray[num] = i;
      num++;
      isSpace = true;
    }
  }
  if (isSpace) {
    console.log(`${newArray[0]} ${newArray[newArray.length - 1]}`);
  } else {
    console.log(-1);
  }
};
space(string);

