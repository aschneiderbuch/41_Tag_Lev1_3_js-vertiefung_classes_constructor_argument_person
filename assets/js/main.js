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
    constructor(inputNameVal, inputAlterVal, inputCheckVal, nameVaribale) {
        this.name = inputNameVal;
        console.log(this.name);
        this.alter = inputAlterVal;
        this.check = inputCheckVal;
        this.nameVaribale = nameVaribale;
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

     counter = counter + 1;

    // prüfen ob Felder ausgefüllt sind
    // Prüfen ob Prüfung bestanden ist !!! -> noch else if 
    if (inputNameVal > "" && inputAlterVal > 0 && inputCheckVal == true) {
        console.log("in der If = alles true");





        // befüllt das Objekt mit den Daten von den Inputs
        // variable erstellt eine Variable die sich bei jedem 
        /// durchlauf praktisch dynamisch mitverändert 
        /// und den InputNamen dynamisch der Variable zuweist
        let varibale = `${counter}_${inputNameVal}`
        varibale = new DatenObjekt(inputNameVal, inputAlterVal, inputCheckVal, `${counter}_${inputNameVal}`);
        speicherArray.push(varibale); 
        console.log(varibale);

        console.log(speicherArray);

    }

}
console.log(speicherArray);
console.table(speicherArray);



btn.addEventListener("click", abschicken)



// befüllt das Objekt mit den Daten von den Inputs
//const test1 = new DatenObjekt(inputNameVal, inputAlterVal, inputCheckVal, test1);







/* // ausgabe von Objekt
console.log(this.name + " " + this.alter + " " + this.check);
console.log("in der Funktion DatenObjekt");
console.log(nameVaribale);



 */




















































