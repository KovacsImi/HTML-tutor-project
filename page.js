window.onload = function () {

    const button = document.querySelector("#input-button");

    button.onclick = function (){
        const input = document.querySelector("#input-id-1")
        const text = input.value;
        console.log("Próba üzenet");

        const div = document.querySelector("#message-div");
        div.innerHTML = "Hello " + text + " !";

        return false;
    }
}