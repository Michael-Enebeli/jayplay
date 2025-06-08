// cypress/e2e/music_player.cy.js
describe('Full Music Player Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5174/music');
  });

  it('plays a track, pauses after 5s, switches and pauses another', () => {
    // Play the initial track
    cy.get('.controls button').eq(1).click(); // Play button
    cy.wait(50000); // wait 5s
    cy.get('.controls button').eq(1).click(); // Pause

    // Click "Listen Now" on the first card
    cy.get('.music-card').eq(0).find('button').contains('Listen Now').click();

    // Wait for new track to start
    cy.get('.controls button').eq(1).click(); // Play new track
    cy.wait(50000); // wait 5s
    cy.get('.controls button').eq(1).click(); // Pause
  });
});
