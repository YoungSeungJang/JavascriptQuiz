/* 아래 배열은 무신사 여성 가방 카테고리 실시간 판매 top20인 제품들의 정보입니다.

    name             // 제품명
    content         // 제품 정보
    price           // 제품 판매가
    purchase_amount // 누적 구매수  */

let product = [
  {
    name: '마뗑킴',
    content: 'BUCKLE BAG IN',
    price: 79200,
    purchase_amount: 10000,
  },

  {
    name: '루에브르',
    content: 'Sac de Maman',
    price: 349000,
    purchase_amount: 9100,
  },

  {
    name: '디어니스',
    content: '패네백(토스트)',
    price: 158480,
    purchase_amount: 8100,
  },

  {
    name: '리끌로우',
    content: 'RC B019 BLACK GLASS',
    price: 26100,
    purchase_amount: 9800,
  },

  {
    name: '프라다',
    content: '여성 스몰 시퀸메쉬 토트백',
    price: 1357000,
    purchase_amount: 9300,
  },

  {
    name: '스탠드오일',
    content: 'Fluffy Regular',
    price: 109000,
    purchase_amount: 8900,
  },

  {
    name: '소프트서울',
    content: '하프문 레더백[블랙]',
    price: 198000,
    purchase_amount: 7900,
  },

  {
    name: '마뗑킴',
    content: 'ACCORDION WALLET',
    price: 85000,
    purchase_amount: 6900,
  },

  {
    name: '마르디 메크르디',
    content: 'VALERIE BLACK [ALL LEATHER]',
    price: 196200,
    purchase_amount: 9700,
  },

  {
    name: '쿠론',
    content: '버베나 크로스',
    price: 368000,
    purchase_amount: 8700,
  },

  {
    name: '마뗑킴',
    content: 'BUCKLE BAG IN BLACK',
    price: 94000,
    purchase_amount: 7900,
  },

  {
    name: '마지셔우드',
    content: 'ZIPPER SMALL',
    price: 198000,
    purchase_amount: 6900,
  },

  {
    name: '쿠론',
    content: '버베나 크로스',
    price: 368000,
    purchase_amount: 9500,
  },

  {
    name: '스텐드오일',
    content: 'Fluffy Regular',
    price: 109000,
    purchase_amount: 8500,
  },

  {
    name: '마르디 메크르디',
    content: 'VELO BLACKIALL',
    price: 115200,
    purchase_amount: 7500,
  },

  {
    name: '스텐드오일',
    content: 'Bow bag Mini',
    price: 89000,
    purchase_amount: 6500,
  },

  {
    name: '마지셔우드',
    content: 'BOAT SHOPPER',
    price: 298000,
    purchase_amount: 9200,
  },

  {
    name: '마땡킴',
    content: 'ACCORDION WALLET',
    price: 85000,
    purchase_amount: 8300,
  },

  {
    name: '디어니스',
    content: '패네백(토스트)',
    price: 158480,
    purchase_amount: 7300,
  },

  {
    name: '필인더블랭크',
    content: 'Trapezoid PK',
    price: 159000,
    purchase_amount: 6300,
  },
];

// 1. 누적 구매수가 높은 순으로 정렬된 랭킹 top20의 배열을 구하세요.

// 2. 내가 가지고 있는 현금을 파라미터로 갖는 shoppingList 라는 이름의 함수를 만들고,
//    3만원 할인 쿠폰 적용시 구매할 수 있는 상품들의 제품명을 배열로 반환하세요.
//    (가지고 있는 돈이 가장 저렴한 가방의 금액보다 적을 경우 '금액 초과 상품입니다'를 반환하세요.)

// ex)
//    const a = shoppingList(156000);
//    console.log(a);

//    결과값
//    ['디어니스', '필인더블랭크', '리끌로우'] (예시)

let top20 = product.sort((a, b) => {
  if (a.price > b.price) return -1;
  if (a.price < b.price) return 1;
  if (a.price === b.price) return 0;
});
// console.log(top20);

function shoppingList(money) {
  let list = top20.map((item) => {
    item.price -= 30000;
    return item;
  });
  list = list.filter((item) => item.price >= 0).filter((item) => money >= item.price);
  return list;
}
const a = shoppingList(78000).map((item)=>item.name);
// console.log(top20.filter((item)=> item.price).map((item)=>item.price));
console.log(a);
