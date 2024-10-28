setTimeout(function() {
    const greetingElement = document.getElementById('greeting');
    greetingElement.innerHTML = 'This is Guo, Shanshan\'s personal website.';
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

const buttons = document.querySelectorAll('.button');
const content = document.querySelector('.content');

buttons[0].addEventListener('click', () => {
    content.innerHTML = '<h1>About ME</h1><p>这是关于我的内容。</p>';
});

buttons[1].addEventListener('click', () => {
    content.innerHTML = '<h1>Job Opportunity</h1><p>这是工作机会的内容。</p>';
});