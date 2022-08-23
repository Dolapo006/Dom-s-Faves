let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
     
  
    
    const changeTitle = () => {
      document.getElementById('main-title').innerHTML = "DOM's World"
    };
    changeTitle();
  
  
    
  const changeBackgroundColor = () => {
    document.querySelector('body').style.backgroundColor = 'green';
  };
  
  changeBackgroundColor();
    
  const domsFavoriteThings = () => {
    const listTag = document.getElementById('favorite-things')
    listTag.removeChild(listTag.lastElementChild)
  }
  domsFavoriteThings();
  
    
  const special = () => {
    const specialTitle = document.querySelectorAll('special-title');
    for (let title of specialTitle) {
      title.style.fontSize = '2rem'
    }
  }
  special();
  
    
  const pastRace = () => {
    const pastList = document.getElementById('past-races');
    pastList.removeChild(pastList.children[3]);
  };
  pastRace();
  
  
    
  
  const addRace = () => {
    const newRace = document.createElement('li');
    const pastRaces = document.querySelector('#past-races');
    newRace.innerHTML = 'Seattle';
    pastRaces.append(newRace)
  };
  addRace();
  
    
  const newPost = (title, subtitle) => {
  const blogPosts = document.querySelector('.main');
  
  const newDiv = document.createElement('div');
  newDiv.classList.add('blog-post');
  newDiv.classList.add('red');
  
  const newTitle = document.createElement('h1');
  newTitle.innerHTML = title;
  
  const newSubTitle = document.createElement('p');
  newSubTitle.innerHTML = subtitle;
  
  newDiv.append(newTitle);
  newDiv.append(newSubTitle);
  
  console.log(newDiv);
  console.log(blogPosts);
  blogPosts.insertAdjacentElement('beforeend', newDiv)
  }
  newPost('Seattle', 'THIS RACE WAS SUPER EPIC!!');
  
    
  
  document.getElementById('quote-title').addEventListener('click', (event) => {
    randomQuote();
  });
    
  const blogPosts = document.querySelectorAll('.blog-post');
  
  blogPosts.forEach((item) => {
  item.addEventListener('mouseenter', (event) => {
    item.classList.toggle('red');
  });
  
  item.addEventListener('mouseout', (event) => {
    item.classList.toggle('purple');
  })
  })
  
  });
  