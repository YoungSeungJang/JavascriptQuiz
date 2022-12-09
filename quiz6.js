//1 1~100번까지 사물함이있다.
//2 이용가능한 사물함 현황을 보여주는 함수!
//3 사물함을 할당하는 함수, 파라미터로 사물함번호와 비밀번호를 받음!
//4 사물함 이용 함수, 파라미터로 사물함번호와 비밀번호를 받음!(비어있는 사물함은 열수없고, 비밀번호가 틀리면 비밀번호 틀렸습니다)
//5 이용을 끝내고 사물함 반납 함수, 파라미터로 사물함번호와 비밀번호를 받음!(배정받은 사물함만 반납가능, 반납하면 1번 현황을보여주는 함수에서 보여져야함)

// , 사용중이지않는 사물함이면 라커 배정, 비밀번호가맞으면 사물함 열기가능, 사물함을 이용다하면 사물함 비우기
// 1번~100번까지있는 사물함이 있다
// 사물함 번호를 골라 비밀번호를 설정한다
// 사물함이 사용중이면 중복사용 못한다
// 사물함을 사용하려고하면 비밀번호를 입력 맞으면 사물함열림, 틀리면 비밀번호가 틀림

// ==========================================================================================================


// 빈 사물함배열 생성
let locker = [];
// 사물함관리 배열 생성
let lockerManage = [];


// 반복100번을통하여 push박스 함수 실행
for(let i=0;i<100;i++){
    pushbox(i);
}

// 사물함객체를 만드는 함수
function pushbox(i){
    const box = {
        number: i+1,
        password: null,
    }
    return locker.push(box);
}

// 사물함 현황 보여주는 함수
function showLocker(){
    const nullPw = locker.filter((item) => item.password === null).map((item)=>item.number);
    console.log(nullPw);
    console.log('이용가능한 사물함');
}


// 라커할당 함수
function lockerAssign(number, pw){
    if(number<1 || number>100) return console.log('사물함은 1~100번까지 존재합니다');
    let index = locker.findIndex((item)=>item.number === number);
    if(locker[index].password === null) {
        locker[index].password = pw;
        lockerManage.push(locker[index]);
        console.log(`${number}번째 사물함을 배정받으셨습니다`);
    }else{
        console.log('누군가 사용중인 사물함입니다. 비어있는 사물함 번호를 입력해주세요');
    }
}

// 라커 이용 함수
function lockerUse(number, pw){
    let index = lockerManage.findIndex((item)=>item.number === number);
    if(index === -1) return console.log('배정받지 않은 사물함입니다. 사물함배정 받은뒤에 이용해주세요');
    if(lockerManage[index].password === pw && lockerManage[index].number === number) return console.log(`${number}번 사물함이 열렸습니다!`);
    if(lockerManage[index].password !== pw && lockerManage[index].number === number) return console.log('비밀번호가 틀렸습니다');

}

// 다이용한 라커처리 함수
function lockerRemove(number, pw){
    let index = lockerManage.findIndex((item)=>item.number === number);
    if(index === -1) return console.log('배정받지 않은 사물함입니다. 사물함배정 받은뒤에 이용해주세요');
    if(lockerManage[index].password !== pw && lockerManage[index].number === number) return console.log('비밀번호가 틀렸습니다');
    if(lockerManage[index].password === pw && lockerManage[index].number === number){
        locker.find((item)=> item.number === number).password = null;
        console.log(`${number}번 사물함이용을 끝냈습니다. 이용해주셔서 감사합니다😊`);
    }
}



// 라커현황 보여주기
showLocker();

// 88번 014로 할당
lockerAssign(88, 014);

// 라커현황 보기(88은 없어야함)
showLocker();

// 77, 66번 할당
lockerAssign(77, 5678);
lockerAssign(66, 5678);

// 77, 66은없어야함
showLocker();

// 사물함 이용 ! (배정받지 않은 사물함은 배정먼저 받아야함)!
lockerUse(1, 000);

// 사물함 이용!( 비밀번호가 일치해야한다, 일치하지않으면 사용불가)
lockerUse(88, 000);

// 일치하는 사물함이용
lockerUse(88, 014);

// 다쓴 사물함 반납(배정받지 않은 사물함은 배정먼저 받아야함)!
lockerRemove(1, 014);

// 다쓴 사물함 반납( 비밀번호가 일치해야한다, 일치하지않으면 사용불가))!
lockerRemove(88, 000);

// 일치하는 사물함 반납
lockerRemove(88, 014);

// 반납을 하고나면 현황에서 다시 쓸수있게 보여야함!
showLocker();

