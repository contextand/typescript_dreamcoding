{
    // 타입 확인할 때, 강제할 때 
    // 추천하진 않는다.
    // 어쩔 수 없이 쓰게되는 상황 있다.

    function jsStrFunc():any {
        return 'hello';
    }
    const result = jsStrFunc();
    result.length; // 이렇게 못쓴다. any 로 지정해서

    (result as string).length; // 이렇게 문자열이라고 지정하면 문자열 메소드 사용 가능
    // as 라는 키워드로 타입 지정, 경고 줄이 안 뜨므로 주의

    (<string>result).length; // 이런 모양도 가능

    const wrong: any = 5;
    (wrong as Array<number>).push(1); // 에러 발생. 

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers();
    numbers.push(2); // 언디파인드 일 수 있는 것에 push 메소드 사용 불가
    numbers!.push(2); // 뭔가 확신할 때 분명 값이 있다 할 때, ! 를 쓴다. ? 를 붙이는 옵셔널과 다른 의미
    // 장담을 해버리면 안 좋을 수 있지만, 아래 예시에서 쓰임

    const button = document.querySelector('class');
    button?.nodeValue;
    
    if (button) {
        button.nodeValue;
    }

    const button = document.querySelector('class')!;
}