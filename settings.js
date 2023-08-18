
// get Input field value with converting float

function getInputFieldValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const input = parseFloat(inputFieldText);
    inputField.value = '';
    return input;
}


function setResultValue(areaFieldId, area){
    const areaField = document.getElementById(areaFieldId)
    areaField.innerText = area
}




function calculateTrialngeArea(){
    const base = getInputFieldValue('base')
    console.log(base)
    const height = getInputFieldValue('height')
    if(isNaN(base) || isNaN(height)){
        alert('Please Give Valid Number!');
        return;
    }
    const area = 0.5 * base * height
    setResultValue('tarea', area)
    addToCulEntry('Trialnge', area)
}

function rectangleAreaCal(){
    const width = getInputFieldValue('width')
    const length = getInputFieldValue('length')
    if(isNaN(width) || isNaN(length)){
        alert('Please Give Valid Number!');
        return;
    }
    const area = width * length
    setResultValue('rarea', area)
    addToCulEntry('Rectangle', area)
}

function parallelogram(){
    const base = getInputFieldValue('b')
    const height = getInputFieldValue('h')
    if(isNaN(base) || isNaN(height)){
        alert('Please Give Valid Number!');
        return;
    }
    const area = base * height
    setResultValue('parea', area)
    addToCulEntry('parallelogram', area)
}

function rhomboseAreaCal(){
    const d1 = getInputFieldValue('d1')
    const d2 = getInputFieldValue('d2')
    if(isNaN(d1) || isNaN(d2)){
        alert('Please Give Valid Number!');
        return;
    }
    const area = 0.5 * d1 * d2
    setResultValue('harea', area)
    addToCulEntry('Rhombose', area)
}
function pentagonAreaCal(){
    const p = getInputFieldValue('p')
    const b = getInputFieldValue('b2')
    if(isNaN(p) || isNaN(b)){
        alert('Please Give Valid Number!');
        return;
    }
    const area = 0.5 * p * b
    setResultValue('parea2', area)
    addToCulEntry('Pentagon', area)
}

function ellipseAreCal(){
    const a = getInputFieldValue('a')
    const b = getInputFieldValue('b3')
    if(isNaN(a) || isNaN(b)){
        alert('Please Give Valid Number!');
        return;
    }
    const area = 3.1416 * a * b
    setResultValue('earea', area)
    addToCulEntry('Ellipse', area)
}

function addToCulEntry(areaType, area){
    const calEntry = document.getElementById('calculate-Entry');
    const count = document.childElementCount;
    console.log(count)
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-primary btn-sm">Condert</button>`;
    calEntry.appendChild(p);
}