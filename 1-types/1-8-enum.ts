{
  // 관련된 상수값들을 한 곳에 모아서 정의
  // 자바스크립트에는 존재하지 않는, 타입스크립트 자체 제공

  const MAX_NUMBER = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;

  // enum 과 비슷하게 묶어주려면

  const DAY = Object.freeze({ MONDAY: 0, TUESDAY: 1 });

  // 이넘으로 한다면,
  // 값 지정안하면 0부터 시작
  // 1부터 시작하고 싶다면 값 할당할 수 있음

  enum DAYS {
    Monday, // 0
    Tuesday, // 1
    Wednesday, // 2
  }
  console.log(DAYS.Tuesday);

  // 관련된 상수값은 이넘으로 묶을 수 있다.
  // 다른 언어에서는 유용하지만, 타입스크립트에서 이넘은 가능한 쓰지 않는 게 좋다.

  let day: DAYS = DAYS.Monday;
  day = 10;
  // 타입 보장이 안됨, 숫자 입력됨

  // 유니언 타입으로 타입 보장하면서 쓰는 것이 더 좋을 것
  // 이넘은 대부분 유니언으로 해결 가능

  type Days = "Monday" | "Tuesday" | "Wed";

  let dayweek: Days = "Tuesday";
  dayweek = "Wed";

  //
}
