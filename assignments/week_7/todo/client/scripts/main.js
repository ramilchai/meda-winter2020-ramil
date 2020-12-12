const base_url = "http://localhost:3000/";

$(document).ready(() => {
    
    $.post(base_url + "getList", {}, (data) => {
        console.log(data.list);

        for(let i = 0; i < data.list.length; i++) {
            addToList(data.list[i]);

        }

        refreshDeleteButtons()

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

                    addToList(data.savedTask);
                    refreshDeleteButtons()

                    

                    setTimeout(() => {
                        $("#submit-message").text("");
                    }, 2000);
                }, 2000);
                
            }
        });  

    });

});

function addToList(taskObject) {
    const html = `
        <tr data-task-id="${taskObject._id}">
            <td>${taskObject.priority}</td>
            <td>${taskObject.title}</td>
            <td>${taskObject.text}</td>
            <td><button >Delete</button></td>
            <img src="images/822.gif" width="21" height="21" alt="Loading Icon" />
         </tr>
    `;

    $("#tasks tbody").append(html);
}

function refreshDeleteButtons() {
    $("#tasks tbody tr td button").click((e) => {
        
        $(e.target).attr("disabled", "disabled");
        $(e.target).parent().next().children("img").fadeIn(600);
        
        let taskID = $(e.target).parent().parent().attr("data-task-id");
        
        console.log(taskID);

        let actionObject = {
            id: taskID,
            action: "delete",
            data: null 
        };

        $.post(base_url + "modify", actionObject, (data) => {
            $(e.target).parent().parent().remove();
        });

    });
}