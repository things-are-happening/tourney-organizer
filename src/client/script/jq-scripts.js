$(document).ready(() => {
  console.log(`JQUERY LOADED`);
  $('#roundTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
})
