

// 요소정리
/*
1. .list_btn_group > ul
    - li태그의 자식요소로 이미지를 갖고
    - 해당 ul의 자식으로서 추가


2. .list_btn_group > button:first-child
   .list_btn_group > button:last-child
   p.s currentPlayIndex = 0;

3. .disk_inner
    선택된 노래가 바뀔 때마다 디스크 내부의 원은 바뀐다.

4. main
    선택된 노래가 바뀔 때마다 배경화면이 바뀐다
    (백드롭필터)
    선택된 노래가 실행되면 앨범 이미지로 바뀐다
    p.s let playStatus = 0(혹은 false)

5. .disk
    애니메이션을 추가해야할 disk 태그

6. .play_btn_group > button:first-child
   .play_btn_group > button:last-child

   * play 버튼이 눌러졌을 때 배경 화면이 그라데이션에서 앨범 이미지로 변경 및 디스크 회전

   * 중지 버튼이 눌러지면 디스크 회전 중지 배경 화면 그라데이션으로

7. 생성된 ul의 li의 이미지태그를 가지고 올것입니다.
    현재 선택된 노래의 focus
    흰색 테두리 + 크기 커짐

    + 이미지 눌렀을 때도 이동 가능
 */


const musicListData = [
    {
        src: './assets/img/image/iu_0.jpg',
        color: ['#0272a4', '#f6a564'],
        audio: './assets/mp3/BIBI.mp3',
    },
    {
        src: './assets/img/image/iu_1.jpg',
        color: ['#b6bfc8', '#36595b'],
        audio: './assets/mp3/The Shower.mp3',
    },
    {
        src: './assets/img/image/iu_2.jpg',
        color: ['#e58e82', '#6f569f'],
        audio: './assets/mp3/Eight.mp3',
    },
];

// 인덱스, 플레이상태
let musicListIndex = 0;
let playStatus = false;
let imgclick = false;

// 1. .list_btn_group > ul
//     - li태그의 자식요소로 이미지를 갖고
//     - 해당 ul의 자식으로서 추가

const $musicList = document.querySelector('.list_btn_group > ul');

musicListData.forEach((item)=>{
    const $li = document.createElement('li');
    $li.innerHTML = `<img src="${item.src}">`
    $musicList.append($li);
});

/* 
2. .list_btn_group > button:first-child
   .list_btn_group > button:last-child
   p.s currentPlayIndex = 0;
*/


const $prevBtn = document.querySelector('.list_btn_group > button:first-child');
const $nextBtn = document.querySelector('.list_btn_group > button:last-child');
const $musicListItem = $musicList.children;

// 버튼에 이벤트 추가
$prevBtn.addEventListener('click', prevBtn);
$nextBtn.addEventListener('click', nextBtn);

// 화면에는 첫번째 이미지가 선택되어있는상태로 시작
$musicListItem[musicListIndex].children[0].style.border = '3px solid #fff';
$musicListItem[musicListIndex].children[0].style.transform = 'scale(1.5)';

// <(이전)버튼
function prevBtn() {
    if(musicListIndex <= 0 ){
        musicListIndex = $musicListItem.length - 1;
    } else {
        musicListIndex--;
    }
    for(let el of $musicListItem){
        el.children[0].style.border = '';
        el.children[0].style.transform = 'scale(1)';
    }
    // focus 효과
    $musicListItem[musicListIndex].children[0].style.border = '3px solid #fff';
    $musicListItem[musicListIndex].children[0].style.transform = 'scale(1.5)';

    if(!playStatus && !imgclick){
        // diskInner 색변경
        $diskInner.style.backgroundColor = musicListData[musicListIndex].color[0];
    }

    // main색변경
    $main.style.background = `linear-gradient(120deg, ${musicListData[musicListIndex].color[0]}, ${musicListData[musicListIndex].color[1]})`
};

// >(다음)버튼
function nextBtn() {
    if(musicListIndex >= $musicListItem.length - 1){
        musicListIndex = 0;
    } else {
        musicListIndex++;
    }
    for(let el of $musicListItem){
        el.children[0].style.border = '';
        el.children[0].style.transform = 'scale(1)';
    }
    // focus 효과
    $musicListItem[musicListIndex].children[0].style.border = '3px solid #fff';
    $musicListItem[musicListIndex].children[0].style.transform = 'scale(1.5)';

    if(!playStatus && !imgclick){
        // diskInner 색변경
        $diskInner.style.backgroundColor = musicListData[musicListIndex].color[0];
    }

    // main색변경
    $main.style.background = `linear-gradient(120deg, ${musicListData[musicListIndex].color[0]}, ${musicListData[musicListIndex].color[1]})`

};

