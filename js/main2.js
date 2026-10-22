const checkbox = document.querySelector('#myCheckbox');
const checkbox2 = document.querySelector("#test");
const checkbox3 = document.querySelector("#checkboxC");
const checkboxPython = document.querySelector("#checkboxPython"); 
const body = document.querySelector("body");
const projets = document.querySelectorAll(".tous");


const imglangue = document.querySelector("#imgLangue");
const texteLangue = document.querySelector("#texteLangue");
const h1TitrePage = document.querySelectorAll(".haederprojetPage")[0];
const h1MesProjets = document.querySelectorAll(".haederprojetPage")[1];
const navEducation = document.querySelector("#education");
const navSkills = document.querySelector("#skills");
const navMisc = document.querySelector("#Miscellanous");
const navExperience = document.querySelector("#Experience");
const navPortfolio = document.querySelector("#Portfolio");
const btnFiltre = document.querySelector("#btnFiltre");
const labelPhp = document.querySelector('label[for="test"]');
const labelC = document.querySelector('label[for="checkboxC"]');


const h3BeerClicker = document.querySelector('#h3BeerClicker');
const pBeerClickerShort = document.querySelector('#pBeerClickerShort');
const pBeerClickerStatus = document.querySelector('#pBeerClickerStatus');

const h3Appiculteur = document.querySelector('#h3Appiculteur');
const pAppiculteurShort = document.querySelector('#pAppiculteurShort');
const aAppiculteurLink = document.querySelector('#aAppiculteurLink');

const h3Sibilia = document.querySelector('#h3Sibilia');
const pSibiliaShort = document.querySelector('#pSibiliaShort');
const aSibiliaLink = document.querySelector('#aSibiliaLink');

const h3LeBonCoin = document.querySelector('#h3LeBonCoin');
const pLeBonCoinShort = document.querySelector('#pLeBonCoinShort');
const aLeBonCoinLink = document.querySelector('#aLeBonCoinLink');

const h3Calculatrice = document.querySelector('#h3Calculatrice');
const pCalculatriceShort = document.querySelector('#pCalculatriceShort');
const aCalculatriceLink = document.querySelector('#aCalculatriceLink');
const pCalculatriceStatus = document.querySelector('#pCalculatriceStatus');


const lienprojet =["https://github.com/gregoryyyyyyy/DEPOT-SAE-101-LE-VRAI" , "https://github.com/yanis381/SAE201"]

// --- TEXTES REVISITÉS POUR LE BEER CLICKER ---
const tableauTextBeerclicker =["Jeu web interactif" , "Projet d'apprentissage personnel" , "Développement d'un jeu de type 'Clicker' pour maîtriser JavaScript (événements, manipulation du DOM) avec un backend PHP/MySQL pour la gestion des scores en temps réel."];
const tableauTextBeerclickerEn = [
 "Interactive Web Game",
 "Personal learning project",
 "Development of a 'Clicker' game to master JavaScript (events, DOM manipulation) with a PHP/MySQL backend for real-time score management."
];
const tableauImgBeerclicker =["../img/beer_clicker_button.png"]; 

const tableauTextAppiculteur = ["appiculteur 2024" , "jeu creer pour la SAE 1.01 en premiere année de BUT Informatique" , "le principe de ce jeu est simple recuperer un maximum de miel sans se faire tuer par les ours. Avec ceci vous avez des mecanique d'acat d'arme, de soins."];
const tableauTextAppiculteurEn = [
 "Beekeeper 2024",
 "Game created for SAE 1.01 in the first year of the BUT Computer Science",
 "The principle of this game is simple: collect a maximum of honey without being killed by the bears. With this, you have mechanics for purchasing weapons and healing."
];
const tableauimgAppiculteur = ["../img/sibiliaLogo.jpg "] 

const tableauTextSibilia = ["sibilia" , "reproduction de leur logiciel pour la SAE 2.01" ,"c'est un developpement entier de l'application (front/back) , base de donnée, conception" , "le but de ce logiciel est de gerer des commandes, creer des commandes , crée des plat et bien d'autre fonctionnaliter "];
const tableauTextSibiliaEn = [
 "Sibilia",
 "Reproduction of their software for SAE 2.01",
 "It is a complete development of the application (front/back), database, and design",
 "The goal of this software is to manage orders, create orders, create dishes, and many other features"
];

