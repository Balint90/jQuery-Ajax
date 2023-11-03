$('#btn1').click(() => {
    $('.file-content').load('input.txt', (reply, status, xhr) => {
        if (status === 'success') {
            console.log(reply, status);
            console.log("success");
        } else {
            console.log(reply, status);
            console.log("Help!");
        }

        console.log(xhr);
    });
});

$('#btn2').click(() => {
    $('.file-content').load('inputa.txt');
    setTimeout(() => {
        $('.file-content').load('inputfile.html');
    }, 2000);
});

$('#btn3').click(() => {
    $('.file-content').load('inputb.txt');
});