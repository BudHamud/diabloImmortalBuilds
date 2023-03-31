const myClass = document.getElementById("class");
const myBtns = document.getElementById("btnClass")

const classes = [
  {
    name: "Bárbaro",
    pve: 90,
    pvp: 5,
    dif: 20,
    icon: "./img/barbaro/barbarian.svg",
    img: "./img/barbaro/img.png"
    
  },
  {
    name: "Cruzada",
    pve: 60,
    pvp: 80,
    dif: 10,
    icon: "./img/cruzada/cruzada.svg",
    img: "./img/cruzada/img.png"
  },
  {
    name: "Cazadora de Demonios",
    pve: 30,
    pvp: 10,
    dif: 10,
    icon: "./img/cazadora/cazadora.svg",
    img: "./img/cazadora/img.png"
  },
  {
    name: "Monje",
    pve: 50,
    pvp: 50,
    dif: 50,
    icon: "./img/monje/monje.svg",
    img: "./img/monje/img.png"
  },
  {
    name: "Nigromante",
    pve: 10,
    pvp: 100,
    dif: 80,
    icon: "./img/nigromante/nigromante.svg",
    img: "./img/nigromante/img.png"
  },
  {
    name: "Maga",
    pve: 50,
    pvp: 50,
    dif: 90,
    icon: "./img/maga/maga.svg",
    img: "./img/maga/img.png"
  }
];

const getClass = (e) => {
  myClass.innerHTML = `
    <p>${e.name}</p>
    <img src="${e.img}">
    PvE<progress value='${e.pve}' max="100"></progress>
    PvP<progress value='${e.pvp}' max="100"></progress>
    Dificultad<progress value='${e.dif}' max="100"></progress>
    <a href="build/${e.name}">Ver builds</a>
    `;
};

const getBtns = (e) => {
    e.map((e, i) => {
        const btn = document.createElement('button')
        const img = document.createElement('img')
        img.src = e.icon
        btn.value = i
        btn.appendChild(img)
        btn.onclick = () => getClass(classes[i])
        myBtns.appendChild(btn)
    })
}

getClass(classes[0]);
getBtns(classes)