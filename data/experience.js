// =====================================================================
//  EXPERIENCE  -  edit this file to change the Experience lists
//  (the short version on the homepage, the full version on the About page)
// =====================================================================
//
//  ADD A JOB: copy one { ... } block in EXPERIENCE (or the TEMPLATE at the
//  bottom), paste it where it belongs (newest first), and fill it in.
//    title       - your job title
//    company     - company name
//    period      - e.g. "Jan 2026 – Present"
//    location    - e.g. "Remote" or "Fort Lee, VA"
//    logo        - square logo image (about 96x96) in media/opt/
//    description - one or two sentences, shown on the HOMEPAGE
//    bullets     - the longer list, shown on the ABOUT page
//  REMOVE A JOB: delete its block.   REORDER: move blocks up or down.
//
//  Text can use **bold** and [link text](https://...), like the other data files.
//  Watch the commas: every block except the last one ends with "},".
//
//  Skills are in data/skills.js, projects in data/projects.js.
// =====================================================================

var EXPERIENCE = [
	{
		title: "Unity XR Developer",
		company: "Envision Innovative Solutions",
		period: "Nov 2024 – Present",
		location: "Remote",
		logo: "media/opt/logoEnvision.webp",
		description: "Develop and deliver Unity-based XR applications for Meta Quest 3 supporting military and educational training initiatives. Responsible for technical implementation across VR/MR interactions, UI/UX, asset management, and standalone performance optimization, while working directly with clients to translate requirements into immersive, production-ready experiences.",
		bullets: [
			"Develop and architect Unity-based VR/MR applications for Meta Quest 3 using OpenXR, XR Interaction Toolkit, and Meta Quest SDK.",
			"Translate complex client and training requirements into interactive XR experiences, including VR input, hand tracking, locomotion, object interaction, UI/UX, and interactive training mechanics.",
			"Design and maintain scalable Addressables-based asset pipelines, supporting efficient asset loading, memory management, and modular content delivery.",
			"Optimize XR applications for standalone hardware, improving scene performance, rendering efficiency, materials, and runtime resource usage through Shader Graph and Unity optimization techniques.",
			"Develop reusable UI systems, interaction frameworks, and modular features to accelerate development across multiple XR applications.",
			"Troubleshoot complex Unity, XR, rendering, and platform-specific issues, identifying and implementing solutions across development and deployment environments.",
			"Collaborate directly with clients, SMEs, designers, and technical stakeholders to define requirements, iterate on features, and resolve technical challenges.",
			"Take features from prototype through testing, optimization, and deployment, maintaining quality while working within demanding schedules and changing requirements."
		]
	},
	{
		title: "Technical Artist",
		company: "Pomsky Games",
		period: "Jun 2022 – Present",
		location: "Remote",
		logo: "media/opt/logoPomsky.webp",
		description: "Technical Artist and Unity Developer for The Light Within, bridging art and engineering across environment creation, rendering, shaders, lighting, and gameplay systems. Collaborate with concept artists, designers, and 3D artists to translate visual concepts into stylized, optimized Unity environments. Develop custom Shader Graph materials and lighting solutions for mobile performance, while designing and implementing puzzle mechanics, prototypes, and interactive systems in C#.",
		bullets: [
			"Collaborate with concept artists, designers, and 3D artists to plan scene composition, environment layouts, visual presentation, and player experience.",
			"Build and integrate stylized 3D environments in Unity, taking scenes from concept and greyboxing through final implementation.",
			"Develop custom materials and shaders using Shader Graph, balancing visual quality with rendering and performance requirements for mobile platforms.",
			"Implement lighting, post-processing, materials, and rendering techniques to achieve the game's desired visual style while maintaining performance.",
			"Optimize 3D assets, scenes, materials, and rendering for efficient runtime performance without compromising visual quality.",
			"Design and implement puzzle mechanics and interactive gameplay systems in Unity and C#.",
			"Create rapid prototypes and greybox environments to validate gameplay concepts and iterate quickly with the design team.",
			"Troubleshoot and resolve visual, technical, and gameplay issues, improving stability and overall player experience.",
		]
	},
	{
		title: "Unity Developer",
		company: "Department of Defense",
		period: "May 2020 – Nov 2024",
		location: "Fort Lee, VA",
		logo: "media/opt/logoDoD.webp",
		description: "Unity Developer supporting military training simulations, working across software engineering, technical art, graphics, and production tooling. Developed UI/UX and interactive systems, custom HLSL and Shader Graph shaders, asset and build pipelines, and photorealistic 3D content while optimizing applications for real-time performance. Progressed from contractor to a government role and provided technical leadership across Unity development and simulation projects.",
		bullets: [
			"Provided technical leadership and Unity development for military training simulations, contributing to system architecture, core functionality, and performance optimization.",
			"Designed and implemented UI/UX systems and interactive training interfaces using Unity Canvas and C#, translating training requirements into intuitive user experiences.",
			"Developed and maintained custom build pipelines and asset workflows, improving development efficiency and supporting reliable application builds and deployment.",
			"Performed profiling and performance optimization across CPU, GPU, memory, rendering, and asset usage to maintain stable runtime performance.",
			"Developed custom HLSL and Shader Graph shaders, creating specialized rendering effects and materials tailored to simulation requirements.",
			"Created and integrated photorealistic 3D assets using Maya, Substance Painter, Photoshop, and Unity, balancing visual fidelity with real-time performance.",
			"Collaborated with programmers, artists, designers, SMEs, and training stakeholders to troubleshoot technical issues and deliver simulation features.",
			"Progressed from a contractor position into a government role, taking on increased technical responsibility within the development organization.",
		]
	},
	{
		title: "3D Developer",
		company: "Cedar Band Corporation",
		period: "Dec 2018 – May 2020",
		location: "Fort Lee, VA",
		logo: "media/opt/logoCedar.webp",
		description: "Developed Unity-based training applications for military personnel across Android, iOS, and WebGL, working across application architecture, UI/UX, data integration, and 3D production. Combined real-time development with photogrammetry, PBR texturing, shader development, and asset optimization to deliver visually realistic training experiences while meeting platform performance requirements.",
		bullets: [
			"Developed and deployed Unity training applications for military personnel across Android, iOS, and WebGL platforms based on client and training requirements.",
			"Architected project workflows and application systems, establishing reusable structures for efficient development and content integration.",
			"Designed and implemented UI/UX using Unity's Canvas system, creating interfaces tailored to training workflows and user requirements.",
			"Implemented data parsing and integration systems to process and utilize training-related data within Unity applications.",
			"Created optimized 3D content using photogrammetry and 3D scanning techniques, accelerating asset production while maintaining visual fidelity.",
			"Developed PBR materials and textures in Substance Painter, optimizing texture workflows and assets for real-time rendering.",
			"Created custom HLSL shaders and rendering solutions to achieve required visual effects and presentation.",
			"Optimized 3D assets through texture atlasing, material optimization, and asset pipeline improvements to improve runtime performance and streamline production.",
			"Delivered and maintained applications across Android, iOS, and WebGL, addressing platform-specific technical and performance requirements."
		]
	},
	{
		title: "Game Design Intern",
		company: "Wooga",
		period: "Apr – Nov 2017",
		location: "Berlin, Germany",
		logo: "media/opt/logoWooga.webp",
		description: "Supported mobile game development through Match-3 level design, competitive analysis, gameplay research, scripting, and QA. Designed levels using Wooga's proprietary engine, analyzed competitor mechanics, and developed JavaScript tools in Google Sheets to automate dialogue population and error checking. Tested builds and documented bugs to support development and content quality.",
		bullets: [
			"Designed and iterated Match-3 levels using Wooga's proprietary game development tools, balancing progression, difficulty, and player experience.",
			"Researched and analyzed competitor Match-3 games, documenting gameplay mechanics, progression systems, and design patterns.",
			"Developed JavaScript tools for Google Sheets to automate character dialogue population and error checking, improving content workflow efficiency.",
			"Tested game builds and performed QA testing, identifying issues and documenting reproducible bug reports for the development team.",
		]
	}
];

/* ---------------------------------------------------------------------
   TEMPLATE - copy into EXPERIENCE
   ---------------------------------------------------------------------
	{
		title: "Job Title",
		company: "Company Name",
		period: "Jan 2026 – Present",
		location: "Remote",
		logo: "media/opt/logoCompany.webp",
		description: "One or two sentences for the homepage.",
		bullets: [
			"What you did",
			"Another thing you did",
		]
	},
   --------------------------------------------------------------------- */
