$(document).ready(() => {
  $('.bracketTab').each(function(){
    $(this).on('click', function(ev){
      ev.preventDefault()
      var target = '#' + $(this).attr('id')
      $(target).tab('show')
    })
  })
})
