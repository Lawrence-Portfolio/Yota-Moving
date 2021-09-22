export default new class FreeQouteForm {
    constructor() {
        this.freeQuoteFrom = 'form.free-quote-form'
        this.successModal = '#modal-success'
        this.init()
    }
    init() {
        const _self = this
        $(this.freeQuoteFrom).submit(function(evt) {
            $(_self.successModal).modal('show')
            $(this).trigger("reset");
        })
    }
}