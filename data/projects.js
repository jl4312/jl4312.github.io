// =====================================================================
//  PROJECT CONTENT  -  the only file you need to edit for projects
// =====================================================================
//
//  Everything about your projects comes from the list below: the rows on
//  the homepage, the Projects page, the cards on the Demo Reel page and
//  the popup that opens when a project is clicked. Save and refresh.
//
//  ADD A PROJECT
//    1. Copy the TEMPLATE at the bottom of this file.
//    2. Paste it into PROJECT_DATA where you want it to appear (the list
//       order is the order everywhere on the site, and the order of the
//       Previous / Next buttons).
//    3. Give it an id no other project uses (e.g. 6) and fill it in.
//    4. Put its images in media/ (or media/opt/) and point to them.
//  REMOVE A PROJECT: delete its { ... } block.
//  REORDER: move blocks up or down.
//
//  Text can use two shortcuts:
//        **bold words**          -> bold
//        [link text](https://..) -> a link that opens in a new tab
//  Plain HTML also works if you need something else.
//  Optional fields (leave them out if not needed): backstory, awards, link.
//
//  videos: one line per video, shown in this order. Four kinds:
//        { youtube: "VIDEO_ID", title: "..." }              (add muted: true to start muted)
//        { clip: "media/x.mp4", poster: "media/x.jpg", title: "..." }   (silent looping clip)
//        { sketchfab: "MODEL_ID", title: "..." }            (3D model viewer)
//        { embed: "https://any-embed-url", title: "..." }   (anything else)
//
//  software: names from the SOFTWARE_ICONS list below. To add a new tool,
//  put a 96x96 icon in media/opt/ and add a line to SOFTWARE_ICONS.
//
//  gallery: one line per image, shown in this order. "caption" appears in
//  the enlarged view. Add full: "path" if the enlarged image is a
//  different (bigger) file than the thumbnail.
//
//  Watch the commas: every line inside a block ends with a comma, and
//  every block except the last one ends with "},". If the projects
//  disappear from the site, a missing comma or quote is the usual cause
//  (the browser console, F12, shows the line number).
// =====================================================================

var SOFTWARE_ICONS = {
	"Unity": "media/opt/sw_unity.webp",
	"Maya": "media/opt/sw_maya.webp",
	"Photoshop": "media/opt/sw_photoshop.webp",
	"3DCoat": "media/opt/sw_3dcoat.webp",
	"Blender": "media/opt/sw_blender.webp",
	"Substance Designer": "media/opt/sw_substanceDesigner.webp",
	"Visual Studio": "media/opt/sw_visualStudio.webp"
};

