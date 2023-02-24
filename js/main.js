
/**
 * Handle input behaviour
 */
$(document).ready(function () {
    $('#commandDiv').hide();                   // hide by default

    $(document).on('keydown', function(e) {
        if (e.key === ':') {
            $('#commandDiv').show();
            $('#commandInput').focus();
        }
    });

    $('#commandInput').on('input', function() {
        if ($(this).val() == '') {
            $('#commandDiv').hide();
        }
    });

    $('#commandForm').on('submit', function(e) {
        e.preventDefault();
    
        var command = $('#commandInput').val();
    
        switch (command) {
            case 'index':
                console.log('index!');
                break;
            case 'projects':
                //
                break;
            case 'contacts':
                //
                break;
            default:
                //
                break;
        }
    
        $('#commandInput').val('');
    
    });
});