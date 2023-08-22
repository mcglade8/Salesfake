var numapps = document.getElementById('numapps');
var appbuttons = document.getElementsByClassName('app-button');
var workedapps = document.getElementById('workedapps');

if(sessionStorage.fundingAgreements){
    var fundingAgreements = JSON.parse(sessionStorage.fundingAgreements);
    var thisIndex = fundingAgreements.length;
}


for(let i =0;i<appbuttons.length;i++){
    appbuttons[i].addEventListener("click", createFundingAgreement);
}
    
    




function selectFA(i){

    sessionStorage.selectionIndex = i;
}
