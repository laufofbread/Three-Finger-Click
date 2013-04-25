$(document).ready(function() {
    
    $("#e1").val("");

    $("#e1").select2({
        maximumSelectionSize: 1,
        placeholder: "Search for an article",
    });

    
    $("#e1").on("change", function(e) {
        
     window.location = e.val[0]
     
    });

});

