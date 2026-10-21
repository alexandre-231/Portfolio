console.log("test");

// =========================
//        SELECTEURS
// =========================
const imglangue = document.querySelector("#imgLangue");
const educ = document.querySelector("#education");
const skills = document.querySelector("#skills");
const miscellanous = document.querySelector("#Miscellanous");
const exper = document.querySelector("#Experience");
const portfolio = document.querySelector("#Portfolio");

const educ2 = document.querySelector("#education2");
const skills2 = document.querySelector("#skills2");
const miscellanous2 = document.querySelector("#Miscellanous2");
const exper2 = document.querySelector("#Experience2");

const texteLangue = document.querySelector("#texteLangue");
const numtel = document.querySelector("#numtel");

// ----- EXPERIENCES -----
// Exp 1 (Job Eté)
const textExperienceA = document.querySelector("#textExperience");
const textduree = document.querySelector("#textduree");
const textlieu = document.querySelector("#textlieu");
const textAction1 = document.querySelector("#textaction1");
const textAction2 = document.querySelector("#textaction2");

// Exp 2 (Projet Univ)
const textExperienceB = document.querySelector("#textExperience2");
const textduree2 = document.querySelector("#textduree2");
const textlieu2 = document.querySelector("#textlieu2");
const textAction4 = document.querySelector("#textaction4");

// Exp 3 (Stage 2026)
const textExperienceC = document.querySelector("#textExperience3");
const textduree3 = document.querySelector("#textduree3");
const textlieu3 = document.querySelector("#textlieu3");
const textAction5 = document.querySelector("#textaction5");
const textAction6 = document.querySelector("#textaction6");

// Exp 4 (CDD 2026)
const textExperienceD = document.querySelector("#textExperience4");
const textduree4 = document.querySelector("#textduree4");
const textlieu4 = document.querySelector("#textlieu4");
const textAction8 = document.querySelector("#textaction8");
const textAction9 = document.querySelector("#textaction9");

// ----- ÉCOLE -----
const ecoleTitre1 = document.querySelector("#ecoleTitre1");
const ecoleInfo1 = document.querySelector("#ecoleInfo1");
const ecoleInfo2 = document.querySelector("#ecoleInfo2");
const ecoleInfo3 = document.querySelector("#ecoleInfo3");
const ecoleInfo4 = document.querySelector("#ecoleInfo4");
const ecoleTitre2 = document.querySelector("#ecoleTitre2");
const ecoleInfo5 = document.querySelector("#ecoleInfo5");
const ecoleInfo6 = document.querySelector("#ecoleInfo6");

// ----- SKILLS / MISC -----
const systemTitre = document.querySelector("#systemTitre");
const system1 = document.querySelector("#system1");
const system2 = document.querySelector("#system2");

const oopTitre = document.querySelector("#oopTitre");
const oop1 = document.querySelector("#oop1");
const oop2 = document.querySelector("#oop2");

const webTitre = document.querySelector("#webTitre");
const web1 = document.querySelector("#web1");
const web2 = document.querySelector("#web2");
const web3 = document.querySelector("#web3");
const web4 = document.querySelector("#web4");

const databaseTitre = document.querySelector("#databaseTitre");
const database1 = document.querySelector("#database1");

// ----- NOUVELLES COMPETENCES -----
const frameworkTitre = document.querySelector("#frameworkTitre");
const mobileTitre = document.querySelector("#mobileTitre");
const envTitre = document.querySelector("#envTitre");
const cmsTitre = document.querySelector("#cmsTitre");
const designTitre = document.querySelector("#designTitre");

const reseauxTitre = document.querySelector("#reseauxTitre");
const reseaux1 = document.querySelector("#reseaux1");

const passeTitre = document.querySelector("#Miscellanous2"); 
const passe1 = document.querySelector("#passe1");
const passe2 = document.querySelector("#passe2");
const passe3 = document.querySelector("#passe3");

