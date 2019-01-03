require('../src/data.js');

const input = { data: { 
  {
  name: 'Aatrox', title: "the Darkin Blade", splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    attackrange: 150
},
{
  name: "Ahri", title: "the Nine-Tailed Fox", splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
    attackrange: 550
},
{
  name: "Akali", title: "the Fist of Shadow", splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
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
    name: "Akali", title: "the Fist of Shadow", splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
    attackrange: 125
  },
];

describe('LOL', () => {
  it('deberia ser un objeto', () => {
    expect(typeof lol).toBe('object');
    expect(typeof LOL).toBe('object');

  });

  describe('lol.championsList', () => {
    it('deberia ser una funcion', () => {
      expect(typeof lol.championsList).toBe('function');
    });

  });
});
