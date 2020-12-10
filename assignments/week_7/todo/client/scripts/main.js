const base_url = "http://localhost:3000/";

$(document).ready(() => {
    
    $.post(base_url + "getList", {}, (data) => {
        console.log(data.list);

        for(let i = 0; i < data.list.length; i++) {
            const html = `
                    <tr>
                        <th>${data.list[i].priority}</th>
                        <th>${data.list[i].title}</th>
                        <th>${data.list[i].text}</th>
                    </tr>
            `;

            $("#tasks tbody").append(html);
        }
    });

    $("#submit").click(() => {

        let priorityNumber = $("#note-priority option:selected").attr("value");

        priorityNumber = parseInt(priorityNumber);

        let noteObject = {
            auther: null,
            title: $("#note-title").val(),
            text: $("#note-text").val(),
            completed: false,
            archived: false,
            priority: priorityNumber,
            categories: null,
            timestamp: Date.now()
        }

        $("#submit").attr("disabled", "disabled");
        $("#loading-icon").css("visibility", "visible");

        $.post(base_url + "newNote", noteObject, (data) => {
            console.log(data.saved);

            if (data.saved === true) {
                setTimeout(() => {
                    $("#submit").removeAttr("disabled");
                    $("#loading-icon").css("visibility", "hidden");
                    $("#submit-message").text("Successfully saved " + noteObject.title);

                    $("#note-title").val("");
                    $("#note-text").val("");
                    $("#note-priority").val("1");

                    const html = `
                    <tr>
                        <th>${noteObject.priority}</th>
                        <th>${noteObject.title}</th>
                        <th>${noteObject.text}</th>
                    </tr>
                    `;

                    $("#tasks tbody").append(html);

                    setTimeout(() => {
                        $("#submit-message").text("");
                    }, 2000);
                }, 2000);
                
            }
        });

        

    });



});