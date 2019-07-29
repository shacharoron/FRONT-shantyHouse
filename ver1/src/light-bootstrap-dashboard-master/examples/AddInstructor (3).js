function sendForm() {
  var url = "" ;
  var xhr = new XMLHttpRequest() ;
  xhr.open("POST" ,url , true) ;
  xhr.send(buildInstructor(localhost/instrutorCreatiob)); // ??
}

function buildInstructor(){
  var instructor = {};
  instructor['firstName'] = document.getElementsByName("firstName")[0].value;
  instructor['lastName'] = document.getElementsByName("lastName")[0].value;
  instructor['ID'] = document.getElementsByName("ID")[0].value;
  instructor['house'] = document.getElementsByName("house")[0].value;
  instructor['gender'] = document.getElementsByName("gender")[0].value;
  instructor['dateOfEmployment'] = document.getElementsByName("dateOfEmployment")[0].value;
  instructor['dateOfBirth'] = document.getElementsByName("dateOfBirth")[0].value;
  instructor['shirtSize'] = document.getElementsByName("shirtSize")[0].value;
  instructor['shirtSize'] = document.getElementsByName("shirtSize")[0].value;
  instructor['isShantiTherapyInstructor'] = document.getElementsByName("isShantiTherapyInstructor")[0].value;
  instructor['cellPhoneNum'] = document.getElementsByName("cellPhoneNum")[0].value;
  instructor['homePhoneNum'] = document.getElementsByName("homePhoneNum")[0].value;
  instructor['eMail'] = document.getElementsByName("eMail")[0].value;
  instructor['address'] = document.getElementsByName("address")[0].value;
  instructor['educationType'] = document.getElementsByName("educationType")[0].value;
  instructor['hasALicence'] = document.getElementsByName("hasALicence")[0].value;
  instructor['licenseDescription'] = document.getElementsByName("licenseDescription")[0].value;
  instructor['employmentStatus'] = document.getElementsByName("employmentStatus")[0].value;
  instructor['dateOfUnemployment'] = document.getElementsByName("dateOfUnemployment")[0].value;
  instructor['isManagement'] = document.getElementsByName("isManagement")[0].value;
  instructor['hasCriminalRecord'] = document.getElementsByName("hasCriminalRecord")[0].value;
  instructor['hasSexOffenderRecord'] = document.getElementsByName("hasSexOffenderRecord")[0].value;

  return instructor ;
}
