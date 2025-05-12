//footer using DOM manipulation
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; ${thisYear} Designed & Coded by Aya Dzhaparbekova. Let's build something great together.`;
footer.appendChild(copyright);

//skills section using DOM manipulation
const skills = [
  'HTLM',
  'CSS',
  'JavaScript',
  'GitHub',
  'Responsive Design',
  'UX/UI Design',
  'DOM',
  'REST API',
  'Flexbox',
];

const skillsSection = document.getElementById('skills');

const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li');
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
//dark mode toggle button 

const nav = document.querySelector('nav ul');

const themeLi = document.createElement('li');
themeLi.classList.add('theme-toggle-item');

const themeToggle = document.createElement('button');
themeToggle.id = 'themeToggle';
themeToggle.title = 'Toggle Theme';
themeToggle.innerHTML = `<i class="fa-solid fa-moon"></i>   Mode`;

themeLi.appendChild(themeToggle);
nav.appendChild(themeLi);

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  const icon = themeToggle.querySelector('i');
  if (document.body.classList.contains('dark-theme')) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
});

// connect leave message chat bot

const messageForm = document.form['leave_message'];

if (messageForm) {
  messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');

    const newMessage = document.createElement('ul');
    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a>
        <span>: ${usersMessage}</span>`;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);
      });
    }
    messageList.appendChild(newMessage);










