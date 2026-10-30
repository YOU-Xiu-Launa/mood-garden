(() => {
  const $ = id => document.getElementById(id);
  const moodKeys = ["joy","calm","anxiety","sadness","hope"];
  const palette = {
    joy:{petal:"#e99db5",leaf:"#8eaf7b",glow:"#efadc2",label:"Joy"},
    calm:{petal:"#9ed0bc",leaf:"#7eab8a",glow:"#9dd9bf",label:"Calm"},
    anxiety:{petal:"#e8bd83",leaf:"#9aa875",glow:"#f1c98e",label:"Anxiety"},
    sadness:{petal:"#a8b9e2",leaf:"#7898a0",glow:"#b8c8ef",label:"Sadness"},
    hope:{petal:"#c5a8e3",leaf:"#91ae85",glow:"#d4b8f0",label:"Hope"}
  };
  const plantsEl=$("plants"), scene=$("scene"), state={plants:[],selected:null,care:{water:0,feed:0,sun:0}};
  let idCounter=0;
  const random=(min,max)=>min+Math.random()*(max-min);
  const pick=a=>a[Math.floor(Math.random()*a.length)];
  const cap=s=>s[0].toUpperCase()+s.slice(1);

  // Ambient fireflies drift independently; this makes the garden feel alive even before a flower is grown.
  for(let i=0;i<37;i++){
    const f=document.createElement("span");f.className="firefly";
    f.style.left=`${random(4,96)}%`;f.style.top=`${random(7,72)}%`;
    f.style.setProperty("--duration",`${random(3.5,8)}s`);f.style.setProperty("--delay",`${-random(0,7)}s`);
    f.style.setProperty("--dx",`${random(-18,18)}px`);f.style.setProperty("--dy",`${random(-16,17)}px`);
    $("fireflies").appendChild(f);
  }

  function currentValues(){return Object.fromEntries(moodKeys.map(k=>[k,Number($(k).value)]));}
  function dominant(v=currentValues()){return moodKeys.reduce((a,b)=>v[a]>=v[b]?a:b);}
  function updateSliders(){
    const v=currentValues(), main=dominant(v), sum=Object.values(v).reduce((a,b)=>a+b,0);
    moodKeys.forEach(k=>{
      const input=$(k),val=v[k];$(`${k}Out`).textContent=`${val}%`;
      input.style.setProperty("--value",`${val}%`);
    });
    const copy={
      joy:"Joy is finding a little room to open up.",
      calm:"Calm is giving everything a softer place to land.",
      anxiety:"There is room here for restless thoughts, too.",
      sadness:"Even a quiet, heavy day belongs in this garden.",
      hope:"A small spark of hope can still take root."
    };
    $("insightText").textContent=sum===0?"A quiet moment is a feeling, too.":copy[main];
    if(!state.plants.length)$("gardenTitle").textContent=sum===0?"A quiet, resting garden":`${cap(main)} is visiting tonight`;
    // Sliders affect the garden's ambient tint and the kinds of flowers grown next.
    $("scene").style.setProperty("--mood-glow",palette[main].glow);
  }

  function makeFlowerSVG(type){
    const petals=type==="joy"?9:type==="calm"?6:type==="anxiety"?11:type==="sadness"?5:7;
    const rx=type==="sadness"?11:type==="anxiety"?7.8:9,ry=type==="joy"?13:type==="hope"?12:10.5;
    let petalMarkup="";
    for(let i=0;i<petals;i++){
      const angle=i*360/petals;
      const offset=type==="joy"?12:type==="calm"?9:type==="anxiety"?10:8;
      petalMarkup+=`<ellipse class="petal" cx="55" cy="60" rx="${rx}" ry="${ry}" transform="rotate(${angle} 55 60) translate(0 -${offset})"/>`;
    }
    if(type==="calm"){
      petalMarkup="";
      for(let i=0;i<6;i++)petalMarkup+=`<ellipse class="petal" cx="55" cy="60" rx="12" ry="17" transform="rotate(${i*60} 55 60) translate(0 -7)"/>`;
    }
    const stem=type==="anxiety"?"M55 244 C78 185 27 166 48 140 C72 110 38 91 55 60":
      type==="sadness"?"M55 244 C52 152 57 112 55 60":
      type==="hope"?"M55 244 C47 214 71 190 57 160 C40 130 70 100 55 60":
      "M55 244 C61 206 48 182 54 160 C65 128 48 100 55 60";
    const dots=Array.from({length:9},(_,i)=>{const a=i*Math.PI*2/9;return `<circle class="pollen" cx="${55+Math.cos(a)*6}" cy="${60+Math.sin(a)*6}" r="1.25"/>`;}).join("");
    return `<svg viewBox="0 0 110 260" aria-hidden="true">
      <path class="stem" d="${stem}"/><path class="stem-highlight" d="${stem}"/>
      <g class="leaf" style="animation-delay:1.02s"><path class="leaf-shape" d="M52 157 C24 157 18 137 20 126 C39 126 52 137 52 157Z"/></g>
      <g class="leaf right" style="animation-delay:1.25s;transform-origin:58px 187px"><path class="leaf-shape" d="M58 186 C83 186 91 167 88 155 C70 155 58 168 58 186Z"/></g>
      <g class="leaf" style="animation-delay:1.42s"><path class="leaf-shape" d="M53 215 C34 214 29 201 30 192 C43 192 52 201 53 215Z"/></g>
      <g class="flower-head">${petalMarkup}<circle class="center" cx="55" cy="60" r="${type==="hope"?7:8}"/><g class="pollen">${dots}</g></g>
    </svg>`;
  }

  function setFeedback(message){
    const el=$("feedback");el.lastElementChild.textContent=message;
    el.classList.remove("pulse");void el.offsetWidth;el.classList.add("pulse");
  }
  function updateCount(){$("flowerCount").textContent=`${state.plants.length} FLOWER${state.plants.length===1?"":"S"}`;}

  function showBubble(plant,text){
    const old=plant.element.querySelector(".plant-bubble");if(old)old.remove();
    const bubble=document.createElement("span");bubble.className="plant-bubble";bubble.textContent=text;
    plant.element.appendChild(bubble);setTimeout(()=>bubble.remove(),1800);
  }
  function selectPlant(id){
    state.selected=id;
    state.plants.forEach(p=>p.element.classList.toggle("selected",p.id===id));
    const p=state.plants.find(p=>p.id===id);if(!p)return;
    $("gardenTitle").textContent=`${palette[p.type].label} in bloom`;
    $("sceneMessage").textContent=`${palette[p.type].label} flower · growing in its own time`;
    setFeedback(`${palette[p.type].label} selected — try Water, Feed, or Sunlight.`);
    showBubble(p,"I'm listening ✧");
  }

  function growFlower(){
    // A garden is a loose living community, not a row of identical icons.
    const values=currentValues();
    const total=22;
    const sum=Object.values(values).reduce((a,b)=>a+b,0)||1;
    const exact=moodKeys.map(k=>values[k]/sum*total);
    const counts=exact.map(Math.floor);
    let remainder=total-counts.reduce((a,b)=>a+b,0);
    exact.map((v,i)=>({i,part:v-counts[i]})).sort((a,b)=>b.part-a.part)
      .slice(0,remainder).forEach(x=>counts[x.i]++);
    const kinds=[];
    counts.forEach((n,i)=>{for(let j=0;j<n;j++)kinds.push(moodKeys[i]);});
    for(let i=kinds.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[kinds[i],kinds[j]]=[kinds[j],kinds[i]];}

    plantsEl.innerHTML="";
    state.plants=[];state.selected=null;idCounter=0;
    $("emptyState").classList.add("hide");
    // Random points are biased toward overlapping, irregular clusters.
    const anchors=[{x:24,y:0},{x:48,y:0},{x:73,y:0}];
    const positions=kinds.map((type,i)=>{
      const a=anchors[Math.floor(Math.random()*anchors.length)];
      const x=Math.max(5,Math.min(95,a.x+random(-22,22)));
      const depth=random(0,1);
      return {type,x,bottom:24+depth*72,scale:.66+depth*.48,delay:random(0,950)};
    }).sort((a,b)=>a.bottom-b.bottom);

    positions.forEach((pos,index)=>{
      idCounter++;
      const type=pos.type, id=idCounter, plant=document.createElement("button");
      const width= random(72,112)*pos.scale;
      const height=random(210,292)*pos.scale;
      plant.type="button";plant.className="plant";plant.setAttribute("aria-label",`Select ${type} flower`);
      plant.style.left=`${pos.x}%`;
      plant.style.width=`${width}px`;
      plant.style.height=`${height}px`;
      plant.style.bottom=`${pos.bottom}px`;
      plant.style.setProperty("--petal",palette[type].petal);
      plant.style.setProperty("--leaf",palette[type].leaf);
      plant.style.setProperty("--glow",palette[type].glow);
      plant.style.setProperty("--sway",`${random(5.5,9)}s`);
      plant.style.setProperty("--sway-delay",`${-random(0,5)}s`);
      plant.style.setProperty("--grow-duration",`${random(1.35,2.15)}s`);
      plant.style.animationDelay=`${pos.delay}ms`;
      plant.style.zIndex=Math.round(pos.bottom+height*.15);
      plant.innerHTML=makeFlowerSVG(type);
      plant.addEventListener("click",e=>{e.stopPropagation();selectPlant(id);});
      plant.addEventListener("pointerenter",()=>{const p=state.plants.find(p=>p.id===id);if(p&&!plant.classList.contains("selected"))showBubble(p,`${palette[type].label} · say hello`);});
      plantsEl.appendChild(plant);
      state.plants.push({id,type,element:plant,water:0,feed:0,sun:0});
      const root=document.createElement("span");root.className="root-glow";root.style.left=`${pos.x}%`;
      root.style.animationDelay=`${pos.delay}ms`;scene.appendChild(root);
      setTimeout(()=>root.remove(),pos.delay+2100);
    });
    updateCount();
    $("gardenTitle").textContent="A little meadow of feelings";
    $("sceneMessage").textContent="Every feeling has found a place to grow";
    selectPlant(state.plants[state.plants.length-1].id);
    setFeedback("Your feelings have grown together — choose any flower to spend a moment with it.");
  }

  function particles(symbol,n=10){
    const rect=scene.getBoundingClientRect();
    const target=state.plants.find(p=>p.id===state.selected);
    const centerX=target?target.element.offsetLeft+target.element.offsetWidth/2:rect.width*.5;
    const top=target?target.element.offsetTop+target.element.offsetHeight*.45:rect.height*.55;
    for(let i=0;i<n;i++){
      const p=document.createElement("span");p.className="particle";p.textContent=symbol;
      p.style.left=`${centerX+random(-24,24)}px`;p.style.top=`${top+random(-12,18)}px`;
      p.style.setProperty("--px",`${random(-45,45)}px`);p.style.setProperty("--py",`${random(-55,20)}px`);
      p.style.animationDelay=`${random(0,.22)}s`;scene.appendChild(p);setTimeout(()=>p.remove(),1500);
    }
  }

  function tend(kind){
    const plant=state.plants.find(p=>p.id===state.selected);
    if(!plant){setFeedback("Grow a flower first — then choose how to care for it.");$("growBtn").focus();return;}
    plant[kind]++;state.care[kind]++;
    const symbols={water:"✧",feed:"✦",sun:"☼"};
    particles(symbols[kind],kind==="water"?13:9);
    const total=plant.water+plant.feed+plant.sun;
    plant.element.style.filter=`drop-shadow(0 0 ${Math.min(16,5+total*2)}px ${palette[plant.type].glow})`;
    plant.element.animate([{scale:"1"},{scale:"1.055"},{scale:"1"}],{duration:520,easing:"ease-out"});
    const messages={
      water:["A little water, a little room to breathe.","The soil is softer now.","Care doesn't need to be loud."],
      feed:["A small offering for the things still growing.","Nourishment, in whatever form you need.","Slow growth is still growth."],
      sun:["A little warmth found its way in.","Let something gentle reach you.","Even a small light can help."]
    };
    setFeedback(messages[kind][(state.care[kind]-1)%messages[kind].length]);
    showBubble(plant,{water:"Thank you for the rain.",feed:"I feel a little stronger.",sun:"That warmth feels good."}[kind]);
  }

  function reset(){
    plantsEl.innerHTML="";state.plants=[];state.selected=null;state.care={water:0,feed:0,sun:0};idCounter=0;
    document.querySelectorAll(".root-glow,.particle").forEach(e=>e.remove());
    $("emptyState").classList.remove("hide");updateCount();$("gardenTitle").textContent="A quiet place to begin";
    $("sceneMessage").textContent="Your garden grows at its own pace";setFeedback("Start with a feeling. Your first flower is waiting.");
    [35,30,15,10,10].forEach((v,i)=>$(moodKeys[i]).value=v);updateSliders();
  }

  function reflection(){
    const mood=dominant(),messages={
      joy:["Let joy be enough.","You don't need to explain a good moment. Let it stay."],
      calm:["Stay with the quiet.","Not every moment needs to become something else."],
      anxiety:["One step at a time.","You don't have to solve the whole day in one sitting."],
      sadness:["Make room for softer days.","You can be gentle with yourself without having a reason."],
      hope:["A small beginning still counts.","You don't need to see the whole path to take one step."]
    };
    $("reflectionTitle").textContent=messages[mood][0];$("reflectionText").textContent=messages[mood][1];
    const d=$("reflectionDialog");if(d.showModal)d.showModal();else alert(messages[mood].join("\n\n"));
  }

  moodKeys.forEach(k=>$(k).addEventListener("input",updateSliders));
  $("growBtn").addEventListener("click",growFlower);
  $("waterBtn").addEventListener("click",()=>tend("water"));
  $("feedBtn").addEventListener("click",()=>tend("feed"));
  $("sunBtn").addEventListener("click",()=>tend("sun"));
  $("reflectionBtn").addEventListener("click",reflection);
  $("resetBtn").addEventListener("click",reset);
  $("closeDialog").addEventListener("click",()=>$("reflectionDialog").close());
  $("dialogDone").addEventListener("click",()=>$("reflectionDialog").close());
  $("reflectionDialog").addEventListener("click",e=>{if(e.target===$("reflectionDialog"))$("reflectionDialog").close();});
  updateSliders();
})();