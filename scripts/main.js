/**
 * main.js, Primary file for the project. 
 * The primary function, generateFiles, will be used to generate the files given to the user.
 * @author Christian Rodriguez
 */

//Import armor templates presets from the ArmorTemplate file, stored as an array in the armorTemplates variable
var armorTemplates;
let promiseArmorTemplate = import('./ArmorTemplate.js').then((value) => {
    armorTemplates = value.default;
    //console.log(value.default);

    return value.default;
});

//Import file headers as an array from the strings file, stored in strings variable
var strings;
var xcomContent;
var xcomGame;

let promiseStrings = import('./strings.js').then((value) => {
    strings = value.default;
    //console.log(strings);
    xcomContent = strings[0];
    xcomGame = strings[1];
    return value.default;
});

//Import collections as an array from the strings file, stored in collections variable
var collections;
var ptCollection;
var atCollection;
var textInputProperties;
var genderSelect;

let promiseCollections = import('./collections.js').then((value) => {
    collections = value.default;
    //console.log(strings);
    ptCollection = collections[0];
    atCollection = collections[1];
    textInputProperties = collections[2];
    genderSelect = collections[3];
    return value.default;
});

let valuesArray = [];
let gendersEnabled = [];
let partTypesEnabled = [];
let propertiesText = [];
let selectionProperties = [];
let armorsEnabled = [];

var expanded = false;

/**
 * Expands/collapses checkbox dropdowns
 * @param  {string} docId - Document id of selected dropdown
 */
function showCheckboxes(docId) {
    let checkboxes = docId;
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}

function ResetArrays() {
    valuesArray = [];
    gendersEnabled = [];
    partTypesEnabled = [];
    propertiesText = [];
    selectionProperties = [];
    armorsEnabled = [];
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

}

//Deselect all Part Types
function DeselectAllPTs() {
    console.log("All Part Types Deselected");

    console.log("All Part Types Selected");
    let i;
    let j;
    for (i = 0; i < ptCollection.length; i++) {
        for (j = 0; j < ptCollection[i].length; j++) {
            document.getElementById(ptCollection[i][j]).checked = false;
        }
    }

}

//Enable Default Part Types
function defaultPTsCheck() {

    if (document.getElementById("pt-DefaultSetting").checked == true) {
        console.log("Default Part Types Selected");

        let i;

        for (i = 0; i < ptCollection[1].length; i++) {
            document.getElementById(ptCollection[1][i]).checked = true;
        }
    } else {
        console.log("Default Part Types Deselected");

        let i;

        for (i = 0; i < ptCollection[1].length; i++) {
            document.getElementById(ptCollection[1][i]).checked = false;
        }
    }
}

