document.querySelectorAll('.card').forEach(card=>{
card.addEventListener('mouseenter',()=>{
card.style.boxShadow='0 0 20px #f59e0b';
});

card.addEventListener('mouseleave',()=>{
card.style.boxShadow='none';
});
});
