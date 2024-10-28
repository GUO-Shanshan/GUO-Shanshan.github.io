setTimeout(function() {
    const greetingElement = document.getElementById('greeting'); //if donot have this define, the font size cannot change
    greetingElement.innerText = "This is Guo, Shanshan's personal website.";
    greetingElement.style.fontSize = '6em'; 
}, 1000);

const hoverArea = document.getElementById('greeting');
const tooltip = document.getElementById('tooltip');

hoverArea.addEventListener('mouseenter', (e) => {
    tooltip.style.display = 'block'; 
    tooltip.style.left = e.pageX + 'px';
    tooltip.style.top = (e.pageY + 20) + 'px';
});

hoverArea.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none'; 
});