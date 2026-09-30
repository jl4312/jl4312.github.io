// =====================================================================
//  SKILLS  -  edit this file to change the Skills boxes on the About page
// =====================================================================
//
//  Each [ ... ] is one box. Inside a box, each line is a group:
//        { name: "Group heading", items: ["Skill", "Skill", "Skill"] },
//
//  ADD A SKILL:  add "Skill Name" to a group's items list (comma between).
//  ADD A GROUP:  copy a { name: ..., items: [...] } line into a box.
//  ADD A BOX:    copy a whole [ ... ] block.
//  Watch the commas: items are separated by commas, and every line or
//  block except the last one in its list ends with a comma.
// =====================================================================

var SKILLS = [
	[
		{ name: "Technical art", items: ["Shader Graph", "HLSL shaders", "Particle VFX", "Lighting & bakes", "Post-processing", "Performance profiling"] },
		{ name: "3D art", items: ["Modeling", "Retopology", "UV unwrapping", "PBR texturing", "Stylized texturing", "Rigging", "Animation"] },
		{ name: "Development", items: ["Gameplay systems", "UI/UX", "XR interaction", "Build pipelines", "Addressables"] },
		{ name: "Design", items: ["Puzzle design", "Level design", "Greyboxing & prototyping"] }
	],
	[
		{ name: "Engines", items: ["Unity", "Unreal Engine"] },
		{ name: "Code", items: ["C#", "HLSL", "C++", "Java", "JavaScript", "HTML/CSS"] },
		{ name: "XR", items: ["Meta Quest 3", "OpenXR", "XR Interaction Toolkit", "Meta Quest SDK"] },
		{ name: "3D", items: ["Maya", "Blender", "ZBrush", "3DCoat", "Mudbox", "Substance Painter", "Substance Designer", "Marmoset Toolbag"] },
		{ name: "2D & video", items: ["Photoshop", "Clip Studio Paint", "After Effects"] },
		{ name: "Workflow", items: ["GitHub", "Sourcetree", "Bitbucket", "Jira", "Trello", "Asana", "Visual Studio"] }
	],
	[
		{ name: "Platforms", items: ["Meta Quest", "iOS", "Android", "PC", "WebGL"] },
		{ name: "Languages", items: ["English", "Mandarin"] }
	]
];
