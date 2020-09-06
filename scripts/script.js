document.body.style.webkitTransform =  'scale(1)';
document.body.style.msTransform =   'scale(100)';
document.body.style.transform = 'scale(1)';
document.body.style.zoom = screen.logicalXDPI / screen.deviceXDPI;

class ArmorTemplate {
    constructor(atName, characterTemplate, atAbbreviation) {
        this.atName = atName;
        this.characterTemplate = characterTemplate;
        this.atAbbreviation = atAbbreviation;
    }
}

let XComContentHeader = ";This file was generated by the XCOM Mod File Generator by @cjrcodes on Github and Instagram\n;If you would like to contribute or leave feedback, visit https://github.com/cjrcodes/XCOM-Mod-File-Generator \n;To generate new files, visit https://cjrcodes.github.io/XCOM-Mod-File-Generator/\n\n[XComGame.X2BodyPartTemplateManager]\n\n";
let XComGameHeader = ";This file was generated by the XCOM Mod File Generator by @cjrcodes on Github and Instagram\n;If you would like to contribute or leave feedback, visit https://github.com/cjrcodes/XCOM-Mod-File-Generator \n;To generate new files, visit https://cjrcodes.github.io/XCOM-Mod-File-Generator/\n\n";
let valuesArray = [];
let GendersEnabled = [];
let PartTypesEnabled = [];
let PropertiesText = [];
let SelectionProperties = [];
let ArmorsEnabled = [];

//All armor types created with the ArmorTemplate class, meant to get and display all relevant armor template data
let KevlarArmor = new ArmorTemplate("KevlarArmor", "Soldier", "KV");
let LightPlatedArmor = new ArmorTemplate("LightPlatedArmor", "Solider", "LPL");
let MediumPlatedArmor = new ArmorTemplate("MediumPlatedArmor", "Solider", "MPL");
let HeavyPlatedArmor = new ArmorTemplate("HeavyPlatedArmor", "Solider", "HPL");
let LightPoweredArmor = new ArmorTemplate("LightPoweredArmor", "Solider", "LPO");
let MediumPoweredArmor = new ArmorTemplate("MediumPoweredArmor", "Solider", "MPO");
let HeavyPoweredArmor = new ArmorTemplate("HeavyPoweredArmor", "Solider", "HPO");

let ReaperArmor = new ArmorTemplate("ReaperArmor", "Reaper", "RA");
let PlatedReaperArmor = new ArmorTemplate("PlatedReaperArmor", "Reaper", "PLR");
let PoweredReaperArmor = new ArmorTemplate("PoweredReaperArmor", "Reaper", "POR");

let TemplarArmor = new ArmorTemplate("TemplarArmor", "Templar", "TA");
let PlatedTemplarArmor = new ArmorTemplate("PlatedTemplarArmor", "Templar", "PLT");
let PoweredTemplarArmor = new ArmorTemplate("PoweredTemplarArmor", "Templar", "POT");

let SkirmisherArmor = new ArmorTemplate("SkirmisherArmor", "Skirmisher", "SA");
let PlatedSkirmisherArmor = new ArmorTemplate("PlatedSkirmisherArmor", "Skirmisher", "PLS");
let PoweredSkirmisherArmor = new ArmorTemplate("PoweredSkirmisherArmor", "Skirmisher", "POS");

let ArmorTemplates = [KevlarArmor, LightPlatedArmor, MediumPlatedArmor, HeavyPlatedArmor, LightPoweredArmor, MediumPoweredArmor, HeavyPoweredArmor, ReaperArmor, PlatedReaperArmor, PoweredReaperArmor, TemplarArmor, PlatedTemplarArmor, PoweredTemplarArmor, SkirmisherArmor, PlatedSkirmisherArmor, PoweredSkirmisherArmor];

//Head Template Config
let headTC = "+BodyPartTemplateConfig=(PartType=\"Head\", DLCName=\"\",TemplateName=\"\", ArchetypeName=\"\", Gender=eGender_, bCanUseOnCivilian=, bVeteran=)";

//Voice Template Config
let voiceTC = "+BodyPartTemplateConfig=(PartType=\"Voice\", Language=\"\", Gender=eGender_, TemplateName=\"\", ArchetypeName=\"\")";

