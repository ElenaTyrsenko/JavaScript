//Task10
//Написать функцию вывода текста по заданному шаблону. Функция принимает первым параметром шаблон, в тексте
//которого может использоваться %, после символа % указывается индекс входного параметра. При выводе вместо
//%индекс необходимо вывести значение соответствующего входного параметра.
//Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10, 8, 2020) должна вывести “Today is Monday 10.8.2020”

function printtext() {
    alert("This function print text by the pattern");
    text = prompt("Print pattern", "\"Today is %1 %2.%3.%4\", \"Monday, 10, 8, 2020\"");
    alert(text);
    parameters = text.match(/%\d+/g);
    // alert(parameters[0]);
    values = text.match(/,\s".*"$/g);
    // alert(values);
    values = values.toString();
    valuesm = values.replace(",", "").replace("\"", "").replace("\"", "");
    // alert(valuesm);
    valuessp = valuesm.split(',');
    // alert(valuessp[0] + valuessp[1] + valuessp[2] + valuessp[3]);
    for (let i in parameters) {
        text = text.replace(parameters[i], valuessp[i]);
        console.log(text);
    }
    // alert(text);
    textm = text.replace(/,\s".*"/g, "");
    alert(textm);
}

printtext();
