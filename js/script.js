"use strict";
// var extinfo = [];
// var tapcounter = 0;
// var entries = 10;

// function messageclear()
// {
// 	document.getElementById("resultatt").innerHTML = "";
// 	document.getElementById("resultdef").innerHTML = "";
// 	document.getElementById("resultsplash").innerHTML = "";
// 	document.getElementById("note").innerHTML = "";
// }
// function calculate()
// {
// 	var attforce, defforce, totaldam, res, testdef;
// 	var astring, bstring, cstring, unit1, unit2, defbonus = "";
// 	var warning = false;
// 	var att = parseFloat(document.getElementById("attack").value);
// 	var def = parseFloat(document.getElementById("defense").value);
// 	var atthp = parseInt(document.getElementById("attackhp").value);
// 	var defhp = parseInt(document.getElementById("defensehp").value);
// 	var splashhp = parseInt(document.getElementById("defensehp").value);
// 	var attmaxhp = parseInt(document.getElementById("attackmaxhp").value);
// 	var defmaxhp = parseInt(document.getElementById("defensemaxhp").value);
// 	var attname = document.getElementById("selectattacker").value;
// 	var defname = document.getElementById("selectdefender").value;

// 	tapcounter = 0;

// 	if (isNaN(att) == true || isNaN(def) == true || isNaN(atthp) == true ||
// 		  isNaN(defhp) == true || isNaN(attmaxhp) == true || isNaN(defmaxhp) == true)
// 	{
// 		warning = true;
// 		messageclear();
// 		document.getElementById("resultatt").innerHTML = "All of the fields have to be filled with numbers!";
// 		resanchor.scrollIntoView();
// 	}
// 	else if (att < 0 || def < 0 || atthp < 1 || defhp < 1 || attmaxhp < 10 || defmaxhp < 10 || atthp > attmaxhp || defhp > defmaxhp ||
// 		(att % 0.5 != 0) || (def % 0.5 != 0) || (document.getElementById("attackhp").value % atthp != 0) || (document.getElementById("defensehp").value % defhp != 0) || 
// 			(document.getElementById("attackmaxhp").value % attmaxhp != 0) || (document.getElementById("defensemaxhp").value % defmaxhp != 0))
// 	{
// 		warning = true;
// 		messageclear();
// 		document.getElementById("resultatt").innerHTML = "One or more invalid inputs:<br/>";
// 		if (att < 0)
// 		{
// 			resultatt.insertAdjacentHTML("beforeend", "<br/>- Attack value must be 0 or higher");
// 		}
// 		else if (att % 0.5 != 0)
// 		{
// 			resultatt.insertAdjacentHTML("beforeend", "<br/>- Attack value must be divisible by 0.5");
// 		}
// 		if (atthp < 1)
// 		{
// 			resultatt.insertAdjacentHTML("beforeend", "<br/>- Attacker current HP can't be lower than 1");
// 		}
// 		else if (document.getElementById("attackhp").value % atthp != 0)
// 		{
// 			resultatt.insertAdjacentHTML("beforeend", "<br/>- Attacker current HP must be a whole number");
// 		}
// 		else if (atthp > attmaxhp && atthp > 0 && attmaxhp >= 10)
// 		{
// 			resultatt.insertAdjacentHTML("beforeend", "<br/>- Attacker current HP cannot exceed max HP");
// 		}
// 		if (attmaxhp < 10)
// 		{
// 			resultatt.insertAdjacentHTML("beforeend", "<br/>- Attacker max HP must be 10 or higher");
// 		}
// 		else if (document.getElementById("attackmaxhp").value % attmaxhp != 0)
// 		{
// 			resultatt.insertAdjacentHTML("beforeend", "<br/>- Attacker max HP must be a whole number");
// 		}
// 		if (def < 0)
// 		{
// 			resultatt.insertAdjacentHTML("beforeend", "<br/>- Defense value must be 0 or higher");
// 		}
// 		else if (def % 0.5 != 0)
// 		{
// 			resultatt.insertAdjacentHTML("beforeend", "<br/>- Defense value must be divisible by 0.5");
// 		}
// 		if (defhp < 1)
// 		{
// 			resultatt.insertAdjacentHTML("beforeend", "<br/>- Defender current HP can't be lower than 1");
// 		}
// 		else if (document.getElementById("defensehp").value % defhp != 0)
// 		{
// 			resultatt.insertAdjacentHTML("beforeend", "<br/>- Defender current HP must be a whole number");
// 		}
// 		else if (defhp > defmaxhp && defhp > 0 && defmaxhp >= 10)
// 		{
// 			resultatt.insertAdjacentHTML("beforeend", "<br/>- Defender current HP cannot exceed max HP");
// 		} 
// 		if (defmaxhp < 10)
// 		{
// 			resultatt.insertAdjacentHTML("beforeend", "<br/>- Defender max HP must be 10 or higher");
// 		}
// 		else if (document.getElementById("defensemaxhp").value % defmaxhp != 0)
// 		{
// 			resultatt.insertAdjacentHTML("beforeend", "<br/>- Defender max HP must be a whole number");
// 		}
// 		resanchor.scrollIntoView();
// 	}

// 	if (warning != true && att == 123)
// 	{
// 		messageclear();
// 		warning = true;
// 		def = parseInt(document.getElementById("defense").value);
// 		if (def == 0)
// 		{
// 			document.getElementById("resultatt").innerHTML = "Combat history must contain at least 1 entry!";
// 		}
// 		else
// 		{
// 			if (def == 1)
// 			{
// 				document.getElementById("resultatt").innerHTML = "Combat history limit set to 1 entry!";
// 			}
// 			else
// 			{
// 				document.getElementById("resultatt").innerHTML = "Combat history limit set to " +  def + " entries!";
// 			}
// 			extinfo.splice (def, (extinfo.length - 1));
// 			document.getElementById("extendedinfo").innerHTML = extinfo.join("");
// 			entries = def;
// 			resanchor.scrollIntoView();
// 		}
// 	}

