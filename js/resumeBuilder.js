//$("#main").append("Ian Hay");

var formattedName = HTMLheaderName.replace("%data%", "Ian Hay")
var formattedRole = HTMLheaderRole.replace("%data%", "Lord of Aceness")

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

