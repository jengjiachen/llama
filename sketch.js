
const myEmptyDiv = document.querySelector('#myEmptyDiv');


const heading = document.createElement('h1');
heading.innerHTML = 'Llamas don\'t bite. They spit when they\'re agitated, but mostly at each other.';


heading.style.cursor = 'pointer';


heading.addEventListener('click', handleHeadingClick);


myEmptyDiv.appendChild(heading);

 
function handleHeadingClick (){
    document.body.style.backgroundColor = 'pink';
}