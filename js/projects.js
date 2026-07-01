const projects = {
    /*
    coffeereact: {
        title: "Coffee Shop React Development",
        title_es: "Desarrollo React para Cafetería",
        category: "Javascript",
        description: "In this project, I applied the Design Thinking approach, starting with Qualitative and Quantitative Research to define User Personas and identify pain points. We used a User Journey Map to ideate solutions, followed by creating a Wireframe and Prototype in Figma. I then developed the website using React, and we conducted Usability Testing to refine the design based on user feedback.",
        description_es: "En este proyecto apliqué Design Thinking, comenzando con Investigación Cualitativa y Cuantitativa para definir User Personas e identificar puntos de dolor. Usamos un User Journey Map para idear soluciones, creamos un Wireframe y Prototipo en Figma, desarrollamos el sitio con React y realizamos Pruebas de Usabilidad para refinar el diseño.",
        link: "./detail_project_coffee_ux_dev.html",
        image: "images/portfolio-thumb-18.png",
        buttonText: 'View Case Study',
        buttonText_es: 'Ver Caso de Estudio',
        target: "_self"
    },
    */
    yotaxi: {
        title: 'YoTaxi of SF App: UX Design',
        title_es: 'YoTaxi de SF App: Diseño UX',
        category: 'UX Design',
        description: 'YoTaxi of San Francisco was facing challenges with their user experience. I supported them by redesigning their app using the Design Thinking methodology. We conducted user research and a foundational usability study, defined key goals, collaborated with stakeholders to ideate solutions, and prototyped a new design in Figma. I also integrated Sentry to monitor real-time errors and track key metrics — ride creation, cancellation, and duration — across iOS and Android, using that data to drive targeted improvements.',
        description_es: 'YoTaxi de San Francisco enfrentaba desafíos con su experiencia de usuario. Los apoyé rediseñando su app mediante Design Thinking. Realizamos investigación de usuarios, un estudio de usabilidad, definimos objetivos clave, colaboramos con stakeholders para idear soluciones y prototipamos un nuevo diseño en Figma. También integré Sentry para monitorear errores en tiempo real y rastrear métricas clave — creación, cancelación y duración de viajes — en iOS y Android, usando esos datos para impulsar mejoras concretas.',
        link: './detail_project_yotaxi.html',
        image: 'images/portfolio-thumb-26.png',
        image_dark: 'images/portfolio-thumb-26-dark.png',
        buttonText: 'View Case Study',
        buttonText_es: 'Ver Caso de Estudio',
        target: '_self'
    },
    gflow: {
        title: 'GFlow: UX Design',
        title_es: 'GFlow: Diseño UX',
        category: 'UX Design',
        description: 'As a UX Developer at a Guatemalan non-profit with over 4,000 employees, I helped redesign their in-house apps using the Design Thinking approach to enhance the user experience for their group-loan operations. My role included conducting organization-wide research to empathize with users, defining key pain points, and ideating solutions with a team of six developers and various stakeholders. I then prototyped and tested the designs with real users. The final solution improved the user experience by 150% according to feedback and saved the company over 10,000 man-hours per month.',
        description_es: 'Como Desarrollador UX en una ONG guatemalteca con más de 4,000 empleados, ayudé a rediseñar sus apps internas con Design Thinking. Mi rol incluyó investigación organizacional, definición de puntos de dolor e ideación con un equipo de seis desarrolladores. La solución final mejoró la experiencia en un 150% y ahorró más de 10,000 horas-hombre al mes.',
        link: './detail_project_gflow.html',
        image: 'images/portfolio-thumb-25.png',
        image_dark: 'images/portfolio-thumb-25-dark.png',
        buttonText: 'View Case Study',
        buttonText_es: 'Ver Caso de Estudio',
        target: '_self'
    },
    akisi_pay: {
        title: 'Akisi Pay POS UI Design',
        title_es: 'Akisi Pay: Diseño UI de POS',
        category: 'UX Design',
        description: 'As a UX Developer for a non-profit in Guatemala, I designed the UI of a mobile POS system that enables small business owners to accept credit card payments directly from their phones.',
        description_es: 'Como Desarrollador UX en una organización sin fines de lucro en Guatemala, diseñé la UI de un sistema POS móvil que permite a pequeños empresarios aceptar pagos con tarjeta de crédito directamente desde sus teléfonos.',
        link: './detail_project_akisi_ui.html',
        image: './images/portfolio-thumb-23.png',
        image_dark: './images/portfolio-thumb-23-dark.png',
        buttonText: 'Read more',
        buttonText_es: 'Leer más',
        target: '_self'
    },
    /*
    whgapp: {
        title: "Cannabis Tester App",
        title_es: "App Probadora de Cannabis",
        category: "Javascript",
        description: "I designed and developed this web application from scratch for Wind Hill Growers, crafting the UI in Figma and building the site with HTML, CSS, and Vanilla JavaScript. The app uses user input to provide personalized product recommendations—a fun project that fully leveraged JavaScript!",
        description_es: "Diseñé y desarrollé esta aplicación web desde cero para Wind Hill Growers, creando la UI en Figma y construyendo el sitio con HTML, CSS y Vanilla JavaScript. La app utiliza el input del usuario para ofrecer recomendaciones de productos personalizadas—¡un proyecto divertido que aprovechó al máximo JavaScript!",
        link: "./detail_project_tester_app.html",
        image: "images/portfolio-thumb-1.png",
        buttonText: 'View Case Study',
        buttonText_es: 'Ver Caso de Estudio',
        target: "_self"
    },
    */
    adoptio: {
        title: 'Adoptio App: UX Design & Development',
        title_es: 'App Adoptio: Diseño UX y Desarrollo',
        category: 'UX Design',
        description: 'Adoptio began as a practice project for the Google UX Design Certificate but evolved into a real initiative to address the lack of pet adoption apps in developing countries. With a completed, user-centered UX design and plans to develop the app using React, Adoptio aims to launch in 2025, increasing adoption rates and improving animal welfare.',
        description_es: 'Adoptio comenzó como práctica para el Certificado de Diseño UX de Google, pero evolucionó en una iniciativa real para abordar la falta de apps de adopción en países en desarrollo. Con un diseño centrado en el usuario y planes de desarrollo en React, Adoptio busca aumentar las tasas de adopción y mejorar el bienestar animal.',
        link: './detail_project_adoptio.html',
        image: 'images/portfolio-thumb-21.png',
        image_dark: 'images/portfolio-thumb-21-dark.png',
        buttonText: 'View Case Study',
        buttonText_es: 'Ver Caso de Estudio',
        target: '_self'
    },
    prestio: {
        title: "Prestio App 3-Day Challenge: UX Design & Development",
        title_es: "Reto de 3 Días App Prestio: Diseño UX y Desarrollo",
        category: "UX Design",
        description: "I was challenged to conduct UX Design and Development in just 3 days for an app that allows users to manage their loans and services in a secure and easy way. I used the Design Thinking approach to empathize with the user, define the problem, ideate solutions, prototype, and test. I then developed the concept using React.js.",
        description_es: "Tuve el reto de realizar Diseño UX y Desarrollo en solo 3 días para una app que permite a los usuarios gestionar sus préstamos y servicios de forma segura y sencilla. Usé Design Thinking para empatizar con el usuario, definir el problema, idear soluciones, prototipar y testear. Luego desarrollé el concepto con React.js.",
        link: "./detail_project_prestio.html",
        image: "images/portfolio-thumb-20.png",
        image_dark: "images/portfolio-thumb-20-dark.png",
        buttonText: 'View Case Study',
        buttonText_es: 'Ver Caso de Estudio',
        target: "_self"
    },
    cafedonlucas: {
        title: "Coffee Shop UX Research/Design",
        title_es: "Investigación/Diseño UX para Café",
        category: "CRO",
        description: "In this project, I applied the Design Thinking approach to design and develop a DTC e-commerce experience for a coffee brand. I conducted UX research, prototyped in Figma, developed in React, and applied CRO strategies — including A/B testing, Google Analytics 4 event tracking, and LTV/CAC analysis — to increase conversion rates and grow the customer base.",
        description_es: "En este proyecto apliqué Design Thinking para diseñar y desarrollar una experiencia de e-commerce DTC para una marca de café. Realicé investigación UX, prototipé en Figma, desarrollé en React y apliqué estrategias de CRO — incluyendo A/B testing, seguimiento de eventos en Google Analytics 4 y análisis de LTV/CAC — para aumentar las tasas de conversión.",
        link: "./detail_project_coffee_ux.html",
        image: "images/portfolio-thumb-7.png",
        image_dark: "images/portfolio-thumb-7-dark.png",
        buttonText: 'View Case Study',
        buttonText_es: 'Ver Caso de Estudio',
        target: "_self"
    },
     windhillgrowers: {
        title: "Wind Hill Growers UI Design",
        title_es: "Diseño UI para Wind Hill Growers",
        category: "CRO",
        description: "As a UX designer for this cannabis brand, I built a Design System in Figma, enhanced the Squarespace DTC storefront, and launched a B2B wholesale store in Zoho. I applied CRO strategies using Hotjar (session replays, heatmaps, funnels, and surveys), Google Analytics 4, and A/B testing across product pages and landing pages to increase conversion rates across both channels.",
        description_es: "Como diseñador UX para esta marca de cannabis, construí un Sistema de Diseño en Figma, mejoré el sitio DTC en Squarespace y lancé una tienda B2B en Zoho. Apliqué estrategias de CRO con Hotjar (grabaciones de sesión, mapas de calor, embudos y encuestas), Google Analytics 4 y A/B testing en páginas de producto y landing pages para aumentar las tasas de conversión en ambos canales.",
        link: "./detail_project_whg_ui.html",
        image: "images/portfolio-thumb-10.png",
        image_dark: "images/portfolio-thumb-10-dark.png",
        buttonText: 'View Case Study',
        buttonText_es: 'Ver Caso de Estudio',
        target: "_self"
    },
    mwd: {
        title: 'Mit Was Drin UI/UX Design',
        title_es: 'Mit Was Drin: Diseño UI/UX',
        category: 'CRO',
        description: 'I designed the UI/UX for a DTC cannabis education blog targeting the German market. The project included CRO strategy built around an interactive dosage calculator designed to increase page visits and grow email subscribers — tracked and optimized using Google Analytics 4 funnel analysis and conversion event tracking.',
        description_es: 'Diseñé la UI/UX para un blog educativo DTC sobre cannabis dirigido al mercado alemán. El proyecto incluyó una estrategia de CRO centrada en una calculadora de dosis interactiva para aumentar visitas y suscriptores de correo — rastreada y optimizada con análisis de embudos y seguimiento de eventos en Google Analytics 4.',
        link: './detail_project_mwd.html',
        image: 'images/portfolio-thumb-8.png',
        image_dark: 'images/portfolio-thumb-8-dark.png',
        buttonText: 'View Case Study',
        buttonText_es: 'Ver Caso de Estudio',
        target: "_self"
    },
    /*
    lozana: {
        title: 'Lozana Concept Prototype Design',
        title_es: 'Diseño de Prototipo Concepto Lozana',
        category: 'UI Design',
        description: 'I had the opportunity to design the User Interface for a real estate company, collaborating closely with the client to create a tailored prototype in Figma, which was then brought to life in Webflow.',
        description_es: 'Tuve la oportunidad de diseñar la Interfaz de Usuario para una empresa inmobiliaria, colaborando estrechamente con el cliente para crear un prototipo personalizado en Figma, que luego fue llevado a la vida en Webflow.',
        link: './detail_project_lozana.html',
        image: './images/portfolio-thumb-2.png',
        buttonText: 'View Case Study',
        buttonText_es: 'Ver Caso de Estudio',
        target: "_self"
    },
    */
    gummies_mockups: {
        title: 'Gummies Product Mockup',
        title_es: 'Mockup de Producto Gummies',
        category: 'Mockups',
        description: 'I used the provided label design to create a realistic product mockup in Photoshop, applying the label to a 3D-rendered container and refining the look with shadows and reflections. The result is a professional and lifelike representation of the product.',
        description_es: 'Utilicé el diseño de etiqueta proporcionado para crear un mockup de producto realista en Photoshop, aplicando la etiqueta a un contenedor renderizado en 3D y refinando el aspecto con sombras y reflejos. El resultado es una representación profesional y realista del producto.',
        link: './detail_project_gummies_mockup.html',
        image: './images/portfolio-thumb-14.png',
        image_dark: './images/portfolio-thumb-14-dark.png',
        buttonText: 'View Project',
        buttonText_es: 'Ver Proyecto',
        target: "_self"
    },
    /*
    zoho_google_api: {
        title: 'Zoho Inventory to Google Sheets API',
        title_es: 'API de Zoho Inventory a Google Sheets',
        category: 'Javascript',
        description: 'A company was struggling with managing inventory in Zoho Inventory. I created a JavaScript that pulls new invoices via the Zoho Inventory API and pushes them to Google Sheets, allowing them to easily manage the data.',
        description_es: 'Una empresa tenía dificultades para gestionar su inventario en Zoho Inventory. Creé un script en JavaScript que extrae nuevas facturas a través de la API de Zoho Inventory y las envía a Google Sheets, permitiéndoles gestionar los datos fácilmente.',
        link: './detail_project_zoho_google_api.html',
        image: './images/portfolio-thumb-15.png',
        buttonText: 'View Project',
        buttonText_es: 'Ver Proyecto',
        target: "_self"
    },
    */
    gflow_rebranding: {
        title: 'GFlow Re-branding',
        title_es: 'Rediseño de Marca GFlow',
        category: 'Branding',
        description: 'A non-profit fintech company in Guatemala with over 4,000 employees needed support rebranding one of their internal loan management apps. The app had accumulated numerous usability issues over the years, and since we were already working on a UX redesign, we saw an opportunity to give it a fresh, modern look. This rebranding marked a new beginning—setting the stage for a more intuitive and efficient user experience.',
        description_es: 'Una empresa fintech sin fines de lucro en Guatemala con más de 4,000 empleados necesitaba apoyo para rediseñar la marca de una de sus apps internas de gestión de préstamos. La app había acumulado numerosos problemas de usabilidad, y dado que ya trabajábamos en un rediseño UX, aprovechamos la oportunidad para darle un aspecto fresco y moderno.',
        link: './detail_project_gflow_rebrand.html',
        image: './images/portfolio-thumb-28.png',
        buttonText: 'View Project',
        buttonText_es: 'Ver Proyecto',
        target: "_self"
    },
    whg_rebranding: {
        title: 'Wind Hill Growers Re-branding',
        title_es: 'Rediseño de Marca Wind Hill Growers',
        category: 'Branding',
        description: 'Wind Hill Growers detailed logo became blurry on small screens, making the brand less recognizable. The solution was to create a simplified version for smaller displays while retaining the original for large screens and prints, ensuring both functionality and brand consistency.',
        description_es: 'El detallado logo de Wind Hill Growers se veía borroso en pantallas pequeñas, haciendo que la marca fuera menos reconocible. La solución fue crear una versión simplificada para pantallas pequeñas, conservando el original para pantallas grandes e impresión, garantizando tanto la funcionalidad como la coherencia de la marca.',
        link: './detail_project_whg_rebrand.html',
        image: './images/portfolio-thumb-19.png',
        buttonText: 'View Project',
        buttonText_es: 'Ver Proyecto',
        target: "_self"
    },
    mwd_branding: {
        title: 'Mit Was Drin Branding',
        title_es: 'Branding Mit Was Drin',
        category: 'Branding',
        description: 'Mit Was Drin needed an iconic and versatile logo that reflected their core vision and values. Working closely with the CEO, we quickly transformed a sketch into a timeless design. The result is a logo that thrives on both digital platforms and printed merch. This project was one of the most enjoyable and rewarding I have been a part of.',
        description_es: 'Mit Was Drin necesitaba un logo icónico y versátil que reflejara su visión y valores fundamentales. Trabajando estrechamente con el CEO, transformamos rápidamente un boceto en un diseño atemporal. El resultado es un logo que destaca tanto en plataformas digitales como en merchandising impreso. Este proyecto fue uno de los más entretenidos y gratificantes en los que he participado.',
        link: './detail_project_mwd_branding.html',
        image: './images/portfolio-thumb-16.png',
        buttonText: 'View Project',
        buttonText_es: 'Ver Proyecto',
        target: "_self"
    },
    impulso_design_system: {
        title: 'Impulso Design System',
        title_es: 'Sistema de Diseño Impulso',
        category: 'Design System',
        description: 'As a UX Developer at a Guatemalan non-profit with over 4,000 employees, I helped create Impulso, a design system aimed at organizing and standardizing all in-house apps used for group-loan operations. Impulso serves as a single source of truth across platforms, managing color tokens, typography scales, spacing systems, light and dark modes, and responsive layouts for mobile, tablet, and desktop. My role included auditing UI patterns, designing reusable components in Figma using Atomic Design principles, and collaborating with dev teams to ensure smooth implementation. The goal was simple: standardize, structure, and ensure brand consistency across the organization.',
        description_es: 'Como Desarrollador UX en una ONG guatemalteca con más de 4,000 empleados, ayudé a crear Impulso, un sistema de diseño para organizar y estandarizar todas las apps internas de operaciones de préstamos grupales. Impulso es la única fuente de verdad entre plataformas, gestionando tokens de color, tipografía, espaciado, modos claro/oscuro y diseños responsivos.',
        link: './detail_project_impulso_design_system.html',
        image: './images/portfolio-thumb-24.png',
        image_dark: './images/portfolio-thumb-24-dark.png',
        buttonText: 'Read more',
        buttonText_es: 'Leer más',
        target: "_self"
    },
    whg_design_system: {
        title: 'Unity Design System',
        title_es: 'Sistema de Diseño Unity',
        category: 'Design System',
        description: 'As the UX Designer for Wind Hill Growers, we faced the challenge of creating a cohesive brand experience across multiple international markets. To address this, we developed "Unity", a comprehensive design system that acts as a single source of truth for all design assets. Unity was instrumental in bringing the brand to a new level of consistency, making it easier to manage and scale across various platforms.',
        description_es: 'Como Diseñador UX para Wind Hill Growers, desarrollamos "Unity", un sistema de diseño integral que actúa como única fuente de verdad para todos los activos de diseño en múltiples mercados internacionales. Unity llevó la marca a un nuevo nivel de consistencia, facilitando su gestión y escalabilidad.',
        link: './detail_project_unity_design_system.html',
        image: './images/project-unity-design-system.png',
        image_dark: './images/project-unity-design-system-dark.png',
        buttonText: 'Read more',
        buttonText_es: 'Leer más',
        target: "_self"
    },
    akisi_mockup: {
        title: 'Akisi Mobile POS Mockup',
        title_es: 'Mockup POS Móvil Akisi',
        category: 'Mockups',
        description: 'As a UX Developer for a non-profit in Guatemala, I designed the UI of a mobile POS system that enables small business owners to accept credit card payments directly from their phones. I was also tasked with creating high-fidelity mockups of my designs—along with the provided credit card visuals—to present them in a compelling and polished way to stakeholders.',
        description_es: 'Como Desarrollador UX en una organización sin fines de lucro en Guatemala, diseñé la UI de un sistema POS móvil que permite a pequeños empresarios aceptar pagos con tarjeta de crédito desde sus teléfonos. También fui responsable de crear mockups de alta fidelidad de mis diseños—junto con los visuales de tarjetas de crédito proporcionados—para presentarlos de forma atractiva y pulida a los stakeholders.',
        link: './detail_project_akisi_mockup.html',
        image: './images/portfolio-thumb-22.png',
        image_dark: './images/portfolio-thumb-22-dark.png',
        buttonText: 'Read more',
        buttonText_es: 'Leer más',
        target: "_self"
    }
}

