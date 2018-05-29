// Unfortunately, the team discovered that you're a software developer, so they have begged you to build an application that lets them track volunteers, and store information about Elizabeth and her campaign.

// Your job is to define the different objects and resources, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.



const campaignInfo = {
    district: " ",
    platform :
        {
            taxes: " ",
            jobs: " ",
            infrastructure: " ",
            healthcare: " ",
            crimeEnforcement: " "

        },
    url: " ",
    calendar: " ",
    volunteerInformation: [ 
        {
            name: " ",
            address: " ",
            email: " ",
            number: " ",
            availability: " ",
            volunteerActivity: " "
        },    
        {
            name: " ",
            address: " ",
            email: " ",
            number: " ",
            availability: " ",
            volunteerActivity: " "
        }  
    ],
    biography: " ",
    images: {
        headShot: " ",
        family: " ",
        constituents: " ",
    },
    missionStatement: " ",
    urlToVote: " "
}


// After you have defined all the objects for representing the data, write a corresponding function for each one whose purpose is to change the state of the object. Then invoke each function, and pass a reference to the correct object to it and modify a property.

// make a function so I could call on the objects and keys indivdually.
function districtNumber(district) {
    district.district = {};
    console.log(district);
}
var district = districtNumber("5th Congressional District");

function platformStatements(taxes, jobs, infrastructure, healthcare, crimeEnforcement) {
    var platform = {};
    platform.taxes = taxes;
    platform.jobs = jobs;
    platform.infrastructure = infrastructure;
    platform.healthcare = healthcare;
    platform.crimeEnforcement = crimeEnforcement;
    console.log(platform);
}
var lizPlatform = platformStatements("hate them", "lots of jobs", "build it!", "save people", "go away bad people");

function website(url) {
    url.url = {};
    console.log(url);
}
var url = website("google.com");

function gCal(calendar) {
    calendar.calendar = {};
    console.log(calendar);
}
var calendar = gCal("calendar.google.com");

function volunteers(name, address, email, number, availability, volunteerActivity) {
    var volunteerInformation = {};
    volunteerInformation.name = name;
    volunteerInformation.address = address;
    volunteerInformation.email = email;
    volunteerInformation.number = number;
    volunteerInformation.availability = availability;
    volunteerInformation.volunteerActivity = volunteerActivity;
    console.log(volunteerInformation);
}
var LeahInformation = volunteers("Leah", "132 Marie St", "leahgwin@gmail.com", "2518956468", "today only", "javascript");

function bio(biography) {
    biography.biography = {};
    console.log(biography);
}
var biography = bio("I'm an awesome lady. I've done lots of things. Vote 4 me.");

function pics(headShot, family, constituents) {
    images.headShot = headShot;
    images.family = family;
    images.constituents = constituents;
}
var images = pics("*insert headshot*", "*insert fam*", "*insert constituents*");


