$(function () { // On load...
    // Eat button click handler
    $(".eat-it").on("click", function (event) {
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id,
            { type: "PUT" })
            .then(function () {
                console.log("Burger id " + id + " devoured.");
                location.reload();
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