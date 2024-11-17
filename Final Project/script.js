setTimeout(function() {
    const greetingElement = document.getElementById('greeting');
    greetingElement.innerHTML = 'This is Guo, Shanshan\'s personal website.';
    greetingElement.style.fontSize = '8em'; 
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
            <h3>Guo, Shanshan</h3>
        </div>
        <div class="item">
            Hello there, my name is Guo, Shanshan. I am currently in my final semester of <strong>the Master of Marketing Communications</strong> program at the University of Melbourne. This semester, I am on exchange at the University of North Carolina at Chapel Hill, where I am taking courses in Organizational Communications, Health Communications, Public Relations, and Interactive Media. I hold a <strong>Bachelor's degree in Public Relations</strong> from Donghua University and have gained valuable experience in public relations and resource management through various internships and projects. 
        </div>
        <div class="item">
            For instance, during my internship at MCM, I enhanced the brand's market recognition by collaborating with influencers and managing product samples efficiently. Leading a team in a national innovation competition further developed my leadership and problem-solving skills, resulting in a second-place finish.
        </div>
        <div class="item">
            <strong>If you have any job opportunities available</strong>: I am a conscientious and responsible individual with a strong passion for the retail industry. My part-time roles in customer service and retail have allowed me to refine my product knowledge, inventory management skills, and teamwork abilities. Colleagues often commend my ability to foster a collaborative environment, and customers appreciate my approachable demeanor and clear communication style. I believe in the power of teamwork to overcome challenges and enhance the shopping experience. My dedication to connecting with both team members and customers, combined with proactive problem-solving skills, makes me a valuable addition to any team.
        </div>
        <a href="ShanshanGUO_CV.pdf" target="_blank" class="button">Download My Resume</a>
    `;
});

// Update content for the third button
buttons[1].addEventListener('click', () => {
    content.innerHTML = `
        <div class="content rock-salt-regular">
            <div class="keywords">Bachelor of management in Public Relations</div>
            <div class="keywords">Master of Marketing Communications</div>
            <div class="keywords">Public Relations and Marketing Expertise</div>
            <div class="keywords">Multilingual Communication</div>
            <div class="keywords">Diligent Researcher and Analyst</div>
            <div class="keywords">Project Management</div>
            <div class="keywords">Digital Savvy</div>
            <div class="keywords">Adaptable Communicator</div>
            <div class="keywords">Creative Problem Solver</div>
            <div class="keywords">Continuous Learner</div>
            <div class="keywords">Effective Organizer</div>
            <div class="keywords">Team Collaborator</div>
            <div class="keywords">Strategic Thinker</div>
        </div><br><br><br><br>
    `
});

// Update content for the second button
buttons[2].addEventListener('click', () => {
    content.innerHTML = `
        <div class="item">
            <h3>PR Intern, MCM (Modern Creation München), Shanghai</h3>
            <p>Sep. 2022 – Dec. 2023</p>
            <ul>
                <li>Collaborated in crafting, editing, and translating diverse press releases, ensuring clear and compelling communication.</li>
                <li>Managed the sample process efficiently: meticulously maintained the daily sample loan record, oversaw sample packing and unpacking operations, and ensured the showroom's impeccable presentation.</li>
                <li>Supported contract and payment process, delivered monthly report and updated media contact list.</li>
            </ul>
        </div>
        <div class="item">
            <h3>PR Intern, MSL China, Shanghai</h3>
            <p>Apr. 2022 – Jul. 2022</p>
            <ul>
                <li>Responsible for media advertising, increased the exposure rate of the product, and wrote public relations manuscripts and letters in Chinese and English.</li>
                <li>Responsible for collecting and arranging monthly media communication feedback, regularly arranging and writing competitive industry analysis reports.</li>
                <li>Assisted in the planning and coordination of marketing campaign, participated in daily media communication and cooperation, and sorted out dozens of series and hundreds of pairs of products.</li>
            </ul>
        </div>
        <div class="item">
            <h3>PR Intern, Dentsu Public Relations Consulting, Shanghai</h3>
            <p>Jul. 2021 – Oct. 2021</p>
            <ul>
                <li>Wrote weekly thematic articles on emerging domestic brands, totaled dozens of manuscripts, sorted and summarized the content of articles on Nippon Paint over the past three years, and produced communication analysis reports.</li>
                <li>Studied policy documents and assisted in writing Nippon Paint's monthly manuscript planning, classifying online public opinion information and compiling manuscript dissemination effect reports.</li>
                <li>Assisted in designing and arranging the itinerary of location shooting activities, communicated intentions with clients in a timely manner, and assisted in maintaining media relations.</li>
            </ul>
        </div>
        <div class="item">
            <h3>Interviewer, Office of Scientific Research & Development, Sun Yat-sen University</h3>
            <p>Dec. 2020 – Apr. 2021</p>
            <ul>
                <li>Participated in the major project of National Social Science Foundation, Urban Residents' Perceptions of Hot Topics in Current Affairs: mainly completed questionnaire surveys and interviews with Shanghai's local population.</li>
                <li>Independently searched for over 10 qualified respondents inside and outside campus to complete the half-hour questionnaire.</li>
            </ul>
        </div>
        <br><br><br><br>
    `;
});


// Update content for the third button
buttons[3].addEventListener('click', () => {
    content.innerHTML = '<h2>Contact Me ↘</h2> <ul><li class="item">My personal email address: <strong>shanshanguo1010@gmail.com</strong></li><li class="item">If you\'re in China, please contact me through this email address: <strong>guoshanshan_yx@163.com</strong></li><li class="item">Or you can click the bottom right emoji.</li></ul><br><br><br><br><br>';
});