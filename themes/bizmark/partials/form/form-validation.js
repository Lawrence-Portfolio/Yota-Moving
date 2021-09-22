// export default new class FormValidation {
//     constructor() {
//         this. needsValidation = 'form.needs-validation'
//         this.init()
//     }
//     init() {
//         window.addEventListener('load', function(){
//             let forms = document.querySelectorAll('form.needs-validation');
//             Array.prototype.filter.call(forms, function(form){
//                 form.addEventListener('submit', (evt) => {
//                     evt.preventDefault();
//                     evt.stopPropagation();
//                     if (form.checkValidity() === false) {
//                         form.classList.add('was-validated');
//                     } else {
//                         form.classList.remove('was-validated');
//                     }
//                 })
//             })
//         }, false)
//     }
// }