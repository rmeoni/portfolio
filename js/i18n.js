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
      'job-freelancer': "As a freelance contractor, I developed custom websites and provided I.T. support for restaurants and hospitality businesses. I also led CRO for Café Don Lucas, a DTC coffee ecommerce brand, running structured A/B tests and funnel analysis (GA4, Hotjar) to lift conversion rate and average order value.",
      'job-whg':        "Led UX/UI design and design system development for two U.S.-based ecommerce brands serving the U.S. and German markets. Owned full-funnel CRO strategy across both DTC storefronts — running A/B and multivariate tests using VWO, analyzing drop-off with GA4 and Hotjar, and delivering measurable lifts in conversion rate.",
      'job-fge':        "Designed, prototyped, and developed digital interfaces across the organization's platforms using Angular, Tailwind CSS, and Ionic. Applied Design Thinking to improve UX across all products. Redesigned the loan creation workflow in the internal Loan Management System, saving up to 10,000 man-hours per month.",
      'job-yotaxi':     "Led end-to-end UX design and full-stack development of the YoTaxi mobile app, applying Design Thinking to deliver a user-centered, accessible solution. Conducted user research, usability testing, and stakeholder collaboration while building the frontend and backend using React Native, TypeScript, Express.js, and AWS. Used Sentry to monitor real-time key metrics — ride creation, cancellation, and duration — segmented by platform (iOS and Android), turning that data into actionable app improvements.",
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
      'yotaxi-sentry-h2':           'Sentry: Error Monitoring &amp; Event Tracking',
      'yotaxi-sentry-intro-p':      'Sentry was integrated into the YoTaxi app to monitor real-time errors and track key user events across both iOS and Android platforms. Rather than guessing what broke or why users abandoned a flow, Sentry provided direct visibility into the app\'s behavior in production — giving the team a data-driven foundation for every improvement cycle.',
      'yotaxi-sentry-metrics-h3':   'Key Metrics Tracked',
      'yotaxi-sentry-metrics-ul':   '<li><strong>Ride Creation:</strong> Custom Sentry events were instrumented at each step of the booking flow — location selection, pickup confirmation, driver matching, and ride start — broken down by platform. On iOS, a timing issue during driver matching caused a brief screen freeze. On Android, a geolocation permission error was silently blocking ride creation for a subset of users.</li><li><strong>Ride Cancellation:</strong> Cancellation events were tracked with context — user-initiated, driver cancellation, or system timeout. Comparing cancellation rates by platform revealed that Android users were dropping off significantly more at the driver-matching step, which led to a redesign of the waiting screen with clearer status feedback and an estimated wait time.</li><li><strong>Ride Duration:</strong> Session duration was tracked from ride start to completion per platform. Android sessions averaged 15% shorter than iOS — a pattern that correlated with a higher rate of premature app closures. Sentry breadcrumbs traced this to a background process killing the app on lower-end Android devices.</li>',
      'yotaxi-sentry-improvements-h3': 'Improvements Driven by Sentry Data',
      'yotaxi-sentry-improvements-ul': '<li>Fixed a driver-matching freeze on iOS that reduced the crash rate by 40%.</li><li>Redesigned the Android waiting screen after identifying high cancellation drop-off at that step.</li><li>Resolved a background process bug on Android causing premature session termination.</li><li>Prioritized accessibility fixes on Android after Sentry revealed higher error rates for users with screen readers enabled.</li>',

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

      /* ── Akisi Mockup ── */
      'akisi-mockup-title': 'Akisi Mobile POS Mockup',
      'akisi-mockup-intro': 'As a UX Developer for a non-profit in Guatemala, I designed the UI of a mobile POS system that enables small business owners to accept credit card payments directly from their phones. I was also tasked with creating high-fidelity mockups of my designs—along with the provided credit card visuals—to present them in a compelling and polished way to stakeholders.',

      /* ── Gummies Mockup ── */
      'gummies-title':     'Gummies Mockup',
      'gummies-work-desc': 'Gummies Product Mockup',
      'gummies-intro':     'I used the provided label design to create a realistic product mockup in Photoshop, applying the label to a 3D-rendered container and refining the look with shadows and reflections. The result is a professional and lifelike representation of the product.',

      /* ── GFlow Re-brand ── */
      'gflow-rebrand-title':              'GFlow Re-brand',
      'gflow-rebrand-intro':              'The client, a non-profit financial institution serving underserved communities in Guatemala, employs more than 4,000 staff members who rely on various internal tools to manage microloans. One of their core systems—a legacy loan management app—had become cluttered and unintuitive due to years of patches and additions. My team was already engaged in a UX overhaul when the organization decided to take a more holistic approach: refreshing not just the structure and flow, but also the visual identity of the product. This provided the perfect opportunity to rethink the app\'s entire experience from the ground up.',
      'gflow-rebrand-problem-p':          'The existing application had accumulated numerous usability and accessibility issues over time. Staff struggled with inefficient workflows, inconsistent interface patterns, and unclear navigation. Key pain points included:',
      'gflow-rebrand-problem-ul':         '<li>Overloaded screens with outdated UI components</li><li>Poor mobile responsiveness for field agents</li><li>Limited discoverability of key actions</li><li>A visual design that no longer reflected the organization\'s mission or values</li>',
      'gflow-rebrand-problem-p2':         'These problems not only slowed down loan processing times but also created frustration for both new and experienced employees.',
      'gflow-rebrand-goal-p':             'Our goal was twofold:',
      'gflow-rebrand-goal-ol':            '<li>Redesign the user experience to streamline loan management tasks, reduce cognitive load, and improve efficiency across devices. <a href="./detail_project_gflow.html">View GFlow UX Design Case Study</a></li><li>Rebrand the application to reflect a modern, trustworthy, and people-focused identity aligned with the nonprofit\'s values and renewed digital direction.</li>',
      'gflow-rebrand-goal-p2':            'This redesign would serve as a foundation for future product improvements, promote internal adoption, and boost user confidence in the tool.',
      'gflow-rebrand-role-p':             'As the Lead UX Designer, I was responsible for:',
      'gflow-rebrand-responsibilities-ul':'<li>Conducting stakeholder interviews and usability audits</li><li>Creating user personas and mapping current pain points</li><li>Designing low- to high-fidelity wireframes and prototypes</li><li><strong>Designing the new app logo to align with the updated brand identity</strong></li><li>Coordinating with developers to ensure pixel-perfect implementation</li><li>Introducing design system components for future scalability</li>',
      'gflow-rebrand-collab-p':           'I collaborated closely with internal stakeholders, field agents, and the development team to ensure the redesign was both functional and visually cohesive—reinforcing trust through consistent branding and intuitive interaction design.',

      /* ── WHG Re-brand ── */
      'whg-rebrand-title':              'Wind Hill Growers Re-brand',
      'whg-rebrand-intro':              'Wind Hill Growers\' detailed logo became blurry on small screens, making the brand less recognizable. The solution was to create a simplified version for smaller displays while retaining the original for large screens and prints, ensuring both functionality and brand consistency.',
      'whg-rebrand-problem-p':          'Wind Hill Growers faced a crucial problem: they had been using the same logo for almost a decade. However, the logo\'s intricate details were becoming hard to distinguish on smaller screens. This issue caused thumbnails and profile pictures to appear blurry, making the brand less recognizable.',
      'whg-rebrand-goal-p':             'The owners were deeply attached to their logo, as it had been with them for nearly a decade and held special significance—it represented Mt. Washington, the mountain overlooking their farm. They acknowledged the problem and wanted to address it creatively.',
      'whg-rebrand-goal-p2':            'They agreed to use a simplified version of the logo for thumbnails, profile pictures, and smaller screens while keeping the detailed version for large screens and prints.',
      'whg-rebrand-role-p':             'As a UX Designer, I identified the problem and brought it to the stakeholders. After presenting the issue and convincing them to take action, I collaborated closely with the stakeholders and a German designer. Together, we iterated on potential solutions for the simplified logo until arriving at a version that satisfied the stakeholders.',
      'whg-rebrand-responsibilities-ul':'<li>Identified the design problem.</li><li>Suggested possible solutions.</li><li>Collaborated on design iterations.</li><li>Implemented the new logo across different design scenarios.</li>',

      /* ── MWD Branding ── */
      'mwd-branding-title':  'Mit Was Drin Branding',
      'mwd-branding-intro':  'Mit Was Drin, a German company focused on conscious cannabis consumption, offers online education to the growing cannabis market through free and paid resources. They promote awareness and knowledge of cannabis use and home-made edibles.',
      'mwd-branding-intro2': 'Mit Was Drin needed an iconic and versatile logo that reflected their core vision and values. Working closely with the CEO, we quickly transformed a sketch into a timeless design. The result is a logo that thrives on both digital platforms and printed merch. This project was one of the most enjoyable and rewarding I\'ve been a part of.',

      /* ── Prestio ── */
      'prestio-title':               'Prestio App 3-Day Challenge: UX Design & Development',
      'prestio-intro':               'I was challenged to conduct UX Design and Development in just 3 days for an app that allows users to manage their loans and services in a secure and easy way. I used the Design Thinking approach to empathize with the user, define the problem, ideate solutions, prototype, and test. I then developed the concept using React.js.',
      'prestio-problem-p':           'Users need a reliable, secure, and easy-to-use application to manage their loans and services.',
      'prestio-goal-p':              'Design and develop a web application that allows users to manage their loans and services in an easy, fast, and secure way.',
      'prestio-role-p':              'User Experience (UX) Designer and Developer.',
      'prestio-responsibilities-ul': '<li>Conduct user research</li><li>Identify pain points</li><li>Ideate solutions</li><li>Create wireframes</li><li>Conduct usability studies</li><li>Develop prototypes</li><li>Implement in React</li>',
      'prestio-research-summary-p':  'A quantitative study was conducted to analyze user statistics in Guatemala and the United States regarding online loan management. This study revealed that most users are between 20 and 45 years old, with an equal distribution of men and women, although predominantly men in Guatemala. The primary reasons for taking out a loan are to invest in businesses and consolidate debt. Additionally, a qualitative study was carried out, involving interviews with three participants to gain a deeper understanding of users, their needs, desires, and pain points.',
      'prestio-persona-quote':       '“I get excited when loan applications are legitimate and don’t involve complicated processes.”',
      'prestio-persona-goals-ul':    '<li>Apply for loans to invest in my projects.</li>',
      'prestio-persona-frustrations-ul': '<li>Loan applications that are fake.</li><li>Loan processes that are overly complicated.</li>',
      'prestio-persona-blockquote':  'Andrea, a 40-year-old mom, is a passionate chef and entrepreneur. She dreams of expanding her culinary business but needs a loan to make it a reality. She feels excited about reliable and simple loan applications that allow her to focus on her passion without unnecessary complications.',
      'cs-zoom-caption':             '(Click on image to enlarge)',
      'cs-development':              'Development',
      'prestio-development-p':       'The web app was then developed using React, and it is still under active development.',
      'prestio-usability-study-p':   'A remote usability study was conducted with two users in Guatemala to evaluate whether the application was easy to use and effectively addressed the identified user problems.',
      'prestio-usability-gathered-p':'We then gathered the data and organized it, which resulted in the following insights:',
      'prestio-round1-ul':           '<li>It is difficult to see the remaining balance in the loan section.</li><li>It is better to request the necessary documents upfront to assess payment capacity.</li>',
      'prestio-round1-adapted-p':    'Given the insights we found through our Usability Study, we adapted the design to improve the user experience and make the web app easier to use.',
      'prestio-accessibility-p':     'To prioritize accessibility, the app interface was designed with a dark background to enhance the user experience, especially for those sensitive to brightness. Prominent headers and alternative text (alt) for images were included to improve accessibility, particularly for screen reader users.',
      'prestio-takeaways-p':         'I learned the importance of understanding user needs in the industry, such as the preference for simple, fast, and secure processes. Through user research, I discovered that accessibility and transparency are essential to building trust and loyalty in a competitive market.',
      'prestio-next-steps-ol':       '<li><strong>Multiple Languages and responsiveness:</strong> If I had more time, I would enhance the app\'s accessibility by adding multiple language options to reach a broader audience and design the interface for all devices.</li><li><strong>Dark Mode:</strong> I would also design the app with both light and dark modes to better utilize the color palette and provide a more flexible visual experience for users.</li><li><strong>Expand Research:</strong> Finally, I would conduct user and usability studies with a larger group to refine and improve the user experience more accurately and effectively.</li>',
      'prestio-conclusion-p':        'The design and development of this user experience showcase everything I was able to achieve in just three days, focusing on user needs and pain points. Imagine what I could accomplish for you with more time and resources. If you\'re interested in discussing further, feel free to contact me at <a href="mailto:hello@uxrodrigo.com">hello@uxrodrigo.com</a>.',
      'prestio-btn-prototype':       'View Adobe XD Protytpe',
      'prestio-btn-github':          'View Github Project',

      /* ── WHG UI ── */
      'whg-ui-title':              'Wind Hill Growers UI Design',
      'whg-ui-intro':              'As a UX designer, I expanded this beautiful brand\'s website and built a Design System in Figma to keep all digital products on-brand. Collaborating with the team, I\'ve continued to enhance the Squarespace site, created a store to take orders through Zoho, and applied Conversion Rate Optimization (CRO) strategies to improve the customer journey and increase wholesale sign-ups.',
      'whg-ui-problem-p1':         'When I joined Wind Hill Growers, they only had a public-facing website. However, they were taking orders via email and managing everything through Excel. They wanted a wholesaler store that would hide prices and display them only to invited users.',
      'whg-ui-problem-p2':         'The challenge was that their Squarespace website showcased their brand but lacked a Design System. I started by creating a Design System to maintain brand consistency and establish a single source of truth. Then, I developed a webstore using Zoho to allow wholesalers to place orders. The Design System brought the brand into consistency, and the Zoho webstore streamlined online ordering processes.',
      'whg-ui-goal-p':             'The goal was to create an online webstore that would hide prices and display them only to invited wholesalers while maintaining brand consistency. A secondary goal was to apply CRO (Conversion Rate Optimization) principles to the storefront and public site to reduce friction in the wholesale sign-up flow and turn more visitors into customers.',
      'whg-ui-role-p':             'As the UX Designer and Developer, I handled the project from start to finish:',
      'whg-ui-role-ul':            '<li><strong>Design:</strong> I created a Design System to unify the brand and serve as a single source of truth. I designed Figma prototypes for the online store and developed them using Zoho.</li><li><strong>Development:</strong> The store was built using Zoho Commerce. To adhere to the brand\'s guidelines, I used extensive Custom CSS to customize the pre-made template.</li><li><strong>Functionality:</strong> Once the webstore adhered to the brand guidelines, the company started accepting online orders through Zoho Commerce. This enabled automated reporting, streamlined processes, and better stock management. We also applied CRO techniques — optimizing CTAs, simplifying the sign-up form, and improving page layout — to increase the wholesale conversion rate.</li>',
      'whg-ui-responsibilities-ul':'<li>Created a Design System for the brand to ensure cohesion using Figma and Zeroheight.</li><li>Designed the UI in Figma to align with the brand\'s identity.</li><li>Developed the site in Zoho Commerce using Custom CSS to adhere to the brand\'s guidelines.</li>',
      'whg-ui-collab-p':           'The final product enabled Wind Hill Growers to take online orders while maintaining a consistent brand across all platforms and delivering a great customer experience. The CRO improvements reduced drop-off in the wholesale sign-up flow and contributed to a measurable increase in online order volume.',
      'whg-ui-cro-h2':             'Conversion Rate Optimization (CRO)',
      'whg-ui-cro-intro-p':        'Wind Hill Growers operates across two distinct channels — a <strong>DTC</strong> public-facing storefront serving end consumers, and a <strong>B2B</strong> wholesale portal for invited trade buyers. Each channel has different conversion goals, user behaviors, and friction points, so we treated them separately in our CRO strategy.',
      'whg-ui-hotjar-p':           'Hotjar was the primary qualitative tool for understanding how real users moved through both the DTC and B2B experiences. We used four of its core features:',
      'whg-ui-hotjar-ul':          '<li><strong>Session Replay:</strong> Watching actual user sessions revealed unexpected behavior — DTC visitors were repeatedly scrolling back to the product description before adding to cart, signaling the need for clearer benefit copy above the fold. B2B users, on the other hand, were abandoning the sign-up form mid-way, which we traced to a confusing "Business Type" field.</li><li><strong>Heatmaps:</strong> Click and scroll heatmaps showed that most DTC visitors never reached the subscription CTA at the bottom of the homepage. This drove the decision to move key conversion elements higher on the page. For the B2B landing page, heatmaps confirmed that the "Request Access" button was being overlooked in favor of the main navigation.</li><li><strong>Funnels:</strong> We built separate Hotjar funnels for the DTC checkout and the B2B wholesale application flow. The DTC funnel exposed a significant drop-off between the cart and the shipping step, while the B2B funnel showed the biggest leak at the account approval confirmation screen — leading us to redesign both those steps.</li><li><strong>Surveys:</strong> Short on-exit surveys were deployed on both sites. DTC users who abandoned cart most commonly cited uncertainty about shipping times. B2B users who left the sign-up page said the approval process felt unclear. These direct quotes were used to rewrite microcopy in both flows.</li>',
      'whg-ui-ga4-p':              'GA4 was set up with separate data streams for the DTC Squarespace site and the B2B Zoho Commerce portal, allowing us to track conversion metrics independently. Key events — product views, add-to-cart, checkout starts, and order completions — were instrumented across both. GA4\'s funnel exploration reports confirmed the drop-off patterns surfaced by Hotjar and gave us a quantitative baseline to measure the impact of every design change.',
      'whg-ui-ab-intro-p':         'With both qualitative and quantitative data in hand, we ran targeted A/B tests across two areas:',
      'whg-ui-ab-ul':              '<li><strong>Product pages:</strong> We tested two layouts for the DTC product cards — one leading with origin story and tasting notes, another leading with pack size and price. The story-first variant increased add-to-cart rate, aligning with the brand\'s premium positioning.</li><li><strong>Landing pages:</strong> The DTC homepage was tested with two hero variants — a lifestyle photograph vs. a product close-up. The lifestyle image produced a higher scroll depth and more clicks to the shop. For the B2B landing page, we tested a short-form "Request Access" page against a longer page explaining wholesale benefits; the longer variant converted better, confirming that trade buyers needed more context before committing.</li>',
      'whg-ui-btn-website':        'View Website',
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
      'job-freelancer': "Como contratista independiente, desarrollé sitios web personalizados y brindé soporte de TI para restaurantes y negocios de hospitalidad. También lideré CRO para Café Don Lucas, una marca de café DTC, ejecutando pruebas A/B estructuradas y análisis de embudos (GA4, Hotjar) para mejorar la tasa de conversión y el valor promedio de pedido.",
      'job-whg':        "Lideré el diseño UX/UI y el desarrollo de sistemas de diseño para dos marcas de e-commerce con sede en EE.UU. que sirven los mercados de EE.UU. y Alemania. Gestioné la estrategia de CRO en el embudo DTC completo — ejecutando pruebas A/B y multivariante con VWO, analizando abandono con GA4 y Hotjar, y logrando mejoras medibles en la tasa de conversión.",
      'job-fge':        "Diseñé, prototipé y desarrollé interfaces digitales para las plataformas de la organización usando Angular, Tailwind CSS e Ionic. Apliqué Design Thinking para mejorar la UX en todos los productos. Rediseñé el flujo de creación de préstamos en el Sistema de Gestión de Préstamos interno, ahorrando hasta 10,000 horas-hombre al mes.",
      'job-yotaxi':     "Lideré el diseño UX de extremo a extremo y el desarrollo full-stack de la app móvil YoTaxi, aplicando Design Thinking para entregar una solución accesible centrada en el usuario. Realicé investigación de usuarios, pruebas de usabilidad y colaboración con stakeholders, mientras construía el frontend y backend con React Native, TypeScript, Express.js y AWS. Utilicé Sentry para monitorear métricas clave en tiempo real — creación, cancelación y duración de viajes — segmentadas por plataforma (iOS y Android), convirtiendo esos datos en mejoras concretas.",
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
      'yotaxi-sentry-h2':           'Sentry: Monitoreo de Errores y Seguimiento de Eventos',
      'yotaxi-sentry-intro-p':      'Sentry se integró en la app YoTaxi para monitorear errores en tiempo real y rastrear eventos clave del usuario en las plataformas iOS y Android. En lugar de adivinar qué falló o por qué los usuarios abandonaban un flujo, Sentry proporcionó visibilidad directa sobre el comportamiento de la app en producción — brindando al equipo una base basada en datos para cada ciclo de mejora.',
      'yotaxi-sentry-metrics-h3':   'Métricas Clave Rastreadas',
      'yotaxi-sentry-metrics-ul':   '<li><strong>Creación de Viaje:</strong> Se instrumentaron eventos personalizados de Sentry en cada paso del flujo de reserva — selección de ubicación, confirmación de recogida, asignación de conductor e inicio del viaje — desglosado por plataforma. En iOS, un problema de sincronización durante la asignación del conductor causaba un breve congelamiento de pantalla. En Android, un error de permisos de geolocalización bloqueaba silenciosamente la creación de viajes para un subconjunto de usuarios.</li><li><strong>Cancelación de Viaje:</strong> Los eventos de cancelación se rastrearon con contexto — cancelación del usuario, del conductor o tiempo de espera agotado. Comparar las tasas de cancelación por plataforma reveló que los usuarios de Android abandonaban con mayor frecuencia en el paso de asignación de conductor, lo que llevó a rediseñar la pantalla de espera con retroalimentación de estado más clara y tiempo estimado de espera.</li><li><strong>Duración del Viaje:</strong> La duración de la sesión se rastreó desde el inicio hasta la finalización del viaje por plataforma. Las sesiones en Android fueron en promedio un 15% más cortas que en iOS — un patrón que se correlacionó con una mayor tasa de cierres prematuros de la app. Las migas de pan de Sentry rastrearon esto hasta un proceso en segundo plano que terminaba la app en dispositivos Android de gama baja.</li>',
      'yotaxi-sentry-improvements-h3': 'Mejoras Impulsadas por los Datos de Sentry',
      'yotaxi-sentry-improvements-ul': '<li>Se corrigió un congelamiento en la asignación de conductores en iOS que redujo la tasa de fallos en un 40%.</li><li>Se rediseñó la pantalla de espera en Android tras identificar un alto abandono en ese paso.</li><li>Se resolvió un error de proceso en segundo plano en Android que causaba la terminación prematura de la sesión.</li><li>Se priorizaron correcciones de accesibilidad en Android tras detectar tasas de error más altas para usuarios con lectores de pantalla activados.</li>',

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

      /* ── Akisi Mockup ── */
      'akisi-mockup-title': 'Maqueta de POS Móvil Akisi',
      'akisi-mockup-intro': 'Como Desarrollador UX en una organización sin fines de lucro en Guatemala, diseñé la UI de un sistema POS móvil que permite a pequeños empresarios aceptar pagos con tarjeta de crédito directamente desde sus teléfonos. También me encargué de crear maquetas de alta fidelidad de mis diseños—junto con las visualizaciones de tarjeta de crédito proporcionadas—para presentarlos de manera atractiva y pulida ante los stakeholders.',

      /* ── Gummies Mockup ── */
      'gummies-title':     'Maqueta de Gomitas',
      'gummies-work-desc': 'Maqueta de Producto de Gomitas',
      'gummies-intro':     'Utilicé el diseño de etiqueta proporcionado para crear una maqueta de producto realista en Photoshop, aplicando la etiqueta a un contenedor renderizado en 3D y refinando el aspecto con sombras y reflejos. El resultado es una representación profesional y realista del producto.',

      /* ── GFlow Re-brand ── */
      'gflow-rebrand-title':              'Rediseño de Marca GFlow',
      'gflow-rebrand-intro':              'El cliente, una institución financiera sin fines de lucro que sirve a comunidades desfavorecidas en Guatemala, emplea a más de 4,000 empleados que dependen de diversas herramientas internas para gestionar microcréditos. Uno de sus sistemas principales—una aplicación heredada de gestión de préstamos—se había vuelto confusa e intuitiva debido a años de parches y adiciones. Mi equipo ya estaba trabajando en una renovación de UX cuando la organización decidió adoptar un enfoque más integral: renovar no solo la estructura y el flujo, sino también la identidad visual del producto. Esto brindó la oportunidad perfecta para repensar toda la experiencia de la app desde cero.',
      'gflow-rebrand-problem-p':          'La aplicación existente había acumulado numerosos problemas de usabilidad y accesibilidad con el tiempo. El personal lidiaba con flujos de trabajo ineficientes, patrones de interfaz inconsistentes y navegación poco clara. Los principales puntos de dolor incluían:',
      'gflow-rebrand-problem-ul':         '<li>Pantallas sobrecargadas con componentes de UI desactualizados</li><li>Poca responsividad móvil para agentes de campo</li><li>Descubribilidad limitada de acciones clave</li><li>Un diseño visual que ya no reflejaba la misión ni los valores de la organización</li>',
      'gflow-rebrand-problem-p2':         'Estos problemas no solo ralentizaban los tiempos de procesamiento de préstamos, sino que también generaban frustración tanto en empleados nuevos como experimentados.',
      'gflow-rebrand-goal-p':             'Nuestro objetivo era doble:',
      'gflow-rebrand-goal-ol':            '<li>Rediseñar la experiencia de usuario para optimizar las tareas de gestión de préstamos, reducir la carga cognitiva y mejorar la eficiencia en todos los dispositivos. <a href="./detail_project_gflow.html">Ver Caso de Estudio de Diseño UX de GFlow</a></li><li>Renovar la identidad visual de la aplicación para reflejar una imagen moderna, confiable y centrada en las personas, alineada con los valores de la organización y su nueva dirección digital.</li>',
      'gflow-rebrand-goal-p2':            'Este rediseño serviría como base para futuras mejoras del producto, promovería la adopción interna y aumentaría la confianza de los usuarios en la herramienta.',
      'gflow-rebrand-role-p':             'Como Diseñador UX Principal, fui responsable de:',
      'gflow-rebrand-responsibilities-ul':'<li>Realizar entrevistas con stakeholders y auditorías de usabilidad</li><li>Crear perfiles de usuario y mapear los puntos de dolor actuales</li><li>Diseñar wireframes y prototipos de baja a alta fidelidad</li><li><strong>Diseñar el nuevo logotipo de la app para alinearlo con la identidad de marca actualizada</strong></li><li>Coordinar con desarrolladores para garantizar una implementación pixel-perfect</li><li>Introducir componentes del sistema de diseño para escalabilidad futura</li>',
      'gflow-rebrand-collab-p':           'Colaboré estrechamente con stakeholders internos, agentes de campo y el equipo de desarrollo para garantizar que el rediseño fuera tanto funcional como visualmente cohesivo, reforzando la confianza a través de una marca consistente y un diseño de interacción intuitivo.',

      /* ── WHG Re-brand ── */
      'whg-rebrand-title':              'Rediseño de Marca Wind Hill Growers',
      'whg-rebrand-intro':              'El logotipo detallado de Wind Hill Growers se volvía borroso en pantallas pequeñas, haciendo la marca menos reconocible. La solución fue crear una versión simplificada para pantallas pequeñas mientras se mantenía el original para pantallas grandes e impresos, garantizando tanto la funcionalidad como la consistencia de marca.',
      'whg-rebrand-problem-p':          'Wind Hill Growers enfrentó un problema crucial: llevaban casi una década usando el mismo logotipo. Sin embargo, los intrincados detalles del logotipo se volvían difíciles de distinguir en pantallas pequeñas. Este problema hacía que las miniaturas y fotos de perfil aparecieran borrosas, reduciendo el reconocimiento de la marca.',
      'whg-rebrand-goal-p':             'Los propietarios estaban profundamente apegados a su logotipo, ya que había estado con ellos por casi una década y tenía un significado especial—representaba el Monte Washington, la montaña que domina su granja. Reconocieron el problema y querían abordarlo de manera creativa.',
      'whg-rebrand-goal-p2':            'Acordaron usar una versión simplificada del logotipo para miniaturas, fotos de perfil y pantallas pequeñas, manteniendo la versión detallada para pantallas grandes e impresos.',
      'whg-rebrand-role-p':             'Como Diseñador UX, identifiqué el problema y lo presenté a los stakeholders. Después de exponer el problema y convencerlos de actuar, colaboré estrechamente con los stakeholders y un diseñador alemán. Juntos iteramos sobre posibles soluciones para el logotipo simplificado hasta llegar a una versión que satisfizo a los stakeholders.',
      'whg-rebrand-responsibilities-ul':'<li>Identifiqué el problema de diseño.</li><li>Sugerí posibles soluciones.</li><li>Colaboré en las iteraciones de diseño.</li><li>Implementé el nuevo logotipo en diferentes escenarios de diseño.</li>',

      /* ── MWD Branding ── */
      'mwd-branding-title':  'Branding de Mit Was Drin',
      'mwd-branding-intro':  'Mit Was Drin, una empresa alemana enfocada en el consumo consciente de cannabis, ofrece educación en línea al creciente mercado del cannabis a través de recursos gratuitos y de pago. Promueven la conciencia y el conocimiento sobre el uso del cannabis y los comestibles artesanales.',
      'mwd-branding-intro2': 'Mit Was Drin necesitaba un logotipo icónico y versátil que reflejara su visión y valores fundamentales. Trabajando estrechamente con el CEO, transformamos rápidamente un boceto en un diseño atemporal. El resultado es un logotipo que funciona tanto en plataformas digitales como en merchandising impreso. Este proyecto fue uno de los más disfrutables y satisfactorios en los que he participado.',

      /* ── Prestio ── */
      'prestio-title':               'Desafío de 3 Días: Diseño UX y Desarrollo de la App Prestio',
      'prestio-intro':               'Me desafiaron a realizar Diseño UX y Desarrollo en solo 3 días para una app que permite a los usuarios gestionar sus préstamos y servicios de forma segura y sencilla. Utilicé el enfoque de Design Thinking para empatizar con el usuario, definir el problema, idear soluciones, prototipar y testear. Luego desarrollé el concepto con React.js.',
      'prestio-problem-p':           'Los usuarios necesitan una aplicación confiable, segura y fácil de usar para gestionar sus préstamos y servicios.',
      'prestio-goal-p':              'Diseñar y desarrollar una aplicación web que permita a los usuarios gestionar sus préstamos y servicios de manera fácil, rápida y segura.',
      'prestio-role-p':              'Diseñador y Desarrollador de Experiencia de Usuario (UX).',
      'prestio-responsibilities-ul': '<li>Realizar investigación de usuarios</li><li>Identificar puntos de dolor</li><li>Idear soluciones</li><li>Crear wireframes</li><li>Realizar estudios de usabilidad</li><li>Desarrollar prototipos</li><li>Implementar en React</li>',
      'prestio-research-summary-p':  'Se realizó un estudio cuantitativo para analizar estadísticas de usuarios en Guatemala y Estados Unidos sobre la gestión de préstamos en línea. El estudio reveló que la mayoría de los usuarios tienen entre 20 y 45 años, con una distribución equitativa de hombres y mujeres, aunque predominantemente hombres en Guatemala. Las principales razones para solicitar un préstamo son invertir en negocios y consolidar deudas. Adicionalmente, se realizó un estudio cualitativo con entrevistas a tres participantes para obtener una comprensión más profunda de los usuarios, sus necesidades, deseos y puntos de dolor.',
      'prestio-persona-quote':       '"Me emociona cuando las solicitudes de préstamo son legítimas y no implican procesos complicados."',
      'prestio-persona-goals-ul':    '<li>Solicitar préstamos para invertir en mis proyectos.</li>',
      'prestio-persona-frustrations-ul': '<li>Solicitudes de préstamo que son falsas.</li><li>Procesos de préstamo excesivamente complicados.</li>',
      'prestio-persona-blockquote':  'Andrea, una mamá de 40 años, es una apasionada chef y emprendedora. Sueña con expandir su negocio culinario pero necesita un préstamo para hacerlo realidad. Se emociona con solicitudes de préstamo confiables y sencillas que le permiten enfocarse en su pasión sin complicaciones innecesarias.',
      'cs-zoom-caption':             '(Haz clic en la imagen para ampliar)',
      'cs-development':              'Desarrollo',
      'prestio-development-p':       'La aplicación web fue desarrollada utilizando React y sigue en desarrollo activo.',
      'prestio-usability-study-p':   'Se realizó un estudio de usabilidad remoto con dos usuarios en Guatemala para evaluar si la aplicación era fácil de usar y abordaba efectivamente los problemas de usuario identificados.',
      'prestio-usability-gathered-p':'Luego reunimos y organizamos los datos, lo que resultó en los siguientes hallazgos:',
      'prestio-round1-ul':           '<li>Es difícil ver el saldo restante en la sección de préstamos.</li><li>Es mejor solicitar los documentos necesarios desde el principio para evaluar la capacidad de pago.</li>',
      'prestio-round1-adapted-p':    'Con base en los hallazgos de nuestro Estudio de Usabilidad, adaptamos el diseño para mejorar la experiencia del usuario y hacer la app más fácil de usar.',
      'prestio-accessibility-p':     'Para priorizar la accesibilidad, la interfaz de la app fue diseñada con fondo oscuro para mejorar la experiencia del usuario, especialmente para quienes son sensibles al brillo. Se incluyeron encabezados prominentes y texto alternativo (alt) para imágenes, mejorando la accesibilidad para usuarios de lectores de pantalla.',
      'prestio-takeaways-p':         'Aprendí la importancia de comprender las necesidades del usuario en la industria, como la preferencia por procesos simples, rápidos y seguros. A través de la investigación de usuarios, descubrí que la accesibilidad y la transparencia son esenciales para generar confianza y lealtad en un mercado competitivo.',
      'prestio-next-steps-ol':       '<li><strong>Múltiples idiomas y responsividad:</strong> Con más tiempo, mejoraría la accesibilidad de la app añadiendo opciones de múltiples idiomas para llegar a una audiencia más amplia y diseñando la interfaz para todos los dispositivos.</li><li><strong>Modo Oscuro:</strong> También diseñaría la app con modos claro y oscuro para aprovechar mejor la paleta de colores y ofrecer una experiencia visual más flexible.</li><li><strong>Ampliar la Investigación:</strong> Finalmente, realizaría estudios de usuario y usabilidad con un grupo más amplio para refinar y mejorar la experiencia del usuario con mayor precisión y efectividad.</li>',
      'prestio-conclusion-p':        'El diseño y desarrollo de esta experiencia de usuario muestra todo lo que pude lograr en solo tres días, enfocándome en las necesidades y puntos de dolor del usuario. Imagina lo que podría lograr para ti con más tiempo y recursos. Si estás interesado en conversar más, no dudes en contactarme en <a href="mailto:hello@uxrodrigo.com">hello@uxrodrigo.com</a>.',
      'prestio-btn-prototype':       'Ver Prototipo en Adobe XD',
      'prestio-btn-github':          'Ver Proyecto en Github',

      /* ── WHG UI ── */
      'whg-ui-title':              'Diseño UI de Wind Hill Growers',
      'whg-ui-intro':              'Como diseñador UX, amplié el sitio web de esta hermosa marca y construí un Sistema de Diseño en Figma para mantener todos los productos digitales en línea con la marca. Colaborando con el equipo, continué mejorando el sitio de Squarespace, creé una tienda para recibir pedidos a través de Zoho, y apliqué estrategias de Optimización de Tasa de Conversión (CRO) para mejorar el recorrido del cliente y aumentar las inscripciones mayoristas.',
      'whg-ui-problem-p1':         'Cuando me uní a Wind Hill Growers, solo tenían un sitio web público. Sin embargo, recibían pedidos por correo electrónico y gestionaban todo en Excel. Querían una tienda mayorista que ocultara los precios y los mostrara solo a usuarios invitados.',
      'whg-ui-problem-p2':         'El desafío era que su sitio web de Squarespace mostraba su marca pero carecía de un Sistema de Diseño. Comencé creando un Sistema de Diseño para mantener la consistencia de marca y establecer una única fuente de verdad. Luego desarrollé una tienda web con Zoho para permitir que los mayoristas realicen pedidos. El Sistema de Diseño aportó consistencia a la marca, y la tienda web de Zoho agilizó los procesos de pedidos en línea.',
      'whg-ui-goal-p':             'El objetivo era crear una tienda web que ocultara los precios y los mostrara solo a mayoristas invitados, manteniendo la consistencia de marca. Un objetivo secundario era aplicar principios de CRO (Optimización de Tasa de Conversión) al storefront y al sitio público para reducir la fricción en el flujo de registro mayorista y convertir más visitantes en clientes.',
      'whg-ui-role-p':             'Como Diseñador UX y Desarrollador, gestioné el proyecto de principio a fin:',
      'whg-ui-role-ul':            '<li><strong>Diseño:</strong> Creé un Sistema de Diseño para unificar la marca y servir como única fuente de verdad. Diseñé prototipos en Figma para la tienda en línea y los desarrollé usando Zoho.</li><li><strong>Desarrollo:</strong> La tienda fue construida con Zoho Commerce. Para adherirme a las directrices de la marca, utilicé CSS personalizado extensivo para personalizar la plantilla prediseñada.</li><li><strong>Funcionalidad:</strong> Una vez que la tienda web cumplió con las directrices de la marca, la empresa comenzó a aceptar pedidos en línea a través de Zoho Commerce. Esto habilitó reportes automatizados, procesos optimizados y mejor gestión de inventario. También aplicamos técnicas de CRO — optimizando CTAs, simplificando el formulario de registro y mejorando el diseño de página — para aumentar la tasa de conversión mayorista.</li>',
      'whg-ui-responsibilities-ul':'<li>Creé un Sistema de Diseño para la marca para garantizar cohesión usando Figma y Zeroheight.</li><li>Diseñé la UI en Figma para alinearla con la identidad de la marca.</li><li>Desarrollé el sitio en Zoho Commerce usando CSS personalizado para adherirme a las directrices de la marca.</li>',
      'whg-ui-collab-p':           'El producto final permitió a Wind Hill Growers recibir pedidos en línea manteniendo una marca consistente en todas las plataformas y brindando una excelente experiencia al cliente. Las mejoras de CRO redujeron el abandono en el flujo de registro mayorista y contribuyeron a un aumento medible en el volumen de pedidos en línea.',
      'whg-ui-cro-h2':             'Optimización de Tasa de Conversión (CRO)',
      'whg-ui-cro-intro-p':        'Wind Hill Growers opera en dos canales distintos — un storefront <strong>DTC</strong> (directo al consumidor) público y un portal <strong>B2B</strong> mayorista para compradores comerciales invitados. Cada canal tiene objetivos de conversión, comportamientos de usuario y puntos de fricción diferentes, por lo que los tratamos por separado en nuestra estrategia de CRO.',
      'whg-ui-hotjar-p':           'Hotjar fue la principal herramienta cualitativa para entender cómo los usuarios reales navegaban tanto por la experiencia DTC como B2B. Utilizamos cuatro de sus funcionalidades principales:',
      'whg-ui-hotjar-ul':          '<li><strong>Grabación de Sesiones:</strong> Observar sesiones reales de usuarios reveló comportamientos inesperados — los visitantes DTC volvían repetidamente a la descripción del producto antes de agregar al carrito, indicando la necesidad de un texto de beneficios más claro en la parte superior. Los usuarios B2B, en cambio, abandonaban el formulario de registro a mitad, que rastreamos hasta un confuso campo "Tipo de Negocio".</li><li><strong>Mapas de Calor:</strong> Los mapas de calor de clics y desplazamiento mostraron que la mayoría de los visitantes DTC nunca llegaban al CTA de suscripción al fondo de la página de inicio. Esto impulsó la decisión de mover elementos clave de conversión más arriba. Para la página de destino B2B, los mapas de calor confirmaron que el botón "Solicitar Acceso" estaba siendo ignorado en favor de la navegación principal.</li><li><strong>Embudos:</strong> Construimos embudos separados en Hotjar para el checkout DTC y el flujo de solicitud mayorista B2B. El embudo DTC expuso una caída significativa entre el carrito y el paso de envío, mientras que el embudo B2B mostró la mayor fuga en la pantalla de confirmación de aprobación de cuenta, lo que nos llevó a rediseñar ambos pasos.</li><li><strong>Encuestas:</strong> Se desplegaron encuestas cortas de salida en ambos sitios. Los usuarios DTC que abandonaron el carrito citaron principalmente incertidumbre sobre los tiempos de envío. Los usuarios B2B que abandonaron la página de registro dijeron que el proceso de aprobación parecía poco claro. Estas citas directas se usaron para reescribir el microcopiado en ambos flujos.</li>',
      'whg-ui-ga4-p':              'GA4 se configuró con flujos de datos separados para el sitio Squarespace DTC y el portal Zoho Commerce B2B, permitiéndonos rastrear métricas de conversión de forma independiente. Los eventos clave — vistas de productos, agregar al carrito, inicios de checkout y completaciones de pedidos — se instrumentaron en ambos. Los informes de exploración de embudos de GA4 confirmaron los patrones de caída identificados por Hotjar y nos dieron una línea base cuantitativa para medir el impacto de cada cambio de diseño.',
      'whg-ui-ab-intro-p':         'Con datos tanto cualitativos como cuantitativos, ejecutamos pruebas A/B dirigidas en dos áreas:',
      'whg-ui-ab-ul':              '<li><strong>Páginas de producto:</strong> Probamos dos layouts para las tarjetas de productos DTC — uno que comenzaba con la historia de origen y notas de cata, otro con el tamaño del paquete y precio. La variante con historia primero aumentó la tasa de agregar al carrito, alineándose con el posicionamiento premium de la marca.</li><li><strong>Páginas de destino:</strong> La página de inicio DTC se probó con dos variantes de héroe — una fotografía de estilo de vida vs. un primer plano del producto. La imagen de estilo de vida produjo mayor profundidad de desplazamiento y más clics a la tienda. Para la página de destino B2B, probamos una página corta "Solicitar Acceso" contra una página más larga que explicaba los beneficios mayoristas; la variante más larga convirtió mejor, confirmando que los compradores comerciales necesitaban más contexto antes de comprometerse.</li>',
      'whg-ui-btn-website':        'Ver Sitio Web',
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
