/*jslint node: true, jquery: true*/
"use strict";

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
};
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
};
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

$(document).ready(clearform);

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
	if (key !== undefined && isNaN(key[2])) {
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

	if (defender == 8 || defender == 9 || defender == 10 || defender == 12 ||
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
	var defender_name = $("#defenderselected").html();
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
		$("#attretselected").hasClass("selectordes")) {
		attret = false;
	} else if (defender_name == "Mind Bender") {
		attret = false;
	} else {
		attret = true;
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
		var splash_result = [result[0], Math.floor(result[1] / 2)];
	}

	clearresults();
	if (result[1] <= 0) {
		$("#resultdef").html("Defender is DESTROYED! Afterlife HP: " + result[1]);
	} else {
		$("#resultdef").html("Defender survives! Remaining HP: " + result[1]);
		if (result[0] <= 0) {
			$("#resultatt").html("Attacker is DESTROYED! Afterlife HP: " + result[0]);
		} else {
			$("#resultatt").html("Attacker survives! Remaining HP: " + result[0]);
		}
	}
	$("#defendhprange").val(result[1]);
	updatedefend(false);
	if (attacker_name == "Fire Dragon") {
		$("#resultsplash").html("<p><i>IF SPLASHED:</i></p>");
		if (result[1] <= 0) {
			$("#resultsplash").append("Defender is DESTROYED! Afterlife HP: " + splash_result[1]);
		} else {
			$("#resultsplash").append("Defender survives! REmaining HP: " + splash_result[1]);
		}
	}
}