{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7;
    // 중복 사용되는 메모리 낭비 막기 위해 static 붙여서 클래스 레벨
    // 붙이지 않으면 인스턴스 레벨
    // 클래스 레벨은 클래스와 연결되어서 오브젝트 마다 만들어지지 않는다.

    coffeeBeans: number = 0;
    // 클래스 안에서는 let, const, function 안씀
    // 변수 접근할 때는 클래스 안 변수라는 의미로 앞에 this. 붙임

    // class 를 가지고, 오브젝트, 인스턴스를 만들 때 호출되는 함수 constructor
    constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    // 함수에도 static 키워드 붙여서 바로 활용할 수 있음
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        // this 를 CoffeeMaker 로 수정
        throw new Error("not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  // new 는 클래스 인스턴스를 만든다.
  // () 는 생성자를 호출하는 것
  // new 와 클래스를 이용하면 데이터를 담아서 오브젝트 만들 수 있다.

  console.log(maker);

  CoffeeMaker.makeMachine(2);
}
