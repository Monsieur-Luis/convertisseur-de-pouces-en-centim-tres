function pouceEnCm() {
    var pouces = document.getElementById("valeur").value
    var resultatEnCm = (pouces * 2.54);
    document.getElementById("resultat").innerHTML = 'La valeur de ' + String(pouces) + ' pouces est de ' + resultatEnCm + ' centimètres.';

}

function cmEnPouces() {
    var centimetres = document.getElementById("valeur").value
    var resultatEnPouces = (centimetres / 2.54);
    document.getElementById("resultat").innerHTML = 'La valeur de ' + String(centimetres) + ' centimètres est de ' + resultatEnPouces.toFixed(4) + ' pouces.';

}