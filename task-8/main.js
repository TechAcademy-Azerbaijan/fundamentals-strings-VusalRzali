let str = "introduction to algorithms";
const boyukHerf = (str) => {
  let strArray = str.split(" ");
  let result = "";
  for (let i = 0; i < strArray.length; i++) {
    result = result + strArray[i][0].toUpperCase() + strArray[i].slice(1) + " ";
  }
  console.log(result);
};
boyukHerf(str);
