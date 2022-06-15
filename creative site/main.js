const handburger = document.getElementById('handburger');
const navul = document.getElementById('nav-ul');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const appearoptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px" 
};
const appearonscroll = new IntersectionObserver(function(
    entries, 
    appearonscroll
    )
{
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else{
            entry.target.classList.add("appear");
            appearonscroll.unobserve(entry.target);
        }
    });
},
 appearoptions );

faders.forEach(fader => {
    appearonscroll.observe(fader);
});

sliders.forEach(slider => {
    appearonscroll.observe(slider);
});
// For the handburger 
handburger.addEventListener('click', () => {
    navul.classList.toggle('show');
});