const tableauTextLeBonCoin = ["Clone Le Bon Coin", "Projet universitaire (SAE 3.01)", "Conception et développement complet d'une réplique du site Le Bon Coin en utilisant le framework PHP Laravel."];
const tableauTextLeBonCoinEn = ["Le Bon Coin clone", "University project (SAE 3.01)", "Design and full development of a replica of the Le Bon Coin website using the PHP Laravel framework."];

// --- TEXTES REVISITÉS POUR LA CALCULATRICE ---
const tableauTextCalculatrice = ["Application mathématique Python", "Projet personnel en développement", "Développement d'un outil de calcul évolutif en Python. Implémentation en cours d'un module de rendu graphique pour le traçage de courbes à partir d'équations complexes."];
const tableauTextCalculatriceEn = ["Python Math Application", "Personal project in development", "Development of a scalable calculation tool in Python. Ongoing implementation of a graphical rendering module for plotting curves from complex equations."];


const tableauImgBeerClicker = [
    "../img/beerclicker/imgbeerclickerImage.png",
];

const tableauImgAppiculteur = [
    "../img/appiculteur/accueilleApiculteur.png",
    "../img/appiculteur/gameplayappiculteur.png",
];

const tableauImgSibilia = [
    "../img/imgSibilia/AccueilleSibilia.png",
    "../img/imgSibilia/listecommandeSibilia.png",
    "../img/imgSibilia/rechercheClientSibilia.png",
    "../img/imgSibilia/pageConnexionSibilia.png",
    "../img/imgSibilia/rechercheplatSibilia.png",
    "../img/imgSibilia/creationplatSibilia.png",
    "../img/imgSibilia/liste des commanderaprocheeSibilia.png",
    "../img/imgSibilia/modifstatcommandeSibilia.png",
    "../img/imgSibilia/creercommandeSibilia.png",
];

const tableauImgLeBonCoin = [];
const tableauImgCalculatrice = []; 


const traductionsUI = {
 fr: {
 languages: "langues",
 titrePage: "Portfolio",
 mesProjets: "mes projets",
 education: "Mon Éducation",
 skills: "Compétences Techniques",
 misc: "Divers",
 experience: "Expérience Professionnelle",
 portfolio: "Portfolio",
 btnFiltre: "appliquer le filtre",
 linkGithub: "Lien vers le projet git hub",
 statusEnCours: "attention: ce projet est en cours de développement",
 beerClickerShort: "Développement d'un jeu web interactif (JS/PHP)",
 appiculteurShort: "petit jeu creée pour la sae de premiere année",
 sibiliaShort: "replique de logiciel",
 leBonCoinShort: "réplique du site le bon coin en Laravel",
 calculatriceShort: "Outil de calcul évolutif en Python",
 statusPasFini: "pas encore fini",
 imageIntro: "Voici quelques images du projet :",
 },
 en: {
 languages: "languages",
 titrePage: "Portfolio",
 mesProjets: "my projects",
 education: "MY Education",
 skills: "technical skills",
 misc: "Miscellanous",
 experience: "Work Experience",
 portfolio: "Portfolio",
 btnFiltre: "apply filter",
 linkGithub: "Link to the GitHub project",
 statusEnCours: "warning: this project is currently under development",
 beerClickerShort: "Interactive web game development (JS/PHP)",
 appiculteurShort: "small game created for the first year SAE",
 sibiliaShort: "software replica",
 leBonCoinShort: "replica of the Le Bon Coin website in Laravel",
 calculatriceShort: "Scalable Python calculation tool",
 statusPasFini: "not yet finished",
 imageIntro: "Here are some images of the project :",
}
};


let estEnAnglais = true; 

