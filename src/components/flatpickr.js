import flatpickr from 'flatpickr';

 flatpickr(".flatpickr.js-flatpickr-dateTime", {
     enableTime: true,
     minDate: "today",
     maxDate: new Date().fp_incr(31), // 31 days from now
     altInput: true,
     altFormat: "d M Y H:i"
     
 })