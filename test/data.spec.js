require('../src/data.js');


describe('lol', () => {
  it('deberia ser un objeto', () => {
    expect(typeof lol).toBe('object');
  });

  describe('lol.championsList', () => {
    it('deberia ser una funcion', () => { 
      expect(typeof lol.championsList). toBe('function');
    });
  });
});