var PROJECT_DATA = [
	{
		id: 5,
		title: "The Light Within",
		banner: "media/opt/lightWithinKeyArt.webp",
		role: "Technical Artist",
		dates: "June 2022 – Present",
		team: "Pomsky Games",
		platform: "iOS · Android",
		// Shown in the project lists (Home, Projects page, Demo Reel)
		thumbnail: "media/opt/project5.webp",
		shortRole: "Technical Artist",
		years: "iOS · Android · 2022–",

		description: "Stylized mobile puzzle game exploring mental health through handcrafted isometric environments. As a Technical Artist, I translate concept art into playable environments, develop shaders, lighting, and visual effects, prototype puzzle mechanics, and optimize the game for mobile.",

		roleDetails: [
			"**Environments:** build and dress isometric diorama levels from concept art, balancing visual composition with gameplay requirements",
			"**Technical Art:** develop custom Shader Graph materials, lighting setups, post-processing, and particle effects",
			"**Puzzles:** design, greybox, prototype, and implement puzzle mechanics and interactive elements",
			"**Optimization:** optimize environments, assets, materials, and rendering for mobile performance",
		],

		link: { label: "Learn more", url: "https://pomsky.games/thelightwithin" },

		summary: [
			"The Light Within is a stylized mobile puzzle game that explores mental health through the story of Erin, a young girl navigating the challenges of her inner world. Players explore handcrafted isometric environments and solve puzzles that represent different aspects of her emotional journey.",
			
			"As a Technical Artist, I work across environment art, rendering, gameplay prototyping, and optimization. I collaborate closely with the concept and 3D art team to translate visual concepts into playable dioramas, building and dressing environments while developing materials, lighting, particle effects, and post-processing. I also design and prototype puzzle mechanics and optimize the game's visual content for mobile platforms.",
			
			"The Light Within was awarded a Unity for Humanity Grant in recognition of its narrative and creative vision. The project has also been selected for Apple Arcade."
		],

		responsibilities: [
			"**Environment Art:** build, dress, and refine isometric diorama environments based on concept art, including asset placement, composition, and visual development",
			"**Technical Art:** develop custom Shader Graph materials and rendering solutions to achieve the project's stylized visual direction",
			"**Lighting:** configure baked lighting and refine lightmaps to achieve consistent visual quality across environments",
			"**Visual Effects:** create particle effects and interactive visual feedback for environments, puzzles, and gameplay events",
			"**Animation:** animate environmental elements and interactive puzzle components to bring levels to life",
			"**Puzzle Design:** design, prototype, and implement puzzle mechanics and interactive systems",
			"**Greyboxing:** create early environment layouts to establish spatial relationships, puzzle flow, and player progression",
			"**Post-Processing:** configure and tune post-processing effects to support the game's visual style and atmosphere",
			"**Mobile Optimization:** optimize assets, materials, lighting, environments, and rendering to maintain performance on iOS and Android",
		],
		software: ["Unity", "Maya", "Photoshop", "3DCoat", "Blender", "Substance Designer", "Visual Studio"],
		awards: [
			{ image: "media/opt/lightWithin_award.webp", alt: "Unity for Humanity 2024 winner", link: "https://unity.com/blog/games/meet-the-2024-unity-for-humanity-grant-winners" },
			{ image: "media/opt/lightWithin_award02.webp", alt: "Indie Series finalist 2022" },
		],
		videos: [
			{ youtube: "L4cxB3pN45s", title: "The Light Within trailer" },
			{ clip: "media/opt/lightWithinProgress.mp4", poster: "media/opt/lightWithinProgress.jpg", title: "Environment progress" },
		],
		gallery: [
			{ image: "media/opt/lightWithinKeyArt.webp", caption: "The Light Within key art" },
			{ image: "media/opt/lightWithin2.webp", caption: "The Light Within level 1" },
			{ image: "media/opt/lightWithin3.webp", caption: "The Light Within level 2" },
			{ image: "media/opt/lightWithin4.webp", caption: "The Light Within level 3" },
			{ image: "media/opt/lightWithin5.webp", caption: "The Light Within level 4" },
			{ image: "media/opt/lightWithin6.webp", caption: "The Light Within level 5" },
			{ image: "media/opt/lightWithin7.webp", caption: "The Light Within level 6" },
		]
	},
	{
		id: 3,
		title: "To Carry a Sword",
		banner: "media/opt/tcas_trial.jpg",
		role: "Freelance UI/UX Artist",
		dates: "July – August 2021",
		team: "To Carry a Sword",
		platform: "PC · Steam",
		// Shown in the project lists (Home, Projects page, Demo Reel)
		thumbnail: "media/opt/project6.webp",
		shortRole: "UI/UX Artist",
		years: "PC · Steam · 2021",
		description: "Story-driven medieval RPG developed for PC. Joined during late-stage production to refine the game's interface, create its iconography and UI assets, and implement polished menu systems and interactive feedback in Unity.",

		roleDetails: [
			"**UI/UX:** refined the existing interface to create a more cohesive and polished visual experience",
			"**UI Art:** created the game's icon atlas and supporting UI elements",
			"**Implementation:** designed and programmed menu screens and UI interactions in Unity",
			"**Visual Feedback:** developed Unity effects to provide responsive feedback for UI interactions",
		],
		link: { label: "Steam page", url: "https://store.steampowered.com/app/1813370/To_Carry_a_Sword/" },
		// Shown in the popup
		summary: [
			 "To Carry a Sword is a story-driven medieval roleplaying game that combines interactive events, strategic planning, and real-time combat. Players take on the role of a caravan guard, where building relationships and managing resources are central to the journey.",
			"I joined the project as a freelance UI/UX artist during the later stages of production, focusing on refining the existing interface and creating additional UI assets. I created the game's icon atlas and UI elements, designed and programmed menu screens in Unity, and added visual feedback to improve the overall interface experience."
		],
		responsibilities: [
			"Refined existing UI assets and established a more cohesive visual style across the interface",
			"Designed and created the game's icon atlas and supporting UI elements",
			"Designed and implemented menu screens and UI interactions in Unity",
			"Created Unity-based visual effects and feedback for UI interactions",
			"Collaborated with the development team to integrate and finalize UI assets for release",
		],
		software: ["Unity", "Photoshop"],
		videos: [
			{ embed: "https://cdn.akamai.steamstatic.com/steam/apps/256869254/movie480_vp9.webm?t=1642821139", title: "To Carry a Sword trailer" },
		],
		gallery: [
			{ image: "media/opt/tcas_trial.jpg", caption: "To Carry a Sword screenshot" },
			{ image: "media/opt/tcas_screenshot.webp", caption: "To Carry a Sword screenshot" },
			{ image: "media/opt/tcas_screenshot_05.webp", caption: "To Carry a Sword screenshot" },
			{ image: "media/opt/tcas_screenshot_04.webp", caption: "To Carry a Sword screenshot" },
			{ image: "media/opt/tcas_screenshot_03.webp", caption: "To Carry a Sword screenshot" },
			{ image: "media/opt/tcas_screenshot_02.webp", caption: "To Carry a Sword screenshot" },
			{ image: "media/opt/tcas_screenshot_01.webp", caption: "To Carry a Sword screenshot" },
		]
	},
	{
		id: 4,
		title: "Flicker Fortress",
		banner: "media/opt/bannerFlicker.webp",
		role: "Artist · Game Designer · Programmer",
		dates: "Aug 2018 – Nov 2019",
		team: "Personal project (team of friends)",
		platform: "PC · itch.io",
		// Shown in the project lists (Home, Projects page, Demo Reel)
		thumbnail: "media/opt/project4.webp",
		shortRole: "Artist · Designer · Programmer",
		years: "PC · itch.io · 2018–19",
		description: "3D puzzle platformer built around a firefly that can fuse with electronic devices.",
		roleDetails: [
			"**Technical Art:** developed custom dissolve and masking shaders that support the game's core mechanics",
			"**Character:** modeled, textured, and rigged Flicker in Maya and 3DCoat",
			"**Level Design:** designed and prototyped puzzle environments using ProBuilder",
			"**Programming:** implemented UI/UX, gameplay systems, and data management",
		],
		link: { label: "Play on itch.io", url: "https://aquilateam.itch.io/flickerfortress" },
		// Shown in the popup
		summary: [
			"Flicker Fortress is a single-player 3D puzzle platformer where players control Flicker, a firefly who can fuse with electronic devices to unlock different abilities and mechanics. Players use these abilities to navigate a mysterious tower, solve environmental puzzles, and uncover what happened to Flicker's missing friends.",
			"Developed as a personal project with a group of friends, Flicker Fortress grew from an earlier college project, ChiaroScuro. I contributed across art, technical art, game design, and programming, including the game's custom dissolve and masking shaders, character production, level design, gameplay systems, and UI/UX."
	],
		backstory: "Once upon a time, numerous fireflies were twinkling around. As time went on, they all vanished. Now only one remains, Flicker. She must voyage through a dark, mysterious tower that holds the secret of her missing friends, gathering what remains of her brethren inside their encasements.",
		responsibilities: [
			"Modeled, textured, and rigged Flicker and other game assets using Maya and 3DCoat",
			"Created particle effects in Unity for gameplay and visual feedback",
			"Developed custom shaders for the game's dissolve, masking, and related visual effects",
			"Designed and prototyped levels using ProBuilder, including puzzle layouts and environmental challenges",
			"Programmed gameplay systems, UI/UX, and data management",
		],
		software: ["Unity", "Maya", "Photoshop", "3DCoat"],
		videos: [
			{ youtube: "h1WjauxLb6A", title: "Flicker Fortress trailer" },
			{ clip: "media/opt/flickerFortress.mp4", poster: "media/opt/flickerFortress.jpg", title: "Flicker Fortress gameplay" },
			{ clip: "media/opt/flickerFortress_02.mp4", poster: "media/opt/flickerFortress_02.jpg", title: "Flicker Fortress dissolve mechanic" },
			{ sketchfab: "3e0529ca3899459398ff08b4f194ab58", title: "Flicker 3D model" },
		],
		gallery: [
			{ image: "https://img.itch.zone/aW1nLzI2NTEwNzAucG5n/original/P7WHgU.png", caption: "Flicker Fortress key art" },
			{ image: "media/opt/flickerFortress_02.webp", caption: "Flicker Fortress level" },
			{ image: "media/opt/flickerFortress_04.webp", caption: "Flicker Fortress level" },
			{ image: "media/opt/flickerFortress_05.webp", caption: "Flicker Fortress level" },
		]
	},
	{
		id: 1,
		title: "Galactic Clapback",
		banner: "media/opt/clapback.jpg",
		role: "Artist · Designer · Programmer",
		dates: "Aug 2018 – May 2019",
		team: "MisfitMakers",
		platform: "Android · WebGL",
		// Shown in the project lists (Home, Projects page, Demo Reel)
		thumbnail: "media/opt/project1.webp",
		shortRole: "Artist · Designer · Programmer",
		years: "Android · WebGL · 2018–19",
		description: "Galactic Clapback is an action-packed mobile game that immerses players in a fast-paced, bullet-filled world where they must use their parrying skills to survive enemy spaceships.",
		roleDetails: [
			"**Art:** Sole artist responsible for 30+ ships, textures, UI, icons, and VFX.",
			"**Programming:** Designed and implemented the shop, lottery, progression, and save systems.",
			"**Design:** Designed the economy, rewards, enemy spawning, and mobile UI/UX.",
			"**Technical Art:** Created Unity VFX and Shader Graph materials optimized for a mobile experience.",
		],
		link: { label: "Play on itch.io", url: "https://jl4312.itch.io/clapback" },
		// Shown in the popup
		summary: [
			"Galactic Clapback is a fast-paced mobile bullet-hell game built in Unity, combining arcade-style combat with a ship-collection and progression system. Players dodge and parry enemy attacks to build high scores, earn in-game currency, and unlock ships with unique abilities and play styles.",

			"Built by a three-person team, I worked across art, design, and programming, serving as the project's sole artist. I established the visual style, created the 3D ships, UI, VFX, and shaders, and contributed to the design and implementation of the game's progression, economy, shop, lottery, and save systems.",
		],
		responsibilities: [
			"Worked as the sole artist, game designer, and programmer on a three-person development team.",
			"Defined the game's visual direction and concepted the fleet of playable and enemy ships.",
			"Modeled more than 30 unique spaceship assets using Blender and Maya.",
			"Created textures, icons, UI elements, and other 2D assets using Photoshop.",
			"Created gameplay VFX using Unity's Particle System, including item effects, ship exhaust, and gameplay feedback.",
			"Developed custom visual effects and materials using Unity Shader Graph.",
			"Designed and implemented the mobile UI/UX with a focus on touch interaction and readability.",
			"Designed and programmed the in-game shop and lottery systems for acquiring new ships.",
			"Implemented player progression and File I/O systems for persistent save data.",
			"Designed the game's economy, reward structure, and enemy spawning systems to support progression and replayability.",
			"Coordinated development using Discord, Trello, and Bitbucket to manage tasks, communication, and source control.",

		],
		software: ["Unity", "Blender", "Photoshop", "Maya"],
		videos: [
			{ youtube: "MZXwwNY8FaM", title: "Galactic Clapback trailer" },
			{ clip: "media/opt/clapback.mp4", poster: "media/opt/clapback.jpg", title: "Galactic Clapback gameplay" },
			{ youtube: "mxh6qwa1TWA", title: "Galactic Clapback gameplay 2", muted: true },
			{ youtube: "SL-0CHxR58c", title: "Galactic Clapback gameplay 3", muted: true },
		],
		gallery: [
			{ image: "https://cdna.artstation.com/p/assets/images/images/023/793/254/medium/joseph-lu-allships.jpg?1580350485", caption: "All ships" },
			{ image: "https://cdnb.artstation.com/p/assets/images/images/023/793/267/medium/joseph-lu-turbo.jpg?1580350536", caption: "Turbo" },
			{ image: "https://cdna.artstation.com/p/assets/images/images/023/793/266/medium/joseph-lu-lancelot.jpg?1580350533", caption: "Lancelot" },
			{ image: "https://cdna.artstation.com/p/assets/images/images/023/793/264/medium/joseph-lu-gummie.jpg?1580350530", caption: "Gummie" },
			{ image: "https://cdna.artstation.com/p/assets/images/images/023/793/262/medium/joseph-lu-blaster.jpg?1580350527", caption: "Blaster" },
			{ image: "https://cdna.artstation.com/p/assets/images/images/023/793/330/medium/joseph-lu-foxfire.jpg?1580350675", caption: "Foxfire" },
			{ image: "https://cdna.artstation.com/p/assets/images/images/023/793/326/medium/joseph-lu-staticshock.jpg?1580350670", caption: "Static Shock" },
			{ image: "https://cdnb.artstation.com/p/assets/images/images/023/793/331/medium/joseph-lu-sharkindigo.jpg?1580350679", caption: "Shark Indigo" },
			{ image: "https://cdna.artstation.com/p/assets/images/images/023/793/328/medium/joseph-lu-swallowtail.jpg?1580350673", caption: "Swallowtail" },
			{ image: "https://cdna.artstation.com/p/assets/images/images/023/793/324/medium/joseph-lu-sonicboom.jpg?1580350667", caption: "Sonic Boom" },
			{ image: "https://cdnb.artstation.com/p/assets/images/images/023/793/373/medium/joseph-lu-symphony.jpg?1580350773", caption: "Symphony" },
			{ image: "https://cdnb.artstation.com/p/assets/images/images/023/793/371/medium/joseph-lu-sunlion.jpg?1580350770", caption: "Sun Lion" },
			{ image: "https://cdna.artstation.com/p/assets/images/images/023/793/376/medium/joseph-lu-carrotpido.jpg?1580350779", caption: "Carrotpido" },
			{ image: "https://cdnb.artstation.com/p/assets/images/images/023/793/375/medium/joseph-lu-skullcannon.jpg?1580350776", caption: "Skull Cannon" },
			{ image: "https://cdna.artstation.com/p/assets/images/images/023/793/370/medium/joseph-lu-neoncycle.jpg?1580350770", caption: "Neon Cycle" },
			{ image: "https://cdna.artstation.com/p/assets/images/images/023/793/374/medium/joseph-lu-blitzracer.jpg?1580350776", caption: "Blitz Racer" },
			{ image: "https://cdnb.artstation.com/p/assets/images/images/023/793/457/medium/joseph-lu-hoverdash.jpg?1580351069", caption: "Hover Dash" },
			{ image: "https://cdnb.artstation.com/p/assets/images/images/023/793/459/medium/joseph-lu-whiterabbit.jpg?1580351072", caption: "White Rabbit" },
			{ image: "https://cdna.artstation.com/p/assets/images/images/023/793/460/medium/joseph-lu-blackcat.jpg?1580351075", caption: "Black Cat" },
			{ image: "https://cdnb.artstation.com/p/assets/images/images/023/793/479/medium/joseph-lu-cannon.jpg?1580351127", caption: "Cannon" },
			{ image: "https://cdna.artstation.com/p/assets/images/images/023/793/482/medium/joseph-lu-seeker.jpg?1580351133", caption: "Seeker" },
			{ image: "https://cdnb.artstation.com/p/assets/images/images/023/793/485/medium/joseph-lu-spinningtop.jpg?1580351139", caption: "Spinning Top" },
			{ image: "https://cdnb.artstation.com/p/assets/images/images/023/793/481/medium/joseph-lu-laser.jpg?1580351130", caption: "Laser" },
			{ image: "https://cdna.artstation.com/p/assets/images/images/023/793/480/medium/joseph-lu-bomber.jpg?1580351128", caption: "Bomber" },
			{ image: "https://cdna.artstation.com/p/assets/images/images/023/793/484/medium/joseph-lu-spider.jpg?1580351136", caption: "Spider" },
			{ image: "https://cdna.artstation.com/p/assets/images/images/023/793/478/medium/joseph-lu-tarantula.jpg?1580351125", caption: "Tarantula" },
		]
	},
	{
		id: 2,
		title: "VRsus guARdian",
		banner: "media/opt/bannerVrsus.webp",
		role: "Art Producer · Lead Artist",
		dates: "Feb – May 2018",
		team: "Student team",
		platform: "AR + VR PC",
		// Shown in the project lists (Home, Projects page, Demo Reel)
		thumbnail: "media/opt/project2.webp",
		shortRole: "Art Producer · Lead Artist",
		years: "AR / VR · 2018",
		description: "Asymmetric AR-vs-VR multiplayer chase game featuring procedurally generated environments created from AR spatial scans. Led the art team and established the asset pipeline for game-ready 3D content.",
		roleDetails: [
			"**Leadership:** Recruited, onboarded, and led the art team.",
			"**Pipeline:** Established the 3D asset pipeline and enforced production standards.",
			"**Technical Art:** Managed asset preparation, Unity integration, and visual consistency.",
			"**Modeling:** Created the player character and environment assets in Maya.",
		],
		// Shown in the popup
		summary: [
			"VRsus guARdian is an asymmetric multiplayer experience that combines AR and VR in the same game world. The AR player hunts the VR player, while the VR player explores the environment, collects relics, and attempts to escape.",
			"The game generates each environment from an AR spatial scan, with assets procedurally placed to create a unique layout for each match. Because fully randomized placement could produce visually inconsistent environments, we developed collections of compatible assets that could spawn together while retaining randomized elements for variety.",
		],
		responsibilities: [
			"Led the art team, including recruiting and onboarding artists and coordinating day-to-day production.",
			"Established and maintained the 3D asset production pipeline, from modeling and preparation through Unity integration.",
			"Defined and enforced asset standards, including naming conventions, polygon budgets, UV requirements, and production guidelines.",
			"Modeled the player character and environment assets in Maya and prepared game-ready assets for Unity.",
			"Managed the asset inventory and Unity integration, ensuring content was organized and met project requirements.",
			"Worked with the creative director and development team to translate the visual direction into production-ready assets.",
			"Explored and implemented Unity particle systems for visual effects and gameplay feedback.",
			"Coordinated team communication and production using Slack and Trello.",
		],
		software: ["Unity", "Maya", "Photoshop"],
		videos: [
			{ youtube: "cu3ih-etwGA", title: "VRsus guARdian trailer" },
			{ youtube: "kdovtxYdIss", title: "VRsus guARdian post-mortem" },
		],
		gallery: [
			{ image: "media/opt/vrsusKeyArt.webp", caption: "VRsus guARdian" },
			{ image: "media/opt/vrsusPoster1.webp", caption: "Poster" },
			{ image: "media/opt/vrsusPoster2.webp", caption: "Poster" },
			{ image: "media/opt/vrsusAsset7.jpg", caption: "Game asset" },
			{ image: "media/opt/vrsusAsset1.jpg", caption: "Game asset" },
			{ image: "media/opt/vrsusAsset2.jpg", caption: "Game asset" },
			{ image: "media/opt/vrsusAsset3.jpg", caption: "Game asset" },
			{ image: "media/opt/vrsusAsset4.jpg", caption: "Game asset" },
			{ image: "media/opt/vrsusAsset5.jpg", caption: "Game asset" },
			{ image: "media/opt/vrsusAsset6.jpg", caption: "Game asset" },
		]
	}
];

