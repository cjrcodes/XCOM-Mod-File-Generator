//Part Types



//Part Type Settings
let ptSettings = ["pt-DefaultSetting", "pt-HeadPropsSetting", "pt-BodyOnlySetting", "pt-BodyExtrasOnlySetting"];

//Default Part Types
let defaultPTs = ["pt-Head", "pt-Torso", "pt-Arms", "pt-Legs"];

//Head Props Part Types
let headPropsPTs = ["pt-Helmets", "pt-FacePropsUpper", "pt-FacePropsLower"];

//Body Part Types
let bodyPTs = ["pt-Torso", "pt-Arms", "pt-Legs"];

//Body Extra Part Types
let bodyExtrasPTs = ["pt-Shins", "pt-LeftArm", "pt-RightArm", "pt-LeftForeArm", "pt-RightForeArm"];

//Collection of all Parts Types, excluding Voice
let ptCollection = [ptSettings, defaultPTs, headPropsPTs, bodyPTs, bodyExtrasPTs];


//Armor Templates



//Armor Template Settings
let atSettings = ["at-SoldierOnly", "at-ReaperOnly", "at-TemplarOnly", "at-SkirmisherOnly"];

//Soldier Armor Templates
let soldierATs = ["at-KevlarArmor", "at-LightPlatedArmor", "at-MediumPlatedArmor", "at-HeavyPlatedArmor", "at-LightPoweredArmor", "at-MediumPoweredArmor", "at-HeavyPoweredArmor"];

//Reaper Armor Templates
let reaperATs = ["at-ReaperArmor", "at-PlatedReaperArmor", "at-PoweredReaperArmor"];

//Templar Armor Templates
let templarATs = ["at-TemplarArmor", "at-PlatedTemplarArmor", "at-PoweredTemplarArmor"];

//Skirmisher Armor Templates
let skirmisherATs = ["at-SkirmisherArmor", "at-PlatedSkirmisherArmor", "at-PoweredSkirmisherArmor"];

//Collection of all Armor Templates
let atCollection = [atSettings, soldierATs, reaperATs, templarATs, skirmisherATs];

//Text input properties
let textInputProperties = ["prop-Language", "prop-DLCName", "prop-TemplateName", "prop-ArchetypeName-upk", "prop-ArchetypeName-folder", "prop-ArchetypeName-customname"];

//Gender Select
let genderSelect = ["GenderM", "GenderF"];

//Select all Part Types
function SelectAllPTs() {
    console.log("All Part Types Selected");

    var i;
    var j;
    for (i = 0; i < ptCollection.length; i++) {
        for (j = 0; j < ptCollection[i].length; j++) {
            document.getElementById(ptCollection[i][j]).checked = true;
        }
    }

    document.getElementById('pt-Voice').checked = true;
}

//Deselect all Part Types
function DeselectAllPTs() {
    console.log("All Part Types Deselected");

    var i;
    var j;
    for (i = 0; i < ptCollection.length; i++) {
        for (j = 0; j < ptCollection[i].length; j++) {
            document.getElementById(ptCollection[i][j]).checked = false;
        }
    }

    document.getElementById('pt-Voice').checked = false;
}

//Enable Default Part Types
function DefaultPTsCheck() {

    if (document.getElementById("pt-DefaultSetting").checked == true) {
        console.log("Default Part Types Selected");

        var i;

        for (i = 0; i < defaultPTs.length; i++) {
            document.getElementById(defaultPTs[i]).checked = true;
        }
    } else {
        console.log("Default Part Types Deselected");

        var i;

        for (i = 0; i < defaultPTs.length; i++) {
            document.getElementById(defaultPTs[i]).checked = false;
        }
    }


}

//Enable Head Props Part Types
function HeadPropsPTsCheck() {

    if (document.getElementById("pt-HeadPropsSetting").checked == true) {

        console.log("Head Props Part Types Selected");

        var i;

        for (i = 0; i < headPropsPTs.length; i++) {
            document.getElementById(headPropsPTs[i]).checked = true;
        }
    } else {

        console.log("Head Props Part Types Deselected");

        var i;

        for (i = 0; i < headPropsPTs.length; i++) {
            document.getElementById(headPropsPTs[i]).checked = false;
        }
    }

}

//Enable Body Part Types
function BodyPTsCheck() {

    if (document.getElementById("pt-BodyOnlySetting").checked == true) {
        console.log("Body Part Types Selected");

        var i;

        for (i = 0; i < bodyPTs.length; i++) {
            document.getElementById(bodyPTs[i]).checked = true;
        }
    } else {
        console.log("Body Part Types Deselected");

        var i;

        for (i = 0; i < bodyPTs.length; i++) {
            document.getElementById(bodyPTs[i]).checked = false;
        }
    }
}

//Enable Body Extras Part Types
function BodyExtrasPTsCheck() {

    if (document.getElementById("pt-BodyExtrasOnlySetting").checked == true) {
        console.log("Body Extras Part Types Selected");

        var i;

        for (i = 0; i < bodyExtrasPTs.length; i++) {
            document.getElementById(bodyExtrasPTs[i]).checked = true;
        }
    } else {
        console.log("Body Extras Part Types Deselected");

        var i;

        for (i = 0; i < bodyExtrasPTs.length; i++) {
            document.getElementById(bodyExtrasPTs[i]).checked = false;
        }
    }

}

