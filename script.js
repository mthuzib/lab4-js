
// Theme Toggle
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
      });
    }
  
    // Contact Form Validation
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("nameInput").value.trim();
        const message = document.getElementById("messageInput").value.trim();
        const response = document.getElementById("response");
  
        if (name === "" || message === "") {
          alert("Please fill out all fields.");
        } else {
          response.innerText = `Thanks, ${name}. We'll get back to you soon!`;
          contactForm.reset();
        }
      });
    }
  
    // Load Users
    const loadUsersBtn = document.getElementById("loadUsersBtn");
    const userList = document.getElementById("userList");
    if (loadUsersBtn && userList) {
        loadUsersBtn.addEventListener("click", async () => {
            try {
              const res = await fetch('https://jsonplaceholder.typicode.com/users');
              const users = await res.json();
              userList.innerHTML = "";
              users.forEach(user => {
                const li = document.createElement("li");
                li.textContent = user.name;
                userList.appendChild(li);
              });
            } catch (err) {
              console.error("Failed to load users:", err);
            }
          });                 
    }
  
    // FAQ Toggle
    const questions = document.querySelectorAll(".question");
    questions.forEach((q) => {
      q.addEventListener("click", () => {
        q.nextElementSibling.classList.toggle("visible");
      });
    });
  });
  // Back to Top button logic
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
