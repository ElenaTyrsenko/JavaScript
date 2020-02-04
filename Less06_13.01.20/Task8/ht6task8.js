//Task8
//Написать функцию, которая получает url и выводит подробную информацию о нем.
//Например: url “https://itstep.org/ua/about”, информация “протокол: https, домен: itstep.org, путь: /ua/about”.

function geturlinfo() {
    url = prompt("Please, write url", "https://itstep.org/ua/about");
    alert("You printed next url: " + url);
    console.log("You printed next url: " + url);
    url = url.split("://", 2);
    console.log("Splited url: " + url);
    protocol = url[0];
    domen = url[1].split("/", 1);
    path = url[1].replace(domen, "");
    alert("Protocol: " + protocol);
    alert("Domen: " + domen); 
    alert("Path: " + path);
    console.log("Protocol: " + protocol + ", Domen: " + domen + ", Path: " + path);
    }

geturlinfo();