// 	if (warning != true)
// 	{
// 	messageclear();
// 	testdef = document.getElementById("def1").checked;

// 	attforce = att * (atthp / attmaxhp);
// 	defforce = def * (defhp / defmaxhp);

// 	if (testdef == true)
// 	{
// 		if (defname == "Amphibian")
// 		{
// 			defforce = defforce * 1.5;
// 			document.getElementById("note").innerHTML = "Note: Amphibians don't receive the defense bonus from cities!";
// 		}
// 		else if (defname == "Crab")
// 		{
// 			defforce = defforce * 1.5;
// 			document.getElementById("note").innerHTML = "Note: Crabs don't receive the defense bonus from cities!";
// 		}
// 		else if (defname == "Tridention")
// 		{
// 			defforce = defforce * 1.5;
// 			document.getElementById("note").innerHTML = "Note: Tridentions don't receive the defense bonus from cities!";
// 		}
// 		else if (defname == "Nature Bunny")
// 		{
// 			document.getElementById("note").innerHTML = "Note: Nature bunnies can't capture cities and don't have any defensive technologies! Defense bonus was disregarded in the result.";
// 		}
// 		else
// 		{
// 			defforce = defforce * 1.5;
// 			defbonus = "|D";
// 		}
// 	}

// 	testdef = document.getElementById("def2").checked;
// 	if (testdef == true)
// 	{
// 		if (defname == "Boat" || defname == "Ship" || defname == "Battleship")
// 		{
// 			document.getElementById("note").innerHTML = "Note: Ships can't benefit from walls! Wall bonus was disregarded in the result.";
// 		}
// 		else if (defname == "Navalon")
// 		{
// 			document.getElementById("note").innerHTML = "Note: Navalons can't benefit from walls! Wall bonus was disregarded in the result.";
// 		}
// 		else if (defname == "Amphibian")
// 		{
// 			document.getElementById("note").innerHTML = "Note: Amphibians don't receive the defense bonus from cities! Wall bonus was disregarded in the result.";
// 		}
// 		else if (defname == "Crab")
// 		{
// 			document.getElementById("note").innerHTML = "Note: Crabs don't receive the defense bonus from cities! Wall bonus was disregarded in the result.";
// 		}
// 		else if (defname == "Tridention")
// 		{
// 			document.getElementById("note").innerHTML = "Note: Tridentions don't receive the defense bonus from cities! Wall bonus was disregarded in the result.";
// 		}
// 		else if (defname == "Nature Bunny")
// 		{
// 			document.getElementById("note").innerHTML = "Note: Nature bunnies can't capture cities! Wall bonus was disregarded in the result.";
// 		}
// 		else
// 		{
// 			defforce = defforce * 4;
// 			defbonus = "|W";
// 		}
// 	}

// 	if (attname == "Select Attacker")
// 	{
// 		unit1 = "Unit " + att + "|" + atthp + "|" + attmaxhp + " - ";
// 	}
// 	else
// 	{
// 		unit1 = attname + " " + att + "|" + atthp + "|" + attmaxhp + " - ";
// 	}
// 	if (defname == "Select Defender")
// 	{
// 		unit2 = "Unit " + def + "|" + defhp + "|" + defmaxhp + defbonus;
// 	}
// 	else
// 	{
// 		unit2 = defname + " " + def + "|" + defhp + "|" + defmaxhp + defbonus;
// 	}

// 	totaldam = attforce + defforce;
// 	res = Math.round(attforce / totaldam * att * 4.5);
// 	if (isNaN(res) == true)
// 	{
// 		res = 0;
// 	}
// 	defhp = defhp - res;

// 	if (attname == "Fire Dragon")
// 	{
// 		splashhp = splashhp - Math.floor(res / 2);
// 		if (splashhp > 0)
// 		{
// 			cstring = document.getElementById("resultsplash").innerHTML = "<p><i>IF SPLASHED:</i></p>Defender survives! Remaining HP:  " + splashhp;
// 		}
// 		else
// 		{
// 			cstring = document.getElementById("resultsplash").innerHTML = "<p><i>IF SPLASHED:</i></p>Defender is DESTROYED! Afterlife HP:  " + splashhp;
// 		}	
// 	}

// 	if (defhp > 0) 
// 	{
// 		bstring = document.getElementById("resultdef").innerHTML = "Defender survives! Remaining HP:  " + defhp;
// 		document.getElementById("defensehp").value = defhp;
// 		res = Math.round(defforce / totaldam * def * 4.5);
// 		if (isNaN(res) == true)
// 		{
// 			res = 0;
// 		}
// 		atthp = atthp - res;

// 		if (atthp > 0)
// 		{
// 			astring = document.getElementById("resultatt").innerHTML = "Attacker survives! Remaining HP:  " + atthp;
// 		}
// 		else
// 		{
// 			astring = document.getElementById("resultatt").innerHTML = "Attacker is DESTROYED! Afterlife HP:  " + atthp;
// 		}
// 	}
// 	else
// 	{
// 		bstring = document.getElementById("resultdef").innerHTML = "Defender is DESTROYED! Afterlife HP:  " + defhp;
// 		egg(att);
// 	}
// 	if (astring == null)
// 	{
// 		astring = "";
// 	}
// 	if (cstring == null)
// 	{
// 		cstring = "";
// 	}

// 	if (extinfo.length >= entries)
// 	{
// 		extinfo.pop();
// 	}
// 	extinfo.splice(0, 0, "-------------------------------------------------------<p>" + unit1 + unit2 + "</p><p>" + astring + "</p><p>" + bstring + "</p><p>" + cstring + "</p>");
// 	document.getElementById("extendedinfo").innerHTML = extinfo.join("");

// 	resanchor.scrollIntoView();
// 	}
// }
// function defcheck()
// {
// 	var test = document.getElementById("def2").checked;

// 	if (test == true)
// 	{
// 		document.getElementById("def2").checked = false;
// 	}
// }
// function wallcheck()
// {
// 	var test = document.getElementById("def1").checked;

