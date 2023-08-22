// Get relevent elements
var appbuttons = document.getElementsByClassName('app-button');
var numcases = document.getElementById('numcases');
var workedcases = document.getElementById('workedcases');

// Get FAs out of storage
if(sessionStorage.fundingAgreements){
    var fundingAgreements = JSON.parse(sessionStorage.fundingAgreements);
}


// Assign creation of new account to appbuttons, and navigate to case page when account is created
for(let i =0;i<appbuttons.length;i++){
    appbuttons[i].addEventListener("click", function(e){
        if(sessionStorage.fundingAgreements){
            var fundingAgreements = JSON.parse(sessionStorage.fundingAgreements);
        }
        // define random numbers before adding them to strings
        let fanum =Math.floor(Math.random()*89999999)+10000000;
        let prodnum =Math.floor(Math.random()*89999999)+10000000;
        let fazip = Math.floor(Math.random()*10000) + 40000;
        let firstname = randomNameGenerator(4, 7);
        let lastname = randomNameGenerator(2, 10)

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
            reviewType : "start",
            physicalAddress : Math.floor(Math.random()*9999) + " " + randomNameGenerator(5, 10) + " St",
            city : randomNameGenerator(5,12) + ", Ohio", 
            zip : fazip,
            itemsToReview : "false",
            newDocs : "false",
            loanStackingApprovable : "false",
            incomevo : "Another name",
            fin1 : "My name",
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
            from : "cases"
        }

        if(sessionStorage.fundingAgreements){
            fundingAgreements.push(newAccount);

        }else{
            var fundingAgreements = [newAccount];
        }
        sessionStorage.selectionIndex = fundingAgreements.length-1;
        sessionStorage.fundingAgreements = JSON.stringify(fundingAgreements);

        window.location.assign("FakeCase.html");

    });
}

// Add table of worked cases to the case queue page
if(sessionStorage.fundingAgreements){

    for(let i = 0; i<fundingAgreements.length;i++){
        if(fundingAgreements[i].from == "cases"){

            let numRows = workedcases.rows.length;
            let row = workedcases.insertRow(numRows);
            let thisCase = fundingAgreements[i];

            row.bgColor="white";

            row.insertCell(0).innerHTML = thisCase.caseId;
            row.insertCell(1).innerHTML = "<a href='FakeCase.html' id='click" +i+"' onclick='selectCase("+i+")'>"+thisCase.caseNumber+"</a>";
            row.insertCell(2).innerHTML = thisCase.caseStatus;
            row.insertCell(3).innerHTML = thisCase.caseOwner;
            numcases.innerHTML = numRows;

        }
    }

}

// select case based on row of table
function selectCase(i){
    sessionStorage.selectionIndex = i;
}
