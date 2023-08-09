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
    const cargoStatus = document.getElementById("cargoStatus");
    
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
        
        pilotStatus.textContent = `Pilot ${pilot} is ready for launch`;
        copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`;

        if (cargoLevel > 10000 && fuelLevel < 10000) {
            // Cargo mass is too high AND fuel level is too low

            list.style.visibility = 'visible';
            launchStatus.textContent = 'Shuttle Not Ready for Launch';
            launchStatus.style.color = 'rgb(199, 37, 78)';
            fuelStatus.textContent = 'Fuel level too low for launch';
            cargoStatus.textContent = 'Cargo mass too heavy for launch';

        } else if (fuelLevel < 10000) {
            // Fuel level is too low

            list.style.visibility = 'visible';
            launchStatus.textContent = 'Shuttle Not Ready for Launch';
            launchStatus.style.color = 'rgb(199, 37, 78)';
            fuelStatus.textContent = 'Fuel level too low for launch';
            cargoStatus.textContent = 'Cargo mass low enough for launch';

        } else if (cargoLevel > 10000) {
            // Cargo mass is too high

            list.style.visibility = 'visible';
            launchStatus.textContent = 'Shuttle Not Ready for Launch';
            launchStatus.style.color = 'rgb(199, 37, 78)';
            fuelStatus.textContent = 'Fuel level high enough for launch';
            cargoStatus.textContent = 'Cargo mass too heavy for launch';

        } else {
            // Shuttle is ready to launch

            list.style.visibility = 'visible';
            launchStatus.textContent = 'Shuttle is Ready for Launch';
            launchStatus.style.color = 'rgb(65, 159, 106)';
            fuelStatus.textContent = 'Fuel level high enough for launch';
            cargoStatus.textContent = 'Cargo mass low enough for launch';

        }

    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    planetsReturned = await planetsReturned.json();

    return planetsReturned;
}

function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
