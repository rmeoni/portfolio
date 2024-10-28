const projects = {
    mwd: {
        title: 'Mit Was Drin',
        category: 'Prototype Design',
        description: 'In this project, I worked on the Research, Design, and Ideation for a cannabis education blog targeting the German market. With the gradual legalization of medicinal cannabis in the EU, the startup aims to inform German patients about the essentials of the cannabis industry.',
        link: 'https://xd.adobe.com/view/93568bae-b1c5-4629-82e5-928b5d19f3fa-c605/',
        image: 'images/portfolio-thumb-8.png',
        buttonText: 'View Prototype',
    },
    windhillgrowers: {
        title: "Wind Hill Growers UI Design",
        category: "UI Design",
        description: "Working in the expansion of the website from this beautiful brand we got to build a <strong>Design System in Figma</strong> to keep all our digital products on brand. I've been lucky enough to be able to collaborate and keep expanding this website. Built on <strong>Squarespace</strong>",
        link: "https://www.windhillgrowers.com/",
        image: "images/portfolio-thumb-10.png",
        buttonText: 'Visit Website',
    },
    whgapp: {
        title: "Cannabis Tester App",
        category: "Javascript",
        description: "I designed and developed this web application from scratch. The UI was created in Figma, and I built the site using HTML, CSS, and JavaScript. The app uses user inputs to deliver personalized product recommendations for Wind Hill Growers. It was a fun project, packed with Vanilla JavaScript!This Web Application was done from scratch. I designed the UI in <strong>Figma</strong>, and then developed the site with <strong>HTML, CSS and Javascript.</strong> The app takes the users answers to provide a personalized product reocommendation of the Wind Hill Growers products. This was a whole bunch of Vanilla Javascript fun!",
        link: "https://try.windhillgrowers.com/",
        image: "images/portfolio-thumb-1.png",
        buttonText: 'Visit Webapp',
    },
    cafedonlucas: {
        title: "Coffee Brand UX Research/Design",
        category: "UX Design",
        description: "In this project, I used the Design Thinking approach, starting with Qualitative and Quantitative Research to define User Personas and identify pain points. We then used a User Journey Map to ideate solutions, followed by creating a Wireframe and Prototype in Figma. Finally, we conducted Usability Testing to refine the design based on user feedback.",
        link: "./detail_project_coffee_ux.html",
        image: "images/portfolio-thumb-7.png",
        buttonText: 'View Case Study',

    },
    lozana: {
        title: 'Lozana Prototype Design',
        category: 'Prototype Design',
        description: 'In this opportunity I got to design the User Interface of a Real Estate company. Working hand in hand with the client, we designed a <strong>prototype with Figma</strong> to then be <strong>developed in Webflow.</strong> ',
        link: 'https://www.figma.com/proto/8X8SJLP7QarDud2e1hDE00/Lozana-Web-Design?page-id=164%3A1650&node-id=164%3A1779&viewport=25%2C72%2C0.08&scaling=scale-down-width&starting-point-node-id=164%3A1779',
        image: './images/portfolio-thumb-2.png',
        buttonText: 'View Prototype',
    },
    gummies_mockups: {
        title: 'Gummies Product Mockup',
        category: 'Mockups',
        description: 'I used the provided label design to create a realistic product mockup in Photoshop, applying the label to a 3D-rendered container and refining the look with shadows and reflections. The result is a professional and lifelike representation of the product.',
        link: './detail_project_gummies_mockup.html',
        image: './images/portfolio-thumb-14.png',
        buttonText: 'View Project'
    },
    zoho_google_api: {
        title: 'Zoho Inventory to Google Sheets API',
        category: 'Javascript',
        description: 'A company was struggling with managing inventory in Zoho Inventory. I created a JavaScript that pulls new invoices via the Zoho Inventory API and pushes them to Google Sheets, allowing them to easily manage the data.',
        link: './detail_project_zoho_google_api.html',
        image: './images/portfolio-thumb-15.png',
        buttonText: 'View Project',
    },
    mwd_branding: {
        title: 'Mit Was Drin Branding',
        category: 'Branding',
        description: 'Mit Was Drin needed an iconic and versatile logo that reflected their core vision and values. Working closely with the CEO, we quickly transformed a sketch into a timeless design. The result is a logo that thrives on both digital platforms and printed merch. This project was one of the most enjoyable and rewarding I haev been a part of.',
        link: './detail_project_mwd_branding.html',
        image: './images/portfolio-thumb-16.png',
        buttonText: 'View Project'
    },
    zoho_google_api: {
        title: 'Zoho Inventory to Google Sheets API',
        category: 'Javascript',
        description: 'A company was struggling with managing inventory in Zoho Inventory. I created a JavaScript that pulls new invoices via the Zoho Inventory API and pushes them to Google Sheets, allowing them to easily manage the data.',
        link: './detail_project_zoho_google_api.html',
        image: './images/portfolio-thumb-17.png',
        buttonText: 'View Project',
    },
    whg_design_system: {
        title: 'Unity Design System',
        category: 'Design System',
        description: 'As the UX Designer for Wind Hill Growers, we faced the challenge of creating a cohesive brand experience across multiple international markets. To address this, we developed "Unity", a comprehensive design system that acts as a single source of truth for all design assets. Unity was instrumental in bringing the brand to a new level of consistency, making it easier to manage and scale across various platforms.',
        link: './detail_project_unity_design_system.html',
        image: './images/project-unity-design-system.png',
        buttonText: 'Read more',
    },
}