imglangue.addEventListener("click", function () {
    estEnAnglais = !estEnAnglais;
    const currentLang = estEnAnglais ? 'en' : 'fr';
    const trads = traductionsUI[currentLang];
    
    imglangue.src = estEnAnglais ? "../img/drpEN.png" : "../img/drpFR.png";

    h1TitrePage.innerHTML = trads.titrePage;
    h1MesProjets.innerHTML = trads.mesProjets;
    texteLangue.innerHTML = trads.languages;
    navEducation.innerHTML = trads.education;
    navSkills.innerHTML = trads.skills;
    navMisc.innerHTML = trads.misc;
    navExperience.innerHTML = trads.experience;
    navPortfolio.innerHTML = trads.portfolio;
    
    btnFiltre.innerHTML = trads.btnFiltre;
    document.querySelector('input[id="test"]').nextSibling.textContent = "php"; 
    document.querySelector('input[id="checkboxC"]').nextSibling.textContent = "c#";
    document.querySelector('input[id="checkboxPython"]').nextSibling.textContent = "python"; 
    document.querySelector('input[id="myCheckbox"]').nextSibling.textContent = ""; 
    
    h3BeerClicker.innerHTML = estEnAnglais ? "Interactive Web Game" : "Jeu web interactif"; 
    pBeerClickerShort.innerHTML = trads.beerClickerShort;
    pBeerClickerStatus.innerHTML = trads.statusPasFini;

    h3Appiculteur.innerHTML = estEnAnglais ? "beekeeper (SAE project)" : "appiculteur (projet SAE)";
    pAppiculteurShort.innerHTML = trads.appiculteurShort;
    aAppiculteurLink.innerHTML = trads.linkGithub;

    h3Sibilia.innerHTML = estEnAnglais ? "C# sibilia software" : "logiciel C# sibilia";
    pSibiliaShort.innerHTML = trads.sibiliaShort;
    aSibiliaLink.innerHTML = trads.linkGithub;

    h3LeBonCoin.innerHTML = estEnAnglais ? "Le Bon Coin clone" : "Clone Le Bon Coin";
    pLeBonCoinShort.innerHTML = trads.leBonCoinShort;
    aLeBonCoinLink.innerHTML = trads.linkGithub;

    h3Calculatrice.innerHTML = estEnAnglais ? "Python Math App" : "Application mathématique Python";
    pCalculatriceShort.innerHTML = trads.calculatriceShort;
    aCalculatriceLink.innerHTML = trads.linkGithub;
    pCalculatriceStatus.innerHTML = trads.statusEnCours;
});


projets.forEach(element =>{
    element.addEventListener("click", events =>{
        
        if (document.getElementById("backgroundDivProjet")) return;
        
        let textArray, statusText, linkText, imagesArray;
        let h3Text = element.querySelector("h3").innerHTML.toLowerCase(); // On passe en minuscules pour faciliter les comparaisons
        const currentTrads = estEnAnglais ? traductionsUI.en : traductionsUI.fr;

        // Mise à jour des conditions pour matcher les nouveaux titres (interactif / interactive)
        if (h3Text.includes("interactif") || h3Text.includes("interactive")) {
            textArray = estEnAnglais ? tableauTextBeerclickerEn : tableauTextBeerclicker;
            statusText = currentTrads.statusEnCours;
            linkText = currentTrads.linkGithub;
            imagesArray = tableauImgBeerClicker; 
            createPrProjet(null, textArray, null, tableauImgBeerclicker , false , null, statusText, linkText, imagesArray)
        }
        else if (h3Text.includes("appiculteur") || h3Text.includes("beekeeper")) {
            textArray = estEnAnglais ? tableauTextAppiculteurEn : tableauTextAppiculteur;
            statusText = currentTrads.statusEnCours;
            linkText = currentTrads.linkGithub;
            imagesArray = tableauImgAppiculteur;
            imgs = ["../img/appiculteur/imgmarqueApiculteur.png"]
            createPrProjet(null, textArray, null, imgs, true , 0, statusText, linkText, imagesArray )
        }
        else if (h3Text.includes("sibilia")) {
            textArray = estEnAnglais ? tableauTextSibiliaEn : tableauTextSibilia;
            statusText = currentTrads.statusEnCours;
            linkText = currentTrads.linkGithub;
            imagesArray = tableauImgSibilia; 
            createPrProjet(null, textArray, null, tableauimgAppiculteur , true , 1, statusText, linkText, imagesArray)
        }
        else if (h3Text.includes("bon coin")) {
            textArray = estEnAnglais ? tableauTextLeBonCoinEn : tableauTextLeBonCoin;
            statusText = currentTrads.statusEnCours;
            linkText = currentTrads.linkGithub;
            imagesArray = tableauImgLeBonCoin; 
            createPrProjet(null, textArray, null, [], true , null, statusText, linkText, imagesArray)
        }
        // Mise à jour pour la calculatrice (math / mathématique)
        else if (h3Text.includes("math")) {
            textArray = estEnAnglais ? tableauTextCalculatriceEn : tableauTextCalculatrice;
            statusText = currentTrads.statusEnCours;
            linkText = currentTrads.linkGithub;
            imagesArray = tableauImgCalculatrice; 
            createPrProjet(null, textArray, null, [], false, null, statusText, linkText, imagesArray)
        }
    });
});


function createPrProjet(tagname, text, parent, imgamettre , boolProjetfini , numLink, statusText, linkText, imagesArray) {
    const textprjfini = document.createElement("p")
    const fond = document.createElement("div");
    fond.id = "backgroundDivProjet";
    body.appendChild(fond);
    
    const element = document.createElement("div");
    element.id = "fondpourtext";
    fond.appendChild(element);
    
    for(let i = 0 ; i< text.length ; i++) {
        var textAafficher 
    
        if(i == 0){
            textAafficher = document.createElement("h1");
            textAafficher.classList.add("alignementImgTitreProjet")
            textAafficher.classList.add("couleurTextProjet")
    
            textAafficher.innerHTML = text[i] ;
            if(imgamettre != null && imgamettre[0]){ 
                createImage( element, imgamettre[0] , true)
            }
        }
        else{
            textAafficher = document.createElement("p");
            textAafficher.innerHTML = text[i] ;
            textAafficher.classList.add("couleurTextProjet")
        }
        element.appendChild(textAafficher)
    }

    createlink(element , lienprojet , true , numLink, linkText)

    if(!boolProjetfini){
        textprjfini.innerHTML = statusText;
        element.appendChild(textprjfini)
    }

    if (imagesArray && imagesArray.length > 0) {
        const currentTrads = estEnAnglais ? traductionsUI.en : traductionsUI.fr;
        const imageIntro = document.createElement("h2");
        imageIntro.innerHTML = currentTrads.imageIntro;
        imageIntro.classList.add("couleurTextProjet");
        element.appendChild(imageIntro);
        
        const galleryDiv = document.createElement("div");
        galleryDiv.id = "galleryProjet";
        element.appendChild(galleryDiv);
        
        imagesArray.forEach(imgSrc => {
            createImage(galleryDiv, imgSrc, false, true); 
        });
    }

    const closeBouton = document.createElement("div")
    closeBouton.innerHTML = "X"
    closeBouton.id="closeBouton"
    closeBouton.classList.add("couleurTextProjet")
    element.appendChild(closeBouton)
    
    closeBouton.addEventListener("click", event => {
        close()
    })
    
    body.addEventListener("keyup" , event => {
        if(event.key == "Escape"){
            close()
        }
    })

    const close = _ =>{
        element.classList.add("out")
        setTimeout( _ =>{
            if(fond.parentNode) {
                fond.remove();
            }
        }, 400 )
    } 
    const enter = _ =>{
        element.classList.add("enter")
        setTimeout( _ =>{
            element.classList.remove("enter")
        }, 1000 )
    } 

    return element
}

function createImage( parent, imgAInseret , estaligner, isGalleryImage = false){
    const img = document.createElement("img");
    img.src = imgAInseret;
    if (isGalleryImage) {
        img.classList.add("imgGalerieProjet"); 
    } else {
        img.id = "imgDetailprojet";
    }

    if(estaligner ){
        img.classList.add("alignementImgTitreProjet")
    }
    parent.appendChild(img)
}

function createlink( parent, linkAmmetre , estaligner , numLink, linkText){
    if (numLink != null){
        const a = document.createElement("a");
        a.href = linkAmmetre[numLink];
        a.target = "_blank";
        a.id = "linkProjetGen";
        a.innerHTML = linkText; 
        parent.appendChild(a)
    }
}

function verifierCheckbox() {
    if (checkbox.checked || checkbox2.checked || checkbox3.checked || checkboxPython.checked) {
        projets.forEach(element => {
            element.classList.remove('hidden');
            if(checkbox2.checked && element.classList.contains("php") ){
                element.classList.remove('hidden');
            }
            else if(checkbox3.checked && element.classList.contains("c")){
                element.classList.remove('hidden');
            }
            else if(checkboxPython.checked && element.classList.contains("python")){
                element.classList.remove('hidden');
            }
            else{
                element.classList.add('hidden');
            }
        });
    } else {
        projets.forEach(element => {
            element.classList.remove('hidden');
        });
    }
}