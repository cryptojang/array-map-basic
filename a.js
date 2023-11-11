let fruits = ["apple", "banana", "kiwi", "orange"];

const newFruits = fruits.map((v, i) => {
  //console.log(`value: ${v}`);
  //console.log(`value: ${i}`);

  return `맛있는 ${v}`;

  //  const newFruits = fruits.map((v, i) => `맛있는 ${v}`);
});

console.log(newFruits);
