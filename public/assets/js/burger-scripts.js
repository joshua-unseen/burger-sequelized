$(function () { // On load...
    // Eat button click handler
    $(".eat-burger").on("submit", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var custName = $(this).children("input[name='customer-name']").val().trim();
        $.ajax("/api/customers/" + custName, {
            type: "GET"
        }).then(function(response) {
            console.log(response);
            if (response.length === 0) {
                
            }
        });
        $.ajax("/api/burgers/" + id,
            {
                type: "PUT",
                data: {devoured: true}
            })
            .then(function () {
                console.log("Burger id " + id + " devoured.");
                // location.reload();
            });
    });

    // New burger form handler
    $("#add-burger").on("submit", function (event) {
        event.preventDefault();
        var newBurger = $("input[name='burger-name']").val().trim();
        if (newBurger.length) {
            var reqBody = { burgerName: newBurger };
            console.log(newBurger);
            $.ajax("/api/burgers", {
                type: "POST",
                data: reqBody
            })
                .then(function (res) {
                    console.log("Burger " + res.id + " added.")
                });
            location.reload();
        }
    });
});