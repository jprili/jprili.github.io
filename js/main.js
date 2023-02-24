$('#commandForm').on('submit', function(e) {
    e.preventDefault();

    var command = $('#commandInput').val();

    switch (command) {
        case 'index':
            //
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