const findTheOldest = function(people) {
    return people.reduce((oldestPerson, person) => {
        let personAge = getAge(person);
        let oldestPersonAge = getAge(oldestPerson);

        return personAge > oldestPersonAge ? person : oldestPerson;
    });
};

const getAge = function(person) {
    if ("yearOfDeath" in person) {
        return person.yearOfDeath - person.yearOfBirth;
    } else {
        // If no yearOfDeath, assume person is alive and get years from birth to today
        return new Date().getFullYear() - person.yearOfBirth;
    } 
}

// Do not edit below this line
module.exports = findTheOldest;
