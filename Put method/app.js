const url = 'https://script.google.com/macros/s/AKfycbzuGPGSdXCOOD9jQq4S0sx-OQxlOdL70sC_Z4AmWsRC6jnaxnwg8HGWfMBvalb-aD4U/exec';

$('#btn1').click(sendData);

$('<input>').attr({
    type:'text',
    value: '',
    placeholder: 'First name',
    name: 'first',
    class: 'form-control',
    ariaLabel: 'First name'
}).appendTo('.inputs');

$('<input>').attr({
    type:'text',
    value: '',
    placeholder: 'Last name',
    name: 'last',
    class: 'form-control',
    ariaLabel: 'Last name'
}).appendTo('.inputs');

function sendData() {
    const data = {
        first: $('input[name="first"]').val(),
        last: $('input[name="last"]').val(),
    }
    console.log(data);
    $.post(
        url,
        data,
        (data, textStatus, jqXHR) => {
            console.log(data);
            console.log(textStatus);
            if (textStatus == 'success') {
                const params = data.para;
                const temp = `Status: ${textStatus}
                <br>${params.first} ${params.last}`;
                $('<div>').html(temp).appendTo('.output');
            }
        },
        "json"
    );
}