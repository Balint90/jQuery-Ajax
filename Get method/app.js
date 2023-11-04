$('#btn1').click(adder1);
$('#btn1_online').click(adder1_online);
$('#btn2').click(adder2);
$('#btn3').click(adder3);

function adder1() {
    $.get("input.json",
        function (data, textStatus, jqXHR) {
            console.log(data)
            $.each(data.people, function (indexInArray, valueOfElement) { 
                const html = `<div>${indexInArray}.: ${valueOfElement.first} ${valueOfElement.last}</div>`; 
                $('<h2>').html(html).appendTo('.file-content');
            });
        },
        "json"
    );
}

function adder1_online() {
    $.get("https://www.discoveryvip.com/shared/people.json",
        function (data, textStatus, jqXHR) {
            console.log(data)
            $.each(data.people, function (indexInArray, valueOfElement) { 
                const html = `<div>${indexInArray}.: ${valueOfElement.first} ${valueOfElement.last}</div>`; 
                $('<h2>').html(html).appendTo('.file-content');
            });
        },
        "json"
    );
}

function adder2() {
    $.get("input2.json",
        function (data, textStatus, jqXHR) {
            let html = `${data.firstName} ${data.lastName}`;
            $('<h2>').text(html).appendTo('.file-content');

            const address = data.address;
            const tmp = `${address.city}<br>${address.postalCode}<br>${address.state}<br>${address.streetAddress}`;
            $('<div>').html(tmp).appendTo('.file-content');
            //phonenumbers
            $ul = $('<ul>');
            $ul.appendTo('.file-content');
            $.each(data.phoneNumbers,
                function (indexInArray, valueOfElement) { 
                    console.log(valueOfElement);
                    const tmp = `${indexInArray+1}.: ${valueOfElement.number} (${valueOfElement.type})`;
                    $('<li>').text(tmp).appendTo($ul);
            });
        },
        "json"
    );
}

function adder3() {
    $.get("https://www.discoveryvip.com/shared/books1.json",
        function (data, textStatus, jqXHR) {
            console.log(data.books);
            console.log(JSON.stringify(data.books))
            let html = '';
            $.each(data.books, function (indexInArray, valueOfElement) { 
                html += `title: ${valueOfElement.title}<br>author: ${valueOfElement.author}<br>isbn: ${valueOfElement.isbn}<br>`;
            });
            $('<div>').html(html).appendTo('.file-content');
        },
        "json"
    );
}