//Head Prop Template Config
let headPropTC = "+BodyPartTemplateConfig=(PartType=\"\", DLCName=\"\", TemplateName=\"\", ArchetypeName=\"\", Gender=eGender_, bCanUseOnCivilian=, bVeteran=, bAnyArmor=)";

//Body Template Config
let bodyTC = "+BodyPartTemplateConfig=(PartType=\"\", DLCName=\"\", TemplateName=\"\", ArchetypeName=\"\", Gender=eGender_, bCanUseOnCivilian=, bVeteran=, CharacterTemplate=, ArmorTemplate=)";

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
let bodyExtrasPTs = ["pt-Shins", "pt-Thighs", "pt-TorsoDeco", "pt-LeftArm", "pt-RightArm", "pt-LeftForeArm", "pt-RightForeArm", "pt-LeftArmDeco", "pt-RightArmDeco"];

//Voice Part Type
let voicePT = ['pt-Voice'];
//Collection of all Parts Types, excluding Voice
let ptCollection = [ptSettings, defaultPTs, headPropsPTs, bodyPTs, bodyExtrasPTs, voicePT];


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
let textInputProperties = ["Language", "DLCName", "TemplateName", "ArchetypeName-upk", "ArchetypeName-folder", "ArchetypeName-customname"];

//Gender Select
let genderSelect = ["GenderM", "GenderF"];

function ResetArrays() {
    valuesArray = [];
    GendersEnabled = [];
    PartTypesEnabled = [];
    PropertiesText = [];
    SelectionProperties = [];
    ArmorsEnabled = [];
}

//Select all Part Types
function SelectAllPTs() {
    console.log("All Part Types Selected");

    let i;
    let j;
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

    let i;
    let j;
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

        let i;

        for (i = 0; i < defaultPTs.length; i++) {
            document.getElementById(defaultPTs[i]).checked = true;
        }
    } else {
        console.log("Default Part Types Deselected");

        let i;

        for (i = 0; i < defaultPTs.length; i++) {
            document.getElementById(defaultPTs[i]).checked = false;
        }
    }


}

//Enable Head Props Part Types
function HeadPropsPTsCheck() {

    if (document.getElementById("pt-HeadPropsSetting").checked == true) {

        console.log("Head Props Part Types Selected");

        let i;

        for (i = 0; i < headPropsPTs.length; i++) {
            document.getElementById(headPropsPTs[i]).checked = true;
        }
    } else {

        console.log("Head Props Part Types Deselected");

        let i;

        for (i = 0; i < headPropsPTs.length; i++) {
            document.getElementById(headPropsPTs[i]).checked = false;
        }
    }

}

//Enable Body Part Types
function BodyPTsCheck() {

    if (document.getElementById("pt-BodyOnlySetting").checked == true) {
        console.log("Body Part Types Selected");

        let i;

        for (i = 0; i < bodyPTs.length; i++) {
            document.getElementById(bodyPTs[i]).checked = true;
        }
    } else {
        console.log("Body Part Types Deselected");

        let i;

        for (i = 0; i < bodyPTs.length; i++) {
            document.getElementById(bodyPTs[i]).checked = false;
        }
    }
}

//Enable Body Extras Part Types
function BodyExtrasPTsCheck() {

    if (document.getElementById("pt-BodyExtrasOnlySetting").checked == true) {
        console.log("Body Extras Part Types Selected");

        let i;

        for (i = 0; i < bodyExtrasPTs.length; i++) {
            document.getElementById(bodyExtrasPTs[i]).checked = true;
        }
    } else {
        console.log("Body Extras Part Types Deselected");

        let i;

        for (i = 0; i < bodyExtrasPTs.length; i++) {
            document.getElementById(bodyExtrasPTs[i]).checked = false;
        }
    }

}

//Select all Armor Templates
function SelectAllATs() {
    console.log("All Armor Templates Selected");

    let i;
    let j;
    for (i = 0; i < atCollection.length; i++) {
        for (j = 0; j < atCollection[i].length; j++) {
            document.getElementById(atCollection[i][j]).checked = true;
        }
    }

}

