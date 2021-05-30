

/**
 * main.js, Primary file for the project. 
 * The primary function, generateFiles, will be used to generate the files given to the user.
 * @author Christian Rodriguez (cjrcodes)
 */

document.body.style.webkitTransform =  'scale(1)';
document.body.style.msTransform =   'scale(100)';
document.body.style.transform = 'scale(1)';
document.body.style.zoom = screen.logicalXDPI / screen.deviceXDPI;

//Import armor templates presets from the ArmorTemplate file, stored as an array in the armorTemplates variable
var armorTemplates = [];
let promiseArmorTemplate = import('./ArmorTemplate.js').then((value) => {
    armorTemplates = value.default;

    return value.default;
});

//Import file headers as an array from the strings file, stored in strings variable
var strings, xcomContent, xcomGame = "";

let promiseStrings = import('./strings.js').then((value) => {
    strings = value.default;
    xcomContent = strings[0];
    xcomGame = strings[1];
    return value.default;
});

//Import collections as an array from the collections file, stored in collections variable
var collections, ptCollection, atCollection, textInputProperties, genderSelect = [];

let promiseCollections = import('./collections.js').then((value) => {
    collections = value.default;
    ptCollection = collections[0];
    atCollection = collections[1];
    textInputProperties = collections[2];
    genderSelect = collections[3];
    return value.default;
});

//Collection array of all values
let valuesArray = [];

//All form values divided by their respective form section collection (i.e. All part types selected from the part types section will be in partTypesEnabled)
let gendersEnabled , partTypesEnabled , propertiesText , selectionProperties , armorsEnabled = [];

//All text and special properties section values
let commentName, language, dlcName, templateName, arcNameUPK, arcNameFolder, arcNameCustomName, arcAppendType, useOnCivilian, raceSelected, useOnVeteran, useAnyArmor, displayNameType, displayNameLineEnding = "";

/**
 * Reset all arrays that store all form results when generateFiles method is called
 */
function resetArrays() {
    valuesArray = [];
    gendersEnabled = [];
    partTypesEnabled = [];
    propertiesText = [];
    selectionProperties = [];
    armorsEnabled = [];
}

/**
 * Expands/collapses checkbox dropdowns
 * @param  {string} docId - Document id of selected dropdown
 */
function showCheckboxes(parentId, docId, dropdownClicked) {
    let selector = parentId;
    let checkboxes = docId;

    //Check if dropdown was selected instead of quick select button
    if (dropdownClicked === true) {
        if (checkboxes.style.display === "block") {
            checkboxes.style.display = "none";
            return;
        } else {
            checkboxes.style.display = "block";
            return;
        }
    }

    if (checkboxes.style.display === "block" && selector.checked === false) {
        checkboxes.style.display = "none";
    } else if (checkboxes.style.display === "none" && selector.checked === false) {
        checkboxes.style.display = "none";
    } else {
        checkboxes.style.display = "block";
    }
}

/**
 * Select/deselect checkboxes, made for quick select checkboxes to check their grouped checkboxes
 * @param {document.getElementById} parentId - Document id of the quick select checkbox selected
 * @param {document.getElementById} docId - Document id of the checkboxes to be checked
 */
function selectCheckboxes(parentId, docId) {
    let selector = parentId;
    let checkboxes = docId;
    let i;

    for (i = 0; i < checkboxes.length; i++) {
        if ((selector.checked === false && checkboxes[i].checked === true) || (selector.checked === false && checkboxes[i].checked === false)) {
            checkboxes[i].checked = false;
        } else {
            checkboxes[i].checked = true;
        }
    }
}

/**
 * Select/deselect all checkboxes for a given section (e.g. part types, armor templates section)
 * @param {string} buttonId - String passed as 'selectall' or 'deselectall' to determine which action to take
 * @param {document.getElementById} docId - Document element section to select/deselect checkboxes
 */
function selectAllCheckboxes(buttonId, docId) {

    let checkboxes = docId;
    let i;
    let checkboxValue = false;

    if (buttonId === 'selectall') {
        checkboxValue = true;
    }

    for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = checkboxValue;
    }
}

/**
 * Enable default part types, special group made to select head, torso, arms, legs. 
 * Corresponds to the "Standard" quick select part type checkbox.
 */
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

/**
 * Get selected part types, store in partTypesEnabled array
 */