// 	if (test == true)
// 	{
// 		document.getElementById("def1").checked = false;
// 	}
// }
// function setdefbonus()
// {
// 	var test = document.getElementById("def1").checked;
// 	if (test == true)
// 	{
// 		document.getElementById("def1").checked = false;
// 	}
// 	else
// 	{
// 		document.getElementById("def1").checked = true;
// 	}
// 	defcheck();
// }
// function setwallbonus()
// {
// 	var test = document.getElementById("def2").checked;
// 	if (test == true)
// 	{
// 		document.getElementById("def2").checked = false;
// 	}
// 	else
// 	{
// 		document.getElementById("def2").checked = true;
// 	}
// 	wallcheck();
// }
// function clearform()
// {
// 	document.getElementById("values").reset();
// 	document.getElementById("resultatt").innerHTML = "";
// 	document.getElementById("resultdef").innerHTML = "";
// 	document.getElementById("resultsplash").innerHTML = "";
// 	document.getElementById("note").innerHTML = "";
// 	document.getElementById("attveterancy").style.display='none';
// 	document.getElementById("attshiphp").style.display='none';
// 	document.getElementById("defveterancy").style.display='none';
// 	document.getElementById("defshiphp").style.display='none';
// 	document.getElementById("extendedinfo").style.display='none';
// 	document.body.scrollTop = document.documentElement.scrollTop = 0;
// 	tapcounter = 0;
// }
// function attackerfill()
// {
// 	var getattacker = document.getElementById("selectattacker").value;
// 	switch (getattacker)
// 	{
// 		case "Warrior":
// 			document.getElementById("attack").value = "2";
// 			document.getElementById("attackhp").value = "10";
// 			document.getElementById("attackmaxhp").value = "10";
// 			break;
// 		case "Rider":
// 			document.getElementById("attack").value = "2";
// 			document.getElementById("attackhp").value = "10";
// 			document.getElementById("attackmaxhp").value = "10";
// 			break;
// 		case "Defender":
// 			document.getElementById("attack").value = "1";
// 			document.getElementById("attackhp").value = "15";
// 			document.getElementById("attackmaxhp").value = "15";
// 			break;
// 		case "Swordsman":
// 			document.getElementById("attack").value = "3";
// 			document.getElementById("attackhp").value = "15";
// 			document.getElementById("attackmaxhp").value = "15";
// 			break;
// 		case "Archer":
// 			document.getElementById("attack").value = "2";
// 			document.getElementById("attackhp").value = "10";
// 			document.getElementById("attackmaxhp").value = "10";
// 			break;
// 		case "Catapult":
// 			document.getElementById("attack").value = "4";
// 			document.getElementById("attackhp").value = "10";
// 			document.getElementById("attackmaxhp").value = "10";
// 			break;
// 		case "Knight":
// 			document.getElementById("attack").value = "3.5";
// 			document.getElementById("attackhp").value = "15";
// 			document.getElementById("attackmaxhp").value = "15";
// 			break;
// 		case "Giant":
// 			document.getElementById("attack").value = "5";
// 			document.getElementById("attackhp").value = "40";
// 			document.getElementById("attackmaxhp").value = "40";
// 			break;
// 		case "Boat":
// 			document.getElementById("attack").value = "1";
// 			document.getElementById("attackhp").value = "10";
// 			document.getElementById("attackmaxhp").value = "10";
// 			break;
// 		case "Ship":
// 			document.getElementById("attack").value = "2";
// 			document.getElementById("attackhp").value = "10";
// 			document.getElementById("attackmaxhp").value = "10";
// 			break;
// 		case "Battleship":
// 			document.getElementById("attack").value = "4";
// 			document.getElementById("attackhp").value = "10";
// 			document.getElementById("attackmaxhp").value = "10";
// 			break;
// 		case "Amphibian":
// 			document.getElementById("attack").value = "2";
// 			document.getElementById("attackhp").value = "10";
// 			document.getElementById("attackmaxhp").value = "10";
// 			break;
// 		case "Crab":
// 			document.getElementById("attack").value = "4";
// 			document.getElementById("attackhp").value = "40";
// 			document.getElementById("attackmaxhp").value = "40";
// 			break;
// 		case "Tridention":
// 			document.getElementById("attack").value = "3";
// 			document.getElementById("attackhp").value = "15";
// 			document.getElementById("attackmaxhp").value = "15";
// 			break;
// 		case "Polytaur":
// 			document.getElementById("attack").value = "3";
// 			document.getElementById("attackhp").value = "15";
// 			document.getElementById("attackmaxhp").value = "15";
// 			break;
// 		case "Navalon":
// 			document.getElementById("attack").value = "4";
// 			document.getElementById("attackhp").value = "30";
// 			document.getElementById("attackmaxhp").value = "30";
// 			break;
// 		case "Baby Dragon":
// 			document.getElementById("attack").value = "3";
// 			document.getElementById("attackhp").value = "15";
// 			document.getElementById("attackmaxhp").value = "15";
// 			break;
// 		case "Fire Dragon":
// 			document.getElementById("attack").value = "4";
// 			document.getElementById("attackhp").value = "20";
// 			document.getElementById("attackmaxhp").value = "20";
// 			break;
// 	}

