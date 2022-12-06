{
  // union types
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");
  // 함수 호출시 문자열 작성하면, 함수가 받을 수 있는 4가지 타입 자동으로 보여줌
  // 이것 또는 이것 또는 이것..

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 32;

  // 하나의 사이즈만 적어야 한다. 타입을 통해 들어갈 값 까지 지정하는 느낌

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }
}
