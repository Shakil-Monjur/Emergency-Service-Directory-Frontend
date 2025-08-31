
//adjust the header section to fixed
function adjustHeader() {
    const header = document.getElementById('top-header')
    const space = document.getElementById('header-space')
    const heightSpace = header.offsetHeight;
    space.style.height = heightSpace + 'px'
}
window.addEventListener('load', adjustHeader);
window.addEventListener('resize', adjustHeader);



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

//function for adding history
function history(btn, title, number) {
    const history = document.getElementById('history');
    const time = new Date().toLocaleTimeString();

    const div = document.createElement("div");
    div.innerHTML = `<div
                            class="w-full h-50px bg-[#F5FFF6] mt-[10px] rounded-[10px] flex justify-between items-center px-[10px] py-[20px]">
                            <div>
                                <p class="font-bold text-[1.1rem]">${title}</p>
                                <p>${number}</p>
                            </div>
                            <p>${time}</p>
                        </div>`
    history.appendChild(div);
}

//function to clear history
document.getElementById('clear-history').addEventListener('click',function(e){
e.preventDefault();
document.getElementById('history').innerHTML="";
})

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
            history("Called", title, number);


        }
        else {
            alert("You haven't enough coin to call. you need 20 coin to call")
        }

    })
}

// copy button function
const calsFunction = document.getElementsByClassName("card");
let addCount = 0;
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