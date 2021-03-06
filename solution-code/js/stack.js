var stackDataStructure = new StackDataStructure();

$(document).ready(_drawStack());
$("#btn-add-stack").on("click", _addElementToStack);
$("#btn-take-stack").on("click", _takeElementFromStack);

function _drawStack () {
  var stack = $("#stack");
  stack.html("");

  for (var i = 0; i < stackDataStructure.MAX_SIZE; i++) {
    var content = stackDataStructure.stackControl[i] || "";
    var cssClass = content ? " full" : "";

    $(stack).prepend("<div class='element" + cssClass + "'>" + content + "</div>");
  }

  _clearStackControls();
}

function _addElementToStack () {
  var element = $("#txt-insert-stack").val();
  var result = stackDataStructure.push(element);

  if (result === stackDataStructure.stackControl) {
    _drawStack();
    _hideTakenElement();
  } else {
    _showStackOverflow();
  }

  _clearStackControls();
  _enableTakeAction();
}

function _takeElementFromStack () {
  var element = stackDataStructure.pop();

  if (element === "Stack Underflow") {
    _showStackUnderflow();
  } else {
    _showTakenElement(element);
    _drawStack();
  }

  _clearStackControls();
  _enableAddAction();
}

function _showTakenElement (element) {
  $("#stack-element").html(element);
}

function _hideTakenElement (element) {
  $("#stack-element").html("");
}

function _showStackOverflow () {
  $("#btn-add-stack").prop("disabled", "disabled");
  $("#stack-overflow").show();
}

function _showStackUnderflow () {
  $("#stack-element").html("");
  $("#btn-take-stack").prop("disabled", "disabled");
  $("#stack-underflow").show();
}

function _clearStackControls () {
  $("#txt-insert-stack").val("");
  $("#txt-insert-stack").focus();
}

function _enableAddAction () {
  $("#btn-add-stack").prop("disabled", "");
  $("#stack-overflow").hide();
}

function _enableTakeAction () {
  $("#btn-take-stack").prop("disabled", "");
  $("#stack-underflow").hide();
}
