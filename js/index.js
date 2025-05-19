//footer using DOM manipulation
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; ${thisYear} Designed & Coded by Aya Dzhaparbekova.`;
footer.appendChild(copyright);

//skills section using DOM manipulation
const skills = [
  'HTLM',
  'CSS',
  'JavaScript',
  'GitHub',
  'UX/UI Design',
  'DOM',
  'REST API'
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

// leave message section
const messageForm = document.forms['leave_message'];

messageForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const name = event.target.usersName.value;
  const email = event.target.email.value;
  const message = event.target.usersMessage.value;
  console.log(name, email, message);

  const messageSection = document.getElementById('messages');
  const messageList = messageSection.querySelector('ul');
  const newMessage = document.createElement('li');
  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>
                          <span>: ${message}</span>`;

  const removeButton = document.createElement('button');
  removeButton.innerText = 'remove';
  removeButton.setAttribute('type', 'button');
  removeButton.classList.add('remove-button'); 
  removeButton.addEventListener('click', handleRemoveButton);

  function handleRemoveButton() {
    const entry = removeButton.parentNode;
    entry.remove();
  }

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  const confirmationMessage = document.getElementById('confirmation');
  confirmationMessage.style.display = 'block';

  messageForm.reset();
}

//Fetch API Projects Section

const projectSection = document.getElementById('projects');
const projectList = projectSection.querySelector('ul');

fetch('https://api.github.com/users/AyaDzhaparbekova/repos')
  .then(res => {
    return res.json();
  })
  .then(repositories => {
    console.log('repositories: ', repositories);

    for (let i = 0; i < repositories.length; i++) {
      const project = repositories[i].name;
      const repoURL = repositories[i].html_url;

      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = repoURL;
      link.innerHTML = project;
      link.target = '_blank';
      li.appendChild(link);
      projectList.appendChild(li);
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });  