
// Write your JavaScript code here!
window.addEventListener("load", function() {
    // Get document elements
    const launchForm = document.querySelector("form");
    const submitBtn = document.getElementById("formSubmit");
    const pilotNameInput = launchForm.elements["pilotName"];
    const copilotNameInput = launchForm.elements["copilotName"];
    const fuelLevelInput = launchForm.elements["fuelLevel"];
    const cargoMassInput = launchForm.elements["cargoMass"];

    const faultyItemsList = document.getElementById("faultyItems");

    // Set visibility hidden on load to pass first DOM Manipulation test which doesn't call formSubmission() function
    faultyItemsList.style.visibility = "hidden";

    submitBtn.addEventListener("click", function(event) {
        formSubmission(document, faultyItemsList, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);
        event.preventDefault();
    });
});

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {

        listedPlanets = result;
        console.log(listedPlanets);

        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
});