// 	if (getattacker == "Warrior" || getattacker == "Rider" || getattacker == "Defender" || getattacker == "Swordsman" || getattacker == "Archer" || getattacker == "Catapult" || getattacker == "Knight" || getattacker == "Amphibian" || getattacker == "Tridention")
// 	{
// 		document.getElementById("attvetbox").checked = false;
// 		document.getElementById("attveterancy").style.display='inline';
// 		document.getElementById("attshiphp").style.display='none';
// 	}
// 	else if (getattacker == "Boat" || getattacker == "Ship" || getattacker == "Battleship")
// 	{
// 		document.getElementById("attshiphp").selectedIndex = "0";
// 		document.getElementById("attshiphp").style.display='inline';
// 		document.getElementById("attveterancy").style.display='none';
// 	}
// 	else
// 	{
// 		document.getElementById("attveterancy").style.display='none';
// 		document.getElementById("attshiphp").style.display='none';
// 	}
// }
// function defenderfill()
// {
// 	var getdefender = document.getElementById("selectdefender").value;
// 	switch (getdefender)
// 	{
// 		case "Warrior":
// 			document.getElementById("defense").value = "2";
// 			document.getElementById("defensehp").value = "10";
// 			document.getElementById("defensemaxhp").value = "10";
// 			break;
// 		case "Rider":
// 			document.getElementById("defense").value = "1";
// 			document.getElementById("defensehp").value = "10";
// 			document.getElementById("defensemaxhp").value = "10";
// 			break;
// 		case "Defender":
// 			document.getElementById("defense").value = "3";
// 			document.getElementById("defensehp").value = "15";
// 			document.getElementById("defensemaxhp").value = "15";
// 			break;
// 		case "Swordsman":
// 			document.getElementById("defense").value = "3";
// 			document.getElementById("defensehp").value = "15";
// 			document.getElementById("defensemaxhp").value = "15";
// 			break;
// 		case "Archer":
// 			document.getElementById("defense").value = "1";
// 			document.getElementById("defensehp").value = "10";
// 			document.getElementById("defensemaxhp").value = "10";
// 			break;
// 		case "Catapult":			
// 			document.getElementById("defense").value = "0";
// 			document.getElementById("defensehp").value = "10";
// 			document.getElementById("defensemaxhp").value = "10";
// 			break;
// 		case "Knight":
// 			document.getElementById("defense").value = "1";
// 			document.getElementById("defensehp").value = "15";
// 			document.getElementById("defensemaxhp").value = "15";
// 			break;
// 		case "Giant":
// 			document.getElementById("defense").value = "4";
// 			document.getElementById("defensehp").value = "40";
// 			document.getElementById("defensemaxhp").value = "40";
// 			break;
// 		case "Boat":
// 			document.getElementById("defense").value = "1";
// 			document.getElementById("defensehp").value = "10";
// 			document.getElementById("defensemaxhp").value = "10";
// 			break;
// 		case "Ship":
// 			document.getElementById("defense").value = "2";
// 			document.getElementById("defensehp").value = "10";
// 			document.getElementById("defensemaxhp").value = "10";
// 			break;
// 		case "Battleship":
// 			document.getElementById("defense").value = "3";
// 			document.getElementById("defensehp").value = "10";
// 			document.getElementById("defensemaxhp").value = "10";
// 			break;
// 		case "Mind Bender":
// 			document.getElementById("defense").value = "1";
// 			document.getElementById("defensehp").value = "10";
// 			document.getElementById("defensemaxhp").value = "10";
// 			break;
// 		case "Amphibian":
// 			document.getElementById("defense").value = "1";
// 			document.getElementById("defensehp").value = "10";
// 			document.getElementById("defensemaxhp").value = "10";
// 			break;
// 		case "Crab":
// 			document.getElementById("defense").value = "4";
// 			document.getElementById("defensehp").value = "40";
// 			document.getElementById("defensemaxhp").value = "40";
// 			break;
// 		case "Tridention":
// 			document.getElementById("defense").value = "1";
// 			document.getElementById("defensehp").value = "15";
// 			document.getElementById("defensemaxhp").value = "15";
// 			break;
// 		case "Polytaur":
// 			document.getElementById("defense").value = "1";
// 			document.getElementById("defensehp").value = "15";
// 			document.getElementById("defensemaxhp").value = "15";
// 			break;
// 		case "Navalon":
// 			document.getElementById("defense").value = "4";
// 			document.getElementById("defensehp").value = "30";
// 			document.getElementById("defensemaxhp").value = "30";
// 			break;
// 		case "Dragon Egg":
// 			document.getElementById("defense").value = "2";
// 			document.getElementById("defensehp").value = "10";
// 			document.getElementById("defensemaxhp").value = "10";
// 			break;
// 		case "Baby Dragon":
// 			document.getElementById("defense").value = "3";
// 			document.getElementById("defensehp").value = "15";
// 			document.getElementById("defensemaxhp").value = "15";
// 			break;
// 		case "Fire Dragon":
// 			document.getElementById("defense").value = "3";
// 			document.getElementById("defensehp").value = "20";
// 			document.getElementById("defensemaxhp").value = "20";
// 			break;
// 		case "Nature Bunny":
// 			document.getElementById("defense").value = "1";
// 			document.getElementById("defensehp").value = "20";
// 			document.getElementById("defensemaxhp").value = "20";
// 			break;
// 	}

// 	if (getdefender == "Warrior" || getdefender == "Rider" || getdefender == "Defender" || getdefender == "Swordsman" || getdefender == "Archer" || getdefender == "Catapult" || getdefender == "Knight" || getdefender == "Amphibian" || getdefender == "Tridention")
// 	{
// 		document.getElementById("defvetbox").checked = false;
// 		document.getElementById("defveterancy").style.display='inline';
// 		document.getElementById("defshiphp").style.display='none';
// 	}
// 	else if (getdefender == "Boat" || getdefender == "Ship" || getdefender == "Battleship")
// 	{
// 		document.getElementById("defshiphp").selectedIndex = "0";
// 		document.getElementById("defshiphp").style.display='inline';
// 		document.getElementById("defveterancy").style.display='none';
// 	}
// 	else
// 	{
// 		document.getElementById("defveterancy").style.display='none';
// 		document.getElementById("defshiphp").style.display='none';
// 	}
// }
// function egg(attack)
// {
// 	if (attack > 9000)
// 	{
// 		document.getElementById("resultatt").innerHTML = "It's over 9000!!!";
// 		document.getElementById("note").innerHTML = "There's no way that could be right!";
// 	}
// }
// function attvettest()
// {
// 	var test = document.getElementById("attvetbox").checked;

// 	if (test == true)
// 	{
// 		document.getElementById("attvetbox").checked = false;
// 	}
// 	else
// 	{
// 		document.getElementById("attvetbox").checked = true;
// 	}

