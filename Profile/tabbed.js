const buttons = document.querySelectorAll(".tab-button");

const contents = document.querySelectorAll(".content");

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        buttons.forEach(function(btn){
            btn.classList.remove("active");
        });

        contents.forEach(function(content){
            content.classList.remove("active-content");
        });

        button.classList.add("active");

        const tabId = button.getAttribute("data-tab");

        document.getElementById(tabId)
        .classList.add("active-content");

    });

});