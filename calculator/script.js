
    let isResultDisplayed = false;
    document.addEventListener("click", function (e){
        if (e.target.tagName === "INPUT" && e.target.type === "button") {
            const value = e.target.value;
            const display =
            document.getElementById('display');

            if (value === "=") {
                isResultDisplayed = true;
                return;
            }
            if (isResultDisplayed && !isNaN(value))
            {
                display.value = "";
                isResultDisplayed = false;
            }
        }
    }, true);
