{
  //차별화할 수 있는, 구분할 수 있는?

  // function: login -> success, fail
  type SuccessState = {
    result: "success"; // 문자열 지정
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail"; // 문자열 지정
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: "success", // 여기서도 이렇게 선택해야주어야 함
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state)
  // success -> body
  // fail -> reason

  function printLoginState(state: LoginState) {
    // state.result 로 접근 가능, 성공이든 실패든

    if (state.result === "success") {
      // 이렇게 성공으로, 직관적으로 작성 가능
      console.log(`${state.response.body}`);
    } else {
      console.log(`${state.reason}`);
    }
  }

  // 어떤 케이스든 공통적인 프로퍼티를 가지고 있으므로서 구분하기 쉽게 만든다!. 이게 포인트!
}
