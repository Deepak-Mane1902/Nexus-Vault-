 // page1 Section
 
         const menuButton = document.getElementById('menu-button');
        const closeButton = document.getElementById('close-button');
        const navMenu = document.getElementById('nav-menu');
        const overlay = document.getElementById('overlay');
        const mainLinks = document.querySelectorAll('.main-link');

        function toggleMenu(action) {
            if (action === 'open') {
                navMenu.classList.add('active');
                overlay.classList.add('active');
                // Hide hamburger button
                menuButton.style.opacity = '0';
                menuButton.style.visibility = 'hidden';
            } else {
                navMenu.classList.remove('active');
                overlay.classList.remove('active');
                // Show hamburger button
                menuButton.style.opacity = '1';
                menuButton.style.visibility = 'visible';
            }
        }

        // Open menu
        menuButton.addEventListener('click', () => {
            toggleMenu('open');
        });

        // Close menu (via the close button inside the menu)
        closeButton.addEventListener('click', () => {
            toggleMenu('close');
        });

        // Close menu (via the overlay)
        overlay.addEventListener('click', () => {
            toggleMenu('close');
        });

        // Toggle sub-menus
        mainLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent page jump

                const subMenu = link.nextElementSibling;
                if (subMenu && subMenu.classList.contains('sub-menu')) {
                    // Close other sub-menus
                    document.querySelectorAll('.sub-menu.open').forEach(openMenu => {
                        if (openMenu !== subMenu) {
                            openMenu.classList.remove('open');
                        }
                    });

                    // Toggle the current sub-menu
                    subMenu.classList.toggle('open');
                }
            });
        });

        const scrollArrow = document.getElementById("scroll-arrow");

scrollArrow.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#page2").scrollIntoView({ behavior: "smooth" });

  // Hide arrow after animation delay (~1s)
  setTimeout(() => {
    scrollArrow.style.opacity = "100%";
    // scrollArrow.style.visibility = "hidden";
  }, 1000);
});

