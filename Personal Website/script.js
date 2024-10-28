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

// Update content for the first button
buttons[0].addEventListener('click', () => {
    content.innerHTML = `
        <div class="item">
            <p>Hello, my name is GUO Shanshan. I am currently in my final semester of the Master of Marketing Communications program at the University of Melbourne. This semester, I am on exchange at the University of North Carolina at Chapel Hill, where I am taking courses in Organizational Communication, Health Communication, Public Relations, and Interactive Media. I hold a Bachelor's degree in Public Relations from Donghua University and have gained valuable experience in public relations and resource management through various internships and projects. For instance, during my internship at MCM, I enhanced the brand's market recognition by collaborating with influencers and managing product samples efficiently. Leading a team in a national innovation competition further developed my leadership and problem-solving skills, resulting in a second-place finish.</p>
        </div>
        <div class="item">
            <p>If you have any job opportunities available: I am a conscientious and responsible individual with a strong passion for the retail industry. My part-time roles in customer service and retail have allowed me to refine my product knowledge, inventory management skills, and teamwork abilities. Colleagues often commend my ability to foster a collaborative environment, and customers appreciate my approachable demeanor and clear communication style. I believe in the power of teamwork to overcome challenges and enhance the shopping experience. My dedication to connecting with both team members and customers, combined with proactive problem-solving skills, makes me a valuable addition to any team.</p>
        </div>
        <a href="ShanshanGUO_CV.pdf" target="_blank" class="button">Download My Resume</a>
    `;
});

// Update content for the second button
buttons[1].addEventListener('click', () => {
    content.innerHTML = '<h1>Job Opportunity</h1>';
});

// Update content for the third button
buttons[2].addEventListener('click', () => {
    content.innerHTML = '<h2>Contact Me ↘</h2>';
});
