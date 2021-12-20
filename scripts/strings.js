/**
 * strings.js, used to export file headers on XComContent and XComGame files.
 * These are strings exported as an array.
 * @author Christian Rodriguez (cjrcodes)
 */

let xcomContentHeader = ";This file was generated by the XCOM Mod File Generator by @cjrcodes on GitHub\n;If you would like to contribute or leave feedback, visit https://github.com/cjrcodes/XCOM-Mod-File-Generator \n;To generate new files, visit https://cjrcodes.github.io/XCOM-Mod-File-Generator/\n\n[XComGame.X2BodyPartTemplateManager]\n\n";
let xcomGameHeader = ";This file was generated by the XCOM Mod File Generator by @cjrcodes on GitHub\n;If you would like to contribute or leave feedback, visit https://github.com/cjrcodes/XCOM-Mod-File-Generator \n;To generate new files, visit https://cjrcodes.github.io/XCOM-Mod-File-Generator/\n\n";

/* Templates for reference
//Head Template Config
let headTC = "+BodyPartTemplateConfig=(PartType=\"Head\", DLCName=\"\",TemplateName=\"\", ArchetypeName=\"\", Gender=eGender_None, bCanUseOnCivilian=, bVeteran=)";

//Voice Template Config
let voiceTC = "+BodyPartTemplateConfig=(PartType=\"Voice\", Language=\"\", Gender=eGender_None, TemplateName=\"\", ArchetypeName=\"\")";

//Head Prop Template Config
let headPropTC = "+BodyPartTemplateConfig=(PartType=\"\", DLCName=\"\", TemplateName=\"\", ArchetypeName=\"\", Gender=eGender_None, bCanUseOnCivilian=, bVeteran=, bAnyArmor=)";

//Body Template Config
let bodyTC = "+BodyPartTemplateConfig=(PartType=\"\", DLCName=\"\", TemplateName=\"\", ArchetypeName=\"\", Gender=eGender_None, bCanUseOnCivilian=, bVeteran=, CharacterTemplate=, ArmorTemplate=)";

let hairTC = "+BodyPartTemplateConfig=(PartType=\"\", DLCName=\"\", TemplateName=\"\", ArchetypeName=\"\", Gender=eGender_None, bCanUseOnCivilian=)";
*/

const strings = [xcomContentHeader, xcomGameHeader];

export default strings;