//Select/deselect checkboxes
function selectCheckboxes(parentId, docId) {
    console.log(parentId, docId);
    let selector = parentId;
    let checkboxes = docId;
    let i;
 
    for (i = 0; i < checkboxes.length; i++) {
        if((selector.checked === false && checkboxes[i].checked === true) || (selector.checked === false && checkboxes[i].checked === false)){
            checkboxes[i].checked = false;
        }

        else{
            checkboxes[i].checked = true;
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
                console.log(ptCollection[i][j]);
                console.log("(" + indexCounter + ")" + ptCollection[i][j] + ": " + document.getElementById(ptCollection[i][j]).checked);
                valuesArray[indexCounter] = document.getElementById(ptCollection[i][j]).checked;
                indexCounter++;
                if (document.getElementById(ptCollection[i][j]).checked == true) {
                    partTypesEnabled[k] = document.getElementById(ptCollection[i][j]).value;
                    k++;
                }
            }
        }
    }

    //Text Input Values

    console.log("   Text Input Properties");
    k = 0;
    propertiesText[k] = document.getElementById("CommentName").value;
    k++;
    for (j = 0; j < textInputProperties.length; j++) {
        console.log("(" + indexCounter + ")" + textInputProperties[j] + ": " + document.getElementById(textInputProperties[j]).value);
        valuesArray[indexCounter] = document.getElementById(textInputProperties[j]).value;
        indexCounter++;

        propertiesText[k] = document.getElementById(textInputProperties[j]).value;
        k++;

    }

    let z = 0;

    //Archetype Append Type
    console.log("   Archetype Append Type");

    console.log("(" + indexCounter + ")" + document.getElementById("ArchetypeAppendType").value);
    valuesArray[indexCounter] = document.getElementById("ArchetypeAppendType").value;
    selectionProperties[z] = document.getElementById("ArchetypeAppendType").value;
    z++;
    //Gender Select
    console.log("   Gender Selection");
    let g = 0;
    for (j = 0; j < genderSelect.length; j++) {
        indexCounter++;

        console.log("(" + indexCounter + ")" + genderSelect[j] + ": " + document.getElementById(genderSelect[j]).checked);
        valuesArray[indexCounter] = document.getElementById(genderSelect[j]).checked;

        if (document.getElementById(genderSelect[j]).checked == true) {
            gendersEnabled[g] = document.getElementById(genderSelect[j]).value;
            g++;
        }

    }

    //Can Use On Cilvilian
    console.log("   Can Use On Civilian");
    indexCounter++;

    console.log("(" + indexCounter + ")" + document.getElementById("bCivilian").value);
    valuesArray[indexCounter] = document.getElementById("bCivilian").value;
    selectionProperties[z] = document.getElementById("bCivilian").value;
    z++;

    //Veteran
    console.log("   Veteran");
    indexCounter++;

    console.log("(" + indexCounter + ")" + document.getElementById("bVeteran").value);
    valuesArray[indexCounter] = document.getElementById("bVeteran").value;

    selectionProperties[z] = document.getElementById("bVeteran").value;
    z++;
    //Any Armor
    console.log("   Any Armor");
    indexCounter++;

    console.log("(" + indexCounter + ")" + document.getElementById("bAnyArmor").value);
    valuesArray[indexCounter] = document.getElementById("bAnyArmor").value;
    selectionProperties[z] = document.getElementById("bAnyArmor").value;
    z++;

    selectionProperties[z] = document.getElementById("DisplayName").value;
    //Armor Templates
    console.log("   Armor Templates");
    k = 0;
    for (i = 1; i < atCollection.length; i++) {

        for (j = 0; j < atCollection[i].length; j++) {
            indexCounter++;
            valuesArray[indexCounter] = document.getElementById(atCollection[i][j]).checked;

            console.log("(" + indexCounter + ")" + atCollection[i][j] + ": " + document.getElementById(atCollection[i][j]).checked);

            if (document.getElementById(atCollection[i][j]).checked == true) {
                armorsEnabled[k] = document.getElementById(atCollection[i][j]).value;
                k++;
            }
        }

    }
    console.log(document.getElementById("race"));
}

function hasArmorTemplate(pt) {

    let nonArmorParts = ["Head", "Voice", "Helmets", "FacePropsUpper", "FacePropsLower", "Hair", "Beards"];
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
    for (i = 0; i < armorTemplates.length; i++) {
        if (armorTemplates[i].armorTemplateName == armorTemplate) {
            return armorTemplates[i].armorTemplateAbbreviation;
        }
    }

    return "";
}

function GetArmorCharacterTemplate(armorTemplate) {
    let i;
    for (i = 0; i < armorTemplates.length; i++) {
        if (armorTemplates[i].armorTemplateName == armorTemplate) {
            return armorTemplates[i].characterTemplate;
        }
    }

    return "";
}

function getArmorTemplate(armorTemplate) {
    let i;
    for (i = 0; i < armorTemplates.length; i++) {
        if (armorTemplates[i].armorTemplateName == armorTemplate) {
            return armorTemplates[i].armorTemplateName;
        }
    }

    return "";
}

