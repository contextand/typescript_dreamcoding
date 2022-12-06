{
  // 새로운 타입을 정의할 수 있다?
  type Text = string;
  const name: string = "가나다";
  const name2: Text = "가나다";

  type Num = number;
  const two: Num = 3;

  // 객체 형태로 타입 지정도 가능
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "rk",
    age: 2,
  };

  // 원하는 타입을 직접 지정한다. -> type aliases

  // String Literal Types
  // 문자열을 지정할 수 있다.

  type Name = "name";
  let what: Name;

  what = "name";

  // 값 자체를 타입으로 지정하는 이유?
}
