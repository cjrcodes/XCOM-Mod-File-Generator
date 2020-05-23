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

//Select all Part Types
function SelectAllPTs() {

    var i;
    var j;
    for(i = 0; i < ptCollection.length; i++){
        for(j = 0; j < ptCollection[i].length; j++){
            document.getElementById(ptCollection[i][j]).checked = true;
        }
    }

    document.getElementById('pt-Voice').checked = true;
}

//Deselect all Part Types
function DeselectAllPTs() {
    var i;
    var j;
    for(i = 0; i < ptCollection.length; i++){
        for(j = 0; j < ptCollection[i].length; j++){
            document.getElementById(ptCollection[i][j]).checked = false;
        }
    }

    document.getElementById('pt-Voice').checked = false;
}

//Enable Default Part Types
function DefaultPTsCheck() {
    if(document.getElementById("pt-DefaultSetting").checked == true){

    var i;

    for(i = 0; i < defaultPTs.length; i++){
        document.getElementById(defaultPTs[i]).checked = true;
    }
}

else{
    var i;

    for(i = 0; i < defaultPTs.length; i++){
        document.getElementById(defaultPTs[i]).checked = false;
    }
}
   
    
}

//Enable Head Props Part Types
function HeadPropsPTsCheck() {
    if(document.getElementById("pt-HeadPropsSetting").checked == true){
    var i;

    for(i = 0; i < headPropsPTs.length; i++){
        document.getElementById(headPropsPTs[i]).checked = true;
    }
}
else{
    var i;

    for(i = 0; i < headPropsPTs.length; i++){
        document.getElementById(headPropsPTs[i]).checked = false;
    }
}
        
}

//Enable Body Part Types
function BodyPTsCheck(){
    if(document.getElementById("pt-BodyOnlySetting").checked == true){

    var i;

    for(i = 0; i < bodyPTs.length; i++){
        document.getElementById(bodyPTs[i]).checked = true;
    }
}
else{
    var i;

    for(i = 0; i < bodyPTs.length; i++){
        document.getElementById(bodyPTs[i]).checked = false;
    }
}
}

//Enable Body Extras Part Types
function BodyExtrasPTsCheck(){
    if(document.getElementById("pt-BodyExtrasOnlySetting").checked == true){

    var i;

    for(i = 0; i < bodyExtrasPTs.length; i++){
        document.getElementById(bodyExtrasPTs[i]).checked = true;
    }
}
else{
    var i;

    for(i = 0; i < bodyExtrasPTs.length; i++){
        document.getElementById(bodyExtrasPTs[i]).checked = false;
    }
}
        
}

//Select all Armor Templates
function SelectAllATs(){
    var i;
    var j;
    for(i = 0; i < atCollection.length; i++){
        for(j = 0; j < atCollection[i].length; j++){
            document.getElementById(atCollection[i][j]).checked = true;
        }
    }

}

//Deselect all Armor Templates
function DeselectAllATs(){
    var i;
    var j;
    for(i = 0; i < atCollection.length; i++){
        for(j = 0; j < atCollection[i].length; j++){
            document.getElementById(atCollection[i][j]).checked = false;
        }
    }

}
