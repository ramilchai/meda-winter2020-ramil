const base_url = "http://localhost:3000/";

$(document).ready(() => {
    
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
                    setTimeout(() => {
                        $("#submit-message").text("");
                    }, 2000);
                }, 2000);
                
            }
        });

        

    });



});