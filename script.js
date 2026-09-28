const menu={
Monday:{breakfast:"Puri + Sabji",lunch:"Chawal, Dal, Hara Sabji & Salad",dinner:"Roti/Chawal + Anda / Paneer Kadhi"},
Tuesday:{breakfast:"Litti & Chana",lunch:"Chawal, Dal, Hara Sabji & Papad",dinner:"Roti/Chawal & Sabji"},
Wednesday:{breakfast:"4 pcs Sattu Puri & Chutney",lunch:"Chawal, Kadhi-Badi, Pyaz Pakauda (2 pcs) & Aloo Bhujiya",dinner:"Roti/Chawal, Tadka, Aloo Bhujiya & Salad"},
Thursday:{breakfast:"Chhole & Bhature (3 pcs)",lunch:"Chawal, Tadka, Hara Sabji & Salad",dinner:"Puri, Sewai & Sabji"},
Friday:{breakfast:"Puri (6 pcs) & Chhola",lunch:"Chawal, Dal & Aloo-Soyachunks",dinner:"Roti/Chawal + Chicken (4 pcs) / Mashroom (6 pcs)"},
Saturday:{breakfast:"Roti (4 pcs) & Sabji",lunch:"Chawal, Chana & Salad",dinner:"Roti/Chawal, Dal & Aloo Bhujia"},
Sunday:{breakfast:"Aloo Paratha (4 pcs), Dahi/Sauce",lunch:"Chawal, Banana Kopta, Papad & Salad",dinner:"Chawal + Machhli (2 pcs) / Matar Paneer (5 pcs) & Salad"}};
const days=Object.keys(menu), now=new Date(), today=new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(now);
const nice=new Intl.DateTimeFormat("en-IN",{day:"numeric",month:"long",year:"numeric"}).format(now);
const m=menu[today];

document.getElementById("liveDate").textContent=today.toUpperCase();
document.getElementById("todayDate").textContent=nice;
document.getElementById("todayTitle").textContent=`${today}'s Menu`;
document.getElementById("todaySubtitle").textContent="Your meals for today, right at a glance.";
document.getElementById("todayBreakfast").textContent=m.breakfast;
document.getElementById("todayLunch").textContent=m.lunch;
document.getElementById("todayDinner").textContent=m.dinner;
document.getElementById("heroSpecial").textContent=m.dinner;

const tabs=document.getElementById("dayTabs"), panel=document.getElementById("routinePanel");
tabs.innerHTML=days.map(d=>`<button class="day-tab ${d===today?"active":""}" data-day="${d}">${d.slice(0,3)}</button>`).join("");
function renderDay(day){
 const x=menu[day];
 panel.innerHTML=`<div class="panel-head"><h3>${day}</h3><span>${day===today?"TODAY • LIVE MENU":"WEEKLY MENU"}</span></div>
 <div class="panel-row"><b>☀️ BREAKFAST<br>09:00–10:00</b><p>${x.breakfast}</p></div>
 <div class="panel-row"><b>🍚 LUNCH<br>13:00–14:00</b><p>${x.lunch}</p></div>
 <div class="panel-row"><b>🌙 DINNER<br>20:00–21:00</b><p>${x.dinner}</p></div>
 <div class="panel-row"><b>🥟 EVENING<br>17:00–18:00</b><p>Samosa · ₹10 extra</p></div>`;
 document.querySelectorAll(".day-tab").forEach(b=>b.classList.toggle("active",b.dataset.day===day));
}
tabs.addEventListener("click",e=>{if(e.target.matches(".day-tab"))renderDay(e.target.dataset.day)});
renderDay(today);

function nextMealInfo(){
 const minutes=now.getHours()*60+now.getMinutes(), schedule=[
  [9*60,"Breakfast","09:00"],[13*60,"Lunch","13:00"],[17*60,"Samosa","17:00"],[20*60,"Dinner","20:00"]];
 let next=schedule.find(x=>x[0]>minutes);
 if(!next){next=[9*60+1440,"Breakfast","09:00"];}
 let diff=next[0]-minutes, h=Math.floor(diff/60), min=diff%60;
 document.getElementById("nextMeal").textContent=next[1];
 document.getElementById("countdown").textContent=`in ${h?`${h}h `:""}${min}m`;
}
nextMealInfo(); setInterval(()=>{now.setTime(Date.now());nextMealInfo()},60000);

// Put the actual Mess WhatsApp URL here.
// Example: const WHATSAPP_URL="https://wa.me/91+6287760470";
const WHATSAPP_URL="";
["whatsapp","navWhatsApp"].forEach(id=>{const a=document.getElementById(id);a.href=WHATSAPP_URL||"#";if(WHATSAPP_URL){a.target="_blank";a.rel="noopener"}else a.onclick=e=>{e.preventDefault();alert("Mess ka WhatsApp link abhi add nahi hua hai. script.js me WHATSAPP_URL set kar dein.");}});
@rizwan_lens