const refTitre = document.querySelector("#refTitre");
const refNom1 = document.querySelector("#refNom1");
const refPoste1 = document.querySelector("#refPoste1");
const refLieu1 = document.querySelector("#refLieu1");
const refEmail1 = document.querySelector("#refEmail1");
const refNom2 = document.querySelector("#refNom2");
const refPoste2 = document.querySelector("#refPoste2");
const refLieu2 = document.querySelector("#refLieu2");
const refEmail2 = document.querySelector("#refEmail2");
const titreInfoPerso = document.querySelector("#TitreInfoPerso");


// =========================
//        DONNÉES (TEXTES)
// =========================

const echangeAnglaisFrenchTitre = [
    "langue", "language",
    "information personnel", "personal information",
    "my Education", "ma scolarité",
    "References", "Les references",
    "expérience", "experience",
    "technical skills", "compétences techniques",
    "mes réseaux", "my networks",
    "Miscellanous", "mes passe temps"
];

const infosEcole = [
    "BUT Informatique (Bachelor Universel technologique)", "Bachelor's in Computer Science (Universal Technological Bachelor)",
    "diplôme sur 3 ans", "degree over 3 years",
    "Actuellement en 2eme année", "Currently in the 2nd year",
    "université Savoie Mont Blanc/ IUT Annecy", "Savoie Mont Blanc University / IUT Annecy",
    "Annecy Le Vieux, France", "Annecy Le Vieux, France",
    "baccalauréat STI2D option Systèmes d'information et Numérique", "STI2D high school diploma with Information Systems and Digital option",
    "Lycée Louis Lachenal - Argonay", "Lycée Louis Lachenal - Argonay",
    "2024", "2024"
];

const infosSkillsMisc2 = [
    "système d'exploitation", "operating system",
    "windows", "windows",
    "linux", "linux",
    "langages orientés objet et procéduraux", "Object-oriented and procedural languages",
    "C#.net", "C#.net",
    "Python", "Python",
    "langages web", "web languages",
    "html", "html",
    "css", "css",
    "PHP", "PHP",
    "JS", "JS",
    "base de données", "Data base",
    "SQL (PostgreSQL, MySQL)", "SQL (PostgreSQL, MySQL)",
    "mes réseaux", "my networks",
    "linkedin", "linkedin",
    "mes passe temps", "Miscellanous",
    "jeux vidéo", "video games",
    "développement logiciel et web", "software and web development",
    "j'aime les films d'action", "I like action movies"
];

const infosNouvellesComps = [
    "Frameworks & Bibliothèques", "Frameworks & Libraries",
    "Développement Mobile", "Mobile Development",
    "Environnement et Outils", "Environment & Tools",
    "Conception et Design", "Design & Prototyping"
];

const infosRef = [
    "Les Références", "References",
    "Luc Damas", "Luc Damas",
    "Enseignant-chercheur", "Teacher-researcher",
    "université Savoie Mont Blanc/ IUT Annecy", "Savoie Mont Blanc University / IUT Annecy",
    "luc.damas@univ-smb.fr", "luc.damas@univ-smb.fr",
    "Pascal Colin", "Pascal Colin",
    "professeur d'architecture logiciel et de base de donnée", "Software architecture and database teacher",
    "université Savoie Mont Blanc/ IUT Annecy", "Savoie Mont Blanc University / IUT Annecy",
    "pascal.colin@univ-smb.fr", "pascal.colin@univ-smb.fr"
];

// --- DONNÉES DES EXPERIENCES ---
const infosExpCDD = [
    "Développeur (CDD)", "Developer (Fixed-term contract)",
    "Juin 2026 - Juillet 2026 (2 mois)", "June 2026 - July 2026 (2 months)",
    "IUT Annecy", "IUT Annecy",
    "Mise en application des préconisations (logiciel, infrastructure, sécurité et conformité RGPD) énoncées pendant le stage, développement d'une nouvelle interface web.", "Implementation of recommendations (software, infrastructure, security and GDPR compliance) outlined during the internship, development of a new web interface.",
    "Aide au déploiement des différentes images de poste et à la vérification des déploiements.", "Assistance in deploying various workstation images and verifying deployments."
];