function setPartTypesSelected() {

    let i, j;

    k = 0;
    for (i = 1; i < ptCollection.length; i++) {
        if (i === 3) {
            continue;
        } else {
            for (j = 0; j < ptCollection[i].length; j++) {
                if (document.getElementById(ptCollection[i][j]).checked == true) {
                    partTypesEnabled[k] = document.getElementById(ptCollection[i][j]).value;
                    k++;
                }
            }
        }
    }
}

/**
 * Get selected armor templates, store in armorsEnabled array
 */
function setArmorTemplatesSelected() {
    let i, j;

    k = 0;
    for (i = 1; i < atCollection.length; i++) {
        for (j = 0; j < atCollection[i].length; j++) {

            if (document.getElementById(atCollection[i][j]).checked == true) {
                armorsEnabled[k] = document.getElementById(atCollection[i][j]).value;
                k++;
            }
        }
    }

}

/**
 * Set selected genders from the form, store in gendersEnabled array
 */
function setGendersSelected() {

    let j;
    let g = 0;
    for (j = 0; j < genderSelect.length; j++) {

        if (document.getElementById(genderSelect[j]).checked == true) {
            gendersEnabled[g] = document.getElementById(genderSelect[j]).value;
            g++;
        }

    }
}



/**
 * Reports form values to populate arrays (Part types, armor templates, genders selected arrays: any entry/group with the ability to have more than 1 value selected) to be used in the generateFiles method and final result.
 * Bundles together part types, armor templates, and genders selected functions.
 */
function reportFormValues() {
    setPartTypesSelected();
    setArmorTemplatesSelected();
    setGendersSelected();
}

/**
 * Determines if a part has an armor template. Generally, only major clothing items have armor templates (i.e. torso, arms, legs)
 * @param {string} part - Part to be checked 
 */
function hasArmorTemplate(part) {

    let nonArmorParts = ["Head", "Voice", "Helmets", "FacePropsUpper", "FacePropsLower", "Hair", "Beards"];
    let i;
    //console.log(part);

    for (i = 0; i < nonArmorParts.length; i++) {
        //console.log("Comparing " + nonArmorParts[i] + " to " + part);
        if (nonArmorParts[i] == part) {
            //console.log(part + " does not have ATs");
            return false;
        }
    }
    //console.log(part + " has ATs");
    return true;
}

/**
 * Get armor abbreviation of an enabled armor template.
 * (e.g. "kevlarArmor" returns "KV")
 * @param {string} armorTemplate - Armor selected
 */
function getArmorAbbreviation(armorTemplate) {
    let i;
    for (i = 0; i < armorTemplates.length; i++) {
        if (armorTemplates[i].armorTemplateName == armorTemplate) {
            return armorTemplates[i].armorTemplateAbbreviation;
        }
    }
    return "";
}

/**
 * Get armor character template of an enabled armor template.
 * (e.g. "kevlarArmor" returns "Soldier")
 * @param {string} armorTemplate - Armor selected
 */
function getArmorCharacterTemplate(armorTemplate) {
    let i;
    for (i = 0; i < armorTemplates.length; i++) {
        if (armorTemplates[i].armorTemplateName == armorTemplate) {
            return armorTemplates[i].characterTemplate;
        }
    }
    return "";
}

/**
 * Gets all text properties and special properties on the form and stores them in their respective variable.
 */
function getTextAndSpecialProperties() {
    commentName = document.getElementById("CommentName").value;
    language = document.getElementById("Language").value;
    dlcName = document.getElementById("DLCName").value;
    templateName = document.getElementById("TemplateName").value;
    arcNameUPK = document.getElementById("ArchetypeName-upk").value;
    arcNameFolder = document.getElementById("ArchetypeName-folder").value;
    arcNameCustomName = document.getElementById("ArchetypeName-customname").value;
    arcAppendType = document.getElementById("ArchetypeAppendType").value;
    useOnCivilian = document.getElementById("bCivilian").value;
    raceSelected = document.getElementById("race").value;
    useOnVeteran = document.getElementById("bVeteran").value;
    useAnyArmor = document.getElementById("bAnyArmor").value;
    displayNameType = document.getElementById("DisplayName").value;
    displayNameLineEnding = document.getElementById("DisplayName-LineEnding").value;
}

/**
 * Print all form values in the console. Useful for debugging.
 */
function printFormValues() {
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
}

