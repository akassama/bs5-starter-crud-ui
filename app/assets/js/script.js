//Datatables and datatable export
$(document).ready(function(){   
  dataTable = $('#datatableExp').DataTable({
     "processing":true,
      dom:'lBfrtip',
      buttons: ['excel', 'csv', 'pdf', 'copy'],
     "lengthMenu": [10,50,100,500,1000,2000,5000,10000],
     "order":[],
     "sScrollX": "100%",
     "scrollCollapse": true
  });  

  dataTable.buttons().container()
    .appendTo( '#datatableExp_wrapper .col-md-6:eq(0)' );
  
  $("#datatableExp_length").css("margin","10px");
});

$(document).ready(function () {
	$('.datatable').DataTable();
});
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//BS5 Form Validation
(function () {
'use strict'

// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
        }, false)
    })
})();

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //set summernote
  $('.summernote').summernote({
  placeholder: 'Type or paste your text here...',
  height: 300
});
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 //monthly post chart
const ctx = document.getElementById('postsChart');
  
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: '# of Posts by Month',
      data: [12, 19, 3, 5, 2, 3, 4, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

//browser usage chart
var chrt = document.getElementById("browserChart").getContext("2d");
  var chartId = new Chart(chrt, {
     type: 'doughnut',
     data: {
        labels: ["Chrome", "Firefox", "Edge", "Brave", "Opera", "Safari", "Other"],
        datasets: [{
        label: "Browser Chart",
        data: [20, 40, 13, 35, 20, 38, 5],
        backgroundColor: ['#a80505', '#FF8C00', '#008080', '#FF6347', '#DC143C', '#6495ED', '#808080'],
        hoverOffset: 5,
        }],
     },
     options: {
        responsive: false,
     },
     title: {
        display: true,
        position: "top",
    },
  });

  //monthly visits chart
  var chrt = document.getElementById("visitorChart").getContext("2d");
  var chartId = new Chart(chrt, {
     type: 'line',
     data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
           label: "Total visits per month",
           data: [120, 190, 330, 250, 200, 300, 400, 190, 300, 500, 200, 300],
           backgroundColor: 'red',
           borderColor: ['black'],
           borderWidth: 2,
           pointRadius: 5,
        }],
     },
     options: {
        responsive: false,
     },
  });


