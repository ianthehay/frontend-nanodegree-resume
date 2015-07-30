
var bio ={
	"name": "Ian Hay",
	"role": "Lord of Aceness",
	"skills":["Aceness","Rocking","Coding","Coco Making"],
	"welcomeMessage" : "Ahoy there!",
	"contacts":{
		"mobile": "0777712234",
		"email": "ian@notanemail.com",
		"twitter": "@ianthehay",
		"github":"ianthehay",
		"location": "Aberdeen"
	},
	"bioPic" : "images/fry.jpg"
	

};


var work ={

	"jobs":[
		{
			"employer":"DAI",
			"title":"Software Engineer",
			"location":"Westhill, Aberdeenshire",
			"dates": "August 2010 - Present",
			"description": "Design, Developement and Commisioning of software solutions."
		},
		{
			"employer":"University of Aberdeen",
			"title":"Lab Demonstrator",
			"location":"Old Aberdeen, Aberdeen",
			"dates": "February 2010 - May 2010",
			"description": "Assisting teaching of Matlab workshops."
		},

	]
};


var education = {
"schools": [
		{
			"name":"University of Aberdeen",
			"location":"Aberdeen, Scotland, UK",
			"degree":"Masters of Engineering",
			"major":["Electrical and Electronic Engineering"],
			"dates":"September 2005 - July 2010",
			"url":"http://www.abdn.ac.uk"
		},
		{
			"name":"Universitat Politecnica de Catalunya",
			"location":"Terrassa, Catalonia, Spain",
			"degree":"Erasmus Masters Thesis",
			"major":["Microcontroller Programming"],
			"dates":"February2009 - June 2009",
			"url":"http://www.upc.edu"
		}

	],
"online courses": [
		{
			"title":"Web Developement",
			"school":"Udacity",
			"dates":"2011",
			"url":"http://www.udacity.com"
		},
		{
			"title":"Mobile applications for Android Handheld Systems",
			"school":"University of Maryland and Coursera",
			"dates":"2014",
			"url":"http://www.coursera.org"
		},
	]
};

education.display = function(){
		if (education.schools.length > 0) {

		for (school in education.schools){
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[school].name).replace("#",education.schools[school].url) + HTMLschoolDegree.replace("%data%",education.schools[school].degree));
			//$(".education-entry:last").append(HTMLschoolDegree.replace("%data%",education.schools[school].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[school].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[school].location));
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[school].major));
			
			
		}
		$("#education").append(HTMLonlineClasses);
		for (course in education["online courses"]){
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%",education["online courses"][course].title).replace("#",education["online courses"][course].url) + HTMLonlineSchool.replace("%data%",education["online courses"][course].school));
			//$(".education-entry:last").append(HTMLonlineSchool.replace("%data%",education["online courses"][course].school));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education["online courses"][course].dates));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%",education["online courses"][course].url));
			
		}
	};
}

education.display();


var projects = {
"projects": [
		{
			"title": "SIC Energy from Waste",
			"dates": "August 2010 - November 2010",
			"description": "Commisioning of PCS7 DCS, SQL Reporting Server and Silverlight Process Trends Web Application",
			"images": ["images/sic1.jpg","images/sic2.jpg"]
		},
		{
			"title": "YME",
			"dates": "December 2010 - December 2012",
			"description": "Third party testing and validation of ICSS",
			"images": ["images/YME1.jpg","images/YME2.jpg"]
		}

	]

}

projects.display = function(){
	if (projects.projects.length > 0) {

	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[project].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[project].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[project].description));
		$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[project].images[0]));
		$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[project].images[1]));
	}
};

}


projects.display();

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	$("#skills").append(HTMLskills.replace("%data%",bio.skills[0]));
	$("#skills").append(HTMLskills.replace("%data%",bio.skills[1]));
	$("#skills").append(HTMLskills.replace("%data%",bio.skills[2]));
	$("#skills").append(HTMLskills.replace("%data%",bio.skills[3]));
}

var displayWork = function(){

if (work.jobs.length > 0) {

	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append((HTMLworkEmployer.replace("%data%",work.jobs[job].employer) + (HTMLworkTitle.replace("%data%",work.jobs[job].title)) ));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].dates));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].location));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));
	}
};

}

displayWork();

$("#mapDiv").append(googleMap);




function inName(name){

	var finalName = name;
    console.log(finalName);
    finalName=finalName.toLowerCase();
    
    var arr=finalName.split(' ');
    finalName = arr[0] + ' ' + arr[1].toUpperCase();
    finalName = finalName.substring(0,1).toUpperCase()+finalName.substring(1);
    
    return finalName;


}