//Deselect all Armor Templates
function DeselectAllATs() {
    console.log("All Armor Templates Deselected");

    let i;
    let j;
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

        let i;

        for (i = 0; i < soldierATs.length; i++) {
            document.getElementById(soldierATs[i]).checked = true;
        }
    } else {
        console.log("Soldier Armor Templates Deselected");

        let i;

        for (i = 0; i < soldierATs.length; i++) {
            document.getElementById(soldierATs[i]).checked = false;
        }
    }


}

//Reaper Armor Templates Check
function ReaperATsCheck() {
    if (document.getElementById("at-ReaperOnly").checked == true) {
        console.log("Reaper Armor Templates Selected");

        let i;

        for (i = 0; i < reaperATs.length; i++) {
            document.getElementById(reaperATs[i]).checked = true;
        }
    } else {
        console.log("Reaper Armor Templates Deselected");

        let i;

        for (i = 0; i < reaperATs.length; i++) {
            document.getElementById(reaperATs[i]).checked = false;
        }
    }


}

//Templar Armor Templates Check
function TemplarATsCheck() {
    if (document.getElementById("at-TemplarOnly").checked == true) {
        console.log("Templar Armor Templates Selected");

        let i;

        for (i = 0; i < templarATs.length; i++) {
            document.getElementById(templarATs[i]).checked = true;
        }
    } else {
        console.log("Templar Armor Templates Deselected");

        let i;

        for (i = 0; i < templarATs.length; i++) {
            document.getElementById(templarATs[i]).checked = false;
        }
    }


}

//Skirmisher Armor Templates Check
function SkirmisherATsCheck() {
    if (document.getElementById("at-SkirmisherOnly").checked == true) {
        console.log("Skirmisher Armor Templates Selected");

        let i;

        for (i = 0; i < skirmisherATs.length; i++) {
            document.getElementById(skirmisherATs[i]).checked = true;
        }
    } else {
        console.log("Skirmisher Armor Templates Deselected");

        let i;

        for (i = 0; i < skirmisherATs.length; i++) {
            document.getElementById(skirmisherATs[i]).checked = false;
        }
    }
}

function ReportFormValues() {
    let indexCounter = 0;
    let commentName = document.getElementById("CommentName").value;
    console.log("(" + indexCounter + ")" + "commentName: " + commentName);
    valuesArray[indexCounter] = document.getElementById("CommentName").value;
    console.log("   Part Types");
    let i;
    let j;
    let k = 0;
    indexCounter++;

    //Print PT collection
    for (i = 1; i < ptCollection.length; i++) {
        if (i === 3) {
            continue;
        } else {
            for (j = 0; j < ptCollection[i].length; j++) {
                console.log("(" + indexCounter + ")" + ptCollection[i][j] + ": " + document.getElementById(ptCollection[i][j]).checked);
                valuesArray[indexCounter] = document.getElementById(ptCollection[i][j]).checked;
                indexCounter++;
                if (document.getElementById(ptCollection[i][j]).checked == true) {
                    PartTypesEnabled[k] = document.getElementById(ptCollection[i][j]).value;
                    k++;
                }
            }
        }
    }

    //Text Input Values

    console.log("   Text Input Properties");
    k = 0;
    PropertiesText[k] = document.getElementById("CommentName").value;
    k++;
    for (j = 0; j < textInputProperties.length; j++) {
        console.log("(" + indexCounter + ")" + textInputProperties[j] + ": " + document.getElementById(textInputProperties[j]).value);
        valuesArray[indexCounter] = document.getElementById(textInputProperties[j]).value;
        indexCounter++;

        PropertiesText[k] = document.getElementById(textInputProperties[j]).value;
        k++;

    }

    let z = 0;

    //Archetype Append Type
    console.log("   Archetype Append Type");

    console.log("(" + indexCounter + ")" + document.getElementById("ArchetypeAppendType").value);
    valuesArray[indexCounter] = document.getElementById("ArchetypeAppendType").value;
    SelectionProperties[z] = document.getElementById("ArchetypeAppendType").value;
    z++;
    //Gender Select
    console.log("   Gender Selection");
    let g = 0;
    for (j = 0; j < genderSelect.length; j++) {
        indexCounter++;

        console.log("(" + indexCounter + ")" + genderSelect[j] + ": " + document.getElementById(genderSelect[j]).checked);
        valuesArray[indexCounter] = document.getElementById(genderSelect[j]).checked;

        if (document.getElementById(genderSelect[j]).checked == true) {
            GendersEnabled[g] = document.getElementById(genderSelect[j]).value;
            g++;
        }

    }

    //Can Use On Cilvilian
    console.log("   Can Use On Civilian");
    indexCounter++;

    console.log("(" + indexCounter + ")" + document.getElementById("bCivilian").value);
    valuesArray[indexCounter] = document.getElementById("bCivilian").value;
    SelectionProperties[z] = document.getElementById("bCivilian").value;
    z++;

    //Veteran
    console.log("   Veteran");
    indexCounter++;

    console.log("(" + indexCounter + ")" + document.getElementById("bVeteran").value);
    valuesArray[indexCounter] = document.getElementById("bVeteran").value;

    SelectionProperties[z] = document.getElementById("bVeteran").value;
    z++;
    //Any Armor
    console.log("   Any Armor");
    indexCounter++;

    console.log("(" + indexCounter + ")" + document.getElementById("bAnyArmor").value);
    valuesArray[indexCounter] = document.getElementById("bAnyArmor").value;
    SelectionProperties[z] = document.getElementById("bAnyArmor").value;
    z++;

    SelectionProperties[z] = document.getElementById("DisplayName").value;
    //Armor Templates
    console.log("   Armor Templates");
    k = 0;
    for (i = 1; i < atCollection.length; i++) {

        for (j = 0; j < atCollection[i].length; j++) {
            indexCounter++;
            valuesArray[indexCounter] = document.getElementById(atCollection[i][j]).checked;

            console.log("(" + indexCounter + ")" + atCollection[i][j] + ": " + document.getElementById(atCollection[i][j]).checked);

            if (document.getElementById(atCollection[i][j]).checked == true) {
                ArmorsEnabled[k] = document.getElementById(atCollection[i][j]).value;
                k++;
            }
        }

    }
    console.log(document.getElementById("race"));
}