// Tracks the currently active category so language switches can re-render
let _currentCategory = 'UX Design';

const renderProjects = (projects, category) => {
    _currentCategory = category;

    const lang = localStorage.getItem('language') || 'en';
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const workGrid1 = document.getElementById('works-grid-1');
    const workGrid2 = document.getElementById('works-grid-2');

    workGrid1.innerHTML = "";
    workGrid2.innerHTML = "";

    const filteredProjects = Object.entries(projects).filter(
        ([, data]) => data.category === category
    );

    filteredProjects.forEach(([, data], index) => {
        const title = lang === 'es' && data.title_es ? data.title_es : data.title;
        const description = lang === 'es' && data.description_es ? data.description_es : data.description;
        const buttonText = lang === 'es' && data.buttonText_es ? data.buttonText_es : data.buttonText;
        const imgSrc = isDark && data.image_dark ? data.image_dark : data.image;
        const imgDark = data.image_dark || data.image;

        const project = document.createElement('div');
        project.className = `projects ${category}`;
        project.innerHTML = `
      <a href="${data.link}" target="${data.target}" class="work-card-preview w-inline-block">
        <div class="card-hover-circle"></div>
        <div class="overlay" style="display: none; transform: translate3d(150%, -150%, 0px) scale3d(2, 2, 1);"></div>
        <img src="${imgSrc}" data-light-src="${data.image}" data-dark-src="${imgDark}" alt="" class="bg-image absolute">
      </a>
      <h4>${title}</h4>
      <div class="work-card-description">
        <p>${description}</p>
      </div>
      <a href="${data.link}" target="${data.target}" class="button-secondary">
        ${buttonText}
      </a>
    `;

        if (index % 2 === 0) {
            workGrid1.appendChild(project);
        } else {
            workGrid2.appendChild(project);
        }
    });
};

window.__updateProjectThumbs = function (isDark) {
    document.querySelectorAll('.bg-image.absolute[data-dark-src]').forEach(function (img) {
        img.src = isDark ? img.getAttribute('data-dark-src') : img.getAttribute('data-light-src');
    });
};

// Called by i18n.js when language switches to re-render with new language
window.renderCurrentProjects = function () {
    renderProjects(projects, _currentCategory);
};

renderProjects(projects, "UX Design");