/* 
3. .disk_inner
    선택된 노래가 바뀔 때마다 디스크 내부의 원은 바뀐다.
*/

const $diskInner = document.querySelector('.disk_inner');


/* 
4. main
    선택된 노래가 바뀔 때마다 배경화면이 바뀐다
    (백드롭필터)
    선택된 노래가 실행되면 앨범 이미지로 바뀐다
    p.s let playStatus = 0(혹은 false)
*/

const $main = document.querySelector('main');


/* 
5. .disk
    애니메이션을 추가해야할 disk 태그
*/

const $disk = document.querySelector('.disk');
const $audio = document.querySelector('audio');

const $playBtn = document.querySelector('.play_btn_group > button:first-child');
const $stopBtn = document.querySelector('.play_btn_group > button:last-child');

function playDisk() {
    playStatus = true;
    imgclick = true;
    $disk.style.animation = 'rotateAni infinite 1.5s linear';

    if(playStatus && imgclick){
        // diskInner 색변경
        $diskInner.style.backgroundColor = musicListData[musicListIndex].color[0];
    }
    $audio.attributes.src.value = musicListData[musicListIndex].audio;

};

function stopDisk() {
    playStatus = false
    imgclick = false;
    $disk.style.animation = '';

    $audio.attributes.src.value = '';
}

$playBtn.addEventListener('click', playDisk);
$stopBtn.addEventListener('click', stopDisk);

/* 
6. .play_btn_group > button:first-child
   .play_btn_group > button:last-child

   * play 버튼이 눌러졌을 때 배경 화면이 그라데이션에서 앨범 이미지로 변경 및 디스크 회전

   * 중지 버튼이 눌러지면 디스크 회전 중지 배경 화면 그라데이션으로
*/

const $filter = document.querySelector('.filter');
const $section = document.querySelector('section');

$playBtn.addEventListener('click', albumImageOn);
$stopBtn.addEventListener('click', albumImageOff);

function albumImageOn() {
    if(playStatus) {
        $filter.style.background = `no-repeat url(${musicListData[musicListIndex].src})`;
        $filter.style.backgroundSize = 'cover';
        $filter.style.backgroundPosition = 'center';
        $filter.style.animation = 'upToDown 0.8s ease';

        // 애니메이션을 수행한뒤 지워줘야 다른것을 플레이해줄때 또 애니메이션이 보임
        setTimeout(()=>{
            $filter.style.animation = '';
        },700);
        
        // 블러처리, 여러번누르면 여러개 생길 수 있으니 길이가 0일때만 한번 생성
        if($filter.children.length === 0){
            const div = document.createElement('div');
            div.classList.add('blur');
            $filter.appendChild(div);
        }
    }
};

function albumImageOff() {
    // blur를 여기서 선언한이유는 PLAY를 누른시점에 blur를 추가했기때문에 위에 전역으로 선언 해버릴경우, 처음에 읽어버릴때는 없기때문에 null이 찍힘 따라서 STOP을 누르는 순간에 blur를 가져오도록 STOP버튼 안에 설정
    const $blur = document.querySelector('.blur');
    if(!playStatus && $blur) {
        $filter.style.animation = 'downToUp 0.8s ease';

        // 애니메이션으로 사라지는 모습을 보이고 실행하고싶어서 작성(0.7초)
        setTimeout(()=>{
            $filter.style.background = '';
            $blur.remove();
        },700);
    }
};


// 이미지 눌렀을 때도 이동 가능

const $img = document.querySelectorAll('.list_btn_group > ul > li > img');
for(let el of $img){
    el.addEventListener('click', chageMainImg);
    el.style.cursor = 'pointer';
}

function chageMainImg() {
    // imgArr배열에 img 푸쉬
    let imgArr = [];
    for(let el of $musicListItem){
        imgArr.push(el.children[0].attributes[0].value);
    }

    // 클릭된Index를 기존 musicListIndex에 대입(클릭헀으면 인덱스를 맞춰주어야 좌,우 버튼사용시 이상없다)
    let clickImgIndex = imgArr.findIndex((item)=> item === this.attributes[0].value);
    musicListIndex = clickImgIndex;

    for(let el of $musicListItem){
        el.children[0].style.border = '';
        el.children[0].style.transform = 'scale(1)';
    }

    // focus 효과
    $musicListItem[musicListIndex].children[0].style.border = '3px solid #fff';
    $musicListItem[musicListIndex].children[0].style.transform = 'scale(1.5)';

    
    // main색변경
    $main.style.background = `linear-gradient(120deg, ${musicListData[musicListIndex].color[0]}, ${musicListData[musicListIndex].color[1]})`

    
    if(!playStatus && !imgclick){
        // diskInner 색변경
        $diskInner.style.backgroundColor = musicListData[musicListIndex].color[0];
    }
};