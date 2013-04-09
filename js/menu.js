$(document).ready(function() {
    
    $("#e1").select2({maximumSelectionSize: 1});
    
    $("#e1").on("change", function(e) {
     
     window.location = e.val[0]
     
    });

});

