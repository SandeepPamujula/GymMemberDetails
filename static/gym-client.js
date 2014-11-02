function handleKeyPress(event,form){

	if ( event.keyCode === 13 )
	{
		console.log("Key: "+event.keyCode);
		console.log("event.which: "+event.which);
		var value = document.getElementById("idSearchBox").value;
		console.log("value: "+value);

		var url = "http://localhost:3333/members?number=";
		url += value;
		getMemberDetails(url);
	}


}

function getMemberDetails(url){

	var xhr = new XMLHttpRequest();
	xhr.open("GET",url,false);
	//xhr.send(null);

	console.log("url: "+url);

	try{

		xhr.onreadystatechange = function(){

			console.log("onreadystatechange");

			if ( xhr.readyState == 4){
				console.log("onreadystatechange 4");
				if(xhr.status == 200 ){
					console.log("member details: "+xhr.responseText);
					updateMemberdetails(xhr.responseText);
				}
			}


		}
		xhr.send();
	}
	catch(e){ console.log("Exception: "+e.message);}

}

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function setMemberDetails(url,data)
{
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true); //replace query string 


	var jsobj;
	var jsonData = isJson(data);
	if(jsonData){
		jsobj = data;		
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.timeout = 3000;
		xhr.ontimeout = function () { /*alert('Request Timed Out!!!!'); */}
	}else{
		xhr.setRequestHeader('Content-Type', 'application/json');
		jsobj = JSON.stringify(data);		
	}
	

	try{
		xhr.onreadystatechange=function() 
		{ 
			if (xhr.readyState === 4) 
			{ 
				if (xhr.status === 200 ) 
				{ 
					var data=xhr.responseText; 
				}
			}
		}
		// alert(jsobj);
		xhr.send(jsobj); 
	}
	catch(e)
	{
			//alert("Exeption " +e.message);
	}
}


function submitMemberDetails(){

	var member = new Object();
	
	member.username = document.getElementById("idMemberName").value;
	member.number = document.getElementById("idContact").value;
	member.amountPaid = document.getElementById("idAmount").value;
	member.doj = document.getElementById("idDOJ").value;
	member.amountPaid = document.getElementById("idAmount").value;
	member.packageType = document.getElementById("idPackageType").value;
	member.age = document.getElementById("idMemberAge").value;
	member.packageEndDate = document.getElementById("idPED").value;
	member.gender = document.GenderForm.sex.value;
	member.weight = document.getElementById("idWeight").value;
	
	member.height = document.getElementById("idHeight").value;
	member.food = document.GenderForm.FoodHabit.value;
	member.medicalProblem = document.getElementById("idMedicalIssue").value;
	member.muscleMass = document.getElementById("idMuscleMass").value;
	member.viceralFat = document.getElementById("idViceralFat").value;
	member.bodyFat = document.getElementById("idBodyFat").value;
	member.tbw = document.getElementById("idTBW").value;
	member.boneWeight = document.getElementById("idBoneWeight").value;

	member.Dateone = document.getElementById("idDateone").value;
	member.Neckone = document.getElementById("idNeckone").value;
	member.Chestone = document.getElementById("idChestone").value;
	member.Shouldersone = document.getElementById("idShouldersone").value;
	member.BicepsNormalone = document.getElementById("idBicepsNormalone").value;
	member.UpperAbsone = document.getElementById("idBicepsFlexone").value;
	member.LowerAbsone = document.getElementById("idLowerAbsone").value;
	member.Waistone = document.getElementById("idWaistone").value;
	member.Hipsone = document.getElementById("idHipsone").value;
	member.Thighone = document.getElementById("idThighone").value;
	member.Calfone = document.getElementById("idCalfone").value;

	member.Datetwo = document.getElementById("idDatetwo").value;
     member.Necktwo = document.getElementById("idNecktwo").value;
     member.Chesttwo = document.getElementById("idChesttwo").value;
     member.Shoulderstwo = document.getElementById("idShoulderstwo").value;
     member.BicepsNormaltwo = document.getElementById("idBicepsNormaltwo").value;
     member.UpperAbstwo = document.getElementById("idBicepsFlextwo").value;
     member.LowerAbstwo = document.getElementById("idLowerAbstwo").value;
     member.Waisttwo = document.getElementById("idWaisttwo").value;
     member.Hipstwo = document.getElementById("idHipstwo").value;
     member.Thightwo = document.getElementById("idThightwo").value;
     member.Calftwo = document.getElementById("idCalftwo").value;
     
     member.Datethree = document.getElementById("idDatethree").value;
     member.Neckthree = document.getElementById("idNeckthree").value;
     member.Chestthree = document.getElementById("idChestthree").value;
     member.Shouldersthree = document.getElementById("idShouldersthree").value;
     member.BicepsNormalthree = document.getElementById("idBicepsNormalthree").value;
     member.UpperAbsthree = document.getElementById("idBicepsFlexthree").value;
     member.LowerAbsthree = document.getElementById("idLowerAbsthree").value;
     member.Waistthree = document.getElementById("idWaistthree").value;
     member.Hipsthree = document.getElementById("idHipsthree").value;
     member.Thighthree = document.getElementById("idThighthree").value;
     member.Calfthree = document.getElementById("idCalfthree").value;

     member.Datefour = document.getElementById("idDatefour").value;
     member.Neckfour = document.getElementById("idNeckfour").value;
     member.Chestfour = document.getElementById("idChestfour").value;
     member.Shouldersfour = document.getElementById("idShouldersfour").value;
     member.BicepsNormalfour = document.getElementById("idBicepsNormalfour").value;
     member.UpperAbsfour = document.getElementById("idBicepsFlexfour").value;
     member.LowerAbsfour = document.getElementById("idLowerAbsfour").value;
     member.Waistfour = document.getElementById("idWaistfour").value;
     member.Hipsfour = document.getElementById("idHipsfour").value;
     member.Thighfour = document.getElementById("idThighfour").value;
     member.Calffour = document.getElementById("idCalffour").value;
     var url = "http://localhost:3333/members";

     setMemberDetails(url,member);
	
}

