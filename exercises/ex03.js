
const room = "dining room";
let weapon;
let solved = false;     

if (room === "ballroom") {
    weapon      
= "poison";
    solved = true;
}   
else if (room === "gallery") {
    weapon  = "trophy";
    solved = true;
}   
else if (room === "billiards room") {
    weapon = "pool stick";
    solved = true;
}   
else if (room === "dining room") {
    weapon = "knife";
    solved = true;
}   

if (solved) {
    let suspect;    

    if (room === "ballroom") {
        suspect = "Mr. Kalehoff";
    }   
    else if (room === "gallery") {
        suspect = "Ms. Van Cleve";
    }       
    else if (room === "billiards room") {
        suspect = "Mrs. Sparr";
    }           
    else if (room === "dining room") {
        suspect = "Mr. Parkes";
    }
    console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
}

