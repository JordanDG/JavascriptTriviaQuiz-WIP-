var timer = 0;
var players = 0;

function refresh() {
    timer = 0;
    players = 0;
}

function TimeToggle(el) {
    var header_settings = document.getElementById("header_settings");
    var checkbox = document.getElementById("checkbox");
    var header_input = document.getElementById("header_input");
    if (el.checked) {
        header_settings.style.height = "20%";
        locked = true;
        header_input.style.display = "block";
    } else {
        header_input.style.display = "none";
        header_settings.style.height = "20%";
        header_input.value = "";
        timer = 0;
    }
}

function StartGame(btn) {
    var header_input = document.getElementById("header_input");
    var checkbox = document.getElementById("checkbox");
    var timer_value = header_input.value;
    var player_input = document.getElementById("player_count");
    var player_count = player_input.value;
    if ((checkbox.checked == true) && (timer_value >= 1) && (player_count >= 1) && (player_count < 6)) {
        timer = parseInt(timer_value, 10);
        players = player_count;
        LoadingBtn(btn);
    } else if ((checkbox.checked == false) && (player_count >= 1)) {
        LoadingBtn(btn);
        players = parseInt(player_count, 10);
    } else if (timer_value < 1) {
        alert("Seconds must be above a number above zero.");
        header_input.value = "";
    } else if ((player_count <= 0) || (player_count > 5)) {
        alert("Player Count Must Be Above Zero & A Maximum of 5!");
        player_count = "";
    } else {
        alert("Invalid values have been inputted.");
        header_input.value = "";
    }
}

function LoadingBtn(btn) {
    btn.style.backgroundColor = "green";
    btn.style.color = "#fff";
    setTimeout(function () {
        btn.innerHTML = "Loading";
    }, 150);
    setTimeout(function () {
        btn.innerHTML = "Loading.";
    }, 300);
    setTimeout(function () {
        btn.innerHTML = "Loading..";
    }, 450);
    setTimeout(function () {
        btn.innerHTML = "Loading...";
    }, 600);
    setTimeout(function () {
        StartGamePhaseout()
    }, 1200);
}

function StartGamePhaseout() {
    var header_container = document.getElementById("header_container");
    var header_text1 = document.getElementById("header_text1");
    var header_text2 = document.getElementById("header_text2");
    var header_settings = document.getElementById("header_settings");
    var header_button = document.getElementById("header_button");
    var player_container = document.getElementById("player_container");

    var elements = [header_text1, header_text2, header_settings, header_button];
    var elements_length = elements.length;
    for (var i = 0; i < elements_length; i++) {
        elements[i].style.transform = "translateX(200px)";
        elements[i].style.opacity = "0";
        elements[i].style.transition = "all 0.5s ease-in-out";
    }
    setTimeout(function () {
        header_container.style.width = "80vw";
        header_container.style.height = "80vh";
        header_container.style.top = "10vh";
        header_container.style.left = "10vw";
        header_container.style.transition = "all 0.5s ease-in-out";
        player_container.style.display = "flex";
    }, 1200);
    setTimeout(function () {
        PlayerInfoScreen()
    }, 2200);
}


function PlayerInfoScreen() {

    var player_details1 = document.getElementById("player_details1");
    var player_details2 = document.getElementById("player_details2");
    var player_details3 = document.getElementById("player_details3");
    var player_details4 = document.getElementById("player_details4");
    var player_details5 = document.getElementById("player_details5");

    var player_header1 = document.getElementById("player_header1");
    var player_header2 = document.getElementById("player_header2");
    var player_header3 = document.getElementById("player_header3");
    var player_header4 = document.getElementById("player_header4");
    var player_header5 = document.getElementById("player_header5");

    var player_array = [player_details1, player_details2, player_details3, player_details4, player_details5];
    var player_header = [player_header1, player_header2, player_header3, player_header4, player_header5];

    for (var i = 0; i < players; i++) {
        player_array[i].style.display = "inline-block";
        player_array[i].style.opacity = "1";
        player_header[i].innerHTML = "Player " + (i + 1) + " Details";
    }
}

function DetailReady1(btn) {
    var player_button1 = document.getElementById("player_button1");
    var player_quote1 = document.getElementById("player_quote1");
    var player_age1 = document.getElementById("player_age1");
    var player_name1 = document.getElementById("player_name1");

    if ((player_quote1.value !== "") && (player_age1.value !== "") && (player_name1.value !== "") && (player_age1.value >= 1) && (player_age1.value <= 99)) {
        if (player_quote1.disabled = true) {
            player_button1.style.backgroundColor = "green";
            player_quote1.disabled = true;
            player_age1.disabled = true;
            player_name1.disabled = true;
            ReadyVerification()
        }
    } else {
        alert("Please fill out the player details correctly.");
    }
}

function DetailReady2(btn) {
    var player_button2 = document.getElementById("player_button2");
    var player_quote2 = document.getElementById("player_quote2");
    var player_age2 = document.getElementById("player_age2");
    var player_name2 = document.getElementById("player_name2");

    if ((player_quote2.value !== "") && (player_age2.value !== "") && (player_name2.value !== "") && (player_age2.value >= 1) && (player_age2.value <= 99)) {
        if (player_quote2.disabled = true) {
            player_button2.style.backgroundColor = "green";
            player_quote2.disabled = true;
            player_age2.disabled = true;
            player_name2.disabled = true;
            ReadyVerification()
        }
    } else {
        alert("Please fill out the player details.");
    }
}