function HasArmorTemplate(pt) {

    let nonArmorParts = ["Head", "Voice", "Helmets", "FacePropsUpper", "FacePropsLower"];
    let i;
    console.log(pt);

    for (i = 0; i < nonArmorParts.length; i++) {
        console.log("Comparing " + nonArmorParts[i] + " to " + pt);
        if (nonArmorParts[i] == pt) {
            console.log(pt + " does not have ATs");
            return false;
        }
    }
    console.log(pt + " has ATs");

    return true;
}

function GetArmorAbbreviation(armorTemplate) {
    let i;
    for (i = 0; i < ArmorTemplates.length; i++) {
        if (ArmorTemplates[i].atName == armorTemplate) {
            return ArmorTemplates[i].atAbbreviation;
        }
    }

    return "";
}

function GetArmorCharacterTemplate(armorTemplate) {
    let i;
    for (i = 0; i < ArmorTemplates.length; i++) {
        if (ArmorTemplates[i].atName == armorTemplate) {
            return ArmorTemplates[i].characterTemplate;
        }
    }

    return "";
}

function GetArmorTemplate(armorTemplate) {
    let i;
    for (i = 0; i < ArmorTemplates.length; i++) {
        if (ArmorTemplates[i].atName == armorTemplate) {
            return ArmorTemplates[i].atName;
        }
    }

    return "";
}




