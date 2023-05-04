const down = document.querySelector('.container-about');



gsap.from(down, {
  opacity: 0, 
  x: 100,
  duration: 5,
  scrollTrigger: {
    trigger: down,
     start: 'top 90%',
    end: 'center 50%',
    scrub: true
  }
});
gsap.registerPlugin(ScrollTrigger);

const project = document.querySelector('.inner-inner');



gsap.from(project, {
  opacity: 0, 
  x: 100,
  duration: 5,
  scrollTrigger: {
    trigger: project,
    start: 'top 90%',
    end: 'center 50%',
    scrub: true
  }
});
gsap.registerPlugin(ScrollTrigger);

const skills = document.querySelector('.outer-container-skills');

gsap.from(skills, {
  opacity: 0, 
  x: -100,
  duration: 5,
  scrollTrigger: {
    trigger: skills,
    start: 'top 50%',
    end: 'top 1%',
    scrub: true
  }
});
gsap.registerPlugin(ScrollTrigger);