// {"username":"deepu","number":"1","doj":"2014-01-11","amountPaid":"900","packageType":"1",
// "packageEndDate":"2015-01-11","age":"29","gender":"M","weight":"74","height":"170",
// "food":"non-veg","medicalProblem":"No issues","muscleMass":"0","viceralFat":"0","bodyFat":"0",
// "tbw":"0","boneWeight":"0","Dateone":"2014-01-11","Neckone":"0","Chestone":"0","Shouldersone":"0",
//  "BicepsNormalone":"0","BicepsFlexone":"0","UpperAbsone":"0", "LowerAbsone":"0","Waistone":"0",
//   "Hipsone":"0", "Thighone":"0","Calfone":"0","Datetwo":"2014-01-11","Necktwo":"0","Chesttwo":"0",
//   "Shoulderstwo":"0", "BicepsNormaltwo":"0","BicepsFlextwo":"0","UpperAbstwo":"0", "LowerAbstwo":"0",
//   "Waisttwo":"0", "Hipstwo":"0", "Thightwo":"0","Calftwo":"0","Datethree":"2014-01-11","Neckthree":"0",
//   "Chestthree":"0","Shouldersthree":"0", "BicepsNormalthree":"0","BicepsFlexthree":"0","UpperAbsthree":"0",
//    "LowerAbsthree":"0","Waistthree":"0", "Hipsthree":"0", "Thighthree":"0","Calfthree":"0",
//    "Datefour":"2014-01-11","Neckfour":"0","Chestfour":"0","Shouldersfour":"0", "BicepsNormalfour":"0",
//    "BicepsFlexfour":"0","UpperAbsfour":"0", "LowerAbsfour":"0","Waistfour":"0", "Hipsfour":"0", 
//    "Thighfour":"0","Calffour":"0"}

