import gsap from 'gsap';
import './style.css'

// gsap.method("element",{properties})

// const box = document.querySelector('.box');
// gsap.to(box,)
// you can put an array to select multiple elements [].



const obj = {
  a:0,
};

gsap.to(obj, {
  a:100,
})



// gsap.fromTo('.box',{
//   x:0,
// },{
//   delay:0.6,
//   x:1000,
//   duration:1,
// })
// gsap.from('.box',{
//   delay:0.6,
//   x:1000,
//   duration:1,
// })
// gsap.to('.box',{
//   delay:0.6,
//   x:1000,
//   duration:1,



// })