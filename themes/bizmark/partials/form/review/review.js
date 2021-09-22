export default new class ReviewForm {
    constructor() {
        this.reviewForm = 'form.review-form'
        this.successModal = '#modal-success'
        this.reviewModal = '#modal-review'
        // this.feedbackMessageSelector = '.feedback-message'

        this.init()
    }
    init() {
        const _self = this
        $(this.reviewForm).submit(function(evt) {
            evt.preventDefault()
            $(_self.reviewModal).modal('hide')
            $(_self.successModal).modal('show')
            $(this).trigger("reset");
        })
        // window.addEventListener('load', function(){
        //     let forms = document.querySelectorAll('form.needs-validation');
        //     var validation = Array.prototype.filter.call(forms, function(form){
        //         form.addEventListener('submit', function(evt){
        //             evt.preventDefault();
        //             evt.stopPropagation();
        //             if (form.checkValidity() === false) {
        //                 form.classList.add('was-validated');
        //             } else {
        //                 form.classList.remove('was-validated');
        //                 form.style.display = 'none'

        //                 let error = false
        //                 let message = document.querySelector(_self.feedbackMessageSelector)
        //                 if(error) {
        //                     message.classList.add('is-invalid')
        //                     message.querySelector('.message').innerHTML = 'Error,<br> please try again!'
        //                     setTimeout(() => {
        //                         form.style.display = 'flex'
        //                         message.style.display = 'none'
        //                     }, 2000)
        //                 } else {
        //                     message.querySelector('.message').innerHTML = 'Thank you, <br> your review <br> has been sent!'
        //                     // setTimeout(() => {
        //                     //     $('#modal-review').modal('hide')
        //                     //     setTimeout(() => {
        //                     //         form.style.display = 'flex'
        //                     //         message.style.display = 'none'
        //                     //     }, 100)
        //                     // }, 2000)
        //                 }
        //                 message.style.display = 'flex'
        //                 form.reset()
        //             }
        //         }, false)
        //     })
        // }, false)

    }
}