
// <-- Generate a table of random funding agreement history actions for the servicing page --> \\
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
var fah = document.getElementById("faHistoryTable");
var start = new Date('June 15, 2022 06:30:00');
var end = new Date('June 10, 2022 06:30:00');
var thisDate = randomDate(start, end);


function formatDate(d){
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getYear();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let ampm = "AM";
    if(hour > 12){
        hour = hour-12;
        ampm = "PM";
    }
    if(minute < 10){
        minute = "0"+minute;
    }
    return(month + "/" + day + "/" + year + " " + hour + ":" + minute + " " + ampm);

}

for(let i = 1; i<15; i++){
    if(i==1) {
        var newValue = new Date(thisDate - Math.random()*60*1000*10);
        var origValue = new Date(newValue - Math.random()*60*1000*30);
    } else{
        newValue = new Date(origValue);
        origValue = new Date(newValue - Math.random()*60*1000*60*24*7);
    }
    let numRows = fah.rows.length;
    let row = fah.insertRow(numRows);

    row.bgColor="white";

    row.insertCell(0).innerHTML = i;
    row.insertCell(1).innerHTML = formatDate(thisDate);
    row.insertCell(2).innerHTML = "Most Recent RPC Rollup";
    row.insertCell(3).innerHTML = "<a href='#agent'>"+ randomNameGenerator(3, 7) + " " + randomNameGenerator(3, 7) + "</a>";
    row.insertCell(4).innerHTML = formatDate(origValue);
    row.insertCell(5).innerHTML = formatDate(newValue);

    row.cells[0].style.textAlign = "center";
}
  


// <-- style scTable objects in servicing communication section --> \\
var sct = document.getElementsByClassName("scTable");
for(let t of sct){
    t.style="width:80%; font-size:14px;"
    var trows = t.getElementsByTagName("tr");
    for(let r of trows){
        tds = r.getElementsByTagName("td");
        if(tds.length == 2){
            tds[0].style="width:20%";
            tds[1].style="width:75%";
        }
    }
}

    
// <-- Align td content to the top given a specific section --> \\ 
// <-- Currently in use on the servicing right side --> \\
function verticalAlignTDs(rsSection){
        let s = rsSection.getElementsByTagName("td");
        for(let i of s){
            i.style.verticalAlign = "top";
        }
}      
var scstd = document.getElementById("scsection");
var cstd = document.getElementById("casesection");

verticalAlignTDs(scstd);
verticalAlignTDs(cstd);

// <-- select and display content based on tab selected --> \\
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        if(tabcontent[i].getAttribute('id')===tabName) tabcontent[i].style.display = "block"; else tabcontent[i].style.display = "none";
        
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.background = "";
    }
    evt.currentTarget.style.background = "#82c7ff";
    
}

var contentObjects = document.getElementsByClassName("content");
var contentHeight = [];

for(let i = 0; i< contentObjects.length;i++){
    contentObjects[i].style.display = "block";
    contentHeight[i] = contentObjects[i].offsetHeight;
}


// <-- Control expands with animated display and hide --> \\
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var arrow = this.getElementsByClassName("rotatable")[0]
    if (content.style.display == "block") {
        rollUp(content, arrow, content.offsetHeight);
    } else {
        rollOut(content, arrow,contentHeight[i]);
    }
    });
}

function rollOut(content, arrow, contentHeight){
    content.style.display= "block";
    var pct_roll = 0;
    var id = setInterval(frame,2);
    var numFrames = 45;
    function frame(){
        if(pct_roll==numFrames){
            clearInterval(id);
        }else{
            pct_roll++;
            content.style.height= pct_roll*contentHeight/numFrames + "px";
            arrow.style.transform = "rotate("+pct_roll*90/numFrames+"deg)";
        }
    }
}

function rollUp(content, arrow, contentHeight){
    var pct_roll = 0;
    var id = setInterval(frame,2);
    var numFrames = 45;
    function frame(){
        if(pct_roll==numFrames+1){
            clearInterval(id);
            content.style.display="none";
        }else{
            let remainingHeight = contentHeight - pct_roll*contentHeight/numFrames;
            let remainingRotation = 90-pct_roll*90/numFrames;
            pct_roll++;
            content.style.height= remainingHeight + "px";
            arrow.style.transform = "rotate("+remainingRotation+"deg)";
        }
    }
}

    