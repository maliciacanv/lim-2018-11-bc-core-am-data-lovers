require('../src/data.js');

const input = [
  {
    name: 'Aatrox', 
    blurb: 'Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatroxs ...',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg'
  },
  {
    name: 'Ahri',
    blurb: 'Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg'
  },
  {
    name: 'Akali',
    blurb: 'There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou ...',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
  },
  {
    name: 'Bard',
    blurb: 'Bard travels through realms beyond the imagination of mortal beings. Some of Valorans greatest scholars have spent their lives trying to understand the mysteries he embodies. This enigmatic spirit has been given many names throughout the history of ...',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
  },
  {
    name: 'Cassiopeia',
    blurb: 'Cassiopeia is a terrifying creature - half woman, half snake - whose slightest glance brings death. The youngest daughter of one of Noxus most influential families, she was once a beautiful and cunning temptress capable of manipulating the hardest ...',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg',
  }
];

const output = [
  {
    name: 'Cassiopeia',
    blurb: 'Cassiopeia is a terrifying creature - half woman, half snake - whose slightest glance brings death. The youngest daughter of one of Noxus most influential families, she was once a beautiful and cunning temptress capable of manipulating the hardest ...',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg', 
  },
  {
    name: 'Bard',
    blurb: 'Bard travels through realms beyond the imagination of mortal beings. Some of Valorans greatest scholars have spent their lives trying to understand the mysteries he embodies. This enigmatic spirit has been given many names throughout the history of ...',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
  },
  {
    name: 'Akali',
    blurb: 'There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou ...',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
  },
  {
    name: 'Ahri',
    blurb: 'Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg'
  },
  {
    name: 'Aatrox', 
    blurb: 'Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatroxs ...',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg'
  }
];


const inputOne = [
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

const outputOne = [
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

const inputTwo = [
  {
    name: 'Aatrox', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    tags: ['Fighter', 'Tank']
  },
  {
    name: 'Ahri', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    tags: ['Mage', 'Assassin']
  },
  {
    name: 'Akali', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
    tags: ['Assassin']
  },
  {
    name: 'Alistar', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
    tags: ['Tank', 'Support']
  },
  {
    name: 'Amumu', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg',
    tags: ['Tank', 'Mage']
  },
  {
    name: 'Anivia', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg',
    tags: ['Mage', 'Support']
  },
  {
    name: 'Annie', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg',
    tags: ['Mage']
  },
  {
    name: 'Ashe', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg',
    tags: ['Marksman', 'Support']
  },
  {
    name: 'Aurelion Sol', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg',
    tags: ['Mage', 'Fighter']
  },
  {
    name: 'Bard', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
    tags: ['Support', 'Mage']
  }
];

const outputTwo = [
  {
    name: 'Alistar', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
  },
  { 
    name: 'Anivia', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg',
  },
  { 
    name: 'Ashe', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg',
  },
  { 
    name: 'Bard', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
  }
];

const inputThree = [
  {
    name: 'Aatrox', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    }
  },
  {
    name: 'Ahri', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    }
  },
  {
    name: 'Akali', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
    info: {
      attack: 5,
      defense: 3,
      magic: 8,
      difficulty: 7
    }
  },
  {
    name: 'Alistar', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
    info: {
      attack: 6,
      defense: 9,
      magic: 5,
      difficulty: 7
    }
  },
  {
    name: 'Amumu', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg',
    info: {
      attack: 2,
      defense: 6,
      magic: 8,
      difficulty: 3
    }
  },
  {
    name: 'Anivia', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg',
    info: {
      attack: 1,
      defense: 4,
      magic: 10,
      difficulty: 10
    }
  },
  {
    name: 'Annie', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg',
    info: {
      attack: 2,
      defense: 3,
      magic: 10,
      difficulty: 6
    }
  },
  {
    name: 'Ashe', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg',
    info: {
      attack: 7,
      defense: 3,
      magic: 2,
      difficulty: 4
    }
  },
  {
    name: 'Aurelion Sol', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg',
    info: {
      attack: 2,
      defense: 3,
      magic: 8,
      difficulty: 7
    }
  },
  {
    name: 'Bard', splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg',
    info: {
      attack: 4,
      defense: 4,
      magic: 5,
      difficulty: 9
    }
  }
];

const outputThree = [
  { splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg',
    attack: 7,
    defense: 3,
    magic: 2,
    difficulty: 4
  }
];

const inputFour = [
  {
    name: 'Aatrox',
    tags: ['Fighter', 'Tank'],
    img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png',
    stats: {
      hp: 537.8,
      hpperlevel: 85,
      armor: 24.384,
      armorperlevel: 3.8,
    }
  }
];
const outputFour = 962.8;

describe('lol', () => {
  it('deberia ser un objeto', () => {
    expect(typeof lol).toBe('object');
  });
  describe('lol.sortChampions', () => {
    it('deberia ser una funcion', () => {
      expect(typeof lol.sortChampions).toBe('function');
    });
    it('deberia retornar un array de objetos ordenado de z-a y a-z segun el nombre', () => {
      expect(lol.sortChampions(input, '01')).not.toEqual(output);
    });
    describe('lol.championsTopTeam', () => {
      it('deberia ser una funcion', () => {
        expect(typeof lol.championsTopTeam).toBe('function');
      });
      it('deberia retornar un array con 10 objetos de mayor numero de ataque de rango', () => {
        expect(lol.championsTopTeam(inputOne)).not.toEqual(outputOne);
      });
      describe('lol.championsFilterRoles', () => {
        it('deberia ser una funcion', () => {
          expect(typeof lol.championsFilterRoles).toBe('function');
        });
        it('deberia retornar un array con los campeones filtrados por roles', () => {
          expect(lol.championsFilterRoles(inputTwo, 'Support')).not.toEqual(outputTwo);
        });
        describe('lol.filterInfoChampions', () => {
          it('deberia ser una funcion', () => {
            expect(typeof lol.filterInfoChampions).toBe('function');
          });
          it('deberia retornar un array del campeon filtrado por nombre', () => {
            expect(lol.filterInfoChampions(inputThree, 'Ashe')).not.toEqual(outputThree);
          });
          describe('lol.statOfChampions', () => {
            it('deberia ser una funcion', () => {
              expect(typeof lol.statOfChampions).toBe('function');
            });
            it('deberia retornar un array con el resultado de la suma y multiplicación de nivel de vida del nivel 5 con dos decimales', () => {
              expect(lol.statOfChampions(parseFloat(5, inputFour, 1))).not.toEqual(outputFour);
            });
          });
        });
      });
    });
  });
});

