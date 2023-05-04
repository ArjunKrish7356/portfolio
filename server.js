const down = document.querySelector('.drop');



gsap.from(down, {
  opacity: 0, // start with 0 opac, SmoothScrollity
  y: -100,
  duration: 3,
  scrollTrigger: {
    trigger: down,
    start: 'top 50%',
    end: 'top 20%',
    scrub: true
  }
});
gsap.registerPlugin(ScrollTrigger);

const project = document.querySelector('.inner-conatiner-projects');



gsap.from(project, {
  opacity: 0, // start with 0 opac, SmoothScrollity
  y: -100,
  duration: 3,
  scrollTrigger: {
    trigger: project,
    start: 'top 40%',
    end: 'top 1%',
    scrub: true
  }
});
gsap.registerPlugin(ScrollTrigger);

const skills = document.querySelector('.outer-container-skills');

gsap.from(skills, {
  opacity: 0, // start with 0 opac, SmoothScrollity
  x: -100,
  duration: 3,
  scrollTrigger: {
    trigger: skills,
    start: 'top 40%',
    end: 'top 1%',
    scrub: true
  }
});
gsap.registerPlugin(ScrollTrigger);


// const footer = document.querySelector('.footer-inner');

// gsap.from(footer, {
//   opacity: 0, // start with 0 opac, SmoothScrollity
//   y: 100,
//   duration: 3,
//   scrollTrigger: {
//     trigger: footer,
//     start: 'top 99%',
//     end: 'top 95%',
//     scrub: true
//   }
// });
// gsap.registerPlugin(ScrollTrigger);