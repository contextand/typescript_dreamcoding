{
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TypeScript
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // js
  // function jsFetchNum(id) {
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // TypeScript
  // function fetchNum(id: string): Promise<number> {
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // js, ts 둘다 사용하는 문법
  // optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("strv");
  printName("what", undefined);

  //Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  console.log(addNumbers(1, 2));

  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
}
