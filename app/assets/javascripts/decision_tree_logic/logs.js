function logsFromNext(selected_index_to_next,selected_index_to_prev,selected_index_to_prev_if_not_answered,
                      answered) {
  console.log('######## NEXT METHOD ########');
  console.log('question indexes: ' + selected_index_to_next +', '+ selected_index_to_prev +', '+
                                     selected_index_to_prev_if_not_answered);
  console.log('current question index: ' + selected_index_to_next);
  console.log('prev question index: ' + selected_index_to_prev);
  console.log('prev question index if not answered: ' + selected_index_to_prev_if_not_answered);
  console.log('answered: ' + answered);
};

function logsFromPrev(selected_index_to_next,selected_index_to_prev,selected_index_to_prev_if_not_answered,
                      answered) {
  console.log('######## PREV METHOD ########');
  console.log('question indexes: ' + selected_index_to_next +', '+ selected_index_to_prev +', '+
                                     selected_index_to_prev_if_not_answered);
  console.log('next question index: ' + selected_index_to_next);
  console.log('current question index: ' + selected_index_to_prev);
  console.log('prev question index if not answered: ' + selected_index_to_prev_if_not_answered);
  console.log('answered: ' + answered);
};

function logsFromAnswer(selected_index_to_next,selected_index_to_prev,selected_index_to_prev_if_not_answered,
                        answered) {
  console.log('######## SELECT ANSWER METHOD ########');
  console.log('next question index: ' + selected_index_to_next);
  console.log('prev question index: ' + selected_index_to_prev);
  console.log('prev question index if not answered: ' + selected_index_to_prev_if_not_answered);
  console.log('answered: ' + answered);
};

function logsFromAjax() {
  console.log('######## AJAX CALL ########');
  console.log("data stored");
}
