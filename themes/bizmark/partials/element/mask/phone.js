import Cleave from "cleave.js"
import 'cleave.js/dist/addons/cleave-phone.us'


export default new class PhoneMask {
    constructor() {
        this.phone = '[data-phone="true"]'
        this.init()
    }
    init() {
        let phones = document.querySelectorAll(this.phone)
        phones.forEach(phone => {
            new Cleave(phone, {
                phone: true,
                phoneRegionCode: 'US'
            })
        })
    }
}