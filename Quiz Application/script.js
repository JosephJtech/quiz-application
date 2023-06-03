const quizData = [
  {
    question: "Question 1: The best way to understand mathematics is to talk and _____ about mathematics.",
    options: ["Write", "Think", "Read", "Discuss"],
    answer: "Discuss"
  },
  
  {
    question: "Question 2: A _____ sentence, which is either true or false, is called a statement.",
    options: ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
    answer: "Declarative"
  },
  
  {
    question: "Question 3: A statement is said to be an Atomic Statement if it cannot be divided into smaller statements. Otherwise, it is called a _____ Statement.",
    options: ["Complex", "Compound", "Molecular", "Simple"],
    answer: "Molecular"
  },
  
  {
    question: "Question 4: The sentence “4 + x = 12” is not a statement because it contains an unknown variable, _____.",
    options: ["x", "4", "12", "="],
    answer: "x"
  },
  
  {
    question: "Question 5: We can build a complicated (molecular) sentence by combining more than one simple atomic or molecular sentences by using _____ connectives.",
    options: ["Logical", "Mathematical", "Arithmetic", "Linguistic"],
    answer: "Logical"
  },
  
  {
    question: "Question 6: The connectives, “and”, “or”, “if… then”, “if and only if”, connect _____ statements and are called binary connectives.",
    options: ["One", "Two", "Three", "Four"],
    answer: "Two"
  },
  
  {
    question: "Question 7: The connective “not” applies to only a single sentence and is called a _____ connective.",
    options: ["Binary", "Unary", "Ternary", "Nullary"],
    answer: "Unary"
  },
  
  {
    question: "Question 8: In order to determine the truth values of molecular statements, the key observation to make is to completely determine the truth values of the parts and the type of connective(s).",
    options: ["True", "False"],
    answer: "True"
  },
  
  {
    question: "Question 9: In order to analyze logical connectives, we use _____.",
    options: ["Mathematical equations", "Logical symbols", "Graphs", "Functions"],
    answer: "Logical symbols"
  },
  
  {
    question: "Question 10: Propositional variables are also called _____ variables.",
    options: ["Logical", "Set", "Sentential", "Algebraic"],
    answer: "Sentential"
  },
  
  {
    question: "Question 11: P ∧ Q is read as “P and Q,” and it is called a _____.",
    options: ["Conjunction", "Disjunction", "Implication", "Negation"],
    answer: "Conjunction"
  },
  
  {
    question: "Question 12: P ∨ Q is read as “P or Q,” and it is called a _____.",
    options: ["Conjunction", "Disjunction", "Implication", "Negation"],
    answer: "Disjunction"
  },
  
  {
    question: "Question 13: P → Q is read as “if P then Q,” and it is called an _____ or conditional.",
    options: ["Conjunction", "Disjunction", "Implication", "Negation"],
    answer: "Implication"
  },
  
  {
    question: "Question 14: P ↔ Q is read as “P if and only if Q,” and it is called a _____.",
    options: ["Conjunction", "Disjunction", "Implication", "Biconditional"],
    answer: "Biconditional"
  },
  
  {
    question: "Question 15: The truth table shows all the possible combinations of truth values for a given statement.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Question 10: Propositional variables are also called _____ variables.",
    options: ["Logical", "Set", "Sentential", "Algebraic"],
    answer: "Sentential"
  },
  
  {
    question: "Question 11: P ∧ Q is read as “P and Q,” and it is called a _____.",
    options: ["Conjunction", "Disjunction", "Implication", "Negation"],
    answer: "Conjunction"
  },
  
  {
    question: "Question 12: P ∨ Q is read as “P or Q,” and it is called a _____.",
    options: ["Conjunction", "Disjunction", "Implication", "Negation"],
    answer: "Disjunction"
  },
  
  {
    question: "Question 13: P → Q is read as “if P then Q,” and it is called an _____ or conditional.",
    options: ["Conjunction", "Disjunction", "Implication", "Negation"],
    answer: "Implication"
  },
  
  {
    question: "Question 14: P ↔️ Q is read as “P if and only if Q,” and it is called a _____.",
    options: ["Conjunction", "Disjunction", "Implication", "Biconditional"],
    answer: "Biconditional"
  },
  
  {
    question: "Question 15: ¬P is read as “not P,” and it is called a _____.",
    options: ["Conjunction", "Disjunction", "Implication", "Negation"],
    answer: "Negation"
  },
  
  {
    question: "Question 16: In a truth table, the number of rows is determined by the number of _____ variables.",
    options: ["Atomic", "Molecular", "Compound", "Unary"],
    answer: "Atomic"
  },
  
  {
    question: "Question 17: The truth table lists all the possible combinations of truth values for the atomic variables and shows the truth value of the molecular statement for each combination.",
    options: ["True", "False"],
    answer: "True"
  },
  
  {
    question: "Question 18: In a truth table, the columns for the atomic variables are placed at the beginning, followed by columns for the truth values of the molecular statements.",
    options: ["True", "False"],
    answer: "True"
  },
  
  {
    question: "Question 19: The truth table for a molecular statement with n atomic variables will have _____ rows.",
    options: ["n", "2n", "2^n", "n^2"],
    answer: "2^n"
  },
  
  {
    question: "Question 20: In a truth table, the number of columns for the atomic variables is determined by the number of atomic variables.",
    options: ["True", "False"],
    answer: "True"
  },
  
  {
    question: "Question 21: A statement is called a tautology if it is true for all possible combinations of truth values for the atomic variables.",
    options: ["True", "False"],
    answer: "True"
  },
  
  {
    question: "Question 22: A statement is called a contradiction if it is false for all possible combinations of truth values for the atomic variables.",
    options: ["True", "False"],
    answer: "True"
  },
  
  {
    question: "Question 23: A statement is called contingent if it is neither a tautology nor a contradiction.",
    options: ["True", "False"],
    answer: "True"
  },
  
  {
    question: "Question 24: The statement ¬(P ∧ Q) is logically equivalent to _____",
    options: ["¬P ∧ ¬Q", "¬P ∨ ¬Q", "¬P ↔️ ¬Q", "P ∨ Q"],
    answer: "¬P ∨ ¬Q"
  },
  
  {
    question: "Question 25: The statement ¬(P ∨ Q) is logically equivalent to _____",
    options: ["¬P ∧ ¬Q", "¬P ∨ ¬Q", "¬P ↔️ ¬Q", "P ∧ Q"],
    answer: "¬P ∧ ¬Q"
  },
  
  {
    question: "Question 26: The statement ¬(P → Q) is logically equivalent to _____",
    options: ["¬P ∧ ¬Q", "¬P ∨ ¬Q", "¬P ↔️ ¬Q", "P ∨ Q"],
    answer: "P ∧ ¬Q"
  },
  
  {
    question: "Question 27: The statement ¬(P ↔️ Q) is logically equivalent to _____",
    options: ["¬P ∧ ¬Q", "¬P ∨ ¬Q", "¬P ↔️ ¬Q", "P ∨ Q"],
    answer: "(P ∧ ¬Q) ∨ (¬P ∧ Q)"
  },
  
  {
    question: "Question 28: The statement P ∨ (Q ∧ R) is logically equivalent to _____",
    options: ["(P ∨ Q) ∧(P ∨ R)", "(P ∧ Q) ∨ (P ∧ R)", "(P ∨ Q) ∨ (P ∨ R)", "(P ∧ Q) ∧ (P ∧ R)"],
    answer: "(P ∨ Q) ∧ (P ∨ R)"
  },
  
  {
    question: "Question 29: The statement (P → Q) ∨ (P → R) is logically equivalent to _____",
    options: ["P → (Q ∨ R)", "P → (Q ∧ R)", "(P → Q) ∧ (P → R)", "(P ∨ Q) ∨ (P ∨ R)"],
    answer: "P → (Q ∨ R)"
  },
  
  {
    question: "Question 30: The statement (P ↔️ Q) ↔️ R is logically equivalent to _____",
    options: ["(P ↔️ R) ↔️ Q", "P ↔️ (Q ↔️ R)", "(P ↔️ Q) ↔️ R", "(P ↔️ Q) ↔️ (P ↔️ R)"],
    answer: "P ↔️ (Q ↔️ R)"
  },
  
  {
    question: "Question 31: The statement P → (Q → R) is logically equivalent to _____",
    options: ["(P → Q) → R", "P → (Q ∧ R)", "(P → Q) ∨ (P → R)", "(P ∨ Q) ∨ (P ∨ R)"],
    answer: "(P → Q) → R"
  },
  
  {
    question: "Question 32: The statement P ↔️ (Q ↔️ R) is logically equivalent to _____",
    options: ["(P ↔️ Q) ↔️ R", "P ↔️ (Q ∨ R)", "(P ↔️ Q) ∨ (P ↔️ R)", "(P ↔️ Q) ↔️ (P ↔️ R)"],
    answer: "(P ↔️ Q) ↔️ R"
  },
  
  {
    question: "Question 33: The statement P → (Q ∨ R) is logically equivalent to _____",
    options: ["(P → Q) ∨ (P → R)", "P → (Q ∧ R)", "(P ↔️ Q) ↔️ (P ↔️ R)", "(P ∨ Q) ∨ (P ∨ R)"],
    answer: "(P → Q) ∨ (P → R)"
  },
  
  {
    question: "Question 34: The statement P ↔️ (Q ∨ R) is logically equivalent to _____",
    options: ["(P ↔️ Q) ↔️ R", "P ↔️ (Q ∨ R)", "(P ↔️ Q) ∨ (P ↔️ R)", "(P ↔️ Q) ↔️ (P ↔️ R)"],
    answer: "(P ↔️ Q) ∨ (P ↔️ R)"
  },
  
  {
    question: "Question 35: The statement P ∨ (Q → R) is logically equivalent to _____",
    options: ["(P ∨ Q) → R", "P ∨ (Q ∧ R)", "(P ↔️ Q) ↔️ (P ↔️ R)", "(P ∨ Q) ∨ (P ∨ R)"],
    answer: "(P ∨ Q) → R"
  },
  
  {
    question: "Question 36: The statement (P ∨ Q) ∧ (P → R) is logically equivalent to _____",
    options: ["P ∨ (Q ∧ R)", "(P ↔️ Q) ↔️ (P ↔️ R)", "(P ∧ Q) → R", "(P ∨ Q) ∨ (P∨ R)"],
    answer: "(P ∧ Q) → R"
  },
  
  {
    question: "Question 37: The statement (P → Q) ∨ (P ∧ R) is logically equivalent to _____",
    options: ["P → (Q ∨ R)", "(P ↔️ Q) ↔️ (P ↔️ R)", "(P ∧ Q) → R", "(P ∨ Q) ∨ (P ∨ R)"],
    answer: "P → (Q ∨ R)"
  },
  
  {
    question: "Question 38: The statement (P ∨ Q) → R is logically equivalent to _____",
    options: ["(P → Q) ∨ (P → R)", "P ∨ (Q ∧ R)", "(P ↔️ Q) ↔️ (P ↔️ R)", "(P ∨ Q) ∨ (P ∨ R)"],
    answer: "(P → Q) ∨ (P → R)"
  },
  
  {
    question: "Question 39: The statement (P ∧ Q) → R is logically equivalent to _____",
    options: ["P → (Q ∨ R)", "(P ↔️ Q) ↔️ (P ↔️ R)", "(P ∧ Q) → R", "(P ∨ Q) ∨ (P ∨ R)"],
    answer: "P → (Q ∨ R)"
  },
  
  {
    question: "Question 40: The statement P ∨ (Q ↔️ R) is logically equivalent to _____",
    options: ["(P ∨ Q) ↔️ R", "P ∨ (Q ↔️ R)", "(P ↔️ Q) ↔️ (P ↔️ R)", "(P ∨ Q) ∨ (P ∨ R)"],
    answer: "P ∨ (Q ↔️ R)"
  },
  
  {
    question: "Question 41: The statement (P → Q) ∧ (Q → R) is logically equivalent to _____",
    options: ["(P → Q) ∨ (P → R)", "P ∨ (Q ∧ R)", "(P ↔️ Q) ↔️ (P ↔️ R)", "(P ∨ Q) ∨ (P ∨ R)"],
    answer: "(P → Q) → R"
  },
  
  {
    question: "Question 42: The statement (P ↔️ Q) ∨ (Q ↔️ R) is logically equivalent to _____",
    options: ["(P ↔️ Q) ↔️ R", "P ↔️ (Q ↔️ R)", "(P ↔️ Q) ∨ (P ↔️ R)", "(P ↔️ Q) ↔️ (P ↔️ R)"],
    answer: "P ↔️ (Q ↔️ R)"
  },
  
  {
    question: "Question 43: The statement (P ∨ Q) ↔️ (Q ∨ R) is logically equivalent to _____",
    options: ["(P ↔️ Q) ↔️ R", "P ↔️ (Q ↔️ R)", "(P ↔️ Q) ∨ (P ↔️ R)", "(P ↔️ Q) ↔️ (P ↔️ R)"],
    answer: "(P ↔️ Q) ∨ (P ↔️ R)"
  },
  
  {
    question: "Question 44: The statement (P ∧ Q) ↔️ (Q ∧ R) is logically equivalent to _____",
    options: ["(P ↔️ Q) ↔️ R", "P ↔️ (Q ↔️ R)", "(P ↔️ Q) ∨ (P ↔️ R)", "(P ↔️ Q) ↔️ (P ↔️ R)"],
    answer: "(P ↔️ Q) ↔ ️ (P ↔️ R)"
  },
  
  {
    question: "Question 45: The statement (P ∨ Q) ↔️ (Q → R) is logically equivalent to _____",
    options: ["(P → Q) ∨ (P → R)", "P ∨ (Q ∧ R)", "(P ↔️ Q) ↔️ (P ↔️ R)", "(P ∨ Q) ∨ (P ∨ R)"],
    answer: "(P → Q) ∨ (P → R)"
  },
  
  {
    question: "Question 46: The statement (P → Q) ↔️ (Q → R) is logically equivalent to _____",
    options: ["(P → Q) ∨ (P → R)", "P ∨ (Q ∧ R)", "(P ↔️ Q) ↔️ (P ↔️ R)", "(P ∨ Q) ∨ (P ∨ R)"],
    answer: "(P → Q) → R"
  },
  
  {
    question: "Question 47: The statement (P ↔️ Q) ↔️ (Q ↔️ R) is logically equivalent to _____",
    options: ["(P ↔️ Q) ↔️ R", "P ↔️ (Q ↔️ R)", "(P ↔️ Q) ∨ (P ↔️ R)", "(P ↔️ Q) ↔️ (P ↔️ R)"],
    answer: "P ↔️ (Q ↔️ R)"
  },
  
  {
    question: "Question 48: The statement (P → Q) ↔️ (Q ↔️ R) is logically equivalent to _____",
    options: ["(P → Q) ∨ (P → R)", "P ∨ (Q ∧ R)", "(P ↔️ Q) ↔️ (P ↔️ R)", "(P ∨ Q) ∨ (P ∨ R)"],
    answer: "(P → Q) → (P → R)"
  },
  
  {
    question: "Question 49: The statement (P ↔️ Q) ↔️ (Q → R) is logically equivalent to _____",
    options: ["(P → Q) ∨ (P → R)", "P ∨ (Q ∧ R)", "(P ↔️ Q) ↔️ (P ↔️ R)", "(P ∨ Q) ∨ (P ∨ R)"],
    answer: "(P → Q) → (P → R)"
  },
  
  {
    question: "Question 50: The statement (P → Q) ↔️ (Q → R) is logically equivalent to _____",
    options: ["(P → Q) ∨ (P → R)", "P ∨ (Q ∧ R)", "(P ↔️ Q) ↔️ (P ↔️ R)", "(P ∨ Q) ∨ (P ∨ R)"],
    answer: "(P → Q) → (P → R)"
  },
  
  {
    question: "Question 51: Which of the following is an example of a tautology?",
    options: ["P ∧ ¬P", "P ∨ ¬P", "P ↔️ ¬P", "P → ¬P"],
    answer: "P ∨ ¬P"
  },
  
  {
    question: "Question 52: Which of the following is an example of a contradiction?",
    options: ["P ∧ ¬P", "P ∨ ¬P", "P ↔️ ¬P", "P → ¬P"],
    answer: "P ∧ ¬P"
  },
  
  {
    question: "Question 53: Which of the following is an example of a contingent statement?",
    options: ["P ∧ ¬P", "P ∨ ¬P", "P ↔️ ¬P", "P → ¬P"],
    answer: "P ↔️ ¬P"
  },
  
  {
    question: "Question 54: The negation of a tautology is a contradiction.",
    options: ["True", "False"],
    answer: "True"
  },
  
  {
    question: "Question 55: The negation of a contradiction is a tautology.",
    options: ["True", "False"],
    answer: "True"
  },
  
  {
    question: "Question 56: The negation of a contingent statement is a contradiction.",
    options: ["True", "False"],
    answer: "False"
  },
  
  {
    question: "Question 57: The negation of a disjunction is the conjunction of the negations.",
    options: ["True", "False"],
    answer: "True"
  },
  
  {
    question: "Question 58: The negation of a conjunction is the disjunction of the negations.",
    options: ["True", "False"],
    answer: "True"
  },
  
  {
    question: "Question 59: The negation of an implication is the implication of the negations.",
    options: ["True", "False"],
    answer: "False"
  },
  
  {
    question: "Question 60: The negation of a biconditional is the biconditional of the negations.",
    options: ["True", "False"],
    answer: "True"
  },
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question");
const optionContainer = document.getElementById("option-container");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const submitButton = document.getElementById("submit-button");
const resultContainer = document.getElementById("result-container");

function loadQuiz() {
  const currentQuiz = quizData[currentQuestion];
  questionText.textContent = currentQuiz.question;

  optionContainer.innerHTML = "";
  for (let i = 0; i < currentQuiz.options.length; i++) {
    const option = document.createElement("button");
    option.classList.add("option");
    option.textContent = currentQuiz.options[i];
    optionContainer.appendChild(option);
  }

  const options = optionContainer.getElementsByClassName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", checkAnswer);
  }

  updateButtonStates();
}

function checkAnswer() {
  const selectedOption = event.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedOption.textContent === answer) {
    selectedOption.classList.add("correct");
    score++;
  } else {
    selectedOption.classList.add("wrong");
  }

  const options = optionContainer.getElementsByClassName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].disabled = true;
    if (options[i].textContent === answer) {
      options[i].classList.add("correct");
    }
  }

  nextButton.disabled = false;
}

function loadPreviousQuestion() {
  currentQuestion--;
  loadQuiz();
}

function loadNextQuestion() {
  currentQuestion++;
  loadQuiz();
}

function updateButtonStates() {
  previousButton.disabled = currentQuestion === 0;
  nextButton.disabled = currentQuestion === quizData.length - 1;
}

function showResult() {
  questionText.textContent = `Your score: ${score} out of ${quizData.length}`;
  optionContainer.innerHTML = "";
  previousButton.style.display = "none";
  nextButton.style.display = "none";
  submitButton.style.display = "none";
  resultContainer.style.display = "block";
}

loadQuiz();

previousButton.addEventListener("click", loadPreviousQuestion);
nextButton.addEventListener("click", loadNextQuestion);
submitButton.addEventListener("click", showResult);

