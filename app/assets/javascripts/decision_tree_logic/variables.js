
  var next_question = $('.next');
  var prev_question = $('.prev');
  var question_div = $('.question');
  var answers_ul = $('.answers');
  var answers_html = "";
  var answers = [];
  var answer = "";
  var next_qst_index = null;
  var prev_qst_index = null;
  var prev_qst_index_if_not_answered = null;
  var question = "";
  var next_question = $('.next');
  var prev_question = $('.prev');
  var start_index = 0;
  var i;
  var selected_index_to_next = null;
  var selected_index_to_prev = null;
  var stepper_width = '';
  var answered = false;
  var input_params = {};

  // LAST STEP BUT NOT LAST
  var number_of_prev_click;


  var next_form = $('#edit-cat');
  var next_url = $(next_form).attr('action');
  var next_method = $(next_form).attr('method');

  var stepper_progression = $('.stepper-progression');
  var stepper_count = $('.stepper-count');
