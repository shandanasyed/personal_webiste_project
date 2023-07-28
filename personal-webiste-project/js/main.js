//Add current date to home page

function addDate(text) {
    const newtext = document.createTextNode(new Date());
    const div = document.getElementById("current-date");

    div.appendChild(newtext);
}

//Back to top button

function scrollFunction() {
    let mybutton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Mouse over for project page
function mouseoverFunction() {
    document.getElementById("first-project").style.display = "block";
}

function mouseleaveFunction() {
    document.getElementById("first-project").style.display = "none";
}

//Signup and Submit Alert for mentorshi page
function signupAlert() {
    alert("Don't forget to sign-up!👇🏼");
}

function submitAlert() {
    alert("That was a good decision!👍🏼")
}



//Add and remove a skill in skills page

function displaySkill() {
    let containerDiv = document.getElementById("containerDiv")
    let skillName = document.getElementById("skill-name").value;
    let html = `<h3 class="new">${skillName}</h3>`;
    containerDiv.insertAdjacentHTML('beforeend', html);

    let removeBtn = document.getElementById("remove-btn")
    removeBtn.addEventListener("click", function () {
        // let child = document.querySelector(".new");
        containerDiv.removeChild(containerDiv.lastElementChild);
    })
}

//photogallery
let i = 0;
let images = [];
let time = 2000; // time in milliseconds

images[0] = "../images/gallery-images/avocado-salad.jpg";
images[1] = "../images/gallery-images/bbq.jpg";
images[2] = "../images/gallery-images/buddah-bowl.jpg";
images[3] = "../images/gallery-images/egg-toast.jpg"

function changeImg() {

    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

//contact page validation

function validate() {
      
    if( document.contactForm.first_name.value == "" ) {
        alert( "Please provide your name!" );
        document.contactForm.first_name.focus() ;
        return false;
        }
    if( document.myForm.EMail.value == "" ) {
        alert( "Please provide your Email!" );
        document.myForm.EMail.focus() ;
        return false;
        }
    if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
        document.myForm.Zip.value.length != 5 ) {
            
        alert( "Please provide a zip in the format #####." );
        document.myForm.Zip.focus() ;
        return false;
        }
    if( document.myForm.Country.value == "-1" ) {
        alert( "Please provide your country!" );
        return false;
        }
        return( true );
    }
