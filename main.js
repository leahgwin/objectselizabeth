// Unfortunately, the team discovered that you're a software developer, so they have begged you to build an application that lets them track volunteers, and store information about Elizabeth and her campaign.

// Your job is to define the different objects and resources, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.


// I decided to make a function so I could call on the object indivdually.
// function platformStatements(taxes, jobs, infrastructure, healthcare, crimeEnforcement) {
//     var platform = {};
//     platform.taxes = taxes;
//     platform.jobs = jobs;
//     platform.infrastructure = infrastructure;
//     platform.healthcare = healthcare;
//     platform.crimeEnforcement = crimeEnforcement;
//     console.log(platform);
// }
// var lizPlatform = platformStatements("hate them", "lots of jobs", "build it!", "save people", "go away bad people");

//the above worked really well, but I think I'm supposed to make one big object... so here we go

const campaignInfo = {
    district: "Tennessee's 5th District",
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
        }    
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