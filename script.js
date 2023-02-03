$(document).on('keyup', 'input', function(e) {
  if(e.keyCode == 13 && e.target.type        !== 'submit') {
    var inputs =   $(e.target).parents("form").eq(0).find(":input:visible"),
    idx = inputs.index(e.target);
        if (idx == inputs.length - 1) {
           inputs[0].select()
        } else {
           inputs[idx + 1].focus();
           inputs[idx + 1].select();
        }
  }
 
 });



 jQuery($ => {
  let $tp = $(".TabOnEnter").on('input', e => {
    if (e.target.value.length == 1) {
      $(e.target).next().focus();
    }

    if ($tp.filter((i, el) => !el.value.trim()).length == 0) {
      console.log('AJAX call goes here...');
    }
  });
});