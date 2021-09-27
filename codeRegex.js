var re = /^\w\$/;

console.log(re.test("a\n"));
console.log(re.test("x4c"));

re.test();
console.log(re.test("x38"));

re.test("x00");

re.test("x91");

re.test("x2b");

re.test("xff");

re.test("xfg");

re.test("y00");

re.test("a4");

re.test("xb3-junk");
console.log();
//Expected: false but got: true
