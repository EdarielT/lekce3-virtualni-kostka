// tady je místo pro náš program

let play = () => {
    let result = Math.floor(Math.random()*6+1);
    if (result != 6) {
        document.getElementById('zprava').innerHTML = `Hodila jsi ${result}. Zkus to znovu`;
    } else {
        document.getElementById('zprava').innerHTML = "Sestka!!! Vyhrala jsi!";
    }
    let newPng = `obrazky/${result}.png`;
    document.getElementById('kostka').src = newPng; 

}

document.getElementById('zprava')