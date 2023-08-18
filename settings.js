
function calculateTrialngeArea(){
    const baseField = document.getElementById('base')
    const baseFieldText = baseField.value
    const base = parseFloat(baseFieldText)

    const heightField = document.getElementById('height')
    const heightFieldText = heightField.value
    const height = parseFloat(heightFieldText)

    const area = 0.5 * base * height
    const areaField = document.getElementById('area')
    areaField.innerText = area
}