/* ---------------------------------------------------------------------
   TEMPLATE - copy everything between the lines below into PROJECT_DATA
   ---------------------------------------------------------------------
	{
		id: 6,
		title: "Project Name",
		banner: "media/opt/myProjectBanner.webp",
		role: "My Role",
		dates: "Jan 2025 – Jun 2025",
		team: "Team of 4",
		platform: "PC · Steam",
		// Shown in the project lists (Home, Projects page, Demo Reel)
		thumbnail: "media/opt/myProjectThumb.webp",
		shortRole: "Technical Artist",
		years: "PC · 2025",
		description: "One or two sentences, shown on the homepage and the Projects page.",
		roleDetails: [
			"**Shaders:** what you did",
			"**Lighting:** what you did",
		],
		link: { label: "Steam page", url: "https://..." },
		// Shown in the popup
		summary: [
			"First paragraph.",
			"Second paragraph with a [link](https://...).",
		],
		responsibilities: [
			"**Area:** what you did",
			"Another responsibility",
		],
		software: ["Unity", "Photoshop"],
		videos: [
			{ youtube: "VIDEO_ID", title: "Trailer" },
		],
		gallery: [
			{ image: "media/opt/myProject1.webp", caption: "Screenshot" },
			{ image: "media/opt/myProject2.webp", caption: "Screenshot" },
		]
	},
   --------------------------------------------------------------------- */
