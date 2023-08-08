// Write your JavaScript code here!
window.addEventListener("load", function() {
    // Get document elements
    const launchForm = document.querySelector("form");
    const submitBtn = document.getElementById("formSubmit");
    const pilotNameInput = launchForm.elements["pilotName"];
    const copilotNameInput = launchForm.elements["copilotName"];
    const fuelLevelInput = launchForm.elements["fuelLevel"];
    const cargoMassInput = launchForm.elements["cargoMass"];

    // TODO: Create variable to grab "list" per instructions; probably the whole <ol> in the #faultyItems div
    const faultyItemsList = document.getElementById("faultyItems");

    console.log(launchForm);
    console.log(submitBtn);

    submitBtn.addEventListener("click", function(event) {
        formSubmission(document, faultyItemsList, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
        event.preventDefault();
    });
});

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })

});