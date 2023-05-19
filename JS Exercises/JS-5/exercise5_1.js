var names = ["Maria", "Antony", "Joy", "Juan"];
names.push('Arpita');
console.log(names);
function checkName(name){
   return names.includes(name)
}
console.log(checkName('Akshay'));
console.log(checkName('Joy'));

//

function findCommonNames(newNames) {
    return names.filter(name => newNames.includes(name));
  }
  
  var newList = ["Maria", "John", "David", "Joy"];
  console.log(findCommonNames(newList)); 

  //
  
  
  function getNameLengths(nameList) {
    return nameList.map(name => name.length);
  }
  
  var nameLengths = getNameLengths(names);
  console.log(nameLengths);