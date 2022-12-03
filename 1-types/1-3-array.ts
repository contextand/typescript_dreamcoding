{
  // Array
  const fruits: string[] = ["토마토", "바나나"];
  const small_fruits: number[] = [1, 2, 3];
  const big_fruits: Array<number> = [1, 2, 3];

  function printArray(fruits: readonly string[]) {
    // 읽을 수만 있게 하는 것
    // readonly 는 string[] 이런 식에만 적용 가능
  }

  // Tuple
  // 서로 다른 타입을 가질 수 있는 배열
  let student: [string, number];
  student = ["name", 33];

  // Tuple 권장 안함, 인덱스로 접근하는 것 가독성 떨어짐
  // student[0] 이렇게 하면 데이터 확인 어려운,
  // student.name 처럼 명시적으로 접근하는 게 좋다.

  const [name, age] = student;
  // 데이터를 저장한 곳이 아니라 사용하는 곳에서 이렇게 정의해야 하는..
}