/**
 * Gets the gender tag (i.e. Male tag is "_M") and label (i.e. Male label is "Male") on the "eGender" passed
 * Tag stored in index 0, label stored in index 1
 * @param {string} gender - Gender to have tag and label returned on
 */
function getGenderTagAndLabel(gender) {
    let genderArr = [];

    if (gender == "eGender_Male") {
        genderArr[0] = "_M";
        genderArr[1] = "Male";
    } else {
        genderArr[0] = "_F";
        genderArr[1] = "Female";
    }

    return genderArr;

}

/**
 * Returns an Archetype Name string depending on the selected append type from the user
 * @param {string} arcAppendType - Setting to determine how to structure the archetype name (i.e. "after" will put the custom name after the part type)
 * @param {string} partType - Part type to be appended to string
 * @param {string} arcNameCustomName - Custom name to be appended to string
 * @param {string} genderTag - Gender tag to be appended to string
 * (e.g. After for "Tint" will put that string after the part, "ARC_TorsoTint_M")
 */
function getArchetypeName(arcAppendType, partType, arcNameCustomName, genderTag) {
    //Archetype append type, similar to above

    let arcString;

    if (arcAppendType == "after") {
        arcString = "ARC_" + partType + arcNameCustomName + genderTag;
    } else if (arcAppendType == "before") {
        arcString = "ARC_" + arcNameCustomName + partType + genderTag;
    } else {
        arcString = arcNameCustomName;
    }

    return arcString;

}

/**
 * Generates files for the end user
 */
