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