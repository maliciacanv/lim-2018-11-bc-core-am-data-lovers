require('../src/data.js');
<<<<<<< HEAD
const returnChampionsList  = [ 
  {
  version: "6.24.1",
  id: "Aatrox",
  key: "266",
  name: "Aatrox",
  title: "the Darkin Blade",
  img:
    "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
  splash:
    "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
  blurb:
    "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
  info: {
    attack: 8,
    defense: 4,
    magic: 3,
    difficulty: 4
  },
  image: {
    full: "Aatrox.png",
    sprite: "champion0.png",
    group: "champion",
    x: 0,
    y: 0,
    w: 48,
    h: 48
  },
  tags: ["Fighter", "Tank"],
  partype: "BloodWell",
  stats: {
    hp: 537.8,
    hpperlevel: 85,
    mp: 105.6,
    mpperlevel: 45,
    movespeed: 345,
    armor: 24.384,
    armorperlevel: 3.8,
    spellblock: 32.1,
    spellblockperlevel: 1.25,
    attackrange: 150,
    hpregen: 6.59,
    hpregenperlevel: 0.5,
    mpregen: 0,
    mpregenperlevel: 0,
    crit: 0,
    critperlevel: 0,
    attackdamage: 60.376,
    attackdamageperlevel: 3.2,
    attackspeedoffset: -0.04,
    attackspeedperlevel: 3
  }
  },
  {
  version: "6.24.1",
  id: "Ahri",
  key: "103",
  name: "Ahri",
  title: "the Nine-Tailed Fox",
  img:
    "https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png",
  splash:
    "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
  blurb:
    "Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...",
  info: {
    attack: 3,
    defense: 4,
    magic: 8,
    difficulty: 5
  },
  image: {
    full: "Ahri.png",
    sprite: "champion0.png",
    group: "champion",
    x: 48,
    y: 0,
    w: 48,
    h: 48
  },
  tags: ["Mage", "Assassin"],
  partype: "MP",
  stats: {
    hp: 514.4,
    hpperlevel: 80,
    mp: 334,
    mpperlevel: 50,
    movespeed: 330,
    armor: 20.88,
    armorperlevel: 3.5,
    spellblock: 30,
    spellblockperlevel: 0,
    attackrange: 550,
    hpregen: 6.505,
    hpregenperlevel: 0.6,
    mpregen: 6,
    mpregenperlevel: 0.8,
    crit: 0,
    critperlevel: 0,
    attackdamage: 53.04,
    attackdamageperlevel: 3,
    attackspeedoffset: -0.065,
    attackspeedperlevel: 2
  }
  },
]

<<<<<<< HEAD
  const listOfChampions = [ 
    {  img:"https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png", name: "Aatrox", title: "the Darkin Blade", attackrange: 150},
    { img:"https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png", name: "Ahri",  title: "the Nine-Tailed Fox", attackrange: 550}
  ]
  
describe('lol', () => {
  it('deberia ser un objeto', () => {
    expect(typeof example).toBe('function');
=======
=======
const input = { data: { 
  { name: 'Aatrox', title: "the Darkin Blade", splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    attackrange: 150
  },
  { 
    name: "Ahri", title: "the Nine-Tailed Fox", splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
    attackrange: 550
  },
  {
    name:"Akali", title:"the Fist of Shadow", splash:"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
    attackrange: 125
  },
};

const output = [
  {
    name: "Ahri", title: "the Nine-Tailed Fox", splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
    attackrange: 550
  },
  {
    name: "Aatrox", title: "the Darkin Blade", splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    attackrange: 150
  },
  {
    name:"Akali", title:"the Fist of Shadow", splash:"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
    attackrange: 125
  },
];
>>>>>>> 9d017326de9bee15f3958a0fc77cb69d5d588a13

describe('LOL', () => {
  it('deberia ser un objeto', () => {
<<<<<<< HEAD
    expect(typeof lol).toBe('object');
>>>>>>> 958795f810f5266e9d6d998e86d2ebd2694c3a67
=======
    expect(typeof LOL).toBe('object');
>>>>>>> 9d017326de9bee15f3958a0fc77cb69d5d588a13
  });

  describe('lol.championsList', () => {
    it('deberia ser una funcion', () => {
      expect(typeof lol.championsList).toBe('function');
    });

      });
    });
