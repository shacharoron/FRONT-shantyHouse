
function sendForm() {
  var url = "" ;
  var xhr = new XMLHttpRequest() ;
  xhr.open("POST" ,url , true) ;
  xhr.send(buildChild(localhost/childCreatiob));
}

function buildChild(){
  var child = {};
  child['house'] = document.getElementsByName("house")[0].value;
  child['arrivalDate'] = document.getElementsByName("arrivalDate")[0].value;
  child['firstName'] = document.getElementsByName("firstName")[0].value;
  child['lastName'] = document.getElementsByName("lastName")[0].value;
  child['ID'] = document.getElementsByName("ID")[0].value;
  child['gender'] = document.getElementsByName("gender")[0].value;
  child['dateOfBirth'] = document.getElementsByName("dateOfBirth")[0].value;
  child['city'] = document.getElementsByName("city")[0].value;
  child['address'] = document.getElementsByName("address")[0].value;
  child['staffInCharge'] = document.getElementsByName("staffInCharge")[0].value;
  child['status'] = document.getElementsByName("status")[0].value;
  child['phoneNum'] = document.getElementsByName("phoneNum")[0].value;
  child['eMail'] = document.getElementsByName("eMail")[0].value;
  child['mothersName'] = document.getElementsByName("mothersName")[0].value;
  child['fathersName'] = document.getElementsByName("fathersName")[0].value;
  child['parentsStatus'] = document.getElementsByName("parentsStatus")[0].value;
  child['numOfSiblings'] = document.getElementsByName("numOfSiblings")[0].value;
  child['staffInCharge'] = document.getElementsByName("staffInCharge")[0].value;
  child['economicStatus'] = document.getElementsByName("economicStatus")[0].value;
  child['origin'] = document.getElementsByName("origin")[0].value;
  child['nation'] = document.getElementsByName("nation")[0].value;
  child['placeOfBirth'] = document.getElementsByName("placeOfBirth")[0].value;
  child['passportNum'] = document.getElementsByName("passportNum")[0].value;
  child['citizenship'] = document.getElementsByName("citizenship")[0].value;
return child ;
}