const infosExpStage = [
    "Stagiaire en informatique", "IT Intern",
    "Avril 2026 - Juin 2026 (3 mois)", "April 2026 - June 2026 (3 months)",
    "IUT Annecy", "IUT Annecy",
    "Réalisation d'un audit complet d'un serveur web sous environnement Linux (logiciel, infrastructure, sécurité et conformité RGPD), suivi d'une phase de recherche technique et de préconisations stratégiques pour corriger les vulnérabilités et les problèmes identifiés.", "Conducted a comprehensive audit of a Linux web server (software, infrastructure, security, and GDPR compliance), followed by a technical research phase and strategic recommendations to fix identified vulnerabilities and issues.",
    "Conception et développement d'un module personnalisé en PHP pour enrichir les fonctionnalités de l'outil GLPI.", "Design and development of a custom PHP module to enhance the features of the GLPI tool."
];

const infosExpUniv = [
    "Projet universitaire (SAE 3.01) - application le bon coin", "University project (SAE 3.01) - le bon coin app",
    "Octobre 2025 - Janvier 2026 (3 mois)", "October 2025 - January 2026 (3 months)",
    "IUT Annecy (74)", "IUT Annecy (74)",
    "Concevoir intégralement une application web pour le bon coin.", "Fully design a web application for le bon coin."
];

const infosExpEte = [
    "Job d'été - Auxiliaire de bureau secteur dépenses", "Summer Job - Office Assistant in Expenses",
    "Juillet 2024 / Juillet 2025 (1 mois et demi)", "July 2024 / July 2025 (1.5 months)",
    "DGFIP", "DGFIP",
    "Vérifier la conformité des documents.", "Verify the conformity of documents.",
    "Vérifier les stocks.", "Check the stocks."
];


// =========================
//        LOGIQUE
// =========================
var langue = 0;