function generateFiles() {
    console.clear();
    console.log("\tGenerate Files Reached");

    //Reset all arrays for new files
    resetArrays();

    //Fill in "part types, armor templates, genders enabled" arrays to determine which part types, armor types, genders are selected. 
    reportFormValues();

    //Optional: Print form values to the console, use for debugging
    printFormValues();

    //Get the singular text and selection box values
    getTextAndSpecialProperties();

    let i, k, arcName, DisplayName, genderTag, genderLabel;
    let j = 0;

    //xcomContent and xcomGame are the strings that will be returned into a file format in text, so all lines will be appended to these two variables and they will be converted into a text file.
    xcomContent = strings[0];
    xcomGame = strings[1];

    //Loop through selected genders, will run at least once if no genders are selected.
    do {
        //Get appropriate gender tag and label, if there are any genders selected
        genderTag = "";
        genderLabel = "";
        if (gendersEnabled.length >= 1) {
            genderArr = getGenderTagAndLabel(gendersEnabled[j]);
            genderTag = genderArr[0];
            genderLabel = genderArr[1];
        }

        //Loop through selected part types
        for (i = 0; i < partTypesEnabled.length; i++) {
            arcName = "";
            DisplayName = "";

            arcName = getArchetypeName(arcAppendType, partTypesEnabled[i], arcNameCustomName, genderTag);

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

            //Lines for Head
            if (partTypesEnabled[i] == "Head") {

                xcomContent += ";" + commentName + " " + partTypesEnabled[i] + " " + arcNameCustomName + " " + genderLabel + "\n";
                xcomContent += "+BodyPartTemplateConfig=(PartType=\"Head\", DLCName=\"" + dlcName + "\",TemplateName=\"" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + genderTag + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + arcName + "\", Gender=eGender_" + genderLabel + ", bCanUseOnCivilian=" + useOnCivilian + ", bVeteran=" + useOnVeteran + ", Race=eRace_" + raceSelected + ")\n\n";

                xcomGame += "[" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + genderTag + " X2BodyPartTemplate]\n";
                xcomGame += "DisplayName=\"" + DisplayName + "\"\n\n";
            }
            //Lines for Voice
            else if (partTypesEnabled[i] == "Voice") {

                xcomContent += ";" + commentName + " " + partTypesEnabled[i] + " " + arcNameCustomName + " " + genderLabel + "\n";
                xcomContent += "+BodyPartTemplateConfig=(PartType=\"Voice\", Language=\"" + language + "\", Gender=eGender_" + genderLabel + ", TemplateName=\"" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + genderTag + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + arcName + "\")\n\n";

                xcomGame += "[" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + genderTag + " X2BodyPartTemplate]\n";
                xcomGame += "DisplayName=\"" + DisplayName + "\"\n\n";
            }

            //Lines for Voice
            else if (partTypesEnabled[i] == "Hair" || partTypesEnabled[i] == "Beards") {

                xcomContent += ";" + commentName + " " + partTypesEnabled[i] + " " + arcNameCustomName + " " + genderLabel + "\n";
                xcomContent += "+BodyPartTemplateConfig=(PartType=\"" + partTypesEnabled[i] + "\", DLCName=\"" + dlcName + "\", TemplateName=\"" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + genderTag + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + arcName + "\", Gender=eGender_" + genderLabel + ", bCanUseOnCivilian=" + useOnCivilian + ")\n\n";

                xcomGame += "[" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + genderTag + " X2BodyPartTemplate]\n";
                xcomGame += "DisplayName=\"" + DisplayName + "\"\n\n";

            }

            //Lines for Head Props
            else if (partTypesEnabled[i] == "Helmets" || partTypesEnabled[i] == "FacePropsUpper" || partTypesEnabled[i] == "FacePropsLower") {

                xcomContent += ";" + commentName + " " + partTypesEnabled[i] + " " + arcNameCustomName + " " + genderLabel + "\n";
                xcomContent += "+BodyPartTemplateConfig=(PartType=\"" + partTypesEnabled[i] + "\", DLCName=\"" + dlcName + "\", TemplateName=\"" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + genderTag + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + arcName + "\", Gender=eGender_" + genderLabel + ", bCanUseOnCivilian=" + useOnCivilian + ", bVeteran=" + useOnVeteran + ", bAnyArmor=" + useAnyArmor + ")\n\n";

                xcomGame += "[" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + genderTag + " X2BodyPartTemplate]\n";
                xcomGame += "DisplayName=\"" + DisplayName + "\"\n\n";
            } else {
                //Body, body extra, no armors
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
                    xcomContent += "+BodyPartTemplateConfig=(PartType=\"" + partTypesEnabled[i] + "\", DLCName=\"" + dlcName + "\", TemplateName=\"" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + genderTag + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + arcName + "\", Gender=eGender_" + genderLabel + ", bCanUseOnCivilian=" + useOnCivilian + ", bVeteran=" + useOnVeteran + ", CharacterTemplate=\"\", ArmorTemplate=\"\")\n\n";

                    xcomGame += "[" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + genderTag + " X2BodyPartTemplate]\n";
                    xcomGame += "DisplayName=\"" + DisplayName + "\"\n\n";

                } else {
                    //Armors selected
                    for (k = 0; k < armorsEnabled.length; k++) {

                        DisplayName = "";

                        //DisplayName behavior, similar to above
                        if (displayNameType == "CommentName" && commentName != "") {
                            DisplayName = commentName + " " + partTypesEnabled[i] + " " + displayNameLineEnding;
                        } else if (displayNameType == "TemplateName") {
                            DisplayName = templateName + "_" + partTypesEnabled[i] + arcNameCustomName + "_" + getArmorAbbreviation(armorsEnabled[k]) + genderTag + displayNameLineEnding;
                        } else if (displayNameType == "Blank") {
                            DisplayName = "";
                        } else {
                            DisplayName = partTypesEnabled[i] + displayNameLineEnding;
                        }

                        xcomContent += ";" + commentName + " " + partTypesEnabled[i] + " " + arcNameCustomName + " " + getArmorAbbreviation(armorsEnabled[k]) + " " + genderLabel + "\n";
                        xcomContent += "+BodyPartTemplateConfig=(PartType=\"" + partTypesEnabled[i] + "\", DLCName=\"" + dlcName + "\", TemplateName=\"" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + "_" + getArmorAbbreviation(armorsEnabled[k]) + genderTag + "\", ArchetypeName=\"" + arcNameUPK + "." + arcNameFolder + "." + arcName + "\", Gender=eGender_" + genderLabel + ", bCanUseOnCivilian=" + useOnCivilian + ", bVeteran=" + useOnVeteran + ", ArmorTemplate=\"" + armorsEnabled[k] + "\", CharacterTemplate=\"" + getArmorCharacterTemplate(armorsEnabled[k]) + "\")\n\n";

                        xcomGame += "[" + templateName + "_" + partTypesEnabled[i] + arcNameCustomName + "_" + getArmorAbbreviation(armorsEnabled[k]) + genderTag + " X2BodyPartTemplate]\n";
                        xcomGame += "DisplayName=\"" + DisplayName + "\"\n\n";
                    }
                }
            }
        }
        j++;
    } while (j < gendersEnabled.length);

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
