import gsap from "gsap/gsap-core";
gsap.set("#fill-cp",{transformOrigin:"center"});
gsap.set("#lightbulb-demo",{transformOrigin:"center"});
gsap.set("#text",{transformOrigin:"center"});

const lightTL = gsap.timeline();
lightTL .from("#bulb",{duration:.3, y:200})
        .from("#clip-path",{duration:1, y: 200})
        .from("#line-one",{duration:.04, alpha:0})
        .from("#line-two",{duration:.04, alpha:0})
        .from("#line-three",{duration:.04, alpha:0})
        .from("#line-four",{duration:.04, alpha:0})
        .from("#line-five",{duration:.04, alpha:0})
        .from("#line-six",{duration:.04, alpha:0})
        .from("#line-seven",{duration:.04, alpha:0})
        .from("#line-eight",{duration:.04, alpha:0})
        .from("#line-nine",{duration:.04, alpha:0})
        .to("#lightbulb-demo",{duration:.1, scale:.5})
        .to("#lightbulb-demo",{duration:.5, scale:10})   
        .from("#text",{duration:.4, alpha:0})

export function lightAnimation(){
    return lightTL;
}