//page2 section
        // --------------------------------------
        // JavaScript (Handles card switching)
        // --------------------------------------
        document.addEventListener('DOMContentLoaded', () => {
            const navButtons = document.querySelectorAll('.discipline-nav .nav-button');
            const cards = document.querySelectorAll('.card-container .card');

            navButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const discipline = button.getAttribute('data-discipline');

                    // 1. Deactivate all buttons and cards
                    navButtons.forEach(btn => btn.classList.remove('active'));
                    cards.forEach(card => card.classList.remove('active'));

                    // 2. Activate the clicked button
                    button.classList.add('active');

                    // 3. Activate the corresponding card
                    const targetCard = document.querySelector(`.card[data-discipline="${discipline}"]`);
                    if (targetCard) {
                        targetCard.classList.add('active');
                    }
                });
            });
        });


  // #page4 section
    const testimonialsContainer = document.getElementById('testimonials-container');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const pageInfo = document.getElementById('page-info');

        const testimonials = [
            { text: 'I love the program, and really think that it could be real help to the sport.', name: 'A. Alton', location: 'Hungary', role: 'International Judge', hasImage: true, imgSrc: 'https://i.ibb.co/Lp2p1yW/Screenshot-118.png', color: 'white' },
            { text: 'Acro companion app is a great way to deal with the sport I love, without wasting time on the less fun part!', name: 'H. Diskin', location: 'Israel', role: 'Coach', hasImage: false, color: 'white' },
            { text: 'Acro Companion is a huge time saver for coaches and judges alike in the sport.', name: 'M. Katsov', location: 'United States of America', role: 'Coach', hasImage: false, color: 'white' },
            { text: 'Great application to reduce workload, stress and mistakes.', name: 'T. Longin', location: 'Austria', role: 'Coach & international judge', hasImage: true, imgSrc: 'https://i.ibb.co/3s68k47/Screenshot-119.png', color: 'white' },
            { text: 'What an amazing application, quick and simple to use.', name: 'J. Dodd', location: 'Wales', role: 'Coach', hasImage: false, color: 'white' },
            { text: 'Acro Companion saves time and avoid mistakes!', name: 'A. Rodriguez', location: 'Spain', role: 'Coach', hasImage: false, color: 'white' },
        ];
        
        // Use a loop to add the 49 testimonials, alternating colors
        for (let i = testimonials.length; i < 6; i++) {
            testimonials.push({
                text: `This is a placeholder testimonial number ${i + 1}.`,
                name: `User ${i + 1}`,
                location: `Country ${i + 1}`,
                role: `Role ${i + 1}`,
                hasImage: (i === 5 || i === 8), // Example of adding more images
                imgSrc: 'https://i.ibb.co/Lp2p1yW/Screenshot-118.png',
                color: 'white'
            });
        }
        
        const cardWidth = 320; 
        const cardGap = 25;
        let currentPage = 1;
        
        function renderAllTestimonials() {
            testimonials.forEach(testimonial => {
                const card = document.createElement('div');
                card.className = `testimonial-card ${testimonial.color}-card`;

                let avatarHtml = '';
                if (testimonial.hasImage) {
                    avatarHtml = `<div class="card-avatar"><img src="${testimonial.imgSrc}" alt="${testimonial.name}"></div>`;
                } else {
                    avatarHtml = `<div class="ac-logo-circle"><span class="ac-logo">NV</span></div>`;
                }

                card.innerHTML = `
                    ${avatarHtml}
                    <div class="quote-icon">“</div>
                    <p class="testimonial-text">${testimonial.text}</p>
                    <div class="testimonial-meta">
                        <div class="testimonial-name">${testimonial.name}</div>
                        <div class="testimonial-location">${testimonial.location}</div>
                        <div class="testimonial-role">${testimonial.role}</div>
                    </div>
                `;
                testimonialsContainer.appendChild(card);
            });
        }

        function updateCarousel() {
            const offset = -(currentPage - 1) * (cardWidth + cardGap);
            testimonialsContainer.style.transform = `translateX(${offset}px)`;
            
            pageInfo.textContent = `${currentPage} / ${testimonials.length}`;
            updateButtons();
        }

        function updateButtons() {
            prevBtn.disabled = currentPage === 1;
            nextBtn.disabled = currentPage >= testimonials.length;
            prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
            nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
        }

        document.addEventListener('DOMContentLoaded', () => {
            renderAllTestimonials();
            updateCarousel();
        });

        nextBtn.addEventListener('click', () => {
            if (currentPage < testimonials.length) {
                currentPage++;
                updateCarousel();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                updateCarousel();
            }
        });
        
        // --- Setup digits inside each stat box ---
function setupDigits() {
  document.querySelectorAll(".stat-number").forEach(stat => {
    const rawText = stat.textContent.trim();
    const plusSign = rawText.includes("+");
    const numberOnly = rawText.replace(/\D/g, ""); // digits only

    stat.textContent = ""; // clear content

    // Wrap each digit
    numberOnly.split("").forEach(d => {
      const span = document.createElement("span");
      span.className = "digit";
      span.textContent = d;
      stat.appendChild(span);
    });

    if (plusSign) {
      const plus = document.createElement("span");
      plus.textContent = "+";
      stat.appendChild(plus);
    }
  });
}


// card animation scroll-left-to-right

let direction = 1; // 1 = forward, -1 = backward

function autoScroll() {
  if (direction === 1 && currentPage < testimonials.length) {
    currentPage++;
  } else if (direction === 1 && currentPage >= testimonials.length) {
    direction = -1;
    currentPage--;
  } else if (direction === -1 && currentPage > 1) {
    currentPage--;
  } else if (direction === -1 && currentPage <= 1) {
    direction = 1;
    currentPage++;
  }
  updateCarousel();
}

// Auto-scroll every 3s
setInterval(autoScroll, 3000);

// --- Animate last digit rolling ---
function animateNumber(el, target, duration = 2000) {
    let start = 0;
    let increment = target / (duration / 50); // update every 50ms
    let timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            start = target;
            clearInterval(timer);
        }
        // Format numbers with space for thousands
        el.innerText = Math.floor(start).toLocaleString('en-US') + '+';
    }, 50);
}

// Start animation after 10 seconds
setTimeout(() => {
    document.querySelectorAll('.stat-number').forEach(el => {
        const target = parseInt(el.getAttribute('data-target'));
        animateNumber(el, target);
    });
}, 3000);


