/*
 * Alerts
 *
 * Displays alert and confirmation dialogs
 *
 * JavaScript API:
 * $.oc.alert()
 * $.oc.confirm()
 *
 * Dependences:
 * - Sweet Alert
 * - Translations (october.lang.js)
 */
(function($){

    if ($.oc === undefined)
        $.oc = {}

    $.oc.alert = function alert(message, title) {
        var messageTitle = typeof title !== 'string' ?  $.oc.lang.get('alert.error') : title
        
        $.oc.vueComponentHelpers.modalUtils.showAlert(messageTitle, message, {
            buttonText: $.oc.lang.get('alert.dismiss') 
        })
    }

    $.oc.confirm = function confirm(message, callback, title) {
        var messageTitle = typeof title !== 'string' ?  $.oc.lang.get('alert.confirm') : title

        $.oc.vueComponentHelpers.modalUtils.showConfirm(messageTitle, message, {})
            .then(function () {
                callback(true)
            }, function () {
            })
    }

})(jQuery);

/*
 * Implement alerts with AJAX framework
 */

$(window).on('ajaxErrorMessage', function(event, message){
    if (!message) return

    $.oc.alert(message)

    // Prevent the default alert() message
    event.preventDefault()
})

$(window).on('ajaxConfirmMessage', function(event, message){
    if (!message) return

    $.oc.confirm(message, function(isConfirm){
        isConfirm
            ? event.promise.resolve()
            : event.promise.reject()
    })

    // Prevent the default confirm() message
    event.preventDefault()
    return true
})

/*
 * Override "Sweet Alert" functions to translate default buttons
 */

$(document).ready(function(){
    if (!window.swal) return

    var swal = window.swal

    window.sweetAlert = window.swal = function(message, callback) {
        if (typeof message === 'object') {
            // Do not override if texts are provided
            message.confirmButtonText = message.confirmButtonText || $.oc.lang.get('alert.confirm_button_text')
            message.cancelButtonText = message.cancelButtonText || $.oc.lang.get('alert.cancel_button_text')
        }
        else {
            message = {
                title: message,
                confirmButtonText: $.oc.lang.get('alert.confirm_button_text'),
                cancelButtonText: $.oc.lang.get('alert.cancel_button_text')
            }
        }

        swal(message, callback)
    }
})
