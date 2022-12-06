{
  // let es6
  let name = "hello";
  name = "hi";

  // const
  const age = 5;

  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array ...
   */

  // number
  const num: number = 3;

  // string
  const str: string = "hello";

  // boolean
  const bool: boolean = false;

  // undefined - 값이 있는지 없는지 결정 전
  let newage: number | undefined;
  newage = 1;
  newage = undefined;
  // 값이 업을 수도 있을 때, 이렇게 타입 지정해두면 좋을 것

  function find(): number | undefined {
    return undefined;
  }
  // null - 텅텅 비었다고 결정.
  let person: string | null;
  // 데이터가 있을 수 있고, 없을 수 있을 때
  // 보편적으로는 언디파인트와 함께 쓰긴 함

  // unkonwn, 알수 없는? 무슨 타입인지 모를 때? 안쓰는 게 좋음
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any, 어떠 것이든 담는 변수, 안 쓰는 게 좋음
  let anything: any = 0;
  anything = "hell";

  // void, 리턴값이 없는 함수, 보통은 타입 명시하느 것이 관례, 생략 가능
  function print(): void {
    console.log("hello");
  }

  // never, 리턴하지 않는 함수?, 리턴할 계획이 전혀 없는 함수, 에러만 확인할 것

  function throwError(message: string): never {
    // message -> server (log)
    // throw new Error(message);
    while (true) {
      // 빙글빙글 돌 경우?
    }
  }

  // object
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
