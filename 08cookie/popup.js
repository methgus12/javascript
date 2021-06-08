/*쿠키 생성 , 실행함수 선언*/

function createCookie(name , value) { //popup , true 

    //쿠키이름 , 쿠키 값 , 만료시간
    var date = new Date();
    date.setDate (date.getDate() +1);
    
    var cookie ="";
    cookie+= name + "=" + value +";"; //쿠키이름 값 설정
    cookie += "expires=" + date; //쿠키시간설정
   
    document.cookie = cookie; 

}

//쿠키확인
function getCookie(name) {

    var cookies = document.cookie.split(";"); //분리해서저장

    for(var i in cookies) {
        if(cookies[i].indexOf(name) != -1) { //쿠키가 존재
            return cookies[i].replace(" ", "").replace(name+"=" , ""); //쿠키값이 존재한다는 의미만 리턴
        } 
    }

}