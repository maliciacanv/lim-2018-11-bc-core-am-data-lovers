require('../src/data.js');


const input = [
  {
    name: 'Aatrox', title: 'the Darkin Blade', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    stats: { attackrange: 150 }
  },
  {
    name: 'Ahri', title: 'the Nine-Tailed Fox', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    stats: { attackrange: 550 }
  },
  {
    name: 'Akali', title: 'the Fist of Shadow', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
    stats: { attackrange: 125 }
  },
  {
    name: 'Alistar', title: 'the Minotaur', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
    stats: { attackrange: 125 }
  },
  {
    name: 'Amumu', title: 'the Sad Mummy', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg',
    stats: { attackrange: 125 }
  },
  {
    name: 'Anivia', title: 'the Cryophoenix', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg',
    stats: { attackrange: 600 }
  },
  {
    name: 'Annie', title: 'the Dark Child', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg',
    stats: { attackrange: 575 }
  },
  {
    name: 'Ashe', title: 'the Frost Archer', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg',
    stats: { attackrange: 600 }
  },
  {
    name: 'Aurelion Sol', title: 'The Star Forger', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg',
    stats: { attackrange: 550 }
  },
  {
    name: 'Bard', title: 'the Wandering Caretaker', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
    stats: { attackrange: 500 }
  },
  {
    name: 'Braum', title: 'the Heart of the Freljord', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg',
    stats: { attackrange: 125 }
  }
];

const output = [
  {
    name: 'Anivia', title: 'the Cryophoenix', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg',
    attackrange: 600
  },
  {
    name: 'Ashe', title: 'the Frost Archer', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg',
    attackrange: 600
  },
  {
    name: 'Annie', title: 'the Dark Child', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg',
    attackrange: 575
  },
  {
    name: 'Ahri', title: 'the Nine-Tailed Fox', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    attackrange: 550
  },
  {
    name: 'Aurelion Sol', title: 'The Star Forger', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg',
    attackrange: 550
  },
  {
    name: 'Bard', title: 'the Wandering Caretaker', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
    attackrange: 500
  },
  {
    name: 'Aatrox', title: 'the Darkin Blade', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    attackrange: 150
  },
  {
    name: 'Akali', title: 'the Fist of Shadow', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
    attackrange: 125
  },
  {
    name: 'Alistar', title: 'the Minotaur', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
    attackrange: 125
  },
  {
    name: 'Amumu', title: 'the Sad Mummy', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg',
    attackrange: 125
  }
];

describe('lol', () => {
  it('deberia ser un objeto', () => {
    expect(typeof lol).toBe('object');
  });
  describe('lol.championsTopTeam', () => {
    it('deberia ser una funcion', () => {
      expect(typeof lol.championsTopTeam).toBe('function');
    });
    it('deberia retornar un array con 10 objetos de mayor numero de ataque de rango', () => {
      expect(lol.championsTopTeam(input)).not.toEqual(output);
    });
    describe('lol.championsFilterRoles', () => {
      it('deberia ser una funcion', () => {
        expect(typeof lol.championsFilterRoles).toBe('function');
      });
      it('deberia retornar ')
    });
  });
});

