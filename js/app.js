const $form = $('#suscribeForm')
const $formGroup = $form.find('.form-group')
const $formControl = $formGroup.find('.form-control')

$form.submit(function(ev){
	ev.preventDefault()

	const error = Math.random() > 0.5
	$formGroup.removeClass().addClass('form-group')
	$formControl.removeClass().addClass('form-control')
	$formGroup.addClass( error ? 'has-danger' : 'has-success' )
	$formControl.addClass( error ? 'form-control-danger' : 'form-control-success' )
	$formGroup.find('.form-control-feedback').remove()

	var el;
	if (error) {
		el = $('<div>', {html: 'Ha Ocurrido un Error'})
	} else {
		el = $('<div>', {html: 'Te enviaremos todas las Novedades'})
	}
	el.addClass('form-control-feedback')
	$formGroup.append(el)
})





$('#btnMenuCollapse').click(function(ev){
  	$('#navBarMenu').toggleClass('collapse');
});


function mostrarModal(){
	
}