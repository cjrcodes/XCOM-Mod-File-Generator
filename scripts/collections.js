/**
 * Collections for part type, armor template settings, text input properties and gender selection labels found in the index.html file.
 * Primarily for identifying selected parts/templates/properties on the form, as these strings are found in HTML ids.
 * Also helps in specifying which checkboxes to select/deselect in quick select.
 * 
 * e.g. In the main HTML (index.html), "pt-Head" can be found like this
 * 
 * <label for="pt-Head"> <input type="checkbox" name="PartType" id="pt-Head" value="Head" />Head</label>
 * 
 * @author Christian Rodriguez
 */

//Part Type Settings
let ptSettings = ["pt-DefaultSetting", "pt-HairSetting", "pt-HeadPropsSetting", "pt-BodyOnlySetting", "pt-BodyExtrasOnlySetting"];

//Default Part Types
let defaultPTs = ["pt-Head", "pt-Torso", "pt-Arms", "pt-Legs"];

//Head Props Part Types
let headPropsPTs = ["pt-Helmets", "pt-FacePropsUpper", "pt-FacePropsLower"];

//Body Part Types
let bodyPTs = ["pt-Torso", "pt-Arms", "pt-Legs"];

//Body Extra Part Types
let bodyExtrasPTs = ["pt-Shins", "pt-Thighs", "pt-TorsoDeco", "pt-LeftArm", "pt-RightArm", "pt-LeftForeArm", "pt-RightForeArm", "pt-LeftArmDeco", "pt-RightArmDeco"];

let hairPTs = ["pt-Hair", "pt-Beards"];

//Voice Part Type
let voicePT = ['pt-Voice'];

//Collection of all Parts Types, excluding Voice
let ptCollection = [ptSettings, defaultPTs, headPropsPTs, bodyPTs, bodyExtrasPTs, voicePT, hairPTs];

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

var formCollection = [ptCollection, atCollection, textInputProperties, genderSelect];

export default formCollection;