// 	attackerveteran();
// }
// function defvettest()
// {
// 	var test = document.getElementById("defvetbox").checked;

// 	if (test == true)
// 	{
// 		document.getElementById("defvetbox").checked = false;
// 	}
// 	else
// 	{
// 		document.getElementById("defvetbox").checked = true;
// 	}

// 	defenderveteran();
// }
// function attackerveteran()
// {
// 	var getattacker = document.getElementById("selectattacker").value;
// 	var getattveterancy = document.getElementById("attvetbox").checked;

// 	switch (getattacker)
// 	{
// 		case "Warrior":
// 			document.getElementById("attack").value = "2";
// 			document.getElementById("attackhp").value = "10";
// 			document.getElementById("attackmaxhp").value = "10";
// 			break;
// 		case "Rider":
// 			document.getElementById("attack").value = "2";
// 			document.getElementById("attackhp").value = "10";
// 			document.getElementById("attackmaxhp").value = "10";
// 			break;
// 		case "Defender":
// 			document.getElementById("attack").value = "1";
// 			document.getElementById("attackhp").value = "15";
// 			document.getElementById("attackmaxhp").value = "15";
// 			break;
// 		case "Swordsman":
// 			document.getElementById("attack").value = "3";
// 			document.getElementById("attackhp").value = "15";
// 			document.getElementById("attackmaxhp").value = "15";
// 			break;
// 		case "Archer":
// 			document.getElementById("attack").value = "2";
// 			document.getElementById("attackhp").value = "10";
// 			document.getElementById("attackmaxhp").value = "10";
// 			break;
// 		case "Catapult":
// 			document.getElementById("attack").value = "4";
// 			document.getElementById("attackhp").value = "10";
// 			document.getElementById("attackmaxhp").value = "10";
// 			break;
// 		case "Knight":
// 			document.getElementById("attack").value = "3.5";
// 			document.getElementById("attackhp").value = "15";
// 			document.getElementById("attackmaxhp").value = "15";
// 			break;
// 		case "Amphibian":
// 			document.getElementById("attack").value = "2";
// 			document.getElementById("attackhp").value = "10";
// 			document.getElementById("attackmaxhp").value = "10";
// 			break;
// 		case "Tridention":
// 			document.getElementById("attack").value = "3";
// 			document.getElementById("attackhp").value = "15";
// 			document.getElementById("attackmaxhp").value = "15";
// 			break;
// 	}
// 	var atthp = parseInt(document.getElementById("attackhp").value);
// 	var attmaxhp = parseInt(document.getElementById("attackmaxhp").value);

// 	if (getattveterancy == true)
// 	{
// 		document.getElementById("attackhp").value = atthp + 5;
// 		document.getElementById("attackmaxhp").value = attmaxhp + 5;
// 	}
// }
// function defenderveteran()
// {
// 	var getdefender = document.getElementById("selectdefender").value;
// 	var getdefveterancy = document.getElementById("defvetbox").checked;

// 	switch (getdefender)
// 	{
// 		case "Warrior":
// 			document.getElementById("defense").value = "2";
// 			document.getElementById("defensehp").value = "10";
// 			document.getElementById("defensemaxhp").value = "10";
// 			break;
// 		case "Rider":
// 			document.getElementById("defense").value = "1";
// 			document.getElementById("defensehp").value = "10";
// 			document.getElementById("defensemaxhp").value = "10";
// 			break;
// 		case "Defender":
// 			document.getElementById("defense").value = "3";
// 			document.getElementById("defensehp").value = "15";
// 			document.getElementById("defensemaxhp").value = "15";
// 			break;
// 		case "Swordsman":
// 			document.getElementById("defense").value = "3";
// 			document.getElementById("defensehp").value = "15";
// 			document.getElementById("defensemaxhp").value = "15";
// 			break;
// 		case "Archer":
// 			document.getElementById("defense").value = "1";
// 			document.getElementById("defensehp").value = "10";
// 			document.getElementById("defensemaxhp").value = "10";
// 			break;
// 		case "Catapult":
// 			document.getElementById("defense").value = "0";
// 			document.getElementById("defensehp").value = "10";
// 			document.getElementById("defensemaxhp").value = "10";
// 			break;
// 		case "Knight":
// 			document.getElementById("defense").value = "1";
// 			document.getElementById("defensehp").value = "15";
// 			document.getElementById("defensemaxhp").value = "15";
// 			break;
// 		case "Amphibian":
// 			document.getElementById("defense").value = "1";
// 			document.getElementById("defensehp").value = "10";
// 			document.getElementById("defensemaxhp").value = "10";
// 			break;
// 		case "Tridention":
// 			document.getElementById("defense").value = "1";
// 			document.getElementById("defensehp").value = "15";
// 			document.getElementById("defensemaxhp").value = "15";
// 			break;
// 	}
// 	var defhp = parseInt(document.getElementById("defensehp").value);
// 	var defmaxhp = parseInt(document.getElementById("defensemaxhp").value);

// 	if (getdefveterancy == true)
// 	{
// 		document.getElementById("defensehp").value = defhp + 5;
// 		document.getElementById("defensemaxhp").value = defmaxhp + 5;
// 	}
// }
// function attackershiphp()
// {
// 	var getattacker = document.getElementById("selectattacker").value;
// 	var getattshiphp = document.getElementById("attshiphp").value;

