import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
Vue.use(Vuelidate)

import phoneMask from '../../element/mask/phone'

export default new class OrderForm {
    constructor() {
        this.init()
        phoneMask.init()
    }
    init() {
        new Vue({
            el: '#app',
            data: {
                lang, // lang - глобальная переменная, смотри в order.htm
                firstEntry: false,
                currStep: 0,
                step1: {
                    firstName: '',
                    lastName: ''
                },
                step2: {
                    email: '',
                    phone: ''
                },
                step5: {
                    companyName: '',
                    jobTitle: ''
                },
                step6: {
                    address: '',
                    buildingType: ''
                },
                step7: {
                    date: '',
                    noDateCheckbox: false
                },
                step8: {
                    address: '',
                    buildingType: ''
                }
            },
            methods: {
                step1Validation() {
                    if(this.$v.step1.$invalid) {
                        this.$v.step1.$touch()
                    } else {
                        this.currStep++
                    }
                    if(!this.firstEntry) {
                        this.firstEntry = true
                    }
                },
                step2Validation() {
                    if(this.$v.step2.$invalid) {
                        this.$v.step2.$touch()
                    } else {
                        this.currStep++
                    }
                },
                step5Validation() {
                    if(this.$v.step5.$invalid) {
                        this.$v.step5.$touch()
                    } else {
                        this.currStep++
                    }
                },
                step6Validation() {
                    if(this.$v.step6.$invalid) {
                        this.$v.step6.$touch()
                    } else {
                        this.currStep++
                    }
                },
                formSubmit(e) {
                    e.preventDefault()
                    if(this.$v.step8.$invalid) {
                        this.$v.step8.$touch()
                        return
                    }
                    this.currStep++
                }
            },
            validations: {
                step1: {
                    firstName: {
                        required
                    },
                    lastName: {
                        required
                    }
                },
                step2: {
                    email: {
                        email,
                        required
                    },
                    phone: {
                        required
                    }
                },
                step5: {
                    companyName: {
                        required
                    },
                    jobTitle: {
                        required
                    }
                },
                step6: {
                    address: {
                        required
                    },
                },
                step8: {
                    address: {
                        required
                    },
                }
            }
        })
    }
}