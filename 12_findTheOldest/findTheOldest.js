const findTheOldest = function(people) {
    const agearray = [];
     for (let i=0; i<people.length; i++) {
        if (people[i].yearOfDeath === undefined){ //call the yearOfBirth and yearOfDeath
            let age = 2023-people[i].yearOfBirth;
            agearray.push(age);  //push the age to new array
        }
        else {
        let age = people[i].yearOfDeath - people[i].yearOfBirth;
        agearray.push(age);  //push the age to new array
        }
     }
    
     let oldestage = Math.max(...agearray);
     let index = agearray.indexOf(oldestage);//check the index of the oldest age
    return people[index]; //return the oldest name
   
};

// Do not edit below this line
module.exports = findTheOldest;
