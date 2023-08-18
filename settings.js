
// get Input field value with converting float

function getInputFieldValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const input = parseFloat(inputFieldText);
    return input;
}


function setResultValue(areaFieldId, area){
    const areaField = document.getElementById(areaFieldId)
    areaField.innerText = area
}




function calculateTrialngeArea(){
    const base = getInputFieldValue('base')
    const height = getInputFieldValue('height')
    const area = 0.5 * base * height
    setResultValue('tarea', area)
}

function rectangleAreaCal(){
    const width = getInputFieldValue('width')
    const length = getInputFieldValue('length')
    const area = width * length
    setResultValue('rarea', area)
}

function parallelogram(){
    const base = getInputFieldValue('b')
    const height = getInputFieldValue('h')
    const area = base * height
    setResultValue('parea', area)
}

function rhomboseAreaCal(){
    const d1 = getInputFieldValue('d1')
    const d2 = getInputFieldValue('d2')
    const area = 0.5 * d1 * d2
    setResultValue('harea', area)
}
function pentagonAreaCal(){
    const p = getInputFieldValue('p')
    const b = getInputFieldValue('b2')
    const area = 0.5 * p * b
    setResultValue('parea2', area)
}

function ellipseAreCal(){
    const a = getInputFieldValue('a')
    console.log(a)
    const b = getInputFieldValue('b3')
    console.log(b)
    const area = 3.1416 * a * b
    setResultValue('earea', area)
}