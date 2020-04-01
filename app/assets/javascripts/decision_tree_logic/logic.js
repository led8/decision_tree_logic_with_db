// = require decision_tree_logic/logs
// = require decision_tree_logic/variables
// = require decision_tree_logic/questions

// Function called first when Object is instanced (create)
function start() {
  $(button).on('click', function(event) {
    event.preventDefault();

    $.ajax({ url: url,
             type: method,
             data: $(form).serialize(),
             success: function(data) {
              replaceHtml(data);
              displayFirstQuestion();
             },
             error: function(data) {
              alert('Something wrong happended !');
             }
          });
  });
}; start();

// Function called when ajax successed
function replaceHtml(data) {
  $(div_to_replace).html(data);
}

// Function called when ajax successed
function displayAnswers(answer,next_qst_index,prev_qst_index,prev_qst_index_if_not_answered) {
  var answers_ul = $('.answers');

  if (input_params.type == "text") {
    answers_html +=
    `<li onclick="selectAnswer(${next_qst_index},${prev_qst_index},${prev_qst_index_if_not_answered})"
    class="list-group-item">
      <input type=${input_params.type}
             name=${input_params.name}
             id=${input_params.id}
             placeholder="${input_params.placeholder}"
      />
    </li>`
  } else if (input_params.type == "radio") {
    answers_html +=
    `<li onclick="selectAnswer(${next_qst_index},${prev_qst_index},${prev_qst_index_if_not_answered})"
    class="list-group-item">
      <input type=${input_params.type}
             name=${input_params.name}
             id=${input_params.id}
             value=${asnwer}
      />
      <label for=${input_params.id}>${answer}</label>
    </li>`
  } else if (input_params.type == "checkbox") {
    answers_html +=
    `<li onclick="selectAnswer(${next_qst_index},${prev_qst_index},${prev_qst_index_if_not_answered})"
    class="list-group-item">
      <input type=${input_params.type}
             name=${input_params.name}
             id=${input_params.id}
      />
      <label for=${input_params.id}>${answer}</label>
    </li>`
  } else {
    answers_html +=
    `<li>
      <select name=${input_params.name} id=${input_params.id}>
        <option value=${answer}
        onclick="selectAnswer(${next_qst_index},${prev_qst_index},${prev_qst_index_if_not_answered})"
        class="list-group-item">
          ${answer}
        </option>
      </select>
    </li>`
  }

  answers_ul.html(answers_html);
};

// Function called when ajax successed
function displayFirstQuestion() {
  var next_question = $('.next');
  var prev_question = $('.prev');
  var question_div = $('.question');

  prev_question.addClass('hide');
  next_question.prop("disabled", true);

  question = hash.questions[start_index][start_index].question;
  question_div.html(`<h1>${question}</h1>`);

  answers = [...hash.questions[start_index][start_index].answers,
            hash.questions[start_index][start_index].tree_answer];
  answers = answers.filter(function(element){ return element != null });

  input_params = hash.questions[start_index][start_index].input_params;

  for (i = 0; i < answers.length; i++) {
    answer = answers[i][0];
    next_qst_index = answers[i][1].next_qst;
    prev_qst_index = answers[i][2].prev_qst;
    prev_qst_index_if_not_answered = answers[i][3].prev_qst_if_not_answered;

    displayAnswers(answer,next_qst_index,prev_qst_index,prev_qst_index_if_not_answered);
  };
};

// Function is called when user click on next button and submit the updated form
// function next() {
//   answers_html = "";
//   answered = false;

//   next_question.prop("disabled", true);

//   question = hash.questions[selected_index_to_next][selected_index_to_next].question
//   question_div.html(`<h1>${question}</h1>`);

//   answers = [...hash.questions[selected_index_to_next][selected_index_to_next].answers,
//             hash.questions[selected_index_to_next][selected_index_to_next].tree_answer]
//    answers = answers.filter(function(element){ return element != null })

//   for (i = 0; i < answers.length; i++) {
//     answer = answers[i][0]
//     next_qst_index = answers[i][1].next_qst
//     prev_qst_index = answers[i][2].prev_qst
//     prev_qst_index_if_not_answered = answers[i][3].prev_qst_if_not_answered

//     answers_html += `<li
//                     onclick="selectAnswer(${next_qst_index},${prev_qst_index},${prev_qst_index_if_not_answered})"
//                     class="list-group-item">
//                       ${answer}
//                     </li>`

//     answers_ul.html(answers_html);
//   }

//   if (next_qst_index > 0) prev_question.removeClass('hide');
//   if (selected_index_to_next == hash.questions.length - 1) next_question.addClass('hide');

//   logsFromNext(selected_index_to_next,selected_index_to_prev,selected_index_to_prev_if_not_answered,answered);
//   stepperProgression(selected_index_to_next, hash.questions.length);
// };

// Function is called when user click on previous button
// function prev() {
//   answers_html = "";

//   if (answered) {
//      prevIfAnswered();
//   } else {
//     prevIfNotAnswered();
//   }

//   if (prev_qst_index == null) prev_question.addClass('hide');

//   logsFromNext(selected_index_to_next,selected_index_to_prev,selected_index_to_prev_if_not_answered,answered);
// };

// Function is called when the user answered (answer selected)
// function prevIfAnswered() {
//   question = hash.questions[selected_index_to_prev][selected_index_to_prev].question;
//   question_div.html(`<h1>${question}</h1>`);

//   answers = [...hash.questions[selected_index_to_prev][selected_index_to_prev].answers,
//             hash.questions[selected_index_to_prev][selected_index_to_prev].tree_answer];
//   answers = answers.filter(function(element){ return element != null });
//   for (i = 0; i < answers.length; i++) {
//     answer = answers[i][0];
//     next_qst_index = answers[i][1].next_qst;
//     prev_qst_index = answers[i][2].prev_qst;
//     prev_qst_index_if_not_answered = answers[i][3].prev_qst_if_not_answered;

//     answers_html += `<li
//                     onclick="selectAnswer(${next_qst_index},${prev_qst_index},${prev_qst_index_if_not_answered})"
//                     class="list-group-item">
//                       ${answer}
//                     </li>`
//     answers_ul.html(answers_html);
//   };
// };

// Function is called when the user do not answer (no answer selected)
// function prevIfNotAnswered() {
//   number_of_prev_click ++

//   console.log('number of click on prev button: ' + number_of_prev_click)

//   question = hash.questions[selected_index_to_prev_if_not_answered][selected_index_to_prev_if_not_answered].question;
//   question_div.html(`<h1>${question}</h1>`);

//   answers = [...hash.questions[selected_index_to_prev_if_not_answered][selected_index_to_prev_if_not_answered].answers,
//             hash.questions[selected_index_to_prev_if_not_answered][selected_index_to_prev_if_not_answered].tree_answer];
//   answers = answers.filter(function(element){ return element != null });

//   for (i = 0; i < answers.length; i++) {
//     answer = answers[i][0];
//     next_qst_index = answers[i][1].next_qst;
//     prev_qst_index = answers[i][2].prev_qst;
//     prev_qst_index_if_not_answered = answers[i][3].prev_qst_if_not_answered;

//     answers_html += `<li
//                     onclick="selectAnswer(${next_qst_index},${prev_qst_index},${prev_qst_index_if_not_answered})"
//                     class="list-group-item">
//                       ${answer}
//                     </li>`
//     answers_ul.html(answers_html);
//   };
// };

// Function is called when the user select an answer
function selectAnswer(next_qst_index, prev_qst_index,prev_qst_index_if_not_answered) {
  var next_question = $('.next');

  selected_index_to_next = next_qst_index;
  selected_index_to_prev = prev_qst_index;
  selected_index_to_prev_if_not_answered = prev_qst_index_if_not_answered;
  answered = true;

  next_question.prop("disabled", false);

  logsFromAnswer(selected_index_to_next,selected_index_to_prev,selected_index_to_prev_if_not_answered,answered);
}

// Function is called each time next() and prev() methods are called
// function stepperProgression(current_question, questions_length) {
//   var stepper_progression = $('.stepper-progression');
//   var stepper_count = $('.stepper-count');

//   var width = Math.round((current_question * 100) / questions_length)

//   stepper_progression.css('width', `${width}%`);
//   stepper_count.html(`${10*Math.floor(width/10)}%`)
// }
