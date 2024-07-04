function tagFunction(array, ...args) {
  console.info(array);
  console.info(args);
}

test("tag function", () => {
  const name = "kunto";
  const lastname = "Wicaksono";

  tagFunction`Hello, ${name} ${lastname}!. How are you?`;
  tagFunction`Bye, ${name} ${lastname}. See you later!`;
});

test("tag function sql", () => {
  const name = "kunto";
  const age = 22;

  tagFunction`SELECT * FROM sample WHERE name = ${name} AND age = ${age}`;
});