function DetailReady3(btn) {
    var player_button3 = document.getElementById("player_button3");
    var player_quote3 = document.getElementById("player_quote3");
    var player_age3 = document.getElementById("player_age3");
    var player_name3 = document.getElementById("player_name3");

    if ((player_quote3.value !== "") && (player_age3.value !== "") && (player_name3.value !== "") && (player_age3.value >= 1) && (player_age3.value <= 99)) {
        if (player_quote3.disabled = true) {
            player_button3.style.backgroundColor = "green";
            player_quote3.disabled = true;
            player_age3.disabled = true;
            player_name3.disabled = true;
            ReadyVerification()
        }
    } else {
        alert("Please fill out the player details.");
    }
}

function DetailReady4(btn) {
    var player_button4 = document.getElementById("player_button4");
    var player_quote4 = document.getElementById("player_quote4");
    var player_age4 = document.getElementById("player_age4");
    var player_name4 = document.getElementById("player_name4");

    if ((player_quote4.value !== "") && (player_age4.value !== "") && (player_name4.value !== "") && (player_age4.value >= 1) && (player_age4.value <= 99)) {
        if (player_quote4.disabled = true) {
            player_button4.style.backgroundColor = "green";
            player_quote4.disabled = true;
            player_age4.disabled = true;
            player_name4.disabled = true;
            ReadyVerification()
        }
    } else {
        alert("Please fill out the player details.");
    }
}

function DetailReady5(btn) {
    var player_button5 = document.getElementById("player_button5");
    var player_quote5 = document.getElementById("player_quote5");
    var player_age5 = document.getElementById("player_age5");
    var player_name5 = document.getElementById("player_name5");

    if ((player_quote5.value !== "") && (player_age5.value !== "") && (player_name5.value !== "") && (player_age5.value >= 1) && (player_age5.value <= 99)) {
        if (player_quote5.disabled = true) {
            player_button5.style.backgroundColor = "green";
            player_quote5.disabled = true;
            player_age5.disabled = true;
            player_name5.disabled = true;
            ReadyVerification()
        }
    } else {
        alert("Please fill out the player details.");
    }
}

function ReadyVerification() {
    var player_button1 = document.getElementById("player_button1");
    var player_button2 = document.getElementById("player_button2");
    var player_button3 = document.getElementById("player_button3");
    var player_button4 = document.getElementById("player_button4");
    var player_button5 = document.getElementById("player_button5");
    var StartGame = document.getElementById("StartGame");

    var ready_array = [player_button1, player_button2, player_button3, player_button4, player_button5];

    for (var i = 0; i < players; i++) {
        if (ready_array[i].style.backgroundColor == "green") {
            var readied_players = players - 1;
            if (i == readied_players) {
                StartGame.style.opacity = "1";
            }
        }
    }
}

function BeginGame() {
    var player_details1 = document.getElementById("player_details1");
    var player_details2 = document.getElementById("player_details2");
    var player_details3 = document.getElementById("player_details3");
    var player_details4 = document.getElementById("player_details4");
    var player_details5 = document.getElementById("player_details5");

    var player_age1 = document.getElementById("player_age1").value;
    var player_age2 = document.getElementById("player_age2").value;
    var player_age3 = document.getElementById("player_age3").value;
    var player_age4 = document.getElementById("player_age4").value;
    var player_age5 = document.getElementById("player_age5").value;

    var player_name1 = document.getElementById("player_name1").value;
    var player_name2 = document.getElementById("player_name2").value;
    var player_name3 = document.getElementById("player_name3").value;
    var player_name4 = document.getElementById("player_name4").value;
    var player_name5 = document.getElementById("player_name5").value;

    var player_quote1 = document.getElementById("player_quote1").value;
    var player_quote2 = document.getElementById("player_quote2").value;
    var player_quote3 = document.getElementById("player_quote3").value;
    var player_quote4 = document.getElementById("player_quote4").value;
    var player_quote5 = document.getElementById("player_quote5").value;

    var player_details_array = [player_details1, player_details2, player_details3, player_details4, player_details5];

    var player_age_array = [player_age1, player_age2, player_age3, player_age4, player_age5];

    var player_name_array = [player_name1, player_name2, player_name3, player_name4, player_name5];

    var player_quote_array = [player_quote1, player_quote2, player_quote3, player_quote4, player_quote5];

    for (var i = 0; i < (players+1); i++) {
        eval('var ' + 'PlayerObject' + i + ';');
        PlayerObject1 = {
            name: player_name_array[i],
            age: player_age_array[i],
            quote: player_quote_array[i]
        };
        PlayerObject2 = {
            name: player_name_array[i],
            age: player_age_array[i],
            quote: player_quote_array[i]
        };
        PlayerObject3 = {
            name: player_name_array[i],
            age: player_age_array[i],
            quote: player_quote_array[i]
        };
        PlayerObject4 = {
            name: player_name_array[i],
            age: player_age_array[i],
            quote: player_quote_array[i]
        };
        PlayerObject5 = {
            name: player_name_array[i],
            age: player_age_array[i],
            quote: player_quote_array[i]
        };
    };
    console.log(players);
    console.log(timer);
}
