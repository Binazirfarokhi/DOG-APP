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
    if(breeds){
    for (const breed of breeds){
        const option = document.createElement("option");
        // now you loop through the array, now you got what kind of those breed who are in the array now needed for the option to be created.
        option.value = breed;
        option.innerHTML = breed;
        petBreed.appendChild(option);


    }
}else{
    console.warn("invalid pet type" + petType.value)
}

});
// submit the form 
// when you have a form it would reload the page we should prevent this event by using event.prevent

// =======================
// we need to create a class to pass the values form form to the constructor of the class to ctreate onject of pets

class Pet{ 
    // this referenc to our object that we are going to create
    constructor(name,dob,petBreed,petType){
        this.name = name;
        this.dob = dob;
        this.petBreed = petBreed;
        this.petType = petType;


    }
// create a method to generate the row for my table to  add my objects in my table after adding each pet
generateTableRow(){
    const row = document.createElement("tr");
    row.innerHTML =`<td>${this.name}</td><td>${this.dob}</td><td>${this.petBreed}</td><td>${this.petType}</td>`
    return;
}


}
// create the array to push all the pet object in it
const petArray = [];
document.getElementById("form1").addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const petType = document.getElementById("petType").value;
    const petBreed = document.getElementById("petBreed").value;

// create the object  from the clas
// we should add the properties in the same order as class
const pet = new Pet(name,dob,petBreed,petType);
// push the object in the array
petArray.push(pet);


})
// inorder to use the method in my class i need to create a function
