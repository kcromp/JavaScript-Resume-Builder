var topCustom = document.getElementById("fullName");
topCustom.innerHTML = "Kelsey Crompton";
topCustom.style.color = "Red";
topCustom.style.fontFamily = "Tahoma";
topCustom.style.textAlign = "center";

var course = document.getElementById("courseSection");
course.innerHTML = "WEB 115 - Section 0002";
course.style.fontFamily = "Garamond";
course.style.color = "Red";
course.style.fontStyle = "italic";
course.style.textAlign = "center";



function myWindow() {
    
    function isValidEmail(emailAddress) {
    var emailRegExp = /^(([^<>()\[\]\\.,;:@"\x00-\x20\x7F]|\\.)+|("""([^\x0A\x)D"\\]|\\\\)+"""))@(([a-z]|#\d+?)([a-z0-9-]|#\d+?)*([a-z0-9]|#\d+?)\.)+([a-z]{2,4})$/i;
    
    return emailRegExp.test(emailAddress);
    } 

    visitorEmail = document.getElementById("myEmail").value;

    if (!(isValidEmail(visitorEmail))) {
        alert("Invalid Email Address. Please try again.");
    } else {
    
    visitorName = document.getElementById("myInput").value;
    visitorAddress = document.getElementById("myAddress").value;
    visitorNumber = document.getElementById("myNumber").value;
    visitorCareer = document.getElementById("myCareer").value;
    visitorPersonal = document.getElementById("myPersonalInfo").value;
    visitorEducation = document.getElementById("myEducation").value;
    visitorDateOne = document.getElementById("myDate1").value;
    visitorDateTwo = document.getElementById("myDate2").value;
    visitorWorkOne = document.getElementById("myWork1").value;
    visitorDateThree = document.getElementById("myDate3").value;
    visitorDateFour = document.getElementById("myDate4").value;
    visitorWorkTwo = document.getElementById("myWork2").value;
    visitorDateFive = document.getElementById("myDate5").value;
    visitorDateSix = document.getElementById("myDate6").value;
    visitorWorkThree = document.getElementById("myWork3").value;
    visitorDateSeven = document.getElementById("myDate7").value;
    visitorDateEight = document.getElementById("myDate8").value;
    visitorWorkFour = document.getElementById("myWork4").value;
    visitorCharacter = document.getElementById("myCharacter").value;
    visitorReferences = document.getElementById("myReferences").value;
    myText = ('<html>\n<head>\n<title>Resume</title><link rel="stylesheet" type="text/css" href="style.css">\n</head>\n<body>\n');
    myText += (visitorName + "<br />" + visitorAddress + " / " + visitorNumber + '<hr /><p id="theLeft">CAREER OBJECTIVES</p><p id="theRight">' + visitorCareer + '</p><p id="theLeft">PERSONAL DATA</p><p id="theRight">' + visitorPersonal + '</p><p id="theLeft">EDUCATION</p><p id="theRight">' + visitorEducation + '</p><p id="theLeft">EMPLOYMENT <br />EXPERIENCE</p><p id="theLeft">' + visitorDateOne + " - " + visitorDateTwo + '</p><p id="theRight">' + visitorWorkOne + '</p><p id="theLeft">' + visitorDateThree + " - " + visitorDateFour + '</p><p id="theRight">' + visitorWorkTwo + '</p><p id="theLeft">' + visitorDateFive + " - " + visitorDateSix + '</p><p id="theRight">' + visitorWorkThree + '</p><p id="theLeft">' + visitorDateSeven + " - " + visitorDateEight + '</p><p id="theRight">' + visitorWorkFour + '</p><p id="theLeft">CHARACTER REFERENCES</p><p id="theRight">' + visitorCharacter + '</p><p id="theLeft">BUSINESS REFERENCES</p><p id="theRight">' + visitorReferences + '</p>');
    myText += ("</body>\n</html>");

    flyWindow = window.open('about:blank','myPop','width=1084,height=802,left=200,top=200');
    flyWindow.document.write(myText);
        
    }
}