// 	switch (getattacker)
// 	{
// 		case "Boat":
// 			document.getElementById("attack").value = "1";
// 			document.getElementById("attackhp").value = "10";
// 			document.getElementById("attackmaxhp").value = "10";
// 			break;
// 		case "Ship":
// 			document.getElementById("attack").value = "2";
// 			document.getElementById("attackhp").value = "10";
// 			document.getElementById("attackmaxhp").value = "10";
// 			break;
// 		case "Battleship":
// 			document.getElementById("attack").value = "4";
// 			document.getElementById("attackhp").value = "10";
// 			document.getElementById("attackmaxhp").value = "10";
// 			break;
// 	}
// 	switch (getattshiphp)
// 	{
// 		case "HP 15":
// 			document.getElementById("attackhp").value = "15";
// 			document.getElementById("attackmaxhp").value = "15";
// 			break;
// 		case "HP 20":
// 			document.getElementById("attackhp").value = "20";
// 			document.getElementById("attackmaxhp").value = "20";
// 			break;
// 		case "HP 40":
// 			document.getElementById("attackhp").value = "40";
// 			document.getElementById("attackmaxhp").value = "40";
// 			break;
// 	}
// }
// function defendershiphp()
// {
// 	var getdefender = document.getElementById("selectdefender").value;
// 	var getdefshiphp = document.getElementById("defshiphp").value;

// 	switch (getdefender)
// 	{
// 		case "Boat":
// 			document.getElementById("defense").value = "1";
// 			document.getElementById("defensehp").value = "10";
// 			document.getElementById("defensemaxhp").value = "10";
// 			break;
// 		case "Ship":
// 			document.getElementById("defense").value = "2";
// 			document.getElementById("defensehp").value = "10";
// 			document.getElementById("defensemaxhp").value = "10";
// 			break;
// 		case "Battleship":
// 			document.getElementById("defense").value = "3";
// 			document.getElementById("defensehp").value = "10";
// 			document.getElementById("defensemaxhp").value = "10";
// 			break;
// 	}
// 	switch (getdefshiphp)
// 	{
// 		case "HP 15":
// 			document.getElementById("defensehp").value = "15";
// 			document.getElementById("defensemaxhp").value = "15";
// 			break;
// 		case "HP 20":
// 			document.getElementById("defensehp").value = "20";
// 			document.getElementById("defensemaxhp").value = "20";
// 			break;
// 		case "HP 40":
// 			document.getElementById("defensehp").value = "40";
// 			document.getElementById("defensemaxhp").value = "40";
// 			break;
// 	}
// }
// function show(shown, hidden)
// {
// 	document.body.scrollTop = document.documentElement.scrollTop = 0;
// 	document.getElementById(shown).style.display='block';
//  	document.getElementById(hidden).style.display='none';
// 	tapcounter = 0;
//   	return false;
// }
// function displayextinfo()
// {
// 	tapcounter++;
// 	if ((tapcounter > 2) && (document.getElementById("extendedinfo").style.display == 'none'))
// 	{
// 		tapcounter = 0;
// 		document.getElementById("extendedinfo").style.display='block';
// 		resanchor.scrollIntoView();
// 	}
// 	if ((tapcounter > 2) && (document.getElementById("extendedinfo").style.display == 'block'))
// 	{
// 		tapcounter = 0;
// 		document.getElementById("extendedinfo").style.display='none';
// 		resanchor.scrollIntoView();
// 	}
// }

// Attacker List 0123456 11 13   4 5 8 9 10 13 17
// 0 Warrior
// 1 Rider
// 2 Defender
// 3 Swordsman
// 4 Archer
// 5 Catapult
// 6 Knight
// 7 Giant
// 8 Boat
// 9 Ship
// 10 Battleship
// 11 Amphibian
// 12 Crab
// 13 Tridention
// 14 Polytaur
// 15 Navalon
// 16 Baby Dragon
// 17 Fire Dragon
// id : ["unit_name", attack_value, max_health]
let attack_dict = {
	0: ["Warrior", 2, 10],
	1: ["Rider", 2, 10],
	2: ["Defender", 1, 15],
	3: ["Swordsman", 3, 15],
	4: ["Archer", 2, 10],
	5: ["Catapult", 4, 10],
	6: ["Knight", 3.5, 15],
	7: ["Giant", 5, 40],
	8: ["Boat", 1, NaN],
	9: ["Ship", 2, NaN],
	10: ["Battleship", 4, NaN],
	11: ["Amphibian", 2, 10],
	12: ["Crab", 4, 40],
	13: ["Tridention", 3, 15],
	14: ["Polytaur", 3, 15],
	15: ["Navalon", 4, 30],
	16: ["Baby Dragon", 3, 15],
	17: ["Fire Dragon", 4, 20]
}
let defend_dict = {
	0: ["Warrior", 2, 10],
	1: ["Rider", 1, 10],
	2: ["Defender", 3, 15],
	3: ["Swordsman", 3, 15],
	4: ["Archer", 1, 10],
	5: ["Catapult", 0, 10],
	6: ["Knight", 1, 15],
	7: ["Giant", 4, 40],
	8: ["Boat", 1, NaN],
	9: ["Ship", 2, NaN],
	10: ["Battleship", 3, NaN],
	11: ["Mind Bender", 1, 10],
	12: ["Amphibian", 1, 10],
	13: ["Crab", 4, 40],
	14: ["Tridention", 1, 15],
	15: ["Polytaur", 1, 15],
	16: ["Navalon", 4, 30],
	17: ["Dragon Egg", 2, 10],
	18: ["Baby Dragon", 3, 15],
	19: ["Fire Dragon", 3, 20],
	20: ["Nature Bunny", 1, 20],
}
// Defender List
// 0 Warrior
// 1 Rider
// 2 Defender
// 3 Swordsman
// 4 Archer
// 5 Catapult
// 6 Knight
// 7 Giant
// 8 Boat
// 9 Ship
// 10 Battleship
// 11 Mind Bender
// 12 Amphibian
// 13 Crab
// 14 Tridention
// 15 Polytaur
// 16 Navalon
// 17 Dragon Egg
// 18 Baby Dragon
// 19 Fire Dragon
// 20 Nature Bunny

/* ----- Display Functions ----- */
function faq() {
	$("#main").slideToggle()
	$("#faq").slideToggle()
}

