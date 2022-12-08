// 책은 이름과 책번호가 있다, 총 5권의 책 배열
// 책을 빌려가는 함수, 파라미터로 이름과 책번호, 빌려간책의 이름과 숫자는 null로표시, 빌려간 책은 빌릴수없다, 없는 책도 빌릴수없다..


// 책반납 함수, 반납하면 책이름과 번호가 null에서 원상복귀돼야한다


let bookManage = [];


    const book = [
        {      
            name: 'book1',
            number: 'a1b1',
        },
        {      
            name: 'book2',
            number: 'a2b2',
        },
        {      
            name: 'book3',
            number: 'a3b3',
        },
        {      
            name: 'book4',
            number: 'a4b4',
        },
        {      
            name: 'book5',
            number: 'a5b5',
        },
    ]

function showBook(){
    console.log(book);
}

function takeBook(name, num){
    let index = book.findIndex((item)=> item.name === name);
    if(index === -1) return console.log('이미 빌려간 책입니다. 빌릴 수 없습니다');
    if(book[index].number === num && book[index].name === name){
        console.log(`${name}을 빌려갑니다`);
        bookManage.push(book[index]);
        book.splice(index,1);

    }else{
        console.log(`책이름 혹은 책번호가 맞지 않습니다`);
        console.log(book[index].name,book[index].number);
    }
}

function returnBook(name, num){
    let index = bookManage.findIndex((item)=>item.name==name);
    if(index === -1) return console.log('빌려가지 않은 책입니다');
    if(bookManage[index].number === num && bookManage[index].name === name){
        console.log(`빌려간 ${name}을 반납합니다`);
        book.push(bookManage[index]);
        console.log(book);
        bookManage.splice(index,1);
    }else{
        console.log('알맞지 않는 책입니다');
    }
}


takeBook('book4', 'a4b4');
takeBook('book2', 'a2b2');
showBook();
returnBook('book4', 'a4b4');

