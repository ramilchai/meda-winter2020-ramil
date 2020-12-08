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

        $.post(base_url + "newNote", noteObject, (data) => {
            console.log(data.saved);
        });

    });



});