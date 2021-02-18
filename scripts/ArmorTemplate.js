class ArmorTemplate {
    constructor(atName, characterTemplate, atAbbreviation) {
        this.atName = atName;
        this.characterTemplate = characterTemplate;
        this.atAbbreviation = atAbbreviation;
    }
}

//All armor types created with the ArmorTemplate class, meant to get and display all relevant armor template data
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

export let ArmorTemplates = [kevlarArmor, lightPlatedArmor, mediumPlatedArmor, heavyPlatedArmor, lightPoweredArmor, mediumPoweredArmor, heavyPoweredArmor, reaperArmor, platedReaperArmor, poweredReaperArmor, templarArmor, platedTemplarArmor, poweredTemplarArmor, skirmisherArmor, platedSkirmisherArmor, poweredSkirmisherArmor];