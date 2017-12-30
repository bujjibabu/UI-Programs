function addNumbers() {
    var addNumberOne = parseInt(document.getElementById('firstNo').value);
    var addNumberTwo = parseInt(document.getElementById('secondNo').value);
    var totalAdd = addNumberOne + addNumberTwo;
    document.getElementById('result').innerText = totalAdd;
};

function subtrNumbers() {
    var subtrNumberOne = parseInt(document.getElementById('firstNo').value);
    var subtrNumberTwo = parseInt(document.getElementById('secondNo').value);
    var totalSubtr = subtrNumberOne - subtrNumberTwo;
    document.getElementById('result').innerText = totalSubtr;
}

function multiNumbers() {
    var multiNumberOne = parseInt(document.getElementById('firstNo').value);
    var multiNumberTwo = parseInt(document.getElementById('secondNo').value);
    var totalMulti = multiNumberOne * multiNumberTwo;
    document.getElementById('result').innerText = totalMulti;
}

function divisNumbers() {
    var divisNumberOne = parseInt(document.getElementById('firstNo').value);
    var divisNumberTwo = parseInt(document.getElementById('secondNo').value);
    var totalDivis = divisNumberOne / divisNumberTwo;
    document.getElementById('result').innerText = totalDivis;
}