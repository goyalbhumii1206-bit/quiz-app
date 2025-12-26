document.addEventListener("DOMContentLoaded", function () {

  const startScreen = document.getElementById("startScreen");
  const quizScreen = document.getElementById("quizScreen");
  const startBtn = document.getElementById("startBtn");

  const questionEl = document.getElementById("question");
  const optionBtns = document.querySelectorAll(".option");
  const nextBtn = document.getElementById("nextBtn");

  const quizData = [
    {
      question: "HTML stands for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyperlinks Tool Mark Language",
        "None of these"
      ],
      answer: 0
    },
    {
      question: "Which language is used for styling?",
      options: ["HTML", "CSS", "Java", "Python"],
      answer: 1
    },
    {
      question: "Which is not a programming language?",
      options: ["Java", "Python", "HTML", "C++"],
      answer: 2
    }
  ];

  let current = 0;
  let score = 0;

  startBtn.onclick = function () {
    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    loadQuestion();
  };

  function loadQuestion() {
    resetOptions();
    const q = quizData[current];
    questionEl.innerText = q.question;

    optionBtns.forEach((btn, index) => {
      btn.innerText = q.options[index];
      btn.onclick = () => checkAnswer(index);
    });
  }

  function checkAnswer(index) {
    const correct = quizData[current].answer;
    optionBtns.forEach(btn => btn.disabled = true);

    if (index === correct) {
      optionBtns[index].classList.add("correct");
      score++;
    } else {
      optionBtns[index].classList.add("wrong");
      optionBtns[correct].classList.add("correct");
    }
  }

  function resetOptions() {
    optionBtns.forEach(btn => {
      btn.classList.remove("correct", "wrong");
      btn.disabled = false;
    });
  }

  nextBtn.onclick = function () {
    current++;
    if (current < quizData.length) {
      loadQuestion();
    } else {
      document.querySelector(".quiz-box").innerHTML = `
        <h2>Quiz Completed 🎉</h2>
        <p>Your Score: ${score} / ${quizData.length}</p>
      `;
    }
  };

});
