//조건문

// if 로 시작
// eles 로 끝난다.

// Boolean Data Type
// trun , false 담을 수 있는 유형의 데이터 공간
// "Hello world" => 문자열 => String 
// 37            => 정수형 =>  Int 
// true          => 논리형 => Boolean

function init(){                 
    var monitor = 5 < 10;                 
    console.log(monitor);

    if(monitor){
        console.log("정답입니다.");

    } else {
        console.log("오답입니다.");
    }



    var userSelect = 3;
    if(userSelect === 1) {
        console.log("1을 선택하셨습니다.")


    }
     else if(userSelect === 2) {
        console.log("2를 선택하셨습니다.")

    } 
     else if(userSelect === 3) {
        console.log("3을 선택하셨습니다.")

     } else {
         console.log("전부 다 아니야!")
     }

     /*
        변수 answer를 만들고 임의의 값을 정하세요.
        cola, soda, cheeryCock, hwanta 에 대해 조건문 처리를 하세요.
        true일 경우, ㅁㅁㅁ를 선택하셨습니다. 라는 문구를 console.log 하세요. 
        만약 해당사항이 없을 경우 "찾은 물건이 없습니다." 라고 console.log 하세요.
     */

     var answer = soda
     
     if(answer === cola) {
         console.log("cola를 선택하셨습니다.")
     } else if(answer === soda) {
         console.log("soda를 선택 하셧습니다.")
     }



}



   


    



init();

