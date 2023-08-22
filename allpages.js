var currentPage = window.location.pathname.split("/").pop();

// Generates a random first and last name to be assigned to the applicant
function randomNameGenerator(min_length, max_length){
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lower_cons = 'bcdfghjklmnpqrstvwxz';
    var lower_vow = 'aeiou';

    let co_name = '';
    var co_name_len = Math.floor(Math.random() * (max_length-min_length))+min_length; //randomize name length between min and max parameters

    let forceVowel = false;
    let forceConsonant = false;
    
    for(let i = 0; i < co_name_len; i++){
        

            if(i==0){
                co_name += uppercase.charAt(Math.floor(Math.random()*uppercase.length));
            if(lower_vow.includes(co_name.toLowerCase())){
                forceConsonant = true;
            } else forceVowel = true;
            }else if(forceConsonant){
                co_name += lower_cons.charAt(Math.floor(Math.random()*lower_cons.length));
                forceConsonant = false;
            }else if(forceVowel){
                co_name += lower_vow.charAt(Math.floor(Math.random()*lower_vow.length));
                forceVowel = false;
            }else{
                co_name += uppercase.charAt(Math.floor(Math.random()*uppercase.length)).toLowerCase();
                if(lower_vow.includes(co_name[i]) && lower_vow.includes(co_name[i-1])) forceConsonant = true;
                if(lower_cons.includes(co_name[i]) && lower_cons.includes(co_name[i-1])) forceVowel = true;
            }
    }
    
    return co_name;
}

// Adding rejection message to items which do not have a function at this time
var navMore = document.getElementById("navMore");
navMore.addEventListener('click', function(event){
	let r = document.getElementById('rejection');
		let scrolldist = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

		r.style.left = event.clientX-150 + 'px';
		r.style.top = event.clientY+scrolldist-5 + 'px';
		r.style.display = "block";
		setTimeout(() =>{
			r.style.display = "none";
		}, 1500);

});

var modTaskbar = document.getElementById("modTaskbar");
modTaskbar.addEventListener('click', function(event){
    let r = document.getElementById('rejection');
        let scrolldist = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

        r.style.left = event.clientX-150 + 'px';
        r.style.top = event.clientY+scrolldist-5 + 'px';
        r.style.display = "block";
        setTimeout(() =>{
            r.style.display = "none";
        }, 1500);

});

// Add div to left side dropdown where we can navigate to Servicing

var menu = document.getElementById('menu');

menu.addEventListener('click', function(e){
    var lobSelect = document.createElement('div');
    lobSelect.setAttribute('id', 'navMenu');
    lobSelect.innerHTML = '<button class="lobSelect" onclick=window.location.href="index.html">Onboarding</button><button class="lobSelect" onclick=window.location.href="SalesfakeServicing.html">Servicing</button>';
    lobSelect.style = 'background-color: #ddd;position:absolute; left: '+ e.clientX + 'px; top: ' + e.clientY + 'px; border: 1px solid black;width:200px; height: fit-content;padding:1px;z-index:2;display:block';
    document.body.appendChild(lobSelect);

});

window.onclick = function(event){
    var navMenu = document.getElementById('navMenu');
    var menu = document.getElementById('menu');

    if(navMenu !== null && event.target !== navMenu && event.target !== menu ) {
        navMenu.remove();
    }
}

function createFundingAgreement(){
    if(sessionStorage.fundingAgreements){
        var fundingAgreements = JSON.parse(sessionStorage.fundingAgreements);
        var thisIndex = fundingAgreements.length;
    }
    // define random info before adding to strings
    let fanum =Math.floor(Math.random()*89999999)+10000000;
    let prodnum =Math.floor(Math.random()*89999999)+10000000;
    let fazip = Math.floor(Math.random()*10000) + 40000;
    let firstname = randomNameGenerator(4, 7);
    let lastname = randomNameGenerator(2, 10);

    if(currentPage == "SalesfakeFinish.html"){
        var thisIV = "Another name";
        var thisfin1 = "My name";
        var reviewType = "finish";

    }else if(currentPage == "SalesfakeServicing.html"){
        var thisIV = "- N/A -";
        var thisfin1  = "- N/A -";
        var reviewType = "servicing"

    }else{
        var thisIV = "My name";
        var thisfin1 = "- N/A -";
        var reviewType = "start";
    }

    var newAccount= {
        firstname : firstname,
        lastname : lastname,
        name : firstname + " " + lastname,
        fundingAgreement : "a" + fanum,
        caseId : Math.floor(Math.random()*89999999)+10000000,
        caseNumber : Math.floor(Math.random()*89999999)+10000000,
        caseStatus : "New",
        caseOwner : "General Support",
        caseDate : new Date(), // currently not implemented; would like this to be a date within the last 14 days
        expirationDate : new Date(), // currently not implemented; would like this to be a random nearby date which could trigger specific cases (re: rate expiration)
        productStatus : "Documents submitted- please review",
        opsStatus : "In Review- Waiting for Docs",
        appId : Math.floor(Math.random()*89999999)+10000000,
        email : "",
        reviewType : reviewType,
        physicalAddress : Math.floor(Math.random()*9999) + " " + randomNameGenerator(5, 10) + " St", 
        city : randomNameGenerator(5,12) + ", Ohio",
        zip : fazip, 
        itemsToReview : "false",
        newDocs : "false",
        loanStackingApprovable : "false",
        incomevo : thisIV,
        fin1 : thisfin1,
        fin2 : "- N/A -",
        fin3 : "- N/A -",
        fin4 : "- N/A -",
        fin5 : "- N/A -",
        fin6 : "- N/A -",
        emailOptOut : "false", // currently not implemented; this is just the default value
        fraudRisk : "Low", // currently not implemented; this is just the default value
        fraudScore: "0.0100", // currently not implemented; this is just the default value
        idAnalyticsScore: "715", // currently not implemented; this is just the default value
        adminProfile : "https://www.upstart.com/admin/" + prodnum, // currently not implemented
        from : "funding agreements"
    }

    if(sessionStorage.fundingAgreements){
            fundingAgreements.push(newAccount);

    }else{
        var fundingAgreements = [newAccount];
        var thisIndex = 0;
    }
    sessionStorage.fundingAgreements = JSON.stringify(fundingAgreements);
    sessionStorage.selectionIndex = thisIndex;

}

// <-- Style rows of half-width tables --> \\
var hwt = document.getElementsByClassName("tabcontentHalfTable");
for(let t of hwt){
    var trows = t.getElementsByTagName("tr");
    for(let r of trows){
        r.style.borderBottom = "1px solid gray";
    }
    trows[trows.length-1].style = "";
}



