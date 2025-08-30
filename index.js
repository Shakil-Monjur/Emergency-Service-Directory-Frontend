//function for increasing the love by clicking love
const loveAdd = document.getElementsByClassName('love');
let count = 0;
for (const love of loveAdd) {
    love.addEventListener('click', function (e) {
        e.preventDefault();
        count++;
        document.getElementById('love-counting').innerText = count;
    }

    )
}

//fuction to set the call section
const callsFunction = document.getElementsByClassName("card");

for (const callFuction of callsFunction) {
    const button = callFuction.querySelector(".call");
    button.addEventListener("click", function (e) {
        e.preventDefault();

        let paisa = document.getElementById("paisa");
        let paisaConver = parseInt(paisa.innerText);
        if (paisaConver >= 20) {
            const title = callFuction.querySelector(".title-alert").innerText;

            const number = callFuction.querySelector(".number").innerText;
            alert(title + " " + number + "...");
            paisaConver = paisaConver - 20;
            paisa.innerText = paisaConver;
        }
        else {
            alert("You haven't enough coin to call. you need 20 coin to call")
        }

    })
}

// copy button function
const calsFunction = document.getElementsByClassName("card");
let addCount=0;
for (const calFuction of calsFunction) {
    const button = calFuction.querySelector(".copy-copy");
    button.addEventListener("click", function (e) {
        e.preventDefault();

        let copy = document.getElementById("copy");
        let copyConver = parseInt(copy.innerText);
            const number = calFuction.querySelector(".number").innerText;
            navigator.clipboard.writeText(number);
            alert("coppied : " + number);
            addCount++;
            copy.innerText = addCount;
        
    })
}