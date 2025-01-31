const petType = document.getElementById("petType");

const petBreeds = {
    Cat :["Saimese", "Persian", "Bengal"],
    Dog :["Labrador", "Beagle", "Bulldog"]
}
petType.addEventListener('change', function(){
    const petBreed= document.getElementById("petBreed");
    // choose one of the array in the object based on what user will choose from UI
    // we need to clean the pet breed 
    petBreed.innerHTML = "";
    const breeds = petBreeds[petType.value];
    // using for of mostly for arrays and using for in mostly for objects. now loop through the array of cat or dog
    // breed is one of breed in the array of cat or dog
    for (const breed of breeds){
        const option = document.createElement("option");
        // now you loop through the array, now you got what kind of those breed who are in the array now needed for the option to be created.
        option.value = breed;
        option.innerHTML = breed;
        petBreed.appendChild(option);


    }

})