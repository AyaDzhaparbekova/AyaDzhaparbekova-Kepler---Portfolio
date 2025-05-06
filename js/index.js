const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; ${thisYear} Designed & Coded by Aya Dzhaparbekova. Let's build something great together.`;
footer.appendChild(copyright);

const skills = [
  'HTLM',
  'CSS',
  'JavaScript',
  'GitHub',
  'Responsive Design',
  'UX/UI Design',
  'DOM',
  'REST API',
  'Grid',
  'Flexbox',
];

const skillsSection = document.getElementById('skills');

const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li');
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

const nav = document.querySelector('nav ul');

const themLi = document.createElement('li');
themLi.classList.add('theme-toggle-item');

const themeToggle = document.createElement('button');
themeToggle.id = 'themeToggle';
themeToggle.title = 'Toggle Theme';
themeToggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;

themLi.appendChild(themeToggle);

nav.append(themLi);

nav.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

const icon = themeToggle.querySelector('i');
if (document.body.classList.contains('dark-theme')) {
  icon.classList.remove('fa-moon');
  icon.classList.add('fa-sun');
} else {
  icon.classList.replace('fa-sun', 'fa-moon');
}