imglangue.addEventListener("click", function () {

    if (langue == 1) { // --- PASSAGE EN FRANÇAIS ---
        langue = 0;
        imglangue.src = "../img/drpFR.png";
        
        titreInfoPerso.innerHTML = echangeAnglaisFrenchTitre[2];
        texteLangue.innerHTML = echangeAnglaisFrenchTitre[0];
        educ.innerHTML = echangeAnglaisFrenchTitre[5];
        educ2.innerHTML = echangeAnglaisFrenchTitre[5];
        skills.innerHTML = echangeAnglaisFrenchTitre[11];
        skills2.innerHTML = echangeAnglaisFrenchTitre[11];
        miscellanous.innerHTML = echangeAnglaisFrenchTitre[15];
        miscellanous2.innerHTML = echangeAnglaisFrenchTitre[15];
        exper.innerHTML = echangeAnglaisFrenchTitre[8];
        exper2.innerHTML = echangeAnglaisFrenchTitre[8];
        numtel.innerHTML = "Numéro de téléphone";

        // EXP 4 : CDD
        textExperienceD.innerHTML = infosExpCDD[0];
        textduree4.innerHTML = infosExpCDD[2];
        textlieu4.innerHTML = infosExpCDD[4];
        textAction8.innerHTML = infosExpCDD[6];
        textAction9.innerHTML = infosExpCDD[8];

        // EXP 3 : Stage Informatique
        textExperienceC.innerHTML = infosExpStage[0];
        textduree3.innerHTML = infosExpStage[2];
        textlieu3.innerHTML = infosExpStage[4];
        textAction5.innerHTML = infosExpStage[6];
        textAction6.innerHTML = infosExpStage[8];

        // EXP 2 : Projet Univ
        textExperienceB.innerHTML = infosExpUniv[0];
        textduree2.innerHTML = infosExpUniv[2];
        textlieu2.innerHTML = infosExpUniv[4];
        textAction4.innerHTML = infosExpUniv[6];

        // EXP 1 : Job d'été
        textExperienceA.innerHTML = infosExpEte[0];
        textduree.innerHTML = infosExpEte[2];
        textlieu.innerHTML = infosExpEte[4];
        textAction1.innerHTML = infosExpEte[6];
        textAction2.innerHTML = infosExpEte[8];

        // ECOLE
        ecoleTitre1.innerHTML = infosEcole[0];
        ecoleInfo1.innerHTML = infosEcole[2];
        ecoleInfo2.innerHTML = infosEcole[4];
        ecoleInfo3.innerHTML = infosEcole[6];
        ecoleInfo4.innerHTML = infosEcole[8];
        ecoleTitre2.innerHTML = infosEcole[10];
        ecoleInfo5.innerHTML = infosEcole[12];
        ecoleInfo6.innerHTML = infosEcole[14];

        // SKILLS / MISC (FR)
        systemTitre.innerHTML = infosSkillsMisc2[0];
        system1.innerHTML = infosSkillsMisc2[2];
        system2.innerHTML = infosSkillsMisc2[4];

        oopTitre.innerHTML = infosSkillsMisc2[6];
        oop1.innerHTML = infosSkillsMisc2[8];
        oop2.innerHTML = infosSkillsMisc2[10];

        webTitre.innerHTML = infosSkillsMisc2[12];
        web1.innerHTML = infosSkillsMisc2[14];
        web2.innerHTML = infosSkillsMisc2[16];
        web3.innerHTML = infosSkillsMisc2[18];
        web4.innerHTML = infosSkillsMisc2[20];

        databaseTitre.innerHTML = infosSkillsMisc2[22];
        database1.innerHTML = infosSkillsMisc2[24];
        
        // NOUVELLES COMPETENCES (FR)
        frameworkTitre.innerHTML = infosNouvellesComps[0];
        mobileTitre.innerHTML = infosNouvellesComps[2];
        envTitre.innerHTML = infosNouvellesComps[4];
        designTitre.innerHTML = infosNouvellesComps[6];

        reseauxTitre.innerHTML = infosSkillsMisc2[26];
        
        passeTitre.innerHTML = infosSkillsMisc2[30];
        passe1.innerHTML = infosSkillsMisc2[32];
        passe2.innerHTML = infosSkillsMisc2[34];
        passe3.innerHTML = infosSkillsMisc2[36];
        
        refTitre.innerHTML = infosRef[0];
        refNom1.innerHTML = infosRef[2];
        refPoste1.innerHTML = infosRef[4];
        refLieu1.innerHTML = infosRef[6];
        refEmail1.innerHTML = infosRef[8];

        refNom2.innerHTML = infosRef[10];
        refPoste2.innerHTML = infosRef[12];
        refLieu2.innerHTML = infosRef[14];
        refEmail2.innerHTML = infosRef[16];
    }
    else { // --- PASSAGE EN ANGLAIS ---
        langue = 1;
        imglangue.src = "../img/drpEN.png";
        
        titreInfoPerso.innerHTML = echangeAnglaisFrenchTitre[3];
        texteLangue.innerHTML = echangeAnglaisFrenchTitre[1];
        educ.innerHTML = echangeAnglaisFrenchTitre[4];
        educ2.innerHTML = echangeAnglaisFrenchTitre[4];
        skills.innerHTML = echangeAnglaisFrenchTitre[10];
        skills2.innerHTML = echangeAnglaisFrenchTitre[10];
        miscellanous.innerHTML = echangeAnglaisFrenchTitre[14];
        miscellanous2.innerHTML = echangeAnglaisFrenchTitre[14];
        exper.innerHTML = echangeAnglaisFrenchTitre[9];
        exper2.innerHTML = echangeAnglaisFrenchTitre[9];
        numtel.innerHTML = "Phone Number";

        // EXP 4 : CDD
        textExperienceD.innerHTML = infosExpCDD[1];
        textduree4.innerHTML = infosExpCDD[3];
        textlieu4.innerHTML = infosExpCDD[5];
        textAction8.innerHTML = infosExpCDD[7];
        textAction9.innerHTML = infosExpCDD[9];

        // EXP 3 : Stage Informatique
        textExperienceC.innerHTML = infosExpStage[1];
        textduree3.innerHTML = infosExpStage[3];
        textlieu3.innerHTML = infosExpStage[5];
        textAction5.innerHTML = infosExpStage[7];
        textAction6.innerHTML = infosExpStage[9];

        // EXP 2 : Projet Univ
        textExperienceB.innerHTML = infosExpUniv[1];
        textduree2.innerHTML = infosExpUniv[3];
        textlieu2.innerHTML = infosExpUniv[5];
        textAction4.innerHTML = infosExpUniv[7];

        // EXP 1 : Job d'été
        textExperienceA.innerHTML = infosExpEte[1];
        textduree.innerHTML = infosExpEte[3];
        textlieu.innerHTML = infosExpEte[5];
        textAction1.innerHTML = infosExpEte[7];
        textAction2.innerHTML = infosExpEte[9];

        // ECOLE
        ecoleTitre1.innerHTML = infosEcole[1];
        ecoleInfo1.innerHTML = infosEcole[3];
        ecoleInfo2.innerHTML = infosEcole[5];
        ecoleInfo3.innerHTML = infosEcole[7];
        ecoleInfo4.innerHTML = infosEcole[9];
        ecoleTitre2.innerHTML = infosEcole[11];
        ecoleInfo5.innerHTML = infosEcole[13];
        ecoleInfo6.innerHTML = infosEcole[15];

        // SKILLS / MISC (EN)
        systemTitre.innerHTML = infosSkillsMisc2[1];
        system1.innerHTML = infosSkillsMisc2[3];
        system2.innerHTML = infosSkillsMisc2[5];

        oopTitre.innerHTML = infosSkillsMisc2[7];
        oop1.innerHTML = infosSkillsMisc2[9];
        oop2.innerHTML = infosSkillsMisc2[11];

        webTitre.innerHTML = infosSkillsMisc2[13];
        web1.innerHTML = infosSkillsMisc2[15];
        web2.innerHTML = infosSkillsMisc2[17];
        web3.innerHTML = infosSkillsMisc2[19];
        web4.innerHTML = infosSkillsMisc2[21];

        databaseTitre.innerHTML = infosSkillsMisc2[23];
        database1.innerHTML = infosSkillsMisc2[25];
        
        // NOUVELLES COMPETENCES (EN)
        frameworkTitre.innerHTML = infosNouvellesComps[1];
        mobileTitre.innerHTML = infosNouvellesComps[3];
        envTitre.innerHTML = infosNouvellesComps[5];
        designTitre.innerHTML = infosNouvellesComps[7];

        reseauxTitre.innerHTML = infosSkillsMisc2[27];
        
        passeTitre.innerHTML = infosSkillsMisc2[31];
        passe1.innerHTML = infosSkillsMisc2[33];
        passe2.innerHTML = infosSkillsMisc2[35];
        passe3.innerHTML = infosSkillsMisc2[37];
        
        refTitre.innerHTML = infosRef[1];
        refNom1.innerHTML = infosRef[3];
        refPoste1.innerHTML = infosRef[5];
        refLieu1.innerHTML = infosRef[7];
        refEmail1.innerHTML = infosRef[9];

        refNom2.innerHTML = infosRef[11];
        refPoste2.innerHTML = infosRef[13];
        refLieu2.innerHTML = infosRef[15];
        refEmail2.innerHTML = infosRef[17];
    }
});