function generateFiles() {
    console.clear();
    console.log("   Generate Files Reached");
    ResetArrays();

    console.log("CommentName");
    console.log(document.getElementById("CommentName").value);

    console.log("partTypesEnabled");
    console.log(partTypesEnabled);

    console.log("gendersEnabled");
    console.log(gendersEnabled);

    console.log("propertiesText");
    console.log(propertiesText);

    console.log("selectionProperties");
    console.log(selectionProperties);

    console.log("armorsEnabled");
    console.log(armorsEnabled);
  
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
    let k;
    let ArcName;
    let DisplayName;

    let genderTag;
    let genderLabel;
    let j = 0;

    xcomContent = strings[0];
    xcomGame = strings[1];

    do {
        //Loop through selected genders

        genderTag = "";
        genderLabel = "";
        if(gendersEnabled.length >= 1){
            if (gendersEnabled[j] == "eGender_Male") {
                genderTag = "_M";
                genderLabel = "Male";
            } else {
                genderTag = "_F";
                genderLabel = "Female";
            }
        }
       
        else{
            continue;
        }

        //Loop through selected part types
        for (i = 0; i < partTypesEnabled.length; i++) {
            ArcName = "";
            DisplayName = "";

            //Archetype append type, similar to above
            if (arcAppendType == "after") {
                ArcName = "ARC_" + partTypesEnabled[i] + arcNameCustomName + genderTag;
            } else if (arcAppendType == "before") {
                ArcName = "ARC_" + arcNameCustomName + partTypesEnabled[i] + genderTag;
            } else {
                ArcName = arcNameCustomName;
            }

            //DisplayName type, whether to use comment name, template name, or leave blank, and these don't address parts that have armor templates (Body, Body Extras)
            if (displayNameType == "CommentName" && commentName != "" && hasArmorTemplate(partTypesEnabled[i]) == false) {
                DisplayName += commentName + " " + partTypesEnabled[i] + " " + displayNameLineEnding;
            } else if (displayNameType == "TemplateName" && hasArmorTemplate(partTypesEnabled[i]) == false) {

                DisplayName += templateName + "_" + partTypesEnabled[i] + arcNameCustomName + genderTag + displayNameLineEnding;
            } else if (displayNameType == "Blank") {

                DisplayName += "";
            } else {
                if (hasArmorTemplate(partTypesEnabled[i]) == false) {
                    //console.log(partTypesEnabled[i] + " does not have an armor template.");
                    //xcomGame += "[" + partTypesEnabled[i] + arcNameCustomName + " X2BodyPartTemplate]\n";

                    DisplayName += partTypesEnabled[i] + " " + displayNameLineEnding;
                }
            }


            //Lines for Head, gender selected
            if (partTypesEnabled[i] == "Head") {

                xcomContent += ";" + commentName + " " + partTypesEnabled[i] + " " + arcNameCustomName + " " + genderLabel + "\n";
                xcomContent += "+BodyPartTemplateConfig=(PartType=\"Head\", DLCName=\"" + dlcName + "\",TemplateName=\"" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + genderTag + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + ArcName + "\", Gender=" + gendersEnabled[j] + ", bCanUseOnCivilian=" + useOnCivilian + ", bVeteran=" + useOnVeteran + ", Race=eRace_" + raceSelected + ")\n\n";

                xcomGame += "[" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + genderTag + " X2BodyPartTemplate]\n";
                xcomGame += "DisplayName=\"" + DisplayName + "\"\n\n";
            }
            //Lines for Voice, gender selected
            else if (partTypesEnabled[i] == "Voice") {

                xcomContent += ";" + commentName + " " + partTypesEnabled[i] + " " + arcNameCustomName + " " + genderLabel + "\n";
                xcomContent += "+BodyPartTemplateConfig=(PartType=\"Voice\", Language=\"" + language + "\", Gender=" + gendersEnabled[j] + ", TemplateName=\"" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + genderTag + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + ArcName + "\")\n\n";

                xcomGame += "[" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + genderTag + " X2BodyPartTemplate]\n";
                xcomGame += "DisplayName=\"" + DisplayName + "\"\n\n";
            }

            //Lines for Voice, gender selected
            else if (partTypesEnabled[i] == "Hair" || partTypesEnabled[i] == "Beards") {

                xcomContent += ";" + commentName + " " + partTypesEnabled[i] + " " + arcNameCustomName + "\n";
                xcomContent += "+BodyPartTemplateConfig=(PartType=\"" + partTypesEnabled[i] + "\", DLCName=\"" + dlcName + "\", TemplateName=\"" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + ArcName + "\", Gender=" + gendersEnabled[j] + ", bCanUseOnCivilian=" + useOnCivilian + ")\n\n";

                xcomGame += "[" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + " X2BodyPartTemplate]\n";
                xcomGame += "DisplayName=\"" + DisplayName + "\"\n\n";

            }

            //Lines for Head Props, gender selected
            else if (partTypesEnabled[i] == "Helmets" || partTypesEnabled[i] == "FacePropsUpper" || partTypesEnabled[i] == "FacePropsLower") {

                xcomContent += ";" + commentName + " " + partTypesEnabled[i] + " " + arcNameCustomName + " " + genderLabel + "\n";
                xcomContent += "+BodyPartTemplateConfig=(PartType=\"" + partTypesEnabled[i] + "\", DLCName=\"" + dlcName + "\", TemplateName=\"" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + genderTag + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + ArcName + "\", Gender=" + gendersEnabled[j] + ", bCanUseOnCivilian=" + useOnCivilian + ", bVeteran=" + useOnVeteran + ", bAnyArmor=" + useAnyArmor + ")\n\n";

                xcomGame += "[" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + genderTag + " X2BodyPartTemplate]\n";
                xcomGame += "DisplayName=\"" + DisplayName + "\"\n\n";


            } else {
                //Body, body extra, no armors, genders selected
                if (armorsEnabled.length == 0) {
                    DisplayName = "";

                    //DisplayName type, whether to use comment name, template name, or leave blank, and these don't address parts that have armor templates (Body, Body Extras)
                    if (displayNameType == "CommentName" && commentName != "") {
                        DisplayName = commentName + " " + partTypesEnabled[i] + " " + displayNameLineEnding;
                    } else if (displayNameType == "TemplateName") {
                        DisplayName = templateName + "_" + partTypesEnabled[i] + arcNameCustomName + displayNameLineEnding;
                    } else if (displayNameType == "Blank") {
                        DisplayName = "";
                    } else {
                        //console.log(partTypesEnabled[i] + " does not have an armor template.");
                        //xcomGame += "[" + partTypesEnabled[i] + arcNameCustomName + " X2BodyPartTemplate]\n";
                        DisplayName += partTypesEnabled[i] + " " + displayNameLineEnding;
                    }

                    xcomContent += ";" + commentName + " " + partTypesEnabled[i] + " " + arcNameCustomName + " " + genderLabel + "\n";
                    xcomContent += "+BodyPartTemplateConfig=(PartType=\"" + partTypesEnabled[i] + "\", DLCName=\"" + dlcName + "\", TemplateName=\"" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + genderTag + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + ArcName + "\", Gender=" + gendersEnabled[j] + ", bCanUseOnCivilian=" + useOnCivilian + ", bVeteran=" + useOnVeteran + ", CharacterTemplate=\"\", ArmorTemplate=\"\")\n\n";

                    xcomGame += "[" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + genderTag + " X2BodyPartTemplate]\n";
                    xcomGame += "DisplayName=\"" + DisplayName + "\"\n\n";

                } else {
                    //Armors selected, genders selected
                    for (k = 0; k < armorsEnabled.length; k++) {

                        DisplayName = "";

                        //DisplayName behavior, similar to above
                        if (displayNameType == "CommentName" && commentName != "") {
                            DisplayName = commentName + " " + partTypesEnabled[i] + " " + displayNameLineEnding;
                        } else if (displayNameType == "TemplateName") {
                            DisplayName = templateName + "_" + partTypesEnabled[i] + arcNameCustomName + "_" + GetArmorAbbreviation(armorsEnabled[k]) + genderTag + displayNameLineEnding;
                        } else if (displayNameType == "Blank") {
                            DisplayName = "";
                        } else {
                            DisplayName = partTypesEnabled[i] + displayNameLineEnding;
                        }

                        xcomContent += ";" + commentName + " " + partTypesEnabled[i] + " " + arcNameCustomName + " " + GetArmorAbbreviation(armorsEnabled[k]) + " " + genderLabel + "\n";
                        xcomContent += "+BodyPartTemplateConfig=(PartType=\"" + partTypesEnabled[i] + "\", DLCName=\"" + dlcName + "\", TemplateName=\"" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + "_" + GetArmorAbbreviation(armorsEnabled[k]) + genderTag + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + ArcName + "\", Gender=" + gendersEnabled[j] + ", bCanUseOnCivilian=" + useOnCivilian + ", bVeteran=" + useOnVeteran + ", ArmorTemplate=\"" + getArmorTemplate(armorsEnabled[k]) + "\", CharacterTemplate=\"" + GetArmorCharacterTemplate(armorsEnabled[k]) + "\")\n\n";

                        xcomGame += "[" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + "_" + GetArmorAbbreviation(armorsEnabled[k]) + genderTag + " X2BodyPartTemplate]\n";
                        xcomGame += "DisplayName=\"" + DisplayName + "\"\n\n";
                    }
                }
            }
        }
        j++;
    } while(j < gendersEnabled.length);

console.log(xcomContent);
console.log(xcomGame);

let blob = new Blob([xcomContent], {
    type: "text/plain;charset=utf-8"
});
saveAs(blob, "XComContent.ini");

let blob2 = new Blob([xcomGame], {
    type: "text/plain;charset=utf-8"
});
saveAs(blob2, "XComGame.int");
}