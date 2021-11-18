// TODO: Declare any global variables we need
let heads = 0;
let tails = 0;
let headPorcent = 0;
let tailsPorcent = 0;
let total = 0;

elementsId('heads', heads);
elementsId('tails', tails);

elementsId('heads-percent', headPorcent);
elementsId('tails-percent', tailsPorcent);

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    //console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    document.getElementById('flip').addEventListener('click', () =>{
        let result = Math.random(); //number between 0 and 1;
        // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
        //Tails 
        if(result < 0.5){
            imageDisplay('tails-img', 'visible');
            imageDisplay('heads-img', 'hidden');
            tails++;
            total ++;
        }else{
            imageDisplay('tails-img', 'hidden');
            imageDisplay('heads-img', 'visible');
            heads++;
            total++;
            
        }
    headPorcent = Math.round(heads / total * 100);
    tailsPorcent = Math.round(tails / total * 100);

    elementsId('heads', heads);
    elementsId('tails', tails);

    elementsId('heads-percent', headPorcent);
    elementsId('tails-percent', tailsPorcent);
    });

    // Clear Button Click Handler
    // TODO: Reset global variables to 0
    // TODO: Update the scoreboard (same logic as in flip button click handler)
    document.getElementById('clear').addEventListener('click', () => {

        imageDisplay('tails-img', 'visible');
        imageDisplay('heads-img', 'visible');

        heads = 0;
        headPorcent = 0;
        tails = 0;
        tailsPorcent = 0;
        total = 0;

        elementsId('heads', heads);
        elementsId('tails', tails);
    
        elementsId('heads-percent', headPorcent);
        elementsId('tails-percent', tailsPorcent);

    });

})
function elementsId( name, variable){
    if(variable == heads || variable == tails){
    document.getElementById(name).innerHTML = variable;
    }else{
        document.getElementById(name).innerHTML = variable + '%';
    }
}
function imageDisplay( image, visibility ){
    document.getElementById(image).style.visibility = visibility;
}