function updateMemberdetails(memberDetails){

	var member = JSON.parse(memberDetails);
	if (undefined !== member[0].username){
			console.log(member[0].username);

			document.getElementById("idMemberName").value = member[0].username ;
			//document.getElementById("idMemberID").value =  member[0].number ;
			document.getElementById("idContact").value = member[0].number ;
			document.getElementById("idAmount").value = member[0].amountPaid ;
			// document.getElementById("idDOJ").setAttribute("value","2014-01-11");
			// document.getElementById("idPED").setAttribute("value","2015-01-02");
			document.getElementById("idDOJ").setAttribute("value",member[0].doj);
			document.getElementById("idPED").setAttribute("value",member[0].packageEndDate);
			switch(member[0].packageType){

				case '1 month':
					document.getElementById("idPackageType").selectedIndex = 0;
					break;
				case '3 months':
					document.getElementById("idPackageType").selectedIndex = 1;
					break;
				case '6 months':
					document.getElementById("idPackageType").selectedIndex = 2;
					break;
				case '12 months':
					document.getElementById("idPackageType").selectedIndex = 3;
					break;

			}
			
			//document.getElementsByName('sex')[1].check();
			if (member[0].gender === 'M')
				document.GenderForm.sex[0].checked = true;
			else
				document.GenderForm.sex[1].checked = true;
			if (member[0].food === 'veg')
				document.GenderForm.FoodHabit[0].checked = true;
			else
				document.GenderForm.FoodHabit[1].checked = true;
			

			// console.log(member[0].doj);
			// console.log(member[0].packageType);
			// console.log(member[0].packageEndDate);
			// console.log(member[0].gender);
			console.log(member[0].food);
			// console.log(member[0].packageEndDate);
			document.getElementById("idMemberAge").value = member[0].age ;
			document.getElementById("idHeight").value = member[0].height ;
			document.getElementById("idWeight").value = member[0].weight ;
			document.getElementById("idBMI").value = "0";//member[0].amountPaid ;
			document.getElementById("idMuscleMass").value = member[0].muscleMass;
			document.getElementById("idMedicalIssue").value = member[0].medicalProblem ;
			document.getElementById("idViceralFat").value = member[0].viceralFat ;
			document.getElementById("idBodyFat").value = member[0].bodyFat;
			document.getElementById("idTBW").value = member[0].tbw;
			document.getElementById("idBoneWeight").value = member[0].boneWeight;


			// first column
			document.getElementById("idDateone").setAttribute("value",member[0].Dateone);
			document.getElementById("idNeckone").value = member[0].Neckone ;
			document.getElementById("idShouldersone").value = member[0].Shouldersone ;
			document.getElementById("idBicepsNormalone").value = member[0].BicepsNormalone ;
			document.getElementById("idBicepsFlexone").value = member[0].BicepsFlexone ;
			document.getElementById("idUpperAbsone").value = member[0].UpperAbsone ;
			document.getElementById("idLowerAbsone").value = member[0].LowerAbsone ;
			document.getElementById("idWaistone").value = member[0].Waistone ;
			document.getElementById("idHipsone").value = member[0].Hipsone ;
			document.getElementById("idThighone").value = member[0].Thighone ;
			document.getElementById("idCalfone").value = member[0].Calfone ;


			document.getElementById("idDatetwo").setAttribute("value",member[0].Datetwo);
			document.getElementById("idNecktwo").value = member[0].Necktwo ;
			document.getElementById("idShoulderstwo").value = member[0].Shoulderstwo ;
			document.getElementById("idBicepsNormaltwo").value = member[0].BicepsNormaltwo ;
			document.getElementById("idBicepsFlextwo").value = member[0].BicepsFlextwo ;
			document.getElementById("idUpperAbstwo").value = member[0].UpperAbstwo ;
			document.getElementById("idLowerAbstwo").value = member[0].LowerAbstwo ;
			document.getElementById("idWaisttwo").value = member[0].Waisttwo ;
			document.getElementById("idHipstwo").value = member[0].Hipstwo ;
			document.getElementById("idThightwo").value = member[0].Thightwo ;
			document.getElementById("idCalftwo").value = member[0].Calftwo ;

			document.getElementById("idDatethree").setAttribute("value",member[0].Datethree);
			document.getElementById("idNeckthree").value = member[0].Neckthree ;
			document.getElementById("idShouldersthree").value = member[0].Shouldersthree ;
			document.getElementById("idBicepsNormalthree").value = member[0].BicepsNormalthree ;
			document.getElementById("idBicepsFlexthree").value = member[0].BicepsFlexthree ;
			document.getElementById("idUpperAbsthree").value = member[0].UpperAbsthree ;
			document.getElementById("idLowerAbsthree").value = member[0].LowerAbsthree ;
			document.getElementById("idWaistthree").value = member[0].Waistthree ;
			document.getElementById("idHipsthree").value = member[0].Hipsthree ;
			document.getElementById("idThighthree").value = member[0].Thighthree ;
			document.getElementById("idCalfthree").value = member[0].Calfthree ;

			document.getElementById("idDatefour").setAttribute("value",member[0].Datefour);
			document.getElementById("idNeckfour").value = member[0].Neckfour ;
			document.getElementById("idShouldersfour").value = member[0].Shouldersfour ;
			document.getElementById("idBicepsNormalfour").value = member[0].BicepsNormalfour ;
			document.getElementById("idBicepsFlexfour").value = member[0].BicepsFlexfour ;
			document.getElementById("idUpperAbsfour").value = member[0].UpperAbsfour ;
			document.getElementById("idLowerAbsfour").value = member[0].LowerAbsfour ;
			document.getElementById("idWaistfour").value = member[0].Waistfour ;
			document.getElementById("idHipsfour").value = member[0].Hipsfour ;
			document.getElementById("idThighfour").value = member[0].Thighfour ;
			document.getElementById("idCalffour").value = member[0].Calffour ;

			

			



	}
	
}