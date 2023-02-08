console.log("test");

/* 
ausgabe in html mit write()

HTML Formular
    Name
    Alter
    Prüfung bestanden ?
    Button Person

beim clicken soll
    neues Objekt erstellt werden
    und write() Methode aufgerufen

    
    wenn If    nicht    bestanden     
        dann Name color = red

*/


// Variablen holen

//const inputName = document.querySelector("#inputName")
const inputName = document.querySelector("#inputName");
console.log(inputName);

const inputAlter = document.querySelector(`#inputAlter`);
console.log(inputAlter);
const btnCheck = document.querySelector(`input[type="checkbox"]`);
//const btn = document.querySelector(`input[type="button"]`);
const btn = document.querySelector("#button");

//btn.addEventListener("click", () => {console.log("hallo")});

const output = document.querySelector("p");


// Array zum speichern von den Objekt-Abfragen
const speicherArray = []
let counter = 0;

// Objekt erstellen

class DatenObjekt {
    constructor(inputNameVal, inputAlterVal, inputCheckVal, nameVaribale, dateAusgabe) {
        this.name = inputNameVal;
        console.log(this.name);
        this.alter = inputAlterVal;
        this.check = inputCheckVal;
        this.nameVaribale = nameVaribale;
        this.dateAusgabe = dateAusgabe;
    }
    description() {
        console.log(this.name + " " + this.alter + " " + this.check);
        console.log("in der Funktion DatenObjekt");
        console.log(test1)
        console.log(test1)
    }

}

// function für EventLi
function abschicken() {
    console.log("in der Funktion");

    // Values und checked holen
    const inputNameVal = inputName.value;
    const inputAlterVal = Number(inputAlter.value);
    const inputCheckVal = btnCheck.checked;
    console.log(inputNameVal);
    console.log(inputAlterVal);
    console.log(inputCheckVal);

    // Zählt die Buttondrücke mit
    counter = counter + 1;

    // logt das Datum und die Uhrzeit zum eingabeZeitpunkt mit
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // January is 0
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    console.log(`${month}/${day}/${year} ${hours}:${minutes}:${seconds}`);
    const dateAusgabe =`${month}/${day}/${year} ${hours}:${minutes}:${seconds}`
    console.log(dateAusgabe);


          // befüllt das Objekt mit den Daten von den Inputs
        // variable erstellt eine Variable die sich bei jedem 
        /// durchlauf praktisch dynamisch mitverändert 
        /// und den InputNamen dynamisch der Variable zuweist
        let varibale = `${counter}_${inputNameVal}`
        varibale = new DatenObjekt(inputNameVal, inputAlterVal, inputCheckVal, `${counter}_${inputNameVal}`, dateAusgabe);
        speicherArray.push(varibale);
        console.log(varibale);

        console.log(speicherArray);
        console.table(speicherArray);
    // prüfen ob Felder ausgefüllt sind
    // Prüfen ob Prüfung bestanden ist !!! -> noch else if 
    if (inputNameVal > "" && inputAlterVal > 0 && inputCheckVal == true) {
        console.log("in der If = alles true");





  
       //  document.write = (`${varibale} <br>`);     // geht nicht,  :-(
        // output.innerHTML += (`${varibale} <br>`);  // kommt nur der Text Object :-(
        ergebnis = (`🫵 ${inputNameVal}, ${inputAlterVal} Jahre alt.  🏆  <br>`);
    }
    else { // checkbox = false --> Prüfung   -  nicht  -  bestanden
        ergebnis  = (`<span> <color:"red">😱 ${inputNameVal}, ${inputAlterVal} Jahre alt.  👎 </span> <br>`);
        // text in Farbe rot 
        let red2 = "red";
        document.querySelector("span").style.color = red2;

   
    }
output.innerHTML += ergebnis
// text rot


}
console.log(speicherArray);
console.table(speicherArray);
document.write += speicherArray+"<br>";



btn.addEventListener("click", abschicken)