function clearform() {
	$("#attackselected").html("Select Unit");
	$("#attackselectedimg").attr("src", "img/blank.png");
	$("#attvetselected").removeClass("selectorblue");
	$("#attvetselected").addClass("selectordes");
	$("#attvetselected").hide();
	$("#attretselected").removeClass("selectorblue");
	$("#attretselected").addClass("selectordes");
	$("#attretselected").hide();
	$("#attackselect").hide();
	$("#attshipselect").hide();
	$("#attackspan").html("0");
	$("#attackhpspan").html("10/10");
	$("#attackhprange").attr("max", "10");
	$("#attackhprange").val("10");

	$("#defenderselected").html("Select Unit");
	$("#defenderselectedimg").attr("src", "img/blank.png");
	$("#defvetselected").removeClass("selectorred");
	$("#defvetselected").addClass("selectordes");
	$("#defvetselected").hide();
	$("#defbonusselected").removeClass("selectorred");
	$("#defbonusselected").addClass("selectordes");
	$("#defbonusselected").show();
	$("#defwallselected").removeClass("selectorred");
	$("#defwallselected").addClass("selectordes");
	$("#defwallselected").show();
	$("#defendselect").hide();
	$("#defshipselect").hide();
	$("#defendspan").html("0");
	$("#defendhpspan").html("10/10");
	$("#defendhprange").attr("max", "10");
	$("#defendhprange").val("10");
}

function toggleattackselect() {
	if ($("#attackselect").is(":hidden")) {
		$("#attackselect").slideDown({
			duration: 200
		});
		$("#attshipselect").slideUp({
			duration: 200
		});
	} else {
		$("#attackselect").slideUp({
			duration: 200
		});
	}
}

function attackselect(attacker) {
	$("#attackselected").html(attack_dict[attacker][0]);
	$("#attackselectedimg").attr("src", "img/Attackers/" + attack_dict[attacker][0] + ".png")

	$("#attackselect").slideUp({
		duration: 200
	});

	if (attacker <= 6 || attacker == 11 || attacker == 13) {
		$("#attvetselected").show();
	} else {
		$("#attvetselected").hide();
	}
	if (attacker == 4 || attacker == 5 || attacker == 8 || attacker == 9 ||
		attacker == 10 || attacker == 13 || attacker == 17) {
		$("#attretselected").show();
	} else {
		$("#attretselected").hide();
	}

	if (attacker == 8 || attacker == 9 || attacker == 10) {
		setTimeout(function () {
			$("#attshipselect").slideDown({
				duration: 200
			});
		}, 100);
	} else {
		updateattack(true);
	}
	document.getElementById("attackselected").scrollIntoView(false);
}

function attackshipselect(hp) {
	$("#attackselected").append(" " + hp);
	$("#attshipselect").slideUp({
		duration: 200
	});
	updateattack(true);
}

function attvetselect() {
	$("#attvetselected").toggleClass("selectordes");
	$("#attvetselected").toggleClass("selectorblue");
	updateattack(false);
}

function attretselect() {
	$("#attretselected").toggleClass("selectordes");
	$("#attretselected").toggleClass("selectorblue");
}

function updateattack(forcereloadhealth) {
	var key;
	var attacker_name = $("#attackselected").html().replace(/ \d\d HP/g, "");
	for (var i = 0; i < Object.keys(attack_dict).length; i++) {
		if (attack_dict[i][0] == attacker_name) {
			key = attack_dict[i];
			break;
		}
	}

	var hpmax;
	if (isNaN(key[2])) {
		hpmax = parseInt($("#attackselected").html().split(" ")[1]);
	} else {
		hpmax = ($("#attvetselected").hasClass("selectorblue") ? key[2] + 5 : key[2]);
	}
	$("#attackspan").html(key[1]);
	if (parseInt($("#attackhprange").attr("max")) != hpmax || forcereloadhealth) {
		$("#attackhprange").attr("max", hpmax);
		$("#attackhprange").val(hpmax);
	}
	$("#attackhpspan").html($("#attackhprange").val() + "/" + $("#attackhprange").attr("max"));
}

function toggledefendselect() {
	if ($("#defendselect").is(":hidden")) {
		$("#defendselect").slideDown({
			duration: 200
		});
		$("#defshipselect").slideUp({
			duration: 200
		});
	} else {
		$("#defendselect").slideUp({
			duration: 200
		});
	}
}

function defendselect(defender) {
	$("#defenderselected").html(defend_dict[defender][0]);
	$("#defenderselectedimg").attr("src", "img/Defenders/" + defend_dict[defender][0] + ".png");

	$("#defendselect").slideUp({
		duration: 200
	});

	if (defender <= 6 || defender == 12 || defender == 14) {
		$("#defvetselected").show();
	} else {
		$("#defvetselected").hide();
	}

	if (defender == 20) {
		$("#defbonusselected").hide();
	} else {
		$("#defbonusselected").show();
	}

	if (defender == 8 || defender == 9 || defender == 10 ||  defender == 12 ||
		defender == 13 || defender == 14 || defender == 16 || defender == 20) {
		$("#defwallselected").hide();
	} else {
		$("#defwallselected").show();
	}

	if (defender == 8 || defender == 9 || defender == 10) {
		setTimeout(function () {
			$("#defshipselect").slideDown({
				duration: 200
			});
		}, 100);
	} else {
		updatedefend(true);
	}
	document.getElementById("defenderselected").scrollIntoView(false);
}

function defendshipselect(hp) {
	$("#defenderselected").append(" " + hp);
	$("#defshipselect").slideUp({
		duration: 200
	});
	updatedefend(true);
}

function defvetselect() {
	$("#defvetselected").toggleClass("selectordes");
	$("#defvetselected").toggleClass("selectorred");
	updatedefend(false);
}

function defbonusselect() {
	$("#defbonusselected").toggleClass("selectordes");
	$("#defbonusselected").toggleClass("selectorred");
	if ($("#defbonusselected").hasClass("selectorred") &&
		$("#defwallselected").hasClass("selectorred")) {
		$("#defwallselected").removeClass("selectorred");
		$("#defwallselected").addClass("selectordes");
	}
	updatedefend(false);
}

