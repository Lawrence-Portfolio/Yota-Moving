export default new class FeedbackForm {
    constructor() {
        this.feedbackForm = 'form.feedback-form'
        this.successModal = '#modal-success'
        this.init()
    }
    init() {
        const _self = this
        $(this.feedbackForm).submit(function(evt) {
            $(_self.successModal).modal('show')
            $(this).trigger("reset");
        })
    }
}