//Select all Armor Templates
function SelectAllATs() {
    console.log("All Armor Templates Selected");

    var i;
    var j;
    for (i = 0; i < atCollection.length; i++) {
        for (j = 0; j < atCollection[i].length; j++) {
            document.getElementById(atCollection[i][j]).checked = true;
        }
    }

}

//Deselect all Armor Templates
function DeselectAllATs() {
    console.log("All Armor Templates Deselected");

    var i;
    var j;
    for (i = 0; i < atCollection.length; i++) {
        for (j = 0; j < atCollection[i].length; j++) {
            document.getElementById(atCollection[i][j]).checked = false;
        }
    }

}

//Soldier Armor Templates Check
function SoldierATsCheck() {

    if (document.getElementById("at-SoldierOnly").checked == true) {
        console.log("Soldier Armor Templates Selected");

        var i;

        for (i = 0; i < soldierATs.length; i++) {
            document.getElementById(soldierATs[i]).checked = true;
        }
    } else {    
        console.log("Soldier Armor Templates Deselected");

        var i;

        for (i = 0; i < soldierATs.length; i++) {
            document.getElementById(soldierATs[i]).checked = false;
        }
    }


}

//Reaper Armor Templates Check
function ReaperATsCheck() {
    if (document.getElementById("at-ReaperOnly").checked == true) {
        console.log("Reaper Armor Templates Selected");

        var i;

        for (i = 0; i < reaperATs.length; i++) {
            document.getElementById(reaperATs[i]).checked = true;
        }
    } else {
        console.log("Reaper Armor Templates Deselected");

        var i;

        for (i = 0; i < reaperATs.length; i++) {
            document.getElementById(reaperATs[i]).checked = false;
        }
    }


}

//Templar Armor Templates Check
function TemplarATsCheck() {
    if (document.getElementById("at-TemplarOnly").checked == true) {
        console.log("Templar Armor Templates Selected");

        var i;

        for (i = 0; i < templarATs.length; i++) {
            document.getElementById(templarATs[i]).checked = true;
        }
    } else {
        console.log("Templar Armor Templates Deselected");

        var i;

        for (i = 0; i < templarATs.length; i++) {
            document.getElementById(templarATs[i]).checked = false;
        }
    }


}

//Skirmisher Armor Templates Check
function SkirmisherATsCheck() {
    if (document.getElementById("at-SkirmisherOnly").checked == true) {
        console.log("Skirmisher Armor Templates Selected");

        var i;

        for (i = 0; i < skirmisherATs.length; i++) {
            document.getElementById(skirmisherATs[i]).checked = true;
        }
    } else {
        console.log("Skirmisher Armor Templates Deselected");

        var i;

        for (i = 0; i < skirmisherATs.length; i++) {
            document.getElementById(skirmisherATs[i]).checked = false;
        }
    }
}

function ReportFormValues(){

    console.log("   Part Types");
    var i;
    var j;

    //Print PT collection
    for (i = 1; i < ptCollection.length; i++) {
        if(i === 3){
            continue;
        }
        else{
        for (j = 0; j < ptCollection[i].length; j++) {
            console.log(ptCollection[i][j] + ": " + document.getElementById(ptCollection[i][j]).checked);
        }
    }
    }

    //Voice Part Type
    console.log("pt-Voice: " + document.getElementById('pt-Voice').checked);

    //Text Input Values

    console.log("   Text Input Properties");
    for (j = 0; j < textInputProperties.length; j++) {
        console.log(textInputProperties[j] + ": " + document.getElementById(textInputProperties[j]).value);
    }

   
    //Archetype Append Type
    console.log("   Archetype Append Type");

    console.log(document.getElementById("ArchetypeAppendType").value);

    //Gender Select
    console.log("   Gender Selection");

    for (j = 0; j < genderSelect.length; j++) {
        console.log(genderSelect[j] + ": " + document.getElementById(genderSelect[j]).checked);
    }

    //Can Use On Cilvilian
    console.log("   Can Use On Civilian");

    console.log(document.getElementById("bCivilian").value);

    //Veteran
    console.log("   Veteran");

    console.log(document.getElementById("bVeteran").value);

    //Any Armor
    console.log("   Any Armor");

    console.log(document.getElementById("bAnyArmor").value);

    //Armor Templates
    console.log("   Armor Templates");

    for (i = 1; i < atCollection.length; i++) {
        
        for (j = 0; j < atCollection[i].length; j++) {
            console.log(atCollection[i][j] + ": " + document.getElementById(atCollection[i][j]).checked);
        }
    
    }

}

function GenerateFiles(){
    console.log("   Generate Files Reached");

    let commentName = document.getElementById("Comment/DisplayName").value;
    console.log("commentName: " + commentName);

    

   ReportFormValues();

    //Part types
   

    alert("Generate Files Reached");
}