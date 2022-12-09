/*

======================
현서님이 만들어주신 문제
======================

각도를 설정하여 원하는 수온으로 샤워기 온도를 설정하세요
(아래 표 참고)

각도       수온
0~64도     온수
65~119도   미온수
120~180도  냉수

인풋: 각도 // 아웃풋: 수온
*/

function 샤워기(i) {
    let water;
    if(0<=i && i<65){
        water = '온수';
        return water;
    }
    if(65<=i && i < 120) {
        water = '미온수';
        return water;
    }
    if(120<=i && i<180) {
        water = '냉수';
        return water;
    }
}


const result = 샤워기(80);
console.log(result);


