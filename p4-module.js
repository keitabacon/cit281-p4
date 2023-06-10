const data = require('./p4-data.js');

function getQuestions() {
    return data.map(item => item.question);
  }
  function getAnswers() {
    return data.map(obj => obj.answer);
  }
  function getQuestionsAnswers() {
    return JSON.parse(JSON.stringify(data));
  }
  function getQuestion(number = "") {
    const questionObj = data.find(obj => obj.number === parseInt(number));
    if (questionObj) {
      return {
        question: questionObj.question,
        number: questionObj.number,
        error: ""
      };
    } else {
      return {
        question: "",
        number: "",
        error: "Question not found"
      };
    }
  }
  function getAnswer(number = "") {
    const answerObj = data.find(obj => obj.number === parseInt(number));
    if (answerObj) {
      return {
        answer: answerObj.answer,
        number: answerObj.number,
        error: ""
      };
    } else {
      return {
        answer: "",
        number: "",
        error: "Answer not found"
      };
    }
  }
  function getQuestionAnswer(number = "") {
    const obj = data.find(obj => obj.number === parseInt(number));
    if (obj) {
      return {
        question: obj.question,
        answer: obj.answer,
        number: obj.number,
        error: ""
      };
    } else {
      return {
        question: "",
        answer: "",
        number: "",
        error: "Question and answer not found"
      };
    }
  }
            

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit


// getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }

module.exports = {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer
}

console.log(getQuestions())
