void (() => {
  const database = {
    concerts: [
      {
        artist: 'Black Honey',
        picture: 'https://assets.rockwerchter.be/files/cache/medium/files/blackhoney-5c66e811e4181.jpg',
        location: 'The Slope',
      },
      {
        artist: 'Underworld',
        picture: 'https://assets.rockwerchter.be/files/cache/medium/files/underworld-web2-5bf54c7fd1bef.jpg',
        location: 'Klub C',
      },
      {
        artist: 'Zwangere Guy ',
        picture: 'https://assets.rockwerchter.be/files/cache/medium/files/zwangere-web-5cc84cb04f48d.jpg"',
        location: 'The Barn',
      },
      {
        artist: 'Weezer',
        picture: 'https://assets.rockwerchter.be/files/cache/medium/files/weezer-web-5bf53d7e73ec6.jpg',
        location: 'Main Stage',
      },
      {
        artist: 'Black Honey',
        picture: 'https://assets.rockwerchter.be/files/cache/medium/files/blackhoney-5c66e811e4181.jpg',
        location: 'The Slope',
      },
      {
        artist: 'Underworld',
        picture: 'https://assets.rockwerchter.be/files/cache/medium/files/underworld-web2-5bf54c7fd1bef.jpg',
        location: 'Klub C',
      },
      {
        artist: 'Zwangere Guy ',
        picture: 'https://assets.rockwerchter.be/files/cache/medium/files/zwangere-web-5cc84cb04f48d.jpg"',
        location: 'The Barn',
      },
      {
        artist: 'Weezer',
        picture: 'https://assets.rockwerchter.be/files/cache/medium/files/weezer-web-5bf53d7e73ec6.jpg',
        location: 'Main Stage',
      }
    ],
  };

  const app = {
    initialize () {
      this.cacheElements();
      this.generateUIForConcerts();
    },
    cacheElements () {
      this.concertsElement = document.querySelector('.concerts');
    },
    generateUIForConcerts () {
      if (this.concertsElement !== null) {
        let concertElement;
        database.concerts.forEach((concert, index) => {
          concertElement = document.createElement('div');
          if (index === 0) {
            concertElement.classList.add('g-gr-cspan-12', 'g-gr-cspan-md-6', 'g-gr-cspan-lg-4', 'g-gr-cspan-xl-6', 'g-gr-rspan-2');
          } else if (index == 1) {
            concertElement.classList.add('g-gr-cspan-12', 'g-gr-cspan-md-6', 'g-gr-cspan-lg-4', 'g-gr-cspan-xl-4', 'g-gr-rspan-2');
          } else {
            concertElement.classList.add('g-gr-cspan-12', 'g-gr-cspan-md-6', 'g-gr-cspan-lg-4', 'g-gr-cspan-xl-2');
          }
          concertElement.innerHTML = `
          <article class="concert">
            <picture class="concert__picture">
              <img src="${concert.picture}">
            </picture>
            <div class="concert__body">
              <div class="concert__meta">
                <span class="concert__location">${concert.location}</span>
                <span class="concert__date">Zondag</span>
              </div>
              <h1 class="concert__artist">${concert.artist}</h1>
            </div>
          </article>
          `;
          this.concertsElement.appendChild(concertElement);
        });
      }
    }
  };
  app.initialize();
})();