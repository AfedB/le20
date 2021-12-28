// const showAnim = gsap.from('.navb', {
//     yPercent: -100,
//     paused: true,
//     duration: 0.2
// }).progress(1);

// ScrollTrigger.create({
//     start: "top top",
//     end: 99999,
//     onUpdate: (self) => {
//         self.direction === -1 ? showAnim.play() : showAnim.reverse()
//     }
// });



gsap.from('.li', { duration: 1, opacity: 0, delay: 2, stagger: .5 })
gsap.from('.hero>a', { duration: 1, opacity: 0, delay: 4 })


gsap.to('banderolle', {
    scrollTrigger: "banderolle",
    opacity: 1
})