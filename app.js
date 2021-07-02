(function () {
    var field = document.querySelector(".calculator__field");
    var buttons = document.querySelectorAll(".calculator__button");
    var clear = document.querySelector(".calculator__button--clear");
    var equal = document.querySelector(".calculator__button--equal");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var value = button.getAttribute("data-value");

            if (value) {
                field.value = field.value + value;
            }
        });
    });

    clear.addEventListener("click", function () {
        field.value = "";
    });

    equal.addEventListener("click", function () {
        field.value = eval(field.value);
    });
})();
