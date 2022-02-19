var a = 1;

var leftContent = document.querySelector(".content-left");
var rightContent = document.querySelector(".content-right");
var selectedCharacter = document.querySelector(".name");


function RandomGet() {
    fetch('https://breakingbadapi.com/api/character/random')
        .then(response => response.json())
        .then(data => {
            leftContent.innerHTML = "";
            leftContent.innerHTML += "<h1>" + data[0].name + "</h1>";
            leftContent.innerHTML += '<img src="' + data[0].img + '" height=370px><br><br>';
            leftContent.innerHTML += "Real Name : " + data[0].portrayed + "<br><br>";
            leftContent.innerHTML += "Status : " + data[0].status + "<br><br>";

        })
};

function SelectedGet() {
    selectedCharacter = document.querySelector(".name").value;
    selectedCharacter = selectedCharacter.replace(" ", "+");
    fetch('https://breakingbadapi.com/api/characters?name=' + selectedCharacter)
        .then(response => response.json())
        .then(data => {
            rightContent.innerHTML = "";
            rightContent.innerHTML += "<h1>" + data[0].name + "</h1>";
            rightContent.innerHTML += '<img src="' + data[0].img + '" height=200px><br><br>';
            rightContent.innerHTML += "Real Name : " + data[0].portrayed + "<br><br>";
            rightContent.innerHTML += "Nickname : " + data[0].nickname + "<br><br>";
            rightContent.innerHTML += "Birthday : " + data[0].birthday + "<br><br>";

            rightContent.innerHTML += "Occupation : " + data[0].occupation + "<br><br>";
            rightContent.innerHTML += "Status : " + data[0].status + "<br><br>";




        })
};




