//----------------------- botton scroll to top -----------------------//

window.onscroll = function(){
    if(window.scrollY > 200){
        document.querySelector(".scroll-top").style.display="block"
    }else{
        document.querySelector(".scroll-top").style.display="none"
    }
}

document.querySelector('.scroll-top').onclick =function(){
    window.scrollTo({
        top : 0 ,
        behavior : 'smooth'
    })
}

//------------------------ botton input ----------------------//
var btn = document.querySelector('.email');

    document.querySelector('.email').onclick =function(){
    btn.classList.add('active-bottom');
}

    document.querySelector('.email').onblur = function(){
        btn.classList.remove('active-bottom');
}

var btn2 = document.querySelector('.message');

    document.querySelector('.message').onclick =function(){
    btn2.classList.add('active-bottom');
}

    document.querySelector('.message').onblur = function(){
        btn2.classList.remove('active-bottom');
}

//-------------------- media query class open ---------------------------//

var openbtn = document.querySelector('.list');

document.querySelector('.btn-menu').onclick = function(){
    openbtn.classList.toggle('open');
}

document.querySelector('.btn-menu').onblur = function(){
    openbtn.classList.remove('open');
}