function defwallselect() {
	$("#defwallselected").toggleClass("selectordes");
	$("#defwallselected").toggleClass("selectorred");
	if ($("#defwallselected").hasClass("selectorred") &&
		$("#defbonusselected").hasClass("selectorred")) {
		$("#defbonusselected").removeClass("selectorred");
		$("#defbonusselected").addClass("selectordes");
	}
	updatedefend(false);
}

function updatedefend(forcereloadhealth) {
	var key;
	var defender_name = $("#defenderselected").html().replace(/ \d\d HP/g, "");
	for (var i = 0; i < Object.keys(defend_dict).length; i++) {
		if (defend_dict[i][0] == defender_name) {
			key = defend_dict[i];
		}
	}
	var hpmax;
	if (isNaN(key[2])) {
		hpmax = parseInt($("#defenderselected").html().split(" ")[1]);
	} else {
		hpmax = ($("#defvetselected").hasClass("selectorred") ? key[2] + 5 : key[2]);
	}

	if ($("#defbonusselected").hasClass("selectorred")) {
		$("#defendspan").html(key[1] + " (×1.5)");
	} else if ($("#defwallselected").hasClass("selectorred")) {
		$("#defendspan").html(key[1] + " (×4)");
	} else {
		$("#defendspan").html(key[1]);
	}
	if (parseInt($("#defendhprange").attr("max")) != hpmax || forcereloadhealth) {
		$("#defendhprange").attr("max", hpmax);
		$("#defendhprange").val(hpmax);
	}
	$("#defendhpspan").html($("#defendhprange").val() + "/" + $("#defendhprange").attr("max"));
}

/* ----- Calculation Logic ----- */
function calculate() {
	function clearresults() {
		$("#resultatt").html("");
		$("#resultsplash").html("");
		$("#resultdef").html("");
		$("#note").html("");
	}
	/**
	 * Calculates the attack & defense amounts
	 * @param {Number[]} att - [att, hp, max_hp]
	 * @param {Number[]} def - [def, hp, max_hp]
	 * @param {boolean} defbonus 
	 * @param {boolean} defwall
	 * @param {boolean} retaliate
	 * @returns {Number[][]} [att_remaining_hp, def_remaining_hp]
	 */
	function calculate_formula(att, def, defbonus, defwall, retaliate) {
		let accel = 4.5;
		var atthp = att[1];
		var defhp = def[1];
		var attForce, defForce, totalDam, res;
		// Attacker attacking
		attForce = att[0] * (att[1] / att[2]);
		defForce = (defbonus ? def[0] * 1.5 : (defwall ? def[0] * 4 : def[0])) * (def[1] / def[2]);
		totalDam = attForce + defForce;
		res = Math.round((attForce / totalDam) * att[0] * accel);
		defhp -= res;
		if (defhp > 0 && retaliate) {
			attForce = def[0] * (def[1] / def[2]);
			defForce = att[0] * (att[1] / att[2]);
			totalDam = attForce + defForce;
			res = Math.round((attForce / totalDam) * def[0] * accel);
			atthp -= res;
		}
		return [atthp, defhp];
	}
	var attacker_name = $("#attackselected").html();
	var defender_name = $("defenderselected").html();
	if (attacker_name == "Select Unit" ||
		attacker_name == "Boat" ||
		attacker_name == "Ship" ||
		attacker_name == "Battleship") {
		alert("You must select an attacker");
		return;
	}
	if (defender_name == "Select Unit" ||
		defender_name == "Boat" ||
		defender_name == "Ship" ||
		defender_name == "Battleship") {
		alert("You must select an defender");
		return;
	}
	var att, def, atthp, defhp, attmaxhp, defmaxhp, attret, defbonus, defwall;
	att = parseInt($("#attackspan").html());
	def = parseInt($("#defendspan").html());
	var splits = $("#attackhpspan").html().split("/");
	atthp = parseInt(splits[0]);
	attmaxhp = parseInt(splits[1]);
	splits = $("#defendhpspan").html().split("/");
	defhp = parseInt(splits[0]);
	defmaxhp = parseInt(splits[1]);
	if (atthp <= 0) {
		alert("Attacker must be alive!\n(HP must be greater than 0)");
		return;
	}
	if (defhp <= 0) {
		alert("Defender must be alive!\n(HP must be greater than 0)");
		return;
	}

	if ($("#attretselected").is(":visible") &&
		$("#attretselected").hasClass("selectorblue")) {
		attret = true;
	} else {
		attret = false;
	}
	if ($("#defbonusselected").is(":visible") &&
		$("#defbonusselected").hasClass("selectorred")) {
		defbonus = true;
	} else {
		defbonus = false;
	}
	if ($("#defwallselected").is(":visible") &&
		$("#defwallselected").hasClass("selectorred")) {
		defwall = true;
	} else {
		defwall = false;
	}

	var result = calculate_formula([att, atthp, attmaxhp], [def, defhp, defmaxhp], defbonus, defwall, attret);
	if (attacker_name == "Fire Dragon") {
		var splash_result = [result[0], floor(result[1]/2)];
	}

	clearresults();
	if (result[1] <= 0) {
		$("#resultdef").html("Defender is DESTROYED! Afterlife HP: " + result[1]);
	} else {
		$("#resultdef").html("Defender survives! Afterlife HP: " + result[1]);
		$("#defendhprange").val(result[1]);
		updatedefend(false);
		if (result[0] <= 0) {
			$("#resultatt").html("Attacker is DESTROYED! Afterlife HP: " + result[0]);
		} else {
			$("#resultatt").html("Attacker survives! Remaining HP: " + result[0]);
		}
	}
	if (attacker_name == "Fire Dragon") {
		$("#resultsplash").html("<p><i>IF SPLASHED:</i></p>");
		if (result[1] <= 0) {
			$("#resultsplash").append("Defender is DESTROYED! Afterlife HP: " + splash_result[1]);
		} else {
			$("#resultsplash").append("Defender survives! REmaining HP: " + splash_result[1]);
		}
	}
}