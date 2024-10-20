const noBtn = document.getElementById('no-btn');
const yesBtn=document.getElementById('yes-btn');
noBtn.addEventListener('mouseover', () => {
   
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    
    const randomX = Math.random() * (windowWidth - btnWidth);
    const randomY = Math.random() * (windowHeight - btnHeight);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
yesBtn.addEventListener("click",()=>
{
    alert("glad that you acccepted this , text me the details");
})

noBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    alert('Oops! You can\'t say No!');
});
