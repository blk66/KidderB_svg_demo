import gsap from "gsap/gsap-core";
gsap.set("#fill-cp",{transformOrigin:"center"});


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
       // .from("#Oval",{duration:.5, alpha:0, scale: 3})
       .to("#lightbulb-demo",{duration:1, x:400})


export function lightAnimation(){
    return lightTL;
}

