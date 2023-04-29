
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

        if (e.keyCode === 27) {
            if($('#commandDiv').is(':visible')) {
                $('#commandDiv').hide();
                $('#statBar').removeClass("commandMode");
                $('#statBar-mode').text("[NORMAL]");
                $('#commandInput').val("");
            }
        }
    });

    $('#commandInput').on('input', function() {
        var inputText = $(this).val();
        var statBar   = $("#statBar");
        var sMode     = $("#statBar-mode");

        if (inputText == '' || !(inputText.startsWith(":"))) {
            $('#commandDiv').hide();
            $('#commandInput').val("");
        }
        
        if (inputText.startsWith(":")) {
            statBar.addClass("commandMode");
            sMode.text("[COMMAND]");
        } else {
            statBar.removeClass("commandMode");
            sMode.text("[NORMAL]");
        }
    });

    $(window).on('hashchange', function() {

    });

    $('#commandForm').on('submit', function(e) {
        e.preventDefault();
    
        var command = $('#commandInput').val();
    
        switch (command) {
            case ':index':
                //
                break;
            case ':projects':
                //
                break;
            case ':contacts':
                //
                break;
            default:
                //
                break;
        }
    
        $('#commandInput').val('');
    
    });
});