function clickedSelectButton(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-500','text-white');
}
function clickedUnSelectButton(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-green-500','text-white');
}