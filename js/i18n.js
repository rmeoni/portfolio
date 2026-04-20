(function () {
  var LANG_ICON_LIGHT = 'images/language.svg';
  var LANG_ICON_DARK  = 'images/language-dark.svg';

  var translations = {
    en: {
      /* ── Nav ── */
      'nav-home':         'Home',
      'nav-portfolio':    'Portfolio',
      'nav-about':        'About',
      'nav-contact':      'Contact',
      'nav-download-cv':  'Download CV',

      /* ── Hero ── */
      'hero-intro':  "My name is Rodrigo. I'm a User Experience Developer who loves to design & develop",
      'hero-line-1': 'mobile apps',
      'hero-line-2': 'web apps',
      'hero-line-3': 'communities',

      /* ── Panel ── */
      'panel-service-1': 'Design for<br>Web and Mobile',
      'panel-service-2': 'HTML, CSS, <br>Javascript, React',
      'panel-service-3': 'Product <br>Mockups',
      'panel-cta':       "Let's get in touch!",

      /* ── Portfolio ── */
      'portfolio-heading':  'Recent Works',
      'portfolio-btn-ux':   'UX/UI Design',
      'portfolio-btn-ds':   'Design Systems',

      /* ── Skills ── */
      'about-label':   'Professional',
      'about-heading': 'My Current Skillset',

      /* ── Experience ── */
      'exp-heading':     'My Experience',
      'exp-description': 'Accomplished UX Designer and Developer with over 10 years of expertise in the tech industry, specializing in website design and development, design systems, and process automation. Proven ability to deliver effective solutions in dynamic, high-demand environments.',
      'exp-contact-btn': 'Contact Me',

      'job-bareco':     "I worked on a year-long digitization project for Banco Industrial, one of Guatemala's largest banks. I was outsourced to help install new hardware for document scanning and update computer and server systems.",
      'job-intuitiva':  "As an employee at a SaaS startup developing an ERP software for accounting, inventory, sales, and purchasing solutions across various industries, I contributed to sales, implementation, and support, gaining hands-on experience in each area.",
      'job-freelancer': "As a freelance contractor, I specialized in web design and development for restaurants and hospitality businesses, creating tailored websites to enhance their online presence. Additionally, I implemented software solutions to support their operational needs.",
      'job-whg':        "I lead UX/UI design and design system development for a U.S.-based company targeting the U.S., and German markets. My role includes building a cohesive design system, developing JavaScript solutions, and optimizing an e-commerce and inventory platform to deliver user-centered, efficient experiences.",
      'job-fge':        "Responsible for designing, prototyping, and developing websites and digital interfaces. The goal is to ensure a balance between visual aesthetics, functionality, and user experience, contributing to the creation of innovative and effective digital solutions.",
      'job-yotaxi':     "Led end-to-end UX design and full-stack development of the YoTaxi mobile app for Yellow Cab of San Francisco, applying Design Thinking to deliver a user-centered, accessible solution. Conducted user research, usability testing, and stakeholder collaboration to inform personas, prototypes, and product decisions, while building the app's frontend and backend using React Native, TypeScript, Express.js, and AWS.",
      'job-ixdf':       "As a Country Manager for IxDF, I'm responsible for overseeing the Local Groups in Guatemala. Each group is supported by Local Leaders in their respective cities. I help ensure that Local Leaders organize meetups where people interested in design can learn, share ideas, and network with one another.",

      /* ── Education ── */
      'edu-heading':     'My Education',
      'edu-description': "My journey into UX was unconventional—it felt backwards, or as I like to say, \"I was reverse engineering it.\" I began studying networking and telecommunications at Galileo University but was more drawn to web development. This led me to learn full-stack development with Ruby on Rails and explore React, bridging design and development. My passion for user-centered experiences grew, and I earned the Google UX Design Professional Certificate. This unique path has given me a deep understanding of both the technical and design aspects of UX, allowing me to create solutions that are not only visually appealing but also technically sound and user-friendly.",
      'edu-ccnp':        "This course provided an in-depth understanding of networking principles, including configuring and managing network infrastructure. Topics covered included routing, switching, and network security, preparing participants for real-world network design and troubleshooting scenarios.",
      'edu-telecom':     "I studied telecommunications with a focus on networking but left in my third year as I was more interested in fields with visual feedback, like web development and design, which led to my passion for UX and front-end development.",
      'edu-rails':       "I decided to become a programmer after a mentor told me I wasn't one, which motivated me to prove otherwise. Through this course, I learned full-stack web development, including building dynamic web applications with Ruby on Rails, and it sparked my journey into coding and front-end development.",
      'edu-google':      "This certificate provided me with a comprehensive understanding of UX design, including user research, wireframing, prototyping, and usability testing. It solidified my skills in creating user-centered designs and helped me refine my approach to solving real-world design problems.",
      'edu-react':       "This course deepened my skills in building dynamic web applications using React. I learned to create reusable components, manage state effectively, and develop responsive, user-centered interfaces, further bridging my design and development expertise.",

      /* ── Counters ── */
      'counter-name-1': 'Years of Experience',
      'counter-desc-1': 'Delivering effective solutions across multiple industries.',
      'counter-name-2': 'Professional certifications',
      'counter-desc-2': 'Committed to continuous learning and skill advancement.',
      'counter-name-3': 'Tools mastered',
      'counter-desc-3': 'From Adobe Suite to GitHub, crafting efficient digital solutions.',

      /* ── Companies ── */
      'companies-label':   'Companies',
      'companies-heading': 'Companies who have trusted me',

      /* ── Contact ── */
      'contact-heading':       "Let's get in touch",
      'contact-name-label':    'Name',
      'contact-email-label':   'Email',
      'contact-message-label': 'Message',
      'contact-submit':        'Send Message',

      /* ── Expertise ── */
      'expertise-label':       'My Expertise',
      'expertise-heading':     'Focus on design thinking',
      'expertise-description': "Using the design thinking approach we can put our users' needs first in order to bring to life breathtaking experiences.",
      'expertise-service-1':   'UX Design <br>& Development',
      'expertise-service-2':   'Logos<br>and Icons',
      'expertise-service-3':   'Product <br>Mockups',

      /* ── Detail pages ── */
      'detail-client':    'Client',
      'detail-release':   'Release',
      'detail-email-me':  'Email Me',

      /* ── Footer ── */
      'footer-home':      'Home',
      'footer-portfolio': 'Portfolio',
      'footer-about':     'About',
      'footer-contact':   'Contact',
      'footer-heading':   "Let's Get In Touch",
      'footer-text':      "I'd love to hear from you! Please reach out.",

      /* ── Case Study — shared ── */
      'cs-case-study':        'Case Study',
      'cs-overview':          'Project Overview',
      'cs-problem':           'The Problem',
      'cs-goal':              'The Goal',
      'cs-my-role':           'My Role',
      'cs-responsibilities':  'Responsibilities',
      'cs-user-research':     'User Research',
      'cs-summary':           'Summary',
      'cs-user-personas':     'User Personas',
      'cs-goals-h4':          'Goals',
      'cs-frustrations-h4':   'Frustrations',
      'cs-user-journey':      'User Journey Map',
      'cs-user-flow':         'User Flow',
      'cs-story-board':       'Story Board',
      'cs-info-arch':         'Information Architecture',
      'cs-paper-wireframe':   'Paper Wireframe',
      'cs-digital-wireframe': 'Digital Wireframe',
      'cs-lofi':              'Low-fidelity Prototype',
      'cs-hifi':              'High-Fidelity Prototype',
      'cs-sticker-sheet-h2':  'Sticker Sheet',
      'cs-sticker-sheet':     'Sticker Sheet',
      'cs-accessibility':     'Accesibility',
      'cs-thank-you':         'Thank you very much!',
      'cs-usability-study':   'Usability Study',
      'cs-round1':            'Round 1 Findings',
      'cs-round2':            'Round 2 Findings',
      'cs-before-after':      'Before And After',
      'cs-impact':            'Impact',
      'cs-takeaways':         'Takeaways',
      'cs-next-steps':        'Next Steps',
      'cs-conclusion':        'Conclusion',
      'cs-contact-label':     "Let's get in touch",
      'cs-contact-cta':       "Have a project in mind? Let's build something great together!",
      'cs-btn-pdf':           'Download Case Study PDF',
      'cs-figma-h2':          'Figma',
      'cs-zero-height-h2':    'ZeroHeight',
      'cs-principles':        'Principles',
      'cs-color-palette':     'Color Palette',
      'cs-layouts':           'Layouts',
      'cs-type-scale':        'Type Scale',
      'cs-elements':          'Elements',
      'cs-design-scenarios':  'Design Scenarios',
      'cs-us-plan-h1':        'Usability Study Plan',
      'cs-introduction':      'Introduction',
      'cs-research-questions':'Research Questions',
      'cs-kpis':              'KPIs',
      'cs-methodology':       'Methodology',
      'cs-participants':      'Participants',
      'cs-prototype-desktop': 'Prototype Desktop',

      /* ── YoTaxi ── */
      'yotaxi-title':           'YoTaxi App: UX Design',
      'yotaxi-intro':           'YoTaxi of San Francisco was facing challenges with their user experience. I supported them by redesigning their app using the Design Thinking methodology. We conducted user research and a foundational usability study, defined key goals, collaborated with stakeholders to ideate solutions, and prototyped a new design in Figma that better meets user needs.',
      'yotaxi-problem-p':       'Many passengers in San Francisco found it difficult to access reliable, inclusive, and user-friendly taxi services. The existing app lacked clarity, accessibility, and modern functionality—leading to frustration and low user satisfaction.',
      'yotaxi-goal-p':          'Design and develop an intuitive mobile application that simplifies the ride-hailing experience, improves accessibility for all users (including those with disabilities), and supports the local taxi community by making YoTaxi a competitive and easy-to-use alternative.',
      'yotaxi-role-p':          'User Experience (UX) Designer and Developer.',
      'yotaxi-summary-p':       'User research with over 50 participants revealed that riders wanted more control and personalization in their experience. Key requested features included: the ability to add a stop during a ride, set accessibility and payment preferences, choose music and conversation settings, message the driver, and receive real-time notifications about their ride status.',
      'yotaxi-persona-h2':      '"I just want to feel safe and know that my ride is reliable. I rely on these services to get around."',
      'yotaxi-persona-blockquote': "Linda relies on YoTaxi for doctor visits and errands. She appreciates scheduling rides but struggles with the app's interface and has missed rides due to booking errors. She values kind drivers and would feel safer with an emergency feature.",
      'yotaxi-sticker-p':       "I added a Sticker Sheet to make it easy to develop the app's unique components and styles.",
      'yotaxi-accessibility-p': 'To prioritize accessibility, YoTaxi includes language toggle options to support users from different regions, as well as light and dark modes for visual comfort. The interface features prominent headers and alt text for images to ensure screen reader compatibility, enhancing usability for visually impaired users. These features make the app more inclusive and user-friendly for a broader audience.',
      'yotaxi-btn-appstore':    'View In App Store',
      'yotaxi-responsibilities-ul': '<li>Conduct user research</li><li>Identify pain points</li><li>Ideate solutions</li><li>Create wireframes</li><li>Conduct usability studies</li><li>Develop prototypes</li>',
      'yotaxi-goals-ul':            '<li>Get to medical appointments and run errands efficiently.</li><li>Ensure the ride is affordable and safe.</li>',
      'yotaxi-frustrations-ul':     '<li>Inconsistent driver professionalism.</li><li>Difficulty navigating the app to book a ride.</li>',

      /* ── Akisi ── */
      'akisi-title':       'Akisi Pay UI Design',
      'akisi-intro':       'As a UX Developer for a non-profit in Guatemala, I designed the UI of a mobile POS system that enables small business owners to accept credit card payments directly from their phones.',
      'akisi-problem-p':   'A non-profit fintech company in Guatemala—dedicated to supporting people living in poverty through individual and group loans—has over 4,000 employees, including 35 developers working across different teams. They came with the need to launch a Digital Wallet to help their customers manage loans, pay for products and services, receive remittances, and withdraw funds through partner businesses across the country. I was entrusted with designing the UI for their mobile POS app, "Akisi Pay". Using UX best practices, I created a high-fidelity prototype in Figma, applying the Atomic Design methodology to organize the system and ensure that all components were connected and easy to update in seconds. Throughout the project, I collaborated with cross-functional teams and communicated directly with stakeholders to deliver a sleek, modern, and minimalistic UI that aligned with both user needs and the company\'s values.',
      'akisi-btn-playstore': 'View In Play Store',

      /* ── GFlow ── */
      'gflow-title':           'GFlow UX Design',
      'gflow-intro':           'As a UX Developer at a Guatemalan non-profit with over 4,000 employees, I helped redesign their in-house apps using the Design Thinking approach to enhance the user experience for their group-loan operations. My role included conducting organization-wide research to empathize with users, defining key pain points, and ideating solutions with a team of six developers and various stakeholders. I then prototyped and tested the designs with real users. The final solution improved the user experience by 150% according to feedback and saved the company over 10,000 man-hours per month.',
      'gflow-problem-p':       'The company faced significant UX challenges in their in-house apps used by over 4,000 employees to manage group loans. Users commonly reported frustration and dissatisfaction when interacting with these tools. In addition to these issues, the company lacked a Design System to ensure structure, consistency, and branding across their applications. This often resulted in mismatched user interfaces, redundant design decisions, and delays in development—ultimately slowing down the delivery of solutions by the Software Development team.',
      'gflow-goal-p':          "The goal was to truly understand and empathize with our users—to fall in love with their needs, goals, motivations, and pain points. By doing so, we aimed to deliver solutions tailored to their real-world challenges, reduce time on task and error rates, increase app adoption, enhance the overall user experience, and ultimately lower company costs by eliminating redundant tasks.",
      'gflow-role-p':          "As a User Experience Designer and Developer, I led the project's research and design process by conducting both quantitative and qualitative studies. I collaborated closely with cross-functional teams, developers, stakeholders, and final users. My responsibilities included prototyping solutions, running usability tests, and ensuring the final design provided an intuitive, multi-device, and efficient user experience.",
      'gflow-responsibilities-p': "I was tasked with conducting a foundational usability study, performing both quantitative and qualitative research, collaborating with stakeholders, developers, and users to define the app's goals, facilitating ideation sessions with the development team based on user needs, prototyping low- and high-fidelity mockups in Figma, and conducting usability studies to refine the design based on feedback.",
      'gflow-summary-p':       'We conducted a user research study with 330 participants to identify issues in GFlow focusing on their motivations, frustrations, and overall experience. 72% reported slow system performance, 58% had trouble uploading documents, and 65% believed the loan approval process could be faster. Users also pointed out issues with geolocation, system crashes, and the need to consult multiple applications, all of which impacted their efficiency. These insights guided improvements in performance, usability, and automation, ultimately enhancing the GFlow experience.',
      'gflow-usability-study-p': 'In addition, we conducted a Foundational Usability Study with 251 participants, including screen recordings of 6 users performing key tasks in GFlow. We uncovered recurring issues with image uploads, geolocation, loan approvals, and portfolio management. The System Usability Scale (SUS) yielded an average score of 44/100, suggesting that while the tool is functional, it has significant room for improvement. Users acknowledged its usefulness and efficiency but also highlighted problems with speed, confusion, and navigation errors. These findings informed the optimizations needed to improve the overall user experience.',
      'gflow-persona-h2':      '"Ana is detail-oriented and seeks efficiency in her work, but the errors in GForm cause her stress and waste her time."',
      'gflow-persona-blockquote': 'A customer arrives at the branch to request a loan, but Ana has to correct his name and re-enter data across several platforms. The wait makes the customer uncomfortable and slows down her work.',
      'gflow-usability-study-intro-p': 'A Usability Study was conducted using the Hi-Fi Prototype, where real users were asked to complete five simple tasks and respond to a follow-up System Usability Scale (SUS) survey. The results revealed a 150% improvement in the overall user experience. One user shared her feedback after testing the prototype: "This new design feels like someone went into my head and designed a solution to all my problems at work."',
      'gflow-usability-study-moderated-p': 'We conducted a moderated usability study with participants in Guatemala (On site), where participants went through the usability study in their real work environments. We interviewed 5 people from mixed backgrounds, genders, and abilities.',
      'gflow-usability-study-gathered-p': 'We then gathered the data and organized it to identify themes, which resulted in the following insights:',
      'gflow-usability-study-adapted-p':  'Given the insights we found through our Usability Study, we adapted the design to improve the user experience and make the app easier to use.',
      'gflow-accessibility-p': "To improve the app's accessibility, we implemented both Light and Dark modes and selected high-contrast color combinations to ensure readability. Additionally, we designed a \"Change Language\" feature that allows users to switch between Spanish and Mayan languages, promoting inclusivity and equity for indigenous communities.",
      'gflow-impact-p':        'The final solution led to a 150% improvement in user experience, as measured through a System Usability Scale (SUS) and direct user feedback. Employees reported feeling more confident and less frustrated while using the system, and task completion times were significantly reduced. By streamlining workflows, reducing redundant steps, and minimizing system errors, the new interface saved the company over 10,000 man-hours per month. This translated into increased productivity across teams, faster credit processing times for customers, and a more consistent and enjoyable user experience throughout the organization. In addition, the introduction of a scalable Design System now enables faster implementation of new features and ensures brand consistency across all internal apps, setting a strong foundation for future growth.',
      'gflow-goals-ul':        '<li>Process applications without errors or repetitive steps.</li><li>Provide fast and efficient service.</li>',
      'gflow-frustrations-ul': '<li>She has to manually correct data like names with "ñ" and co-signers\' last names.</li><li>She needs to use multiple applications to complete a single process.</li>',

      /* ── Adoptio ── */
      'adoptio-title':       'Adoptio App: UX Design & Development',
      'adoptio-intro':       "Adoptio started as a practice project for the Google UX Design Certificate course. However, during my research, I realized the lack of adoption apps in developing countries. Inspired by this gap and my passion for design and social impact, I decided to turn Adoptio into a real project that I plan to bring to life in 2025. The UX design is now complete, featuring a user-centered approach that simplifies and enhances the pet adoption journey. With the potential to significantly increase adoption rates and improve animal welfare, the next step is to develop the app using React, ensuring a seamless and responsive experience for users. Adoptio is poised to become a transformative tool for connecting pets with their forever homes.",
      'adoptio-problem-p':   'Many pet lovers in developing countries struggle to find reliable, accessible platforms to adopt pets, leaving countless animals in shelters or on the streets without homes.',
      'adoptio-goal-p':      'Design and develop an intuitive mobile application that simplifies the pet adoption process, making it accessible, engaging, and secure for users, while increasing adoption rates and improving animal welfare.',
      'adoptio-summary-p1':  'User research revealed both the scale of the stray pet issue and the needs of potential adopters. Quantitative data highlighted the problem: Colombia has an estimated 900,000 stray dogs and cats, while Guatemala and Albania also face significant challenges with overpopulation of stray animals in urban areas. Surveys showed that 85% of respondents felt the lack of accessible adoption platforms was a barrier, and 70% indicated they would adopt more readily if the process were simpler and more transparent.',
      'adoptio-summary-p2':  "Qualitative insights from interviews provided deeper understanding. Participants expressed frustrations with delays in communication with adoption centers, insufficient information about pets (such as health and behavior), and a lack of real-time updates on availability. Many emphasized the importance of tools that encourage responsible pet ownership. These findings directly shaped Adoptio's user-centered design, ensuring the app meets the needs of adopters while addressing the stray pet crisis in these regions.",
      'adoptio-persona-h2':  '"Adopting is more than giving a home; it\'s giving love, hope, and a second chance to those who need it most."',
      'adoptio-persona-blockquote': 'María, a 35 year-old mom, married with two kids. A teacher by heart. She is deeply moved by the plight of abandoned animals. She sees adopting pets as a way to provide a loving home and to teach her children compassion. She believes every animal, regardless of age, size, or breed, deserves a chance at a better life.',
      'adoptio-accessibility-p': 'To prioritize accessibility, the app interface includes options to toggle between languages, making it more inclusive for users in different regions. A light and dark mode feature was implemented to accommodate those sensitive to screen brightness. Additionally, prominent headers and alternative text (alt) for images were added to ensure compatibility with screen readers, improving the experience for visually impaired users. These considerations make Adoptio more user-friendly and accessible to a wider audience.',
      'adoptio-takeaways-p': 'This project taught me the importance of deeply understanding user needs, such as the desire for a streamlined, accessible, and transparent adoption process. User research highlighted that building trust and providing clear, intuitive solutions are key to creating meaningful and impactful user experiences. By prioritizing accessibility and user-centered design, I gained valuable insights into designing products that can drive social change and foster loyalty in underserved markets.',
      'adoptio-sticker-p':   "I added a Sticker Sheet to make it easy to develop the app's unique components and styles.",
      'adoptio-usability-p1': 'A remote usability study was conducted with five participants from various regions to evaluate the ease of use and effectiveness of Adoptio in addressing user needs. The study focused on identifying pain points and potential improvements to enhance the adoption process.',
      'adoptio-usability-p2': 'We gathered and organized the data, which led to the following key insights:',
      'adoptio-conclusion-p': 'Adoptio represents more than just a design project—it\'s a tool that has the potential to transform lives by connecting pets with loving families, addressing a critical need in developing countries. This experience taught me the value of combining user-centered design with social impact, and how thoughtful research and usability can drive meaningful change. If you\'d like to discuss this project or future opportunities, feel free to contact me at <a href="mailto:hello@uxrodrigo.com">hello@uxrodrigo.com</a>.',
      'adoptio-btn-xd':      'View Adobe XD Prototype',
      'adoptio-responsibilities-ul': '<li>Conduct user research</li><li>Identify pain points</li><li>Ideate solutions</li><li>Create wireframes</li><li>Conduct usability studies</li><li>Develop prototypes</li><li>Implement in React</li>',
      'adoptio-goals-ul':            '<li>To adopt pets responsibly and ensure they receive the love and care they need.</li>',
      'adoptio-frustrations-ul':     '<li>Slow responses when adopting through social media or online platforms.</li><li>The welfare of the animals post-adoption.</li>',

      /* ── Coffee ── */
      'coffee-title':           'Coffee Shop UX Research/Design',
      'coffee-intro':           'In this project, I followed the Design Thinking approach. I began with qualitative and quantitative research to define user personas and identify pain points. Next, I used a user journey map to ideate solutions and created wireframes and prototypes in Figma. Finally, I conducted usability testing to refine the design based on user feedback. Once the design was finalized, I developed the site using React.',
      'coffee-problem-p':       'The company faced significant challenges managing orders from their business-to-business (B2B) customers without an online store. Additionally, they were uncertain about the viability of transitioning to a subscription-based model for retail customers.',
      'coffee-goal-p':          'To conduct in-depth research to understand the coffee market landscape in the country, along with the specific needs of end users. The objective was to design a seamless online ordering system that would be accessible to a wide range of users while also gathering the insights needed to evaluate the feasibility of a subscription model.',
      'coffee-role-p':          "As a User Experience Designer and Developer, I led the project's research and design process by conducting both quantitative and qualitative studies. My responsibilities included prototyping solutions, running usability tests, and ensuring the final design provided an intuitive and efficient user experience. I also developed the app in React, ensuring every feature functioned seamlessly.",
      'coffee-responsibilities-p': "I was tasked with researching user behaviors and business needs, synthesizing that data into actionable insights, and translating them into a functional, user-friendly solution. This solution not only streamlined the company's order-taking process but also provided the necessary data to assess whether a subscription model was viable for their retail customers.",
      'coffee-summary-p':       'This research on coffee consumption in Guatemala combined quantitative data with interviews from 50 participants aged 25-45. It highlighted a strong coffee culture, with an average consumption of 2-4 cups per day, and revealed a preference for convenience, such as online shopping to save time and avoid traffic. Many participants showed interest in subscription services for potential cost savings. Insights from the International Coffee Organization and Anacafé complemented the findings, guiding the development of a user-friendly online coffee store.',
      'coffee-persona-h2':      '"I love drinking coffee to wake up in the mornings. I like ordering online because I save time and avoid traffic from going to the store."',
      'coffee-persona-blockquote': 'Sara is a 28-year-old marketer and business owner from Guatemala. She loves waking up with a cup of coffee. She likes to save money on everyday consumables and avoid spending time in traffic to go shopping.',
      'coffee-dev-h2':          'Development',
      'coffee-dev-p':           'The web app was then developed using React, and it is still under active development.',
      'coffee-btn-github':      'View Github Project',
      'coffee-postlaunch-h2':   'Post-launch Usability Study',
      'coffee-usability-p1':    "We conducted a Usability Study to figure out what specific difficulties users encountered when they tried to complete the core tasks of the Café Don Lucas' app: Product selection, ordering, and in-app navigation.",
      'coffee-usability-p2':    'We conducted an unmoderated usability study with participants in Guatemala (remote), where participants went through the usability study in their own homes. We interviewed 5 people from mixed backgrounds, genders, and abilities.',
      'coffee-usability-p3':    'We then gathered the data and organized it to identify themes, which resulted in the following insights:',
      'coffee-usability-p4':    'Given the insights we found through our Usability Study, we adapted the design to improve the user experience and make the web app easier to use.',
      'coffee-accessibility-p': 'The website was designed for accessibility with Spanish and English language options, ensuring seamless navigation for all users. Dark and Light modes were added to accommodate visual preferences and improve usability in different lighting conditions, creating a more inclusive and adaptable user experience.',
      'coffee-btn-website':     'View Website',
      'coffee-btn-figma':       'View Figma Prototype',
      'coffee-goals-ul':        '<li>Avoiding traffic and lines by ordering online.</li><li>Saving money on everyday consumer products.</li><li>Waking up with a cup of coffee.</li>',
      'coffee-frustrations-ul': '<li>Forgetting to buy coffee.</li><li>Standing in line to pay for coffee at checkout.</li><li>Waking up late or without energy.</li>',

      /* ── MWD ── */
      'mwd-title':     'Mit Was Drin UI/UX Design',
      'mwd-intro':     'In this project, I worked on the Research, Design, and Ideation for a cannabis education blog targeting the German market. With the gradual legalization of medicinal cannabis in the EU, the startup aims to inform German patients about the essentials of the cannabis industry.',
      'mwd-problem-p': 'A German cannabis education blog needed a fresh start: a new brand, audience, and strategy to make money. They wanted a website with space for blog posts, a podcast, a contact form, and a dosage calculator.',
      'mwd-role-p':    'As the UX Designer, I worked with their research and ideas to create a plan:',
      'mwd-launch-p':  'The site is now ready, and the brand is preparing to launch!',
      'mwd-btn-xd':    'View Adobe XD Prototype',

      /* ── Impulso ── */
      'impulso-title': 'Impulso Design System',
      'impulso-intro': 'As a UX Developer at a Guatemalan non-profit with over 4,000 employees, I helped create Impulso, a design system aimed at organizing and standardizing all in-house apps used for group-loan operations. Impulso serves as a single source of truth across platforms, managing color tokens, typography scales, spacing systems, light and dark modes, and responsive layouts for mobile, tablet, and desktop. My role included auditing UI patterns, designing reusable components in Figma using Atomic Design principles, and collaborating with dev teams to ensure smooth implementation. The goal was simple: standardize, structure, and ensure brand consistency across the organization.',

      /* ── Unity ── */
      'unity-title':          'Unity Design System',
      'unity-intro':          'As the UX Designer for Wind Hill Growers, we faced the challenge of creating a cohesive brand experience across multiple international markets. To address this, we developed "Unity", a comprehensive design system that acts as a single source of truth for all design assets. Unity was instrumental in bringing the brand to a new level of consistency, making it easier to manage and scale across various platforms.',
      'unity-zero-height-p':  'The Unity Design System is seamlessly integrated between Figma and ZeroHeight, creating a dynamic workflow that evolves alongside the brand. This connection allows the team to continuously update and refine design assets in Figma, ensuring that any changes are automatically reflected in ZeroHeight. As the brand grows and design scenarios change, this integration helps keep the design system relevant and up-to-date, enabling the team to adapt quickly to new requirements. This setup not only promotes consistency across all platforms but also supports the team in maintaining a cohesive brand experience as they scale and expand into new markets.',
      'unity-btn-figma':      'View Figma File',
      'unity-zero-height-h2': 'Zero Height',
      'unity-btn-zeroheight': 'View In Zero Height',
    },

    es: {
      /* ── Nav ── */
      'nav-home':         'Inicio',
      'nav-portfolio':    'Portafolio',
      'nav-about':        'Sobre mí',
      'nav-contact':      'Contacto',
      'nav-download-cv':  'Descargar CV',

      /* ── Hero ── */
      'hero-intro':  "Me llamo Rodrigo. Soy un Desarrollador de Experiencia de Usuario que ama diseñar y desarrollar",
      'hero-line-1': 'aplicaciones móviles',
      'hero-line-2': 'aplicaciones web',
      'hero-line-3': 'comunidades',

      /* ── Panel ── */
      'panel-service-1': 'Diseño para<br>Web y Móvil',
      'panel-service-2': 'HTML, CSS, <br>Javascript, React',
      'panel-service-3': 'Maquetas de <br>Producto',
      'panel-cta':       '¡Pongámonos en contacto!',

      /* ── Portfolio ── */
      'portfolio-heading':  'Trabajos Recientes',
      'portfolio-btn-ux':   'Diseño UX/UI',
      'portfolio-btn-ds':   'Sistemas de Diseño',

      /* ── Skills ── */
      'about-label':   'Profesional',
      'about-heading': 'Mis Habilidades Actuales',

      /* ── Experience ── */
      'exp-heading':     'Mi Experiencia',
      'exp-description': 'Diseñador UX y Desarrollador con más de 10 años de experiencia en la industria tecnológica, especializado en diseño y desarrollo web, sistemas de diseño y automatización de procesos. Capacidad comprobada para entregar soluciones efectivas en entornos dinámicos y de alta demanda.',
      'exp-contact-btn': 'Contáctame',

      'job-bareco':     "Trabajé en un proyecto de digitalización de un año para Banco Industrial, uno de los bancos más grandes de Guatemala. Fui contratado para instalar nuevo hardware de escaneo de documentos y actualizar sistemas de computadoras y servidores.",
      'job-intuitiva':  "Como empleado en una startup SaaS que desarrollaba software ERP para contabilidad, inventario, ventas y compras en diversas industrias, contribuí en ventas, implementación y soporte, adquiriendo experiencia práctica en cada área.",
      'job-freelancer': "Como contratista independiente, me especialicé en diseño y desarrollo web para restaurantes y negocios de hospitalidad, creando sitios web personalizados para mejorar su presencia en línea. Además, implementé soluciones de software para apoyar sus necesidades operativas.",
      'job-whg':        "Lideré el diseño UX/UI y el desarrollo de sistemas de diseño para una empresa con sede en EE.UU. dirigida a los mercados de EE.UU. y Alemania. Mi rol incluye construir un sistema de diseño cohesivo, desarrollar soluciones JavaScript y optimizar una plataforma de e-commerce e inventario para ofrecer experiencias eficientes centradas en el usuario.",
      'job-fge':        "Responsable de diseñar, prototipar y desarrollar sitios web e interfaces digitales. El objetivo es garantizar un equilibrio entre la estética visual, la funcionalidad y la experiencia del usuario, contribuyendo a la creación de soluciones digitales innovadoras y efectivas.",
      'job-yotaxi':     "Lideré el diseño UX de extremo a extremo y el desarrollo full-stack de la app móvil YoTaxi para Yellow Cab de San Francisco, aplicando Design Thinking para entregar una solución accesible centrada en el usuario. Realicé investigación de usuarios, pruebas de usabilidad y colaboración con stakeholders, mientras construía el frontend y backend con React Native, TypeScript, Express.js y AWS.",
      'job-ixdf':       "Como Country Manager de IxDF, superviso los Grupos Locales en Guatemala. Cada grupo es apoyado por Líderes Locales en sus respectivas ciudades. Ayudo a garantizar que los Líderes Locales organicen meetups donde personas interesadas en diseño puedan aprender, compartir ideas y conectarse entre sí.",

      /* ── Education ── */
      'edu-heading':     'Mi Educación',
      'edu-description': "Mi camino hacia el UX fue poco convencional—se sentía al revés, o como me gusta decir, \"lo estaba haciendo de ingeniería inversa\". Comencé estudiando redes y telecomunicaciones en la Universidad Galileo, pero me atrajo más el desarrollo web. Esto me llevó a aprender desarrollo full-stack con Ruby on Rails y explorar React. Mi pasión por las experiencias centradas en el usuario creció, y obtuve el Certificado Profesional de Diseño UX de Google. Este camino único me ha dado una comprensión profunda tanto de los aspectos técnicos como de diseño del UX.",
      'edu-ccnp':        "Este curso proporcionó una comprensión profunda de los principios de redes, incluyendo la configuración y gestión de infraestructura de red. Los temas cubiertos incluyeron enrutamiento, conmutación y seguridad de redes, preparando a los participantes para escenarios reales de diseño y resolución de problemas.",
      'edu-telecom':     "Estudié telecomunicaciones con enfoque en redes, pero dejé en mi tercer año ya que me interesaban más los campos con retroalimentación visual, como el desarrollo web y el diseño, lo que llevó a mi pasión por el UX y el desarrollo frontend.",
      'edu-rails':       "Decidí convertirme en programador después de que un mentor me dijera que no lo era, lo que me motivó a demostrar lo contrario. A través de este curso, aprendí desarrollo web full-stack con Ruby on Rails, lo que impulsó mi carrera en programación y desarrollo frontend.",
      'edu-google':      "Este certificado me proporcionó una comprensión integral del diseño UX, incluyendo investigación de usuarios, wireframing, prototipado y pruebas de usabilidad. Consolidó mis habilidades para crear diseños centrados en el usuario y refinó mi enfoque para resolver problemas de diseño del mundo real.",
      'edu-react':       "Este curso profundizó mis habilidades en la construcción de aplicaciones web dinámicas con React. Aprendí a crear componentes reutilizables, gestionar el estado de manera efectiva y desarrollar interfaces responsivas centradas en el usuario.",

      /* ── Counters ── */
      'counter-name-1': 'Años de Experiencia',
      'counter-desc-1': 'Entregando soluciones efectivas en múltiples industrias.',
      'counter-name-2': 'Certificaciones profesionales',
      'counter-desc-2': 'Comprometido con el aprendizaje continuo y el avance de habilidades.',
      'counter-name-3': 'Herramientas dominadas',
      'counter-desc-3': 'Desde Adobe Suite hasta GitHub, creando soluciones digitales eficientes.',

      /* ── Companies ── */
      'companies-label':   'Empresas',
      'companies-heading': 'Empresas que han confiado en mí',

      /* ── Contact ── */
      'contact-heading':       'Pongámonos en contacto',
      'contact-name-label':    'Nombre',
      'contact-email-label':   'Correo electrónico',
      'contact-message-label': 'Mensaje',
      'contact-submit':        'Enviar Mensaje',

      /* ── Expertise ── */
      'expertise-label':       'Mi Especialización',
      'expertise-heading':     'Enfoque en Design Thinking',
      'expertise-description': "Con el enfoque de Design Thinking podemos poner las necesidades de nuestros usuarios en primer lugar para dar vida a experiencias impresionantes.",
      'expertise-service-1':   'Diseño UX <br>y Desarrollo',
      'expertise-service-2':   'Logos<br>e Iconos',
      'expertise-service-3':   'Maquetas de <br>Producto',

      /* ── Detail pages ── */
      'detail-client':    'Cliente',
      'detail-release':   'Publicación',
      'detail-email-me':  'Envíame un correo',

      /* ── Footer ── */
      'footer-home':      'Inicio',
      'footer-portfolio': 'Portafolio',
      'footer-about':     'Sobre mí',
      'footer-contact':   'Contacto',
      'footer-heading':   '¡Pongámonos en Contacto!',
      'footer-text':      '¡Me encantaría saber de ti! Por favor contáctame.',

      /* ── Case Study — shared ── */
      'cs-case-study':        'Caso de Estudio',
      'cs-overview':          'Resumen del Proyecto',
      'cs-problem':           'El Problema',
      'cs-goal':              'El Objetivo',
      'cs-my-role':           'Mi Rol',
      'cs-responsibilities':  'Responsabilidades',
      'cs-user-research':     'Investigación de Usuarios',
      'cs-summary':           'Resumen',
      'cs-user-personas':     'Perfiles de Usuario',
      'cs-goals-h4':          'Objetivos',
      'cs-frustrations-h4':   'Frustraciones',
      'cs-user-journey':      'Mapa de Viaje del Usuario',
      'cs-user-flow':         'Flujo de Usuario',
      'cs-story-board':       'Story Board',
      'cs-info-arch':         'Arquitectura de Información',
      'cs-paper-wireframe':   'Wireframe en Papel',
      'cs-digital-wireframe': 'Wireframe Digital',
      'cs-lofi':              'Prototipo de Baja Fidelidad',
      'cs-hifi':              'Prototipo de Alta Fidelidad',
      'cs-sticker-sheet-h2':  'Hoja de Stickers',
      'cs-sticker-sheet':     'Hoja de Stickers',
      'cs-accessibility':     'Accesibilidad',
      'cs-thank-you':         '¡Muchas gracias!',
      'cs-usability-study':   'Estudio de Usabilidad',
      'cs-round1':            'Hallazgos de la Ronda 1',
      'cs-round2':            'Hallazgos de la Ronda 2',
      'cs-before-after':      'Antes y Después',
      'cs-impact':            'Impacto',
      'cs-takeaways':         'Lecciones Aprendidas',
      'cs-next-steps':        'Próximos Pasos',
      'cs-conclusion':        'Conclusión',
      'cs-contact-label':     'Pongámonos en contacto',
      'cs-contact-cta':       '¿Tienes un proyecto en mente? ¡Construyamos algo grandioso juntos!',
      'cs-btn-pdf':           'Descargar PDF del Caso de Estudio',
      'cs-figma-h2':          'Figma',
      'cs-zero-height-h2':    'ZeroHeight',
      'cs-principles':        'Principios',
      'cs-color-palette':     'Paleta de Colores',
      'cs-layouts':           'Diseños',
      'cs-type-scale':        'Escala Tipográfica',
      'cs-elements':          'Elementos',
      'cs-design-scenarios':  'Escenarios de Diseño',
      'cs-us-plan-h1':        'Plan de Estudio de Usabilidad',
      'cs-introduction':      'Introducción',
      'cs-research-questions':'Preguntas de Investigación',
      'cs-kpis':              'KPIs',
      'cs-methodology':       'Metodología',
      'cs-participants':      'Participantes',
      'cs-prototype-desktop': 'Prototipo Desktop',

      /* ── YoTaxi ── */
      'yotaxi-title':           'App YoTaxi: Diseño UX',
      'yotaxi-intro':           'YoTaxi de San Francisco enfrentaba desafíos con su experiencia de usuario. Los apoyé rediseñando su app mediante la metodología de Design Thinking. Realizamos investigación de usuarios y un estudio de usabilidad fundacional, definimos objetivos clave, colaboramos con stakeholders para idear soluciones, y prototipamos un nuevo diseño en Figma que satisface mejor las necesidades del usuario.',
      'yotaxi-problem-p':       'Muchos pasajeros en San Francisco encontraban difícil acceder a servicios de taxi confiables, inclusivos y fáciles de usar. La app existente carecía de claridad, accesibilidad y funcionalidad moderna, lo que generaba frustración y baja satisfacción del usuario.',
      'yotaxi-goal-p':          'Diseñar y desarrollar una aplicación móvil intuitiva que simplifique la experiencia de solicitud de viajes, mejore la accesibilidad para todos los usuarios (incluidas personas con discapacidades) y apoye a la comunidad local de taxis haciendo de YoTaxi una alternativa competitiva y fácil de usar.',
      'yotaxi-role-p':          'Diseñador y Desarrollador de Experiencia de Usuario (UX).',
      'yotaxi-summary-p':       'La investigación de usuarios con más de 50 participantes reveló que los pasajeros querían más control y personalización en su experiencia. Las funciones más solicitadas incluían: la capacidad de agregar una parada durante el viaje, establecer preferencias de accesibilidad y pago, elegir música y configuración de conversación, enviar mensajes al conductor y recibir notificaciones en tiempo real sobre el estado de su viaje.',
      'yotaxi-persona-h2':      '"Solo quiero sentirme segura y saber que mi viaje es confiable. Dependo de estos servicios para movilizarme."',
      'yotaxi-persona-blockquote': 'Linda depende de YoTaxi para visitas al médico y mandados. Aprecia poder programar viajes, pero tiene dificultades con la interfaz de la app y ha perdido viajes por errores al reservar. Valora a los conductores amables y se sentiría más segura con una función de emergencia.',
      'yotaxi-sticker-p':       'Añadí una Hoja de Stickers para facilitar el desarrollo de los componentes y estilos únicos de la app.',
      'yotaxi-accessibility-p': 'Para priorizar la accesibilidad, YoTaxi incluye opciones de cambio de idioma para apoyar a usuarios de diferentes regiones, así como modos claro y oscuro para mayor comodidad visual. La interfaz cuenta con encabezados destacados y texto alternativo para imágenes, garantizando compatibilidad con lectores de pantalla y mejorando la usabilidad para personas con discapacidad visual.',
      'yotaxi-btn-appstore':    'Ver en App Store',
      'yotaxi-responsibilities-ul': '<li>Realizar investigación de usuarios</li><li>Identificar puntos de dolor</li><li>Idear soluciones</li><li>Crear wireframes</li><li>Realizar estudios de usabilidad</li><li>Desarrollar prototipos</li>',
      'yotaxi-goals-ul':            '<li>Llegar a citas médicas y hacer mandados de manera eficiente.</li><li>Garantizar que el viaje sea económico y seguro.</li>',
      'yotaxi-frustrations-ul':     '<li>Profesionalismo inconsistente de los conductores.</li><li>Dificultad para navegar la app para reservar un viaje.</li>',

      /* ── Akisi ── */
      'akisi-title':       'Diseño UI de Akisi Pay',
      'akisi-intro':       'Como Desarrollador UX en una organización sin fines de lucro en Guatemala, diseñé la UI de un sistema POS móvil que permite a pequeños empresarios aceptar pagos con tarjeta de crédito directamente desde sus teléfonos.',
      'akisi-problem-p':   'Una empresa fintech sin fines de lucro en Guatemala, dedicada a apoyar a personas en situación de pobreza mediante préstamos individuales y grupales, cuenta con más de 4,000 empleados, incluidos 35 desarrolladores. Necesitaban lanzar una Billetera Digital para que sus clientes pudieran gestionar préstamos, pagar productos y servicios, recibir remesas y retirar fondos a través de empresas aliadas. Me encomendaron diseñar la UI de su app POS móvil, "Akisi Pay". Aplicando buenas prácticas de UX, creé un prototipo de alta fidelidad en Figma con la metodología de Diseño Atómico, asegurando que todos los componentes estuvieran conectados y fáciles de actualizar. A lo largo del proyecto, colaboré con equipos multifuncionales y me comuniqué directamente con stakeholders para entregar una UI elegante, moderna y minimalista.',
      'akisi-btn-playstore': 'Ver en Play Store',

      /* ── GFlow ── */
      'gflow-title':           'Diseño UX de GFlow',
      'gflow-intro':           'Como Desarrollador UX en una ONG guatemalteca con más de 4,000 empleados, ayudé a rediseñar sus apps internas utilizando el enfoque de Design Thinking para mejorar la experiencia de usuario en sus operaciones de préstamos grupales. Mi rol incluyó realizar investigación organizacional para empatizar con los usuarios, definir puntos de dolor clave e idear soluciones con un equipo de seis desarrolladores y diversos stakeholders. Luego prototipé y probé los diseños con usuarios reales. La solución final mejoró la experiencia del usuario en un 150% y ahorró a la empresa más de 10,000 horas-hombre al mes.',
      'gflow-problem-p':       'La empresa enfrentaba importantes desafíos de UX en sus apps internas utilizadas por más de 4,000 empleados para gestionar préstamos grupales. Los usuarios reportaban frecuentemente frustración e insatisfacción. Además, la empresa carecía de un Sistema de Diseño que garantizara estructura, consistencia y coherencia de marca en sus aplicaciones, lo que resultaba en interfaces desalineadas, decisiones de diseño redundantes y retrasos en el desarrollo.',
      'gflow-goal-p':          'El objetivo era comprender y empatizar profundamente con nuestros usuarios: conocer sus necesidades, metas, motivaciones y puntos de dolor. A partir de esto, buscábamos entregar soluciones adaptadas a sus desafíos reales, reducir el tiempo en tarea y las tasas de error, aumentar la adopción de la app y reducir costos para la empresa eliminando tareas redundantes.',
      'gflow-role-p':          "Como Diseñador y Desarrollador de Experiencia de Usuario, lideré el proceso de investigación y diseño del proyecto mediante estudios cuantitativos y cualitativos. Colaboré estrechamente con equipos multifuncionales, desarrolladores, stakeholders y usuarios finales. Mis responsabilidades incluyeron prototipar soluciones, realizar pruebas de usabilidad y asegurar que el diseño final ofreciera una experiencia de usuario intuitiva, multidispositivo y eficiente.",
      'gflow-responsibilities-p': "Fui responsable de realizar un estudio de usabilidad fundacional, llevar a cabo investigación cuantitativa y cualitativa, colaborar con stakeholders, desarrolladores y usuarios para definir los objetivos de la app, facilitar sesiones de ideación con el equipo de desarrollo, prototipar mockups de baja y alta fidelidad en Figma, y conducir estudios de usabilidad para refinar el diseño.",
      'gflow-summary-p':       'Realizamos un estudio de investigación de usuarios con 330 participantes para identificar problemas en GFlow. El 72% reportó lentitud en el sistema, el 58% tuvo dificultades para subir documentos y el 65% creía que el proceso de aprobación de préstamos podía ser más rápido. Los usuarios también señalaron problemas con la geolocalización, bloqueos del sistema y la necesidad de consultar múltiples aplicaciones.',
      'gflow-usability-study-p': 'Además, realizamos un Estudio de Usabilidad Fundacional con 251 participantes, incluidas grabaciones de pantalla de 6 usuarios completando tareas clave en GFlow. Identificamos problemas recurrentes con la carga de imágenes, geolocalización, aprobaciones de préstamos y gestión de cartera. La Escala de Usabilidad del Sistema (SUS) arrojó un puntaje promedio de 44/100.',
      'gflow-persona-h2':      '"Ana es detallista y busca eficiencia en su trabajo, pero los errores en GForm le generan estrés y le hacen perder tiempo."',
      'gflow-persona-blockquote': 'Un cliente llega a la sucursal para solicitar un préstamo, pero Ana debe corregir su nombre y reingresar datos en varias plataformas. La espera incomoda al cliente y ralentiza su trabajo.',
      'gflow-usability-study-intro-p': 'Se realizó un Estudio de Usabilidad con el Prototipo de Alta Fidelidad, donde usuarios reales completaron cinco tareas simples y respondieron una encuesta SUS. Los resultados revelaron una mejora del 150% en la experiencia general. Una usuaria compartió: "Este nuevo diseño se siente como si alguien se hubiera metido en mi cabeza y diseñado una solución a todos mis problemas en el trabajo."',
      'gflow-usability-study-moderated-p': 'Realizamos un estudio de usabilidad moderado con participantes en Guatemala (presencial), donde los participantes completaron el estudio en sus entornos de trabajo reales. Entrevistamos a 5 personas de distintos orígenes, géneros y capacidades.',
      'gflow-usability-study-gathered-p': 'Luego recopilamos y organizamos los datos para identificar temas, lo que dio como resultado los siguientes hallazgos:',
      'gflow-usability-study-adapted-p':  'Con base en los hallazgos del Estudio de Usabilidad, adaptamos el diseño para mejorar la experiencia del usuario y hacer que la app sea más fácil de usar.',
      'gflow-accessibility-p': 'Para mejorar la accesibilidad de la app, implementamos los modos Claro y Oscuro y seleccionamos combinaciones de colores de alto contraste para garantizar la legibilidad. Además, diseñamos una función de "Cambio de Idioma" que permite a los usuarios alternar entre español y lenguas mayas, promoviendo la inclusión y equidad para las comunidades indígenas.',
      'gflow-impact-p':        'La solución final generó una mejora del 150% en la experiencia del usuario, medida mediante SUS y comentarios directos. Los empleados reportaron sentirse más seguros y menos frustrados, y los tiempos de completar tareas se redujeron significativamente. La nueva interfaz ahorró a la empresa más de 10,000 horas-hombre al mes, aumentó la productividad y estableció una base sólida para el crecimiento futuro con un Sistema de Diseño escalable.',
      'gflow-goals-ul':        '<li>Procesar solicitudes sin errores ni pasos repetitivos.</li><li>Brindar un servicio rápido y eficiente.</li>',
      'gflow-frustrations-ul': '<li>Debe corregir manualmente datos como nombres con "ñ" y apellidos de cofirmantes.</li><li>Necesita usar múltiples aplicaciones para completar un solo proceso.</li>',

      /* ── Adoptio ── */
      'adoptio-title':       'App Adoptio: Diseño UX y Desarrollo',
      'adoptio-intro':       'Adoptio comenzó como un proyecto de práctica para el Curso de Certificado de Diseño UX de Google. Sin embargo, durante mi investigación, me di cuenta de la falta de apps de adopción de mascotas en países en desarrollo. Inspirado por esta brecha y mi pasión por el diseño y el impacto social, decidí convertir Adoptio en un proyecto real que planeo llevar a la vida en 2025. El diseño UX ya está completo, con un enfoque centrado en el usuario que simplifica y mejora el proceso de adopción de mascotas. El siguiente paso es desarrollar la app con React.',
      'adoptio-problem-p':   'Muchos amantes de las mascotas en países en desarrollo tienen dificultades para encontrar plataformas confiables y accesibles para adoptar mascotas, dejando a innumerables animales en refugios o en las calles sin hogar.',
      'adoptio-goal-p':      'Diseñar y desarrollar una aplicación móvil intuitiva que simplifique el proceso de adopción de mascotas, haciéndolo accesible, atractivo y seguro para los usuarios, mientras aumenta las tasas de adopción y mejora el bienestar animal.',
      'adoptio-summary-p1':  'La investigación de usuarios reveló tanto la magnitud del problema de las mascotas callejeras como las necesidades de los potenciales adoptantes. Colombia tiene aproximadamente 900,000 perros y gatos callejeros, mientras que Guatemala y Albania también enfrentan importantes desafíos. El 85% de los encuestados consideraba la falta de plataformas accesibles como un obstáculo, y el 70% indicó que adoptaría más fácilmente si el proceso fuera más simple y transparente.',
      'adoptio-summary-p2':  "Los hallazgos cualitativos de las entrevistas proporcionaron una comprensión más profunda. Los participantes expresaron frustración por los retrasos en la comunicación con los centros de adopción, la información insuficiente sobre las mascotas y la falta de actualizaciones en tiempo real. Estos hallazgos dieron forma al diseño centrado en el usuario de Adoptio.",
      'adoptio-persona-h2':  '"Adoptar es más que dar un hogar; es dar amor, esperanza y una segunda oportunidad a quienes más lo necesitan."',
      'adoptio-persona-blockquote': 'María, una mamá de 35 años, casada con dos hijos. Maestra de corazón. Le conmueve profundamente la situación de los animales abandonados. Ve la adopción de mascotas como una forma de dar un hogar amoroso y enseñarles compasión a sus hijos. Cree que cada animal merece una oportunidad de tener una vida mejor.',
      'adoptio-accessibility-p': 'Para priorizar la accesibilidad, la interfaz de la app incluye opciones para cambiar de idioma, haciéndola más inclusiva para usuarios de diferentes regiones. Se implementaron modos claro y oscuro para quienes son sensibles al brillo de la pantalla. Además, se añadieron encabezados destacados y texto alternativo para imágenes, asegurando compatibilidad con lectores de pantalla.',
      'adoptio-takeaways-p': 'Este proyecto me enseñó la importancia de comprender profundamente las necesidades del usuario, como el deseo de un proceso de adopción simplificado, accesible y transparente. La investigación de usuarios destacó que generar confianza y brindar soluciones claras e intuitivas son clave para crear experiencias de usuario significativas e impactantes.',
      'adoptio-sticker-p':   'Añadí una Hoja de Stickers para facilitar el desarrollo de los componentes y estilos únicos de la app.',
      'adoptio-usability-p1': 'Se realizó un estudio de usabilidad remoto con cinco participantes de diversas regiones para evaluar la facilidad de uso y efectividad de Adoptio. El estudio se centró en identificar puntos de dolor y posibles mejoras para el proceso de adopción.',
      'adoptio-usability-p2': 'Recopilamos y organizamos los datos, lo que llevó a los siguientes hallazgos clave:',
      'adoptio-conclusion-p': 'Adoptio representa más que un proyecto de diseño: es una herramienta con el potencial de transformar vidas conectando mascotas con familias amorosas en países en desarrollo. Esta experiencia me enseñó el valor de combinar el diseño centrado en el usuario con el impacto social. Si deseas conversar sobre este proyecto, contáctame en <a href="mailto:hello@uxrodrigo.com">hello@uxrodrigo.com</a>.',
      'adoptio-btn-xd':      'Ver Prototipo en Adobe XD',
      'adoptio-responsibilities-ul': '<li>Realizar investigación de usuarios</li><li>Identificar puntos de dolor</li><li>Idear soluciones</li><li>Crear wireframes</li><li>Realizar estudios de usabilidad</li><li>Desarrollar prototipos</li><li>Implementar en React</li>',
      'adoptio-goals-ul':            '<li>Adoptar mascotas de manera responsable y asegurar que reciban el amor y cuidado que necesitan.</li>',
      'adoptio-frustrations-ul':     '<li>Respuestas lentas al adoptar a través de redes sociales o plataformas en línea.</li><li>El bienestar de los animales después de la adopción.</li>',

      /* ── Coffee ── */
      'coffee-title':           'Investigación/Diseño UX para Café',
      'coffee-intro':           'En este proyecto, seguí el enfoque de Design Thinking. Comencé con investigación cualitativa y cuantitativa para definir perfiles de usuario e identificar puntos de dolor. Luego, usé un mapa de viaje del usuario para idear soluciones y creé wireframes y prototipos en Figma. Finalmente, realicé pruebas de usabilidad para refinar el diseño y desarrollé el sitio con React.',
      'coffee-problem-p':       'La empresa enfrentaba importantes desafíos para gestionar pedidos de sus clientes empresariales (B2B) sin una tienda en línea. Además, tenía incertidumbre sobre la viabilidad de un modelo de suscripción para clientes minoristas.',
      'coffee-goal-p':          'Realizar una investigación exhaustiva para comprender el panorama del mercado del café y las necesidades específicas de los usuarios finales. El objetivo era diseñar un sistema de pedidos en línea accesible, a la vez que se recopilaban datos para evaluar la viabilidad de un modelo de suscripción.',
      'coffee-role-p':          "Como Diseñador y Desarrollador de Experiencia de Usuario, lideré el proceso de investigación y diseño mediante estudios cuantitativos y cualitativos. Mis responsabilidades incluyeron prototipar soluciones, realizar pruebas de usabilidad y asegurar una experiencia intuitiva y eficiente. También desarrollé la app en React.",
      'coffee-responsibilities-p': "Fui responsable de investigar los comportamientos de los usuarios y las necesidades del negocio, sintetizar esos datos en insights accionables y traducirlos en una solución funcional y fácil de usar.",
      'coffee-summary-p':       'Esta investigación sobre el consumo de café en Guatemala combinó datos cuantitativos con entrevistas a 50 participantes de entre 25 y 45 años. Destacó una fuerte cultura cafetera, con un consumo promedio de 2 a 4 tazas al día, y reveló preferencia por la conveniencia, como comprar en línea para ahorrar tiempo y evitar el tráfico.',
      'coffee-persona-h2':      '"Me encanta tomar café para despertar en las mañanas. Me gusta comprar en línea porque ahorro tiempo y evito el tráfico de ir a la tienda."',
      'coffee-persona-blockquote': 'Sara es una marketera y empresaria de 28 años de Guatemala. Le encanta despertar con una taza de café. Le gusta ahorrar dinero en productos de consumo diario y evitar el tráfico para ir de compras.',
      'coffee-dev-h2':          'Desarrollo',
      'coffee-dev-p':           'La app web fue desarrollada con React y sigue en desarrollo activo.',
      'coffee-btn-github':      'Ver Proyecto en Github',
      'coffee-postlaunch-h2':   'Estudio de Usabilidad Post-lanzamiento',
      'coffee-usability-p1':    "Realizamos un Estudio de Usabilidad para identificar las dificultades específicas que los usuarios encontraban al intentar completar las tareas principales de la app de Café Don Lucas: selección de productos, realización de pedidos y navegación dentro de la app.",
      'coffee-usability-p2':    'Realizamos un estudio de usabilidad no moderado con participantes en Guatemala (remoto), donde los participantes completaron el estudio en sus propios hogares. Entrevistamos a 5 personas de distintos orígenes, géneros y capacidades.',
      'coffee-usability-p3':    'Luego recopilamos y organizamos los datos para identificar temas, lo que dio como resultado los siguientes hallazgos:',
      'coffee-usability-p4':    'Con base en los hallazgos del Estudio de Usabilidad, adaptamos el diseño para mejorar la experiencia del usuario y hacer que la app web sea más fácil de usar.',
      'coffee-accessibility-p': 'El sitio web fue diseñado para ser accesible con opciones de idioma en español e inglés. Se añadieron modos Oscuro y Claro para adaptarse a las preferencias visuales y mejorar la usabilidad en diferentes condiciones de iluminación.',
      'coffee-btn-website':     'Ver Sitio Web',
      'coffee-btn-figma':       'Ver Prototipo en Figma',
      'coffee-goals-ul':        '<li>Evitar el tráfico y las filas comprando en línea.</li><li>Ahorrar dinero en productos de consumo diario.</li><li>Despertar con una taza de café.</li>',
      'coffee-frustrations-ul': '<li>Olvidarse de comprar café.</li><li>Hacer fila para pagar el café en caja.</li><li>Despertarse tarde o sin energía.</li>',

      /* ── MWD ── */
      'mwd-title':     'Diseño UI/UX de Mit Was Drin',
      'mwd-intro':     'En este proyecto, trabajé en la Investigación, Diseño e Ideación para un blog educativo sobre cannabis dirigido al mercado alemán. Con la legalización gradual del cannabis medicinal en la UE, la startup busca informar a pacientes alemanes sobre los fundamentos de la industria.',
      'mwd-problem-p': 'Un blog alemán de educación sobre cannabis necesitaba un nuevo comienzo: una nueva marca, audiencia y estrategia para monetizarse. Querían un sitio web con espacio para publicaciones de blog, un podcast, un formulario de contacto y una calculadora de dosis.',
      'mwd-role-p':    'Como Diseñador UX, trabajé con su investigación e ideas para crear un plan:',
      'mwd-launch-p':  '¡El sitio ya está listo y la marca se prepara para su lanzamiento!',
      'mwd-btn-xd':    'Ver Prototipo en Adobe XD',

      /* ── Impulso ── */
      'impulso-title': 'Sistema de Diseño Impulso',
      'impulso-intro': 'Como Desarrollador UX en una ONG guatemalteca con más de 4,000 empleados, ayudé a crear Impulso, un sistema de diseño orientado a organizar y estandarizar todas las apps internas utilizadas para operaciones de préstamos grupales. Impulso es la única fuente de verdad entre plataformas, gestionando tokens de color, escalas tipográficas, sistemas de espaciado, modos claro y oscuro, y diseños responsivos. Mi rol incluyó auditar patrones de UI, diseñar componentes reutilizables en Figma usando principios de Diseño Atómico, y colaborar con los equipos de desarrollo para garantizar una implementación fluida.',

      /* ── Unity ── */
      'unity-title':          'Sistema de Diseño Unity',
      'unity-intro':          'Como Diseñador UX para Wind Hill Growers, enfrentamos el desafío de crear una experiencia de marca cohesiva en múltiples mercados internacionales. Para abordar esto, desarrollamos "Unity", un sistema de diseño integral que actúa como única fuente de verdad para todos los activos de diseño. Unity fue fundamental para llevar la marca a un nuevo nivel de consistencia, facilitando su gestión y escalabilidad en diversas plataformas.',
      'unity-zero-height-p':  'El Sistema de Diseño Unity está perfectamente integrado entre Figma y ZeroHeight, creando un flujo de trabajo dinámico que evoluciona junto con la marca. Esta conexión permite al equipo actualizar y refinar continuamente los activos de diseño en Figma, asegurando que cualquier cambio se refleje automáticamente en ZeroHeight. A medida que la marca crece, esta integración mantiene el sistema de diseño relevante y actualizado, permitiendo al equipo adaptarse rápidamente a nuevos requisitos.',
      'unity-btn-figma':      'Ver Archivo en Figma',
      'unity-zero-height-h2': 'Zero Height',
      'unity-btn-zeroheight': 'Ver en Zero Height',
    }
  };

  function updateLangIcon() {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.querySelectorAll('.lang-icon').forEach(function (icon) {
      icon.src = isDark ? LANG_ICON_DARK : LANG_ICON_LIGHT;
    });
  }

  function applyLanguage(lang) {
    var t = translations[lang];
    if (!t) return;

    // Plain text elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // HTML elements (contain <br>, <a> etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // Language label: show the OTHER language (update all instances)
    document.querySelectorAll('.lang-label').forEach(function (label) {
      label.textContent = lang === 'en' ? 'ES' : 'EN';
    });

    // html[lang] attribute for accessibility
    document.documentElement.lang = lang;

    localStorage.setItem('language', lang);
  }

  // Expose so dark-mode applyTheme can call it
  window.__updateLangIcon = updateLangIcon;

  document.addEventListener('DOMContentLoaded', function () {
    var savedLang = localStorage.getItem('language') || 'en';
    applyLanguage(savedLang);
    updateLangIcon();

    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var current = localStorage.getItem('language') || 'en';
        var next = current === 'en' ? 'es' : 'en';
        applyLanguage(next);
        updateLangIcon();
        if (typeof window.renderCurrentProjects === 'function') {
          window.renderCurrentProjects();
        }
      });
    });
  });
})();
