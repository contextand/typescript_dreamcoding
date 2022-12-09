{
  // 타입추론
  // 알아서 작성되는 경우

  let text = "hello";
  // 선언함과 동시에 string 이라는 타입이 지정된 것
  // 뻔한 타입의 경우 생략해도 됨

  function print(message = "hello") {
    // 디폴트 값을 넣어도 타입추론이 적용됨
    console.log(message);
  }

  print("hello");
  // print(1); // 타입 에러

  function add(x: number, y: number): number {
    return x + y;
  }
  const result = add(1, 2);

  // 타입추론 안 좋을 수 있다.
  // 프로젝트 코드가 이렇게 간단한 경우가 없다.
  // 왠만하면 타입을 정확히 명시하는 것이 좋다.
  // 딱 봐도 보이는 경우는 생략, 함수라면 정확히 명시하는 것이 좋음
  // 이게 뭐낙
}
