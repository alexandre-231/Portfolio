const btnpagesuivante = document.querySelector("#bouttonredirection")
const h4titre = document.querySelector("#h4texteAcueille")
const H1prenom = document.querySelector("#nomPrenomh1")
const H1titre = document.querySelector("#TitrePageAcueille")
btnpagesuivante.addEventListener("click", function () {
    btnpagesuivante.style.animation = 'none';
    h4titre.style.animation = 'none';
    H1prenom.style.animation = 'none';
    H1titre.style.animation = 'none';
    let position = 0;
    let opaciter2 = 1;
    
    setInterval(() => {
        position -= 10; // le bouton monte de 10px
        
        opaciter2 = opaciter2 - 0.05;
        btnpagesuivante.style.transform = `translateY(${position}px)`;
        btnpagesuivante.style.opacity = opaciter2;
        h4titre.style.transform = `translateY(${position}px)`;
        h4titre.style.opacity = opaciter2;
        H1prenom.style.transform = `translateY(${position}px)`;
        H1prenom.style.opacity = opaciter2;
        H1titre.style.transform = `translateY(${position}px)`;
        H1titre.style.opacity = opaciter2;
        if(opaciter2 <= 0){
            window.location.replace('html/mainPage.html');
        }
    }, 30);
});




function test(){
    //window.location.href = 'page2.html';
    //
    window.location.replace('page2.html');

}