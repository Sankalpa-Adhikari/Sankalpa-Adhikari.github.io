import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Observer } from "gsap/Observer";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(
	ScrollTrigger,
	SplitText,
	ScrambleTextPlugin,
	Observer,
	GSDevTools,
	MotionPathPlugin,
	Flip,
);

export {
	gsap,
	ScrollTrigger,
	SplitText,
	ScrambleTextPlugin,
	Observer,
	GSDevTools,
	MotionPathPlugin,
	Flip,
};