function GenerateFiles() {
    console.clear();
    console.log("   Generate Files Reached");
    ResetArrays();

    console.log("CommentName");
    console.log(document.getElementById("CommentName").value);

    console.log("PartTypesEnabled");
    console.log(PartTypesEnabled);

    console.log("GendersEnabled");
    console.log(GendersEnabled);

    console.log("PropertiesText");
    console.log(PropertiesText);

    console.log("SelectionProperties");
    console.log(SelectionProperties);

    console.log("ArmorsEnabled");
    console.log(ArmorsEnabled);
    let XComContent = XComContentHeader;
    let XComGame = XComGameHeader;
    ReportFormValues();
    let commentName = document.getElementById("CommentName").value;
    let language = document.getElementById("Language").value;
    let dlcName = document.getElementById("DLCName").value;
    let templateName = document.getElementById("TemplateName").value;
    let arcNameUPK = document.getElementById("ArchetypeName-upk").value;
    let arcNameFolder = document.getElementById("ArchetypeName-folder").value;
    let arcNameCustomName = document.getElementById("ArchetypeName-customname").value;
    let arcAppendType = document.getElementById("ArchetypeAppendType").value;
    let useOnCivilian = document.getElementById("bCivilian").value;
    let raceSelected = document.getElementById("race").value;
    let useOnVeteran = document.getElementById("bVeteran").value;
    let useAnyArmor = document.getElementById("bAnyArmor").value;
    let displayNameType = document.getElementById("DisplayName").value;
    let displayNameLineEnding = document.getElementById("DisplayName-LineEnding").value;
    

    let i;
    let j;
    let k;
    let ArcName;
    let DisplayName;
    //No genders selected
    if (GendersEnabled.length == 0) {

        //Loop through all enabled part types
        for (i = 0; i < PartTypesEnabled.length; i++) {
            ArcName = "";
            DisplayName = "";

            //ArchetypeName Append type, used only for custom name to append to part name, specified before, after, or custom entirely
            if (arcAppendType == "after") {
                ArcName = "ARC_" + PartTypesEnabled[i] + arcNameCustomName;
            } else if (arcAppendType == "before") {
                ArcName = "ARC_" + arcNameCustomName + PartTypesEnabled[i];
            } else {
                ArcName = arcNameCustomName;
            }



            //DisplayName type, whether to use comment name, template name, or leave blank, and these don't address parts that have armor templates (Body, Body Extras)
            if (displayNameType == "CommentName" && commentName != "" && HasArmorTemplate(PartTypesEnabled[i]) == false) {
                DisplayName += commentName + " " + PartTypesEnabled[i] + " " + arcNameCustomName + " " + displayNameLineEnding;
            } else if (displayNameType == "TemplateName" && HasArmorTemplate(PartTypesEnabled[i]) == false) {

                DisplayName += templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + " " + displayNameLineEnding;
            } else if (displayNameType == "Blank") {

                DisplayName += "";
            } else {
                if (HasArmorTemplate(PartTypesEnabled[i]) == false) {
                    //console.log(PartTypesEnabled[i] + " does not have an armor template.");
                    //XComGame += "[" + PartTypesEnabled[i] + arcNameCustomName + " X2BodyPartTemplate]\n";

                    DisplayName += PartTypesEnabled[i] + " " + displayNameLineEnding;

                }


            }


            //Lines for Head, no gender
            if (PartTypesEnabled[i] == "Head") {

                XComContent += ";" + commentName + " " + PartTypesEnabled[i] + " " + arcNameCustomName + "\n";
                XComContent += "+BodyPartTemplateConfig=(PartType=\"Head\", DLCName=\"" + dlcName + "\",TemplateName=\"" + templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + ArcName + "\", Gender=eGender_, bCanUseOnCivilian=" + useOnCivilian + ", bVeteran=" + useOnVeteran + ", Race=eRace_" + raceSelected + ")\n\n";

                XComGame += "[" + templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + " X2BodyPartTemplate]\n";
                XComGame += "DisplayName=\"" + DisplayName + "\"\n\n";

            }
            //Lines for Voice, no gender
            else if (PartTypesEnabled[i] == "Voice") {

                XComContent += ";" + commentName + " " + PartTypesEnabled[i] + " " + arcNameCustomName + "\n";
                XComContent += "+BodyPartTemplateConfig=(PartType=\"Voice\", Language=\"" + language + "\", Gender=eGender_, TemplateName=\"" + templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + ArcName + "\")\n\n";

                XComGame += "[" + templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + " X2BodyPartTemplate]\n";
                XComGame += "DisplayName=\"" + DisplayName + "\"\n\n";

            }

            //Lines for Head Props, no gender
            else if (PartTypesEnabled[i] == "Helmets" || PartTypesEnabled[i] == "FacePropsUpper" || PartTypesEnabled[i] == "FacePropsLower") {

                XComContent += ";" + commentName + " " + PartTypesEnabled[i] + " " + arcNameCustomName + "\n";
                XComContent += "+BodyPartTemplateConfig=(PartType=\"" + PartTypesEnabled[i] + "\", DLCName=\"" + dlcName + "\", TemplateName=\"" + templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + ArcName + "\", Gender=eGender_, bCanUseOnCivilian=" + useOnCivilian + ", bVeteran=" + useOnVeteran + ", bAnyArmor=" + useAnyArmor + ")\n\n";

                XComGame += "[" + templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + " X2BodyPartTemplate]\n";
                XComGame += "DisplayName=\"" + DisplayName + "\"\n\n";

            }
            //Lines for Body, Body Extra, no gender
            else {
                //Checks if there are no armors selected
                if (ArmorsEnabled.length == 0) {
                    DisplayName = "";

                    //DisplayName type, whether to use comment name, template name, or leave blank, and these don't address parts that have armor templates (Body, Body Extras)
                    if (displayNameType == "CommentName" && commentName != "") {
                        DisplayName = commentName + " " + PartTypesEnabled[i] + " " + displayNameLineEnding;
                    } else if (displayNameType == "TemplateName") {
                        DisplayName = templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + displayNameLineEnding;
                    } else if (displayNameType == "Blank") {
                        DisplayName = "";
                    } else {
                            //console.log(PartTypesEnabled[i] + " does not have an armor template.");
                            //XComGame += "[" + PartTypesEnabled[i] + arcNameCustomName + " X2BodyPartTemplate]\n";
                            DisplayName += PartTypesEnabled[i] + " " + displayNameLineEnding;
                        }
                    
                    XComContent += ";" + commentName + " " + PartTypesEnabled[i] + " " + arcNameCustomName + "\n";
                    XComContent += "+BodyPartTemplateConfig=(PartType=\"" + PartTypesEnabled[i] + "\", DLCName=\"" + dlcName + "\", TemplateName=\"" + templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + ArcName + "\", Gender=eGender_, bCanUseOnCivilian=" + useOnCivilian + ", bVeteran=" + useOnVeteran + ", CharacterTemplate=\"\", ArmorTemplate=\"\")\n\n";

                    XComGame += "[" + templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + " X2BodyPartTemplate]\n";
                    XComGame += "DisplayName=\"" + DisplayName + "\"\n\n";
                }
                //There are armors selected
                else {
                    //Loop through all armors
                    for (k = 0; k < ArmorsEnabled.length; k++) {
                        DisplayName = "";


                        //DisplayName behavior, similar to above
                        if (displayNameType == "CommentName" && commentName != "") {
                            DisplayName = commentName + " " + PartTypesEnabled[i] + " " + displayNameLineEnding;
                        } else if (displayNameType == "TemplateName") {                            
                            DisplayName = templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + "_" + GetArmorAbbreviation(ArmorsEnabled[k]) +  displayNameLineEnding;
                        } else if (displayNameType == "Blank") {
                            DisplayName = "";
                        } else {
                            DisplayName = PartTypesEnabled[i] + displayNameLineEnding;
                        }

                        XComContent += ";" + commentName + " " + PartTypesEnabled[i] + " " + arcNameCustomName + " " + GetArmorAbbreviation(ArmorsEnabled[k]) + "\n";
                        XComContent += "+BodyPartTemplateConfig=(PartType=\"" + PartTypesEnabled[i] + "\", DLCName=\"" + dlcName + "\", TemplateName=\"" + templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + "_" + GetArmorAbbreviation(ArmorsEnabled[k]) + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + ArcName + "\", Gender=eGender_" + ", bCanUseOnCivilian=" + useOnCivilian + ", bVeteran=" + useOnVeteran + ", ArmorTemplate=\"" + GetArmorTemplate(ArmorsEnabled[k])  + "\", CharacterTemplate=\"" +  GetArmorCharacterTemplate(ArmorsEnabled[k]) + "\")\n\n";
                        
                        XComGame += "[" + templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + "_" + GetArmorAbbreviation(ArmorsEnabled[k]) + " X2BodyPartTemplate]\n";
                        XComGame += "DisplayName=\"" + DisplayName + "\"\n\n";
                    }
                }
            }
        }
    }
    //At least one gender is selected
    else {
        let GenderTag;
        let GenderLabel;
        //Loop through selected genders
        for (j = 0; j < GendersEnabled.length; j++) {
            GenderTag = "";
            GenderLabel = "";

            if (GendersEnabled[j] == "eGender_Male") {
                GenderTag = "_M";
                GenderLabel = "Male";
            } else {
                GenderTag = "_F";
                GenderLabel = "Female";
            }

            //Loop through selected part types
            for (i = 0; i < PartTypesEnabled.length; i++) {
                ArcName = "";
                DisplayName = "";

                //Archetype append type, similar to above
                if (arcAppendType == "after") {
                    ArcName = "ARC_" + PartTypesEnabled[i] + arcNameCustomName + GenderTag;
                } else if (arcAppendType == "before") {
                    ArcName = "ARC_" + arcNameCustomName + PartTypesEnabled[i] + GenderTag;
                } else {
                    ArcName = arcNameCustomName;
                }



                //DisplayName type, whether to use comment name, template name, or leave blank, and these don't address parts that have armor templates (Body, Body Extras)
            if (displayNameType == "CommentName" && commentName != "" && HasArmorTemplate(PartTypesEnabled[i]) == false) {
                DisplayName += commentName + " " + PartTypesEnabled[i] + " " + displayNameLineEnding;
            } else if (displayNameType == "TemplateName" && HasArmorTemplate(PartTypesEnabled[i]) == false) {

                DisplayName += templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + GenderTag + displayNameLineEnding;
            } else if (displayNameType == "Blank") {

                DisplayName += "";
            } else {
                if (HasArmorTemplate(PartTypesEnabled[i]) == false) {
                    //console.log(PartTypesEnabled[i] + " does not have an armor template.");
                    //XComGame += "[" + PartTypesEnabled[i] + arcNameCustomName + " X2BodyPartTemplate]\n";

                    DisplayName += PartTypesEnabled[i] + " " + displayNameLineEnding;

                }


            }


            //Lines for Head, gender selected
            if (PartTypesEnabled[i] == "Head") {

                XComContent += ";" + commentName + " " + PartTypesEnabled[i] + " " + arcNameCustomName + " " +  GenderLabel +"\n";
                XComContent += "+BodyPartTemplateConfig=(PartType=\"Head\", DLCName=\"" + dlcName + "\",TemplateName=\"" + templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + GenderTag + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + ArcName +"\", Gender=" + GendersEnabled[j] + ", bCanUseOnCivilian=" + useOnCivilian + ", bVeteran=" + useOnVeteran + ", Race=eRace_" + raceSelected + ")\n\n";

                XComGame += "[" + templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + GenderTag + " X2BodyPartTemplate]\n";
                XComGame += "DisplayName=\"" + DisplayName + "\"\n\n";

            }
            //Lines for Voice, gender selected
            else if (PartTypesEnabled[i] == "Voice") {

                XComContent += ";" + commentName + " " + PartTypesEnabled[i] + " " + arcNameCustomName + " " + GenderLabel + "\n";
                XComContent += "+BodyPartTemplateConfig=(PartType=\"Voice\", Language=\"" + language + "\", Gender=" + GendersEnabled[j] + ", TemplateName=\"" + templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + GenderTag + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + ArcName  + "\")\n\n";

                XComGame += "[" + templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + GenderTag + " X2BodyPartTemplate]\n";
                XComGame += "DisplayName=\"" + DisplayName + "\"\n\n";

            }

            //Lines for Head Props, gender selected
            else if (PartTypesEnabled[i] == "Helmets" || PartTypesEnabled[i] == "FacePropsUpper" || PartTypesEnabled[i] == "FacePropsLower") {

                XComContent += ";" + commentName + " " + PartTypesEnabled[i] + " " + arcNameCustomName + " " + GenderLabel +"\n";
                XComContent += "+BodyPartTemplateConfig=(PartType=\"" + PartTypesEnabled[i] + "\", DLCName=\"" + dlcName + "\", TemplateName=\"" + templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + GenderTag + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + ArcName + "\", Gender=" + GendersEnabled[j] + ", bCanUseOnCivilian=" + useOnCivilian + ", bVeteran=" + useOnVeteran + ", bAnyArmor=" + useAnyArmor + ")\n\n";

                XComGame += "[" + templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + GenderTag + " X2BodyPartTemplate]\n";
                XComGame += "DisplayName=\"" + DisplayName + "\"\n\n";

            
                } else {
                    //Body, body extra, no armors, genders selected
                    if (ArmorsEnabled.length == 0) {
                        DisplayName = "";

                    //DisplayName type, whether to use comment name, template name, or leave blank, and these don't address parts that have armor templates (Body, Body Extras)
                    if (displayNameType == "CommentName" && commentName != "") {
                        DisplayName = commentName + " " + PartTypesEnabled[i] + " " + displayNameLineEnding;
                    } else if (displayNameType == "TemplateName") {
                        DisplayName = templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + displayNameLineEnding;
                    } else if (displayNameType == "Blank") {
                        DisplayName = "";
                    } else {
                            //console.log(PartTypesEnabled[i] + " does not have an armor template.");
                            //XComGame += "[" + PartTypesEnabled[i] + arcNameCustomName + " X2BodyPartTemplate]\n";
                            DisplayName += PartTypesEnabled[i] + " " + displayNameLineEnding;
                        }
                    
                    XComContent += ";" + commentName + " " + PartTypesEnabled[i] + " " + arcNameCustomName + " " + GenderLabel +"\n";
                    XComContent += "+BodyPartTemplateConfig=(PartType=\"" + PartTypesEnabled[i] + "\", DLCName=\"" + dlcName + "\", TemplateName=\"" + templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + GenderTag + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + ArcName + "\", Gender=" + GendersEnabled[j] + ", bCanUseOnCivilian=" + useOnCivilian + ", bVeteran=" + useOnVeteran + ", CharacterTemplate=\"\", ArmorTemplate=\"\")\n\n";

                    XComGame += "[" + templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + GenderTag + " X2BodyPartTemplate]\n";
                    XComGame += "DisplayName=\"" + DisplayName + "\"\n\n";

                    } else {
                        //Armors selected, genders selected
                        for (k = 0; k < ArmorsEnabled.length; k++) {

                            DisplayName = "";


                        //DisplayName behavior, similar to above
                        if (displayNameType == "CommentName" && commentName != "") {
                            DisplayName = commentName + " " + PartTypesEnabled[i] + " " + displayNameLineEnding;
                        } else if (displayNameType == "TemplateName") {                            
                            DisplayName = templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + "_" + GetArmorAbbreviation(ArmorsEnabled[k]) + GenderTag + displayNameLineEnding;
                        } else if (displayNameType == "Blank") {
                            DisplayName = "";
                        } else {
                            DisplayName = PartTypesEnabled[i] + displayNameLineEnding;
                        }

                        XComContent += ";" + commentName + " " + PartTypesEnabled[i] + " " + arcNameCustomName + " " + GetArmorAbbreviation(ArmorsEnabled[k]) + " " + GenderLabel +"\n";
                        XComContent += "+BodyPartTemplateConfig=(PartType=\"" + PartTypesEnabled[i] + "\", DLCName=\"" + dlcName + "\", TemplateName=\"" + templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + "_" + GetArmorAbbreviation(ArmorsEnabled[k]) + GenderTag + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + ArcName + "\", Gender=" + GendersEnabled[j] + ", bCanUseOnCivilian=" + useOnCivilian + ", bVeteran=" + useOnVeteran + ", ArmorTemplate=\"" + GetArmorTemplate(ArmorsEnabled[k])  + "\", CharacterTemplate=\"" +  GetArmorCharacterTemplate(ArmorsEnabled[k])  + "\")\n\n";
                        
                        XComGame += "[" + templateName + "_" + PartTypesEnabled[i] + arcNameCustomName + "_" + GetArmorAbbreviation(ArmorsEnabled[k]) + GenderTag +" X2BodyPartTemplate]\n";
                        XComGame += "DisplayName=\"" + DisplayName + "\"\n\n";
                        }
                    }
                }


            }
        }
    }
    
    console.log(XComContent);
    console.log(XComGame);

    let blob = new Blob([XComContent], {type: "text/plain;charset=utf-8"});
   saveAs(blob, "XComContent.ini");

   let blob2 = new Blob([XComGame], {type: "text/plain;charset=utf-8"});
   saveAs(blob2, "XComGame.int");
    
}
