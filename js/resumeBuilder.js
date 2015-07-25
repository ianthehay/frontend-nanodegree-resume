//$("#main").append("Ian Hay");

var formattedName = HTMLheaderName.replace("%data%", "Ian Hay");
var formattedRole = HTMLheaderRole.replace("%data%", "Lord of Aceness");
var formattedPic= HTMLbioPic.replace("%data%", "images/fry.jpg");
var formattedSkills = HTMLskills.replace("%data%",["Aceness","Rocking","Coding"]);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%","Ahoy there!");

var bio ={
	"name": formattedName,
	"role": formattedRole,
	"skills":formattedSkills,
	"welcome" : formattedWelcome,
	"pic" : formattedPic

};

var work ={};
work.Start = HTMLworkStart;
work.Employer = HTMLworkEmployer.replace("%data%","DAI")
work.Title = HTMLworkTitle.replace("%data%","Software Engineer");
work.Dates = HTMLworkDates.replace("%data%","August 2010 - Present");


var education = {};
education["Start"]=HTMLschoolStart;
education["Name"]=HTMLschoolName.replace("%data%","University of Aberdeen");
education["Degree"]=HTMLschoolDegree.replace("%data%","Masters of Engineering");
education["Dates"]=HTMLschoolDates.replace("%data%","September 2005 - July 2010");
education["Major"]=HTMLschoolMajor.replace("%data%","Electrical and Electronic Engineering");


$("#header").prepend(bio.role);
$("#header").prepend(bio.name);
$("#header").append(bio.pic);

//$("#main").append(bio.name);
//$("#main").append(bio.role);
$("#header").append(bio.welcome);

$("#header").append(bio.skills);

$("#workExperience").append(work.Start);
$("#workExperience").append(work.Employer);
$("#workExperience").append(work.Title);
$("#workExperience").append(work.Dates);

$("#education").append(education.Start);
$("#education").append(education.Name);
$("#education").append(education.Degree);
$("#education").append(education.Dates);
$("#education").append(education.Major);