const renderProjects = (projects, category) => {

    let projectsDiv = document.getElementById('portfolio-project');
    projectsDiv.innerHTML = "";

    let workGrid = document.getElementById('works-grid-1');
    let workGrid2 = document.getElementById('works-grid-2');
    workGrid2.innerHTML = "";


    projectsObj = Object.entries(projects);
    console.log(projectsObj);

    let filteredProjects = projectsObj.filter(project => project[1].category === category);



    //if it shows 2 projects or less
    if (filteredProjects.length === 2) {
        workGrid.style.gridRowGap = '0px';
        for (let i = 0; i < filteredProjects.length; i++) {

            if (i === 1) {
                let project = document.createElement('div');
                project.setAttribute('class', `projects ${category}`);

                project.innerHTML =

                    `<a href="${filteredProjects[i][1].link}" target="_blank" class="work-card-preview w-inline-block">
                <div class="card-hover-circle"></div>
                <div class="overlay" style="display: none; transform: translate3d(150%, -150%, 0px) scale3d(2, 2, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg); transform-style: preserve-3d;"></div>
                <img src="${filteredProjects[i][1].image}" alt="" class="bg-image absolute" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
            </a>
            <h4> ${filteredProjects[i][1].title} </h4>
            <div class="work-card-description">
                <p> ${filteredProjects[i][1].description} </p>
            </div>
            
            <a href="${filteredProjects[i][1].link}" target="_blank" class="portfolio-links">
            ${filteredProjects[i][1].buttonText}
            </a>
            `;

                projectsDiv.appendChild(project);
            } else {
                //add a new grid for the 3rd+ projects

                let project = document.createElement('div');
                project.setAttribute('class', `projects ${category}`);

                project.innerHTML =

                    `<a href="${filteredProjects[i][1].link}" class="work-card-preview w-inline-block">
                <div class="card-hover-circle"></div>
                <div class="overlay" style="display: none; transform: translate3d(150%, -150%, 0px) scale3d(2, 2, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg); transform-style: preserve-3d;"></div>
                <img src="${filteredProjects[i][1].image}" alt="" class="bg-image absolute" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
            </a>
            <h4> ${filteredProjects[i][1].title} </h4>
            <div class="work-card-description">
                <p> ${filteredProjects[i][1].description} </p>
            </div>
            
            <a href="${filteredProjects[i][1].link}" target="_blank" class="portfolio-links">
            ${filteredProjects[i][1].buttonText}
            </a>
            `;

                workGrid2.appendChild(project);
            }
        }
    } else if (filteredProjects.length >= 3) {
        for (let i = 0; i < filteredProjects.length; i++) {

            if (i < 2) {
                let project = document.createElement('div');
                project.setAttribute('class', `projects ${category}`);

                project.innerHTML =

                    `<a href="${filteredProjects[i][1].link}" target="_blank" class="work-card-preview w-inline-block">
                <div class="card-hover-circle"></div>
                <div class="overlay" style="display: none; transform: translate3d(150%, -150%, 0px) scale3d(2, 2, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg); transform-style: preserve-3d;"></div>
                <img src="${filteredProjects[i][1].image}" alt="" class="bg-image absolute" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
            </a>
            <h4> ${filteredProjects[i][1].title} </h4>
            <div class="work-card-description">
                <p> ${filteredProjects[i][1].description} </p>
            </div>
            
            <a href="${filteredProjects[i][1].link}" target="_blank" class="portfolio-links">
            ${filteredProjects[i][1].buttonText}
            </a>
            `;

                projectsDiv.appendChild(project);
            } else {
                //add a new grid for the 3rd+ projects

                let project = document.createElement('div');
                project.setAttribute('class', `projects ${category}`);

                project.innerHTML =

                    `<a href="${filteredProjects[i][1].link}" target="_blank" class="work-card-preview w-inline-block">
                <div class="card-hover-circle"></div>
                <div class="overlay" style="display: none; transform: translate3d(150%, -150%, 0px) scale3d(2, 2, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg); transform-style: preserve-3d;"></div>
                <img src="${filteredProjects[i][1].image}" alt="" class="bg-image absolute" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
            </a>
            <h4> ${filteredProjects[i][1].title} </h4>
            <div class="work-card-description">
                <p> ${filteredProjects[i][1].description} </p>
            </div>
            
            <a href="${filteredProjects[i][1].link}" target="_blank" class="portfolio-links">
            ${filteredProjects[i][1].buttonText}
            </a>
            `;

                workGrid2.appendChild(project);
            }
        }

    } else {
        //if it shows 3 or more projects
        for (let i = 0; i < filteredProjects.length; i++) {
            let project = document.createElement('div');
            project.setAttribute('class', `projects ${category}`);

            project.innerHTML =

                `<a href="${filteredProjects[i][1].link}" class="work-card-preview w-inline-block">
                <div class="card-hover-circle"></div>
                <div class="overlay" style="display: none; transform: translate3d(150%, -150%, 0px) scale3d(2, 2, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg); transform-style: preserve-3d;"></div>
                <img src="${filteredProjects[i][1].image}" alt="" class="bg-image absolute" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
            </a>
            <h4> ${filteredProjects[i][1].title} </h4>
            <div class="work-card-description">
                <p> ${filteredProjects[i][1].description} </p>
            </div>
            
            <a href="${filteredProjects[i][1].link}" class="portfolio-links">
            ${filteredProjects[i][1].buttonText}
            </a>
            `;

            projectsDiv.appendChild(project);
        }
    }
}

renderProjects(projects, "UX Design");
