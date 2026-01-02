fetch('data/events.json')
.then(res=>res.json())
.then(events=>{
  const container=document.getElementById('events');
  events.forEach(e=>{
    container.innerHTML+=`
    <div class="event-card">
      <h3>${e.title}</h3>
      <p>📅 ${e.date}</p>
      <p>📍 ${e.location}</p>
      <a class="btn" href="${e.register}" target="_blank">Register</a>
      <a class="btn" href="${e.calendar}" target="_blank">Add to Calendar</a>
    </div>`;
  });
});

function openLightbox(src){
  document.getElementById('lightbox').style.display='block';
  document.getElementById('lightbox-img').src=src;
}
function closeLightbox(){
  document.getElementById('lightbox').style.display='none';
}
