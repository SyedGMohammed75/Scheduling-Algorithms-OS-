function greet(user){
    console.log("Hi " + honorific + user.name + "! Your age is " + user.age);
}

function canVote(age){
    if (age < 18) {
        console.log("Not legal to vote!");
    }
    else {
        console.log("Legal to vote!")
    }
}

let user = {
    name: "Syed",
    age: 19,
    gender: "Male"
}

let honorific = "";

if (user.gender == "Male" || user.gender == "male") {
    honorific = "Mr.";
}

else if (user.gender == "Female" || user.gender == "female") {
        honorific = "Ms.";
}

greet(user);
canVote(user.age);