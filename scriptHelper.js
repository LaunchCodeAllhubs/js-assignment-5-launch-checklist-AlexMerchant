// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput === '') {
    return "Empty";
   } else if (isNaN(testInput)) {
    return "Not a Number";
   } else {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let formInputValues = [pilot, copilot, fuelLevel, cargoLevel];
    let validatedValues = formInputValues.map(idx => validateInput(idx));

    // Collecting more DOM elements to manipulate
    const launchStatus = document.getElementById("launchStatus");
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    
    // console.log(validatedValues);

    // Validate data entered in form
    if (validatedValues.includes('Empty')) {
        window.alert('Please enter a value for all form fields');

    } else if (validatedValues[0] === 'Is a Number') {
        window.alert('INVALID DATA - Pilot Name must contain a string');

    } else if (validatedValues[1] === 'Is a Number') {
        window.alert('INVALID DATA - Co-pilot Name must contain a string');

    } else if (validatedValues[2] === 'Not a Number') {
        window.alert('INVALID DATA - Fuel Level must contain a number');

    } else if (validatedValues[3] === 'Not a Number') {
        window.alert('INVALID DATA - Cargo Mass must contain a number');

    } else {
        // All fields have values of the correct type
        // console.log('Valid form submission');
        
        pilotStatus.textContent = `Pilot ${pilot} is ready for launch`;
        copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`;

        if (fuelLevel < 10000) {
            // Fuel level is too low
            // console.log('Fuel level too low')

            list.style.visibility = 'visible';
            launchStatus.textContent = 'Shuttle Not Ready for Launch';
            launchStatus.style.color = 'rgb(199, 37, 78)';
            fuelStatus.textContent = 'Fuel level too low for launch';
        }

    }



    // console.log(document);
    // console.log(list);
    // console.log(pilot);
    // console.log(copilot);
    // console.log(fuelLevel);
    // console.log(cargoLevel);
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
