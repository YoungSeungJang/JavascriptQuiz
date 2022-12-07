// 2. 편의점 물건 확인하기
// 당신은 편의점에서 야간 아르바이트를 하는 학생입니다
// 당신이 일하는 시간에 편의점에 채워놓을 물건이 들어오며
// 당신은 재고의 개수와 물품이 맞는지 확인해야 합니다. 일의 순서는 아래와 같습니다.
//  1. 당신은 아래와 같은 전산표를 전달받습니다. 품목 갯수
// 야채곱창 5
// 바나나우유 10
// 삼각김밥 15
// 도시락 10
// 샌드위치 10
// 2. 당신은 물품을 세어본 후 해당 제품이 표의 갯수와 같은지 확인해야 합니다. 
// -----------------------------------------------------------
// ----------------------------------------------------------- 최종목표
// 1. 물품명과 갯수를 파라미터로 전달받는 함수를 만듭니다.
//  함수의 이름은 마음대로 하셔도 괜찮습니다. 
// 2. 만약 표의 값과 갯수가 일치하지 않는다면
//  “전산표와 일치하지 않습니다”를 로그 합니다.
//  같다면 
//  “전사표와 일치합니다“를 로그 합니다. 3. 전산표에 없는 물건이라면 확인을 위해 
//  해당 물건의 이름을 콘솔에 로그 합니다. ex) 함수명(물품명, 갯수); 
//  결과값
// ”전산표와 일치합니다.“ (일치) ”전산표와 일치하지 않습니다.“ (불일치) ”바사삭치킨“ (품목 없음) -----------------------------------------------------------------------------

// 전산표
const food = {
    야채곱창: 5,
    바나나우유: 10,
    삼각김밥: 15,
    도시락: 10,
    샌드위치: 10,
}

// 전산표 키값들 Object.key로 접근한뒤 맵으로 새로운 배열을 리턴하여 foodkey에 저장(파라미터에 키값이없을때 예외처리를 위해)
const foodkey = Object.keys(food)

// 전산체크 함수
function check(foodname, count){
    // 제품이 전산표에 없는경우 undefined을 저장
    const noneFood = foodkey.find((item)=> item === foodname);
    // 일치하는경우
    if(food[foodname] === count){
        console.log(`전산표와 일치합니다`);
    } else if(noneFood === undefined) {
        console.log(`${foodname}은 없는 제품입니다`)
    } else{
        console.log('전산표와 일치하지 않습니다');
    }
}


// 실행
check('삼김', 5);       // 삼김은 없는 제품입니다
check('야채곱창', 5);   // 전산표와 일치합니다
check('도시락', 15);    // 전산표와 일치하지 않습니다


