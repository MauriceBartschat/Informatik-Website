function getInputHeight() {
    return document.querySelector("#InputHeight").value
}
function getInputMass() {
    return document.querySelector("#InputMass").value
}
//gewicht- und körpergröße eingabe

function calcBmi(massKg, heightCm) {
    if (massKg && heightCm && !isNaN(massKg) && !isNaN(heightCm) ) {
        return massKg / ((heightCm / 100) ** 2)
    } else return -1
}
//eingabebedingung überprüfung z.b wenn keine zahl vorhanden ist

function setBmi() {
    setResultText(determineResult(calcBmi(getInputMass(), getInputHeight())))
}
function setResultText(value) {
    document.querySelector("#Result").innerHTML = "Ergebnis: " + value
}
//ergebnis der zusammengerechneten werte

function determineResult(bmi) {
    let res
    if (bmi < 0) res = "Fehler"
    else if (bmi < 10) res = "Lebenstil überdenken"
    else if (bmi < 12) res = "Bald Tot"
    else if (bmi < 13) res = "Heftiger Lauch"
    else if (bmi < 16) res = "Krasser Lauch "
    else if (bmi < 17) res = "Mäßiger Lauch"
    else if (bmi < 17.5) res ="Anfang Stock"
    else if (bmi < 18.5) res ="Stock"
    else if (bmi < 25) res = "Stabil Bruder"
    else if (bmi < 30) res = "Fast dick"
    else if (bmi < 35) res = "Dick"
    else if (bmi < 40) res = "Dicker"
    else if (bmi >= 40) res ="Am dicksten"
    return res
}
//zeigt je nach berechneten bmi den status an


