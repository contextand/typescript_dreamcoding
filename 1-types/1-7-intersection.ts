{
  // 유니언은 케이스 중 한가지만 선택
  // 인터색션은 모든 것을 다 합한
  // 유니언은 or , 인터색션은 and 개념

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    name: "aaa",
    score: 3,
    empolyeeId: 1223,
    work: () => {},
  });

  // 다양한 타입을 하나로 묶어서 선언할 수 있다.
}
