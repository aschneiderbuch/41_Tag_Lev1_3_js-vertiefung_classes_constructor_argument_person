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





function abschicken() {
    console.log("in der Funktion");
    const inputNameVal = inputName.value;
    const inputAlterVal = Number(inputAlter.value);
    const inputCheckVal = btnCheck.checked;
    console.log(inputNameVal);
    console.log(inputAlterVal);
    console.log(inputCheckVal);
    if (inputNameVal > "" && inputAlterVal > 0 && inputCheckVal == true) {
        console.log("in der If = alles true");

        function DatenObjekt(inputNameVal, inputAlterVal, inputCheckVal, nameVaribale) {
            this.name = inputNameVal;
            console.log(this.name);
            this.alter = inputAlterVal;
            this.check = inputCheckVal;
            this.nameVaribale = nameVaribale;

            console.log(this.name + " " + this.alter + " " + this.check);
            console.log("in der Funktion DatenObjekt");
            console.log(nameVaribale);

            const test1 = new DatenObjekt(inputNameVal, inputAlterVal, inputCheckVal, test1);


            this.description = function () {
                console.log(this.name + " " + this.alter + " " + this.check);
                console.log("in der Funktion DatenObjekt");
                console.log(test1)
                console.log(test1)

            }

        }
    }


    const test1 = new DatenObjekt(inputNameVal, inputAlterVal, inputCheckVal, test1);

    console.log(test1)
    return test1;

}


btn.addEventListener("click", abschicken)

abschicken()


