// Navbar toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Dark Mode
const darkToggle = document.getElementById("darkToggle");
if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
}

// Quiz
const quizData = [
  { q: "2 + 2 = ?", options: ["3", "4", "5"], answer: "4" },
  { q: "Capital of France?", options: ["London", "Paris"], answer: "Paris" },
];

const quizContainer = document.getElementById("quizContainer");
const submitQuiz = document.getElementById("submitQuiz");
const quizResult = document.getElementById("quizResult");

if (quizContainer) {
  quizData.forEach((item, index) => {
    const qDiv = document.createElement("div");
    qDiv.innerHTML = `<p>${item.q}</p>`;
    item.options.forEach(opt => {
      qDiv.innerHTML += `
        <label>
          <input type="radio" name="q${index}" value="${opt}"> ${opt}
        </label><br>`;
    });
    quizContainer.appendChild(qDiv);
  });

  submitQuiz.addEventListener("click", () => {
    let score = 0;
    quizData.forEach((item, index) => {
      const ans = document.querySelector(`input[name="q${index}"]:checked`);
      if (ans && ans.value === item.answer) score++;
    });
    quizResult.textContent = `You scored ${score}/${quizData.length} 🎉`;
  });
}

// Joke API
const getJokeBtn = document.getElementById("getJoke");
const jokeText = document.getElementById("jokeText");

if (getJokeBtn) {
  getJokeBtn.addEventListener("click", async () => {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    jokeText.textContent = `${data.setup} - ${data.punchline}`;
  });
}
