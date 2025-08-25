
// // 🌐 Smooth Scroll for Navigation Links
// document.querySelectorAll('a[href^="#"]').forEach(link => {
//   link.addEventListener('click', function(e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute('href'));
//     if (target) {
//       target.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });

// // 🪄 Scroll Reveal Animation for Sections
// const revealElements = document.querySelectorAll('.services-section, .skills-section, .contact-section');
// const revealOnScroll = () => {
//   revealElements.forEach(el => {
//     const rect = el.getBoundingClientRect();
//     if (rect.top < window.innerHeight - 100) {
//       el.classList.add('visible');
//     }
//   });
// };
// window.addEventListener('scroll', revealOnScroll);
// window.addEventListener('load', revealOnScroll);

// // ✨ Add 'visible' class styling in CSS
// // .visible { opacity: 1; transform: translateY(0); transition: all 0.6s ease; }
// // .services-section, .skills-section, .contact-section { opacity: 0; transform: translateY(40px); }

// // 🧠 Skills Hover Tooltip (Optional)
// document.querySelectorAll('.skill-card').forEach(card => {
//   card.addEventListener('mouseenter', () => {
//     card.title = `Proficient in ${card.textContent}`;
//   });
// });

// // 📬 Contact Form Validation
// document.querySelectorall('.contact-form').addEventListener('submit', function(e) {
//   e.preventDefault();
//   const name = this.name.value.trim();
//   const email = this.email.value.trim();
//   const message = this.message.value.trim();

//   if (!name || !email || !message) {
//     alert('Please fill out all fields.');
//     return;
//   }

//   if (!email.includes('@')) {
//     alert('Please enter a valid email address.');
//     return;
//   }

//   // Simulate form submission
//   alert('Thanks for reaching out! Your message has been sent.');
//   this.reset();
// });

// // 🧭 Sticky Header on Scroll
// const header = document.querySelector('header');
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 60) {
//     header.classList.add('sticky');
//   } else {
//     header.classList.remove('sticky');
//   }
// });

// // Add this to your CSS:
// // header.sticky { position: fixed; top: 0; width: 100%; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.1); z-index: 1000; }
