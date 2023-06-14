// Get the header element
const header = document.querySelector('header');

// Initialize the variable that stores the last scroll position
let lastScroll = window.pageYOffset;

// Listen for the scroll event
window.addEventListener('scroll', () => {
    // Get the current scroll position
    const currentScroll = window.pageYOffset;

    // Check if the user has scrolled down
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }

    // Update the last scroll position
    lastScroll = currentScroll;
});


//   const discordLink = document.querySelector('.row-discord a');
//   discordLink.addEventListener('click', () => { const discordUsername = 'Lord Niklaus#3815'; // Replace with your actual Discord username
//     navigator.clipboard.writeText(discordUsername);
//     alert('Discord username copied to clipboard!');
//   });

// Get the Discord link and copy button elements
// const discordLink = document.querySelector('.row-discord a');
// const discordCopyButton = document.createElement('button');
// discordCopyButton.innerHTML = 'Copy';
// discordLink.parentNode.insertBefore(discordCopyButton, discordLink.nextSibling);

// // Add a click event listener to the copy button
// discordCopyButton.addEventListener('click', () => {
//   const discordUsername = 'Lord Niklaus#3815'; // Replace with your actual Discord username
//   navigator.clipboard.writeText(discordUsername);
//   discordCopyButton.innerHTML = 'Copied!';
//   discordCopyButton.disabled = true;
// });


// const discordLink = document.querySelector('.row-discord a');
//     const copyBtn = document.querySelector('.row-discord .copy-btn');
//     const discordUsername = 'Lord Niklaus#3815'; // Replace with your actual Discord username
//     discordLink.addEventListener('click', (event) => {
//       event.preventDefault();
//       navigator.clipboard.writeText(discordUsername);
//       copyBtn.classList.add('copied');
//       copyBtn.textContent = 'Copied!';
//       setTimeout(() => {
//         copyBtn.classList.remove('copied');
//         copyBtn.textContent = 'Copy';
//       }, 2000);
//     });


const discordButton = document.querySelector('.row-discord button');
    discordButton.addEventListener('click', () => {
      const discordUsername = 'Lord Niklaus#3815'; // Replace with your actual Discord username
      navigator.clipboard.writeText(discordUsername);
      discordButton.classList.add('copied');
      setTimeout(() => {
        discordButton.classList.remove('copied');
      }, 2000);
    });




    




































    const row = document.querySelector('.my-card-row');
    const cards = document.querySelectorAll('.my-card');
    const prevBtn = document.querySelector('.prev-button');
    const nextBtn = document.querySelector('.next-button');
    const cardWidth = cards[0].offsetWidth;
    
    let pos = 0;
    
    // Move cards to the left
    function moveLeft() {
      pos -= cardWidth;
      row.style.transform = `translateX(${pos}px)`;
      if (pos < -(cards.length - 5) * cardWidth) {
        pos = 0;
        row.style.transform = `translateX(${pos}px)`;
      }
    }
    
    // Move cards to the right
    function moveRight() {
      pos += cardWidth;
      row.style.transform = `translateX(${pos}px)`;
      if (pos > 0) {
        pos = -(cards.length - 5) * cardWidth;
        row.style.transform = `translateX(${pos}px)`;
      }
    }
    
    // Move cards to the left every 3 seconds
    let intervalId = setInterval(moveLeft, 3000);
    
    // Stop moving cards when mouse is over carousel
    row.addEventListener('mouseover', () => {
      clearInterval(intervalId);
    });
    
    // Resume moving cards when mouse leaves carousel
    row.addEventListener('mouseout', () => {
      intervalId = setInterval(moveLeft, 3000);
    });
    
    // Move cards to the left when left arrow is clicked
    prevBtn.addEventListener('click', () => {
      moveLeft();
    });
    
    // Move cards to the right when right arrow is clicked
    nextBtn.addEventListener('click', () => {
      moveRight();
    });
     