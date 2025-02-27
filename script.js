const data = [
  {
    name: "Age Calculator",
    skills: ["HTML " + "CSS " + "JAVASCRIPT"],
    link: "https://cooolcodes.github.io/age-calculator-frontend-mentor/",
    code: "https://github.com/CooolCodes/age-calculator-frontend-mentor.git",
    image:
      "https://res.cloudinary.com/dvydugv8v/image/upload/v1727885350/ebun/active-states_kyyamx.jpg",
  },
  {
    name: "Tip Calculator",
    skills: ["HTML " + "CSS " + "JAVASCRIPT"],
    link: "https://cooolcodes.github.io/tip-calculator-app-frontend-mentor/",
    code: "https://github.com/CooolCodes/tip-calculator-app-frontend-mentor.git",
    image:
      "https://res.cloudinary.com/dvydugv8v/image/upload/v1727885362/ebun/active-states_fb4mlt.jpg",
  },
  {
    name: "Interactive Rating Component",
    skills: ["HTML " + "CSS " + "JAVASCRIPT"],
    link: "https://cooolcodes.github.io/Interactive-rating-component/",
    code: "https://github.com/CooolCodes/Interactive-rating-component.git",
    image:
      "https://res.cloudinary.com/dvydugv8v/image/upload/v1727886770/ebun/active-states_hjsqtl.jpg",
  },
  {
    name: "E-commerce product page",
    skills: ["HTML " + "CSS " + "JAVASCRIPT"],
    image:
      "https://res.cloudinary.com/dvydugv8v/image/upload/v1727886879/ebun/desktop-preview_g8tq8y.jpg",
  },
  {
    name: "Basic Calculator",
    skills: ["HTML " + "CSS " + "JAVASCRIPT"],
    link: "https://cooolcodes.github.io/basic-calculator/",
    code: "https://github.com/CooolCodes/basic-calculator.git",
    image:
      "https://res.cloudinary.com/dvydugv8v/image/upload/v1727972440/ebun/Screenshot_39_uimgqx.png",
  },
  {
    name: "Random Color Generator",
    skills: ["HTML " + "CSS " + "JAVASCRIPT"],
    link: "https://cooolcodes.github.io/random-color-generator/",
    code: "https://github.com/CooolCodes/random-color-generator",
    image:
      "https://res.cloudinary.com/dvydugv8v/image/upload/v1739872129/Screenshot_70_opuace.png",
  },
  {
    name: "Todo List App",
    skills: ["HTML " + "CSS " + "JAVASCRIPT"],
    link: "https://cooolcodes.github.io/todo-app-main/",
    code: "https://github.com/CooolCodes/todo-app-main",
    image:
      "https://res.cloudinary.com/dvydugv8v/image/upload/v1739872767/Screenshot_71_rb4jcv.png",
  },
  {
    name: "Newsletter Signup",
    skills: ["HTML " + "CSS " + "JAVASCRIPT"],
    link: "https://cooolcodes.github.io/newsletter-sign-up-form-with-successful-message/",
    code: "https://github.com/CooolCodes/newsletter-sign-up-form-with-successful-message",
    image:
      "https://res.cloudinary.com/dvydugv8v/image/upload/v1739873008/Screenshot_72_hocyew.png",
  },
  {
    name: "Pikaso Clone Site",
    skills: ["HTML " + "CSS " + "JAVASCRIPT"],
    link: "https://cooolcodes.github.io/newsletter-sign-up-form-with-successful-message/",
    code: "https://github.com/CooolCodes/newsletter-sign-up-form-with-successful-message",
    image:
      "https://res.cloudinary.com/dvydugv8v/image/upload/v1740152948/Screenshot_79_a1rnyn.png",
  },
  {
    name: "Interactive Pricing Component",
    skills: ["HTML " + "CSS " + "JAVASCRIPT"],
    link: "https://cooolcodes.github.io/newsletter-sign-up-form-with-successful-message/",
    code: "https://github.com/CooolCodes/newsletter-sign-up-form-with-successful-message",
    image:
      "https://res.cloudinary.com/dvydugv8v/image/upload/v1740152935/desktop-design_czjxvd.jpg",
  },
];

const projects = document.querySelector(".projects_wrapper");
// set data to be displayed
let displayedData = data;

// set template
function template() {
  const projectsData = displayedData.map((project) => {
    // always return
    return `
    <article class="project">
      
              <div class="project_image">
                <img
                  src=${project.image}
                  alt=""
                />
              </div>
              <div class="project_body">
                <h2 class="project_title">${project.name}</h2>
                <div class="project_details">
                  <p>${project.skills}</p>
                </div>
                <div class="project_links">
                <a href=${project.code} class="viewlinks" target="_blank" rel="noopener noreferrer">View Code </a>
                <a href=${project.link} class="viewlinks" target="_blank" rel="noopener noreferrer">View Project </a>
</div>
              </div>
            </article>
      `;
  });

  projects.innerHTML = projectsData.join("");
}

// run template on initial load
template();
