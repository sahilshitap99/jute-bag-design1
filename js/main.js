window.addEventListener('load',()=>{
  const l=document.getElementById('loader');
  let seen=false;try{seen=sessionStorage.getItem('seen')}catch(e){}
  if(seen&&l)l.style.display='none';
  setTimeout(()=>{if(l)l.classList.add('done');document.body.classList.add('ready')},seen?50:2300);
  try{sessionStorage.setItem('seen','1')}catch(e){}
});
const m=document.querySelector('.menu');
if(m)m.addEventListener('click',()=>{const o=document.querySelector('nav ul').classList.toggle('open');m.setAttribute('aria-expanded',o)});
