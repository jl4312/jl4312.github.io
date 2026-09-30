// =====================================================================
//  ABOUT ME  -  edit this file to change the intro and Education on the
//  About page
// =====================================================================
//
//  paragraphs: one line per paragraph, shown in this order.
//    Text can use **bold** and [link text](https://...).
//  portrait: the picture beside the intro. Set image to "" to hide it.
//  education: one { ... } block per school, newest first. Leave honor
//    as "" if there isn't one.
//
//  The Resume button and contact icons stay as they are.
//  Watch the commas: every line except the last in a list ends with one.
// =====================================================================

var ABOUT = {
	heading: "About Me",

	paragraphs: [
		"I'm Joseph Lu, a Unity Developer and Technical Artist specializing in real-time 3D, XR, technical art, and interactive experiences. I hold a B.S. in Game Design and Development from the Rochester Institute of Technology, with professional experience spanning game development, military training simulations, and VR/MR applications.",
		"My work sits at the intersection of art, engineering, and design. I develop Unity applications, build interactive systems, create custom shaders and materials, develop 3D environments, and optimize real-time content across platforms ranging from mobile and WebGL to Meta Quest 3.",
		"I enjoy taking projects from concept and prototyping through implementation, optimization, and deployment. My experience includes Unity/C#, OpenXR, XR Interaction Toolkit, Shader Graph, HLSL, Addressables, 3D modeling, PBR texturing, lighting, UI/UX, and gameplay development.",
		"I'm passionate about building immersive, visually compelling, and technically polished experiences and bringing together creative and technical disciplines to solve complex problems and turn ideas into working products."
	],

	portrait: {
		image: "media/opt/profile.webp",
		alt: "Illustrated portrait of Joseph Lu",
		credit: "Portrait by [Chloe Hayes](https://chloereneehayes.com)"
	},

	education: [
		{
			school: "Rochester Institute of Technology",
			degree: "B.S. Game Design and Development · Minor in Modern Languages: Chinese",
			honor: "Summa cum Laude"
		}
	]
};
