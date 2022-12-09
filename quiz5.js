/* 5. 심화문제 (선택)
심화 문제의 올바른 풀이를 위해서는 아직 배우지 않은 개념도 이해하고 있어야 합니다.. (클로저, this)
그러나 반드시 올바르게 문제를 풀이하지 않아도 괜찮으니 아래와 같은 기능을 구현해보세요. 올바른 풀이가 아닌 현재까지 배운 개념만으로도 기능 작동에는 문제가 없는 것을 확인하였습니다. 아래와 같은 기능을 하는 오브젝트를 반환하는 함수를 만드세요
파라미터로는 최종 목표지 까지와의 거리를 전달 받습니다. 함수 이름은 car입니다. car는 각각 시동걸기, 시동끄기, 주행 기능을 가지고 있습니다. 해당 자동차는 연식이 오래되어 최대 40km밖에 운전하지 못합니다. 40km 이상 주행하려고 한다면 안전 사고 위험이 있어 강제로 시동을 종료합니다. 주행거리까지 1km 단위로 상황판(콘솔)에 나타납니다. 최종 목표
1. 시동이 걸리면 시동이 걸렸다는 메시지가 콘솔에 로그됩니다. 2. 시동이 꺼지면 시동이 꺼졌다는 메시지가 콘솔에 로그됩니다. 3. 주행 중이면 최종 목표 거리까지 1km 단위로 콘솔에 거리가 로그됩니다. 4. 최종 목표거리에 도달하면 주행이 완료되었다는 메시지가 콘솔에 로그됩니다. 5. 최종 목표거리가 40km 이상인 상태에서 주행을 시도하면
 안전 위험으로 시동을 종료했다는 메시지가 콘솔과 로그됨과 동시에 시동이 꺼집니다. 6. 시동이 걸리지 않으면 주행을 할 수 없습니다. 7. 시동이 걸려있는 상태에서 시동을 다시 걸 수 없습니다. 8. 시동이 꺼져있는 상태에서 시동을 다시 끌 수 없습니다. */



// 초기에 차는 꺼져있는상태
let power = false;
let distance;

// 시동키고끄는 함수, 매개변수만큼 주행할수있는 함수를 담은 객체
const carFunction = {
    powerOnOff(){
        if(power === false){
            console.log('시동이 켜졌습니다');
            return power = true;
        }else{
            console.log('시동이 꺼졌습니다');
            return power = false;
        }
    },
    drive(movedist){
        // 주행거리가 설정 안됐으면
        if(distance === undefined){
            console.log('차 주행거리를 설정해주세요');
            return;
        }

        // 시동이 꺼져있으면
        if(power === false) {
            console.log('시동이 걸리지 않으면 주행을 할 수 없습니다. ')
            return;
        }

        // 주행거리보다 더많이 움직이려할경우
        if(distance < movedist){
            console.log(`목표거리 ${movedist - distance}km 초과! 목표거리를 초과하지않을만큼 다시 입력해주세요`)
            return;
        }

        // 움직이려는 거리만큼 반복하여 남은거리출력
        for(let i=0;i<movedist;i++){
            distance--;
            console.log(`최종목표까지 ${distance}km 만큼 남았습니다.`);
        }
        if(distance === 0) console.log('최종목표 거리에 도달했습니다!')
    }
}


function car(dist){
    if(dist > 40){
        console.log('해당 자동차는 연식이 오래되어 최대 40km밖에 운전하지 못합니다');
        console.log('안전 위험으로 시동을 종료');
        power = false;
        console.log(`현재 차의 전원은 ${power} 상태 (false이면 OFF)`);
        return;
    }
    distance = dist;
    console.log(`설정한 주행거리는 ${dist} 입니다`)
}


// 실행

car(41);

car(39)
carFunction.powerOnOff();
carFunction.drive(10);
carFunction.powerOnOff();
carFunction.drive(29);
