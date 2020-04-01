  var hash = { "questions":
              [
                { 0: { "question": "What's he called ?",
                    "tree_answer": null,
                    "answers": [
                      [ null, { "next_qst":1 }, { "prev_qst":0 }, { "prev_qst_if_not_answered":0 } ],
                    ],
                    "input_params": {
                      "type": "text",
                      "model": "cat",
                      "model_param": "name",
                      "name": "cat[name]",
                      "id": "cat_name",
                      "placeholder": "the cat's name"
                    },
                    "multiple_choice": false
                  },
                },
                { 1: { "question": "How tall is he (cm) ?",
                    "tree_answer": null,
                    "answers": [
                      [ "30", { "next_qst":2 }, { "prev_qst":0 }, { "prev_qst_if_not_answered":1 } ],
                      [ "35", { "next_qst":2 }, { "prev_qst":0 }, { "prev_qst_if_not_answered":1 } ],
                      [ "40", { "next_qst":2 }, { "prev_qst":0 }, { "prev_qst_if_not_answered":1 } ],
                      [ "45", { "next_qst":2 }, { "prev_qst":0 }, { "prev_qst_if_not_answered":1 } ],
                      [ "50", { "next_qst":2 }, { "prev_qst":0 }, { "prev_qst_if_not_answered":1 } ]
                    ],
                    "input_params": {
                      "type": "select",
                      "model": "cat",
                      "model_param": "size",
                      "name": "cat[size]",
                      "id": "cat_size",
                      "placeholder": "select a size"
                    },
                    "multiple_choice": false
                  },
                },
                { 2: { "question": "How old is he (years) ?",
                    "tree_answer": "select a size",
                    "answers": [
                      [ "1", { "next_qst":3 }, { "prev_qst":1 }, { "prev_qst_if_not_answered":2 } ],
                      [ "2", { "next_qst":3 }, { "prev_qst":1 }, { "prev_qst_if_not_answered":2 } ],
                      [ "3", { "next_qst":3 }, { "prev_qst":1 }, { "prev_qst_if_not_answered":2 } ],
                      [ "4", { "next_qst":3 }, { "prev_qst":1 }, { "prev_qst_if_not_answered":2 } ],
                      [ "5", { "next_qst":3 }, { "prev_qst":1 }, { "prev_qst_if_not_answered":2 } ],
                      [ "6", { "next_qst":3 }, { "prev_qst":1 }, { "prev_qst_if_not_answered":2 } ]
                    ],
                    "input_params": {
                      "type": "select",
                      "model": "cat",
                      "model_param": "age",
                      "name": "cat[age]",
                      "id": "cat_age",
                      "placeholder": "select the age"
                    },
                    "multiple_choice": false
                  },
                },
                { 3: { "question": "What gender is he ?",
                    "tree_answer": [ "Male", { "next_qst":5 }, { "prev_qst":2 }, { "prev_qst_if_not_answered":3 } ],
                    "answers": [
                      [ "Female", { "next_qst":4 }, { "prev_qst":2 }, { "prev_qst_if_not_answered":3 } ]
                    ],
                    "input_params": {
                      "type": "radio",
                      "model": "cat",
                      "model_param": "gender",
                      "name": "cat[gender]",
                      "id": "cat_gender",
                      "placeholder": null
                    },
                    "multiple_choice": false
                  },
                },
                { 4: { "question": "What color is she ?",
                    "tree_answer": null,
                    "answers": [
                      [ "White", { "next_qst":6 }, { "prev_qst":3 }, { "prev_qst_if_not_answered":4 }],
                      [ "Pink", { "next_qst":6 }, { "prev_qst":3 }, { "prev_qst_if_not_answered":4 } ]
                    ],
                    "input_params": {
                      "type": "checkbox",
                      "model": "cat",
                      "model_param": "color",
                      "name": "cat[color]",
                      "id": "cat_color",
                      "placeholder": null
                    },
                    "multiple_choice": true
                  },
                },
                { 5: { "question": "What color is he ?",
                    "tree_answer": null,
                    "answers": [
                      [ "Black", { "next_qst":6 }, { "prev_qst":3 }, { "prev_qst_if_not_answered":5 } ],
                      [ "Blue", { "next_qst":6 }, { "prev_qst":3 }, { "prev_qst_if_not_answered":5 } ]
                    ],
                    "input_params": {
                      "type": "checkbox",
                      "model": "cat",
                      "model_param": "color",
                      "name": "cat[color]",
                      "id": "cat_color",
                      "placeholder": null
                    },
                    "multiple_choice": true
                  },
                },
                { 6: { "question": "Is it for special gift ?",
                    "tree_answer": null,
                    "answers": [
                      [ "Yes", { "next_qst":7 }, { "prev_qst":3 }, { "prev_qst_if_not_answered":6 } ],
                      [ "No", { "next_qst":7 }, { "prev_qst":3 }, { "prev_qst_if_not_answered":6 } ]
                    ],
                    "input_params": {
                      "type": "radio",
                      "model": "cat",
                      "model_param": "gift",
                      "name": "cat[gift]",
                      "id": "cat_gift",
                      "placeholder": null
                    },
                    "multiple_choice": false
                  },
                },
              ]
            };

