let counter = 50;
let doorFlagVar = false;

function openDoor () {
    const leftDoorJs = document.getElementById("leftDoor");
    const rightDoorJs = document.getElementById("rightDoor");

    let id = null;
    clearInterval(id);

    id = setInterval(frame, 35);
    function frame () {
        if (counter > 0 && doorFlagVar == false) {

            counter--;

            leftDoorJs.style.minWidth = counter + '%';
            rightDoorJs.style.minWidth = counter + '%';

            if (counter == 0) {
                doorFlagVar = true;
                clearInterval(id);
            }
        }

        else if (counter < 50 && doorFlagVar == true) {

            counter++;

            leftDoorJs.style.minWidth = counter + '%';
            rightDoorJs.style.minWidth = counter + '%';

            if (counter == 50) {
                doorFlagVar = false;
                clearInterval(id);
            }
        }
    }
}

let keyCounter = 0;
let flagVar = false;

function turnKey () {
    let id = null;
    clearInterval(id);

    let keyHole = document.querySelector("#clickOpen");
    
    id = setInterval(turnKeyFunc, 70);
    function turnKeyFunc () {
        
        if (keyCounter < 180 && flagVar == false) {
            keyCounter += 15;
           keyHole.style.transform = 'rotate(' + keyCounter + 'deg)';
           
            if (keyCounter == 180) {
                openDoor();
                flagVar = true;
                clearInterval(id);
            }
        }

        else if (keyCounter > 0 && flagVar == true){
            keyCounter -= 15;
            keyHole.style.transform = 'rotate(' + keyCounter + 'deg)';

            if (keyCounter == 0) {
                openDoor();
                flagVar = false;
                clearInterval(id);
            }
        }
    }
}