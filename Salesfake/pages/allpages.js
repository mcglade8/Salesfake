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

