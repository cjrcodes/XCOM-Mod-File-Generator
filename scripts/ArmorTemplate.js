/**
 * ArmorTemplate.js, primarily for the ArmorTemplate class. 
 * This is used to generate presets with all relevant information needed for filling parts with armor template capabilities.
 * Presets are exported as an array.
 * @author Christian Rodriguez
 */

class ArmorTemplate {
    constructor(armorTemplateName, characterTemplate, armorTemplateAbbreviation) {
        this.armorTemplateName = armorTemplateName;
        this.characterTemplate = characterTemplate;
        this.armorTemplateAbbreviation = armorTemplateAbbreviation;
    }
}

//All armor template presets created with the ArmorTemplate class, meant to get and display all relevant armor template data
let kevlarArmor = new ArmorTemplate("KevlarArmor", "Soldier", "KV");
let lightPlatedArmor = new ArmorTemplate("LightPlatedArmor", "Soldier", "LPL");
let mediumPlatedArmor = new ArmorTemplate("MediumPlatedArmor", "Soldier", "MPL");
let heavyPlatedArmor = new ArmorTemplate("HeavyPlatedArmor", "Soldier", "HPL");
let lightPoweredArmor = new ArmorTemplate("LightPoweredArmor", "Soldier", "LPO");
let mediumPoweredArmor = new ArmorTemplate("MediumPoweredArmor", "Soldier", "MPO");
let heavyPoweredArmor = new ArmorTemplate("HeavyPoweredArmor", "Soldier", "HPO");

let reaperArmor = new ArmorTemplate("ReaperArmor", "Reaper", "RA");
let platedReaperArmor = new ArmorTemplate("PlatedReaperArmor", "Reaper", "PLR");
let poweredReaperArmor = new ArmorTemplate("PoweredReaperArmor", "Reaper", "POR");

let templarArmor = new ArmorTemplate("TemplarArmor", "Templar", "TA");
let platedTemplarArmor = new ArmorTemplate("PlatedTemplarArmor", "Templar", "PLT");
let poweredTemplarArmor = new ArmorTemplate("PoweredTemplarArmor", "Templar", "POT");

let skirmisherArmor = new ArmorTemplate("SkirmisherArmor", "Skirmisher", "SA");
let platedSkirmisherArmor = new ArmorTemplate("PlatedSkirmisherArmor", "Skirmisher", "PLS");
let poweredSkirmisherArmor = new ArmorTemplate("PoweredSkirmisherArmor", "Skirmisher", "POS");


const ArmorTemplates = [kevlarArmor, lightPlatedArmor, mediumPlatedArmor, heavyPlatedArmor, lightPoweredArmor, mediumPoweredArmor, heavyPoweredArmor, reaperArmor, platedReaperArmor, poweredReaperArmor, templarArmor, platedTemplarArmor, poweredTemplarArmor, skirmisherArmor, platedSkirmisherArmor, poweredSkirmisherArmor];

export default ArmorTemplates;

//exports.ArmorTemplate = ArmorTemplates;

