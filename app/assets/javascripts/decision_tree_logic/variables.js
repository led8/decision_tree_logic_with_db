
  // html elements
  var next_question = $('.next');
  var prev_question = $('.prev');
  var question_div = $('.question');
  var answers_ul = $('.answers');
  var next_question = $('.next');
  var prev_question = $('.prev');
  var next_form = $('#edit-cat');
  var next_url = $(next_form).attr('action');
  var next_method = $(next_form).attr('method');
  var stepper_progression = $('.stepper-progression');
  var stepper_count = $('.stepper-count');

  // indexes
  var next_qst_index = null;
  var prev_qst_index = null;
  var prev_qst_index_if_not_answered = null;
  var selected_index_to_next = null;
  var selected_index_to_prev = null;

  // start
  var start_index = 0;

  // handle html
  var answers_html = "";
  var answer = "";
  var answers = [];
  var answered = false;
  var question = "";
  var stepper_width = '';
  var input_params = {};
  var i;

  // LAST STEP BUT NOT LEAST
  var number_of_prev_click;


