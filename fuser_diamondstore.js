const express = require("express");
const diamond_store = express.Router();
const path = require('node:path');

// JSON constants are formatted for readability here; they are trimmed before transfer by JSON.parse().

const hmx_complete = {'uuid': 'cd371946-a2dd-488c-937a-5ac64560fee0', 'assets': `[
    [
        {
            "asset_name": "Chorus_01",
            "asset_type": "AudioEffects"
        },
        {
            "asset_name": "Flanger_03",
            "asset_type": "AudioEffects"
        },
        {
            "asset_name": "Phaser_01",
            "asset_type": "AudioEffects"
        },
        {
            "asset_name": "Reverb_02",
            "asset_type": "AudioEffects"
        },
        {
            "asset_name": "Stutter_03",
            "asset_type": "AudioEffects"
        },
        {
            "asset_name": "Wah_01",
            "asset_type": "AudioEffects"
        },
        {
            "asset_name": "BTA_Makeup_Body_Confetti",
            "asset_type": "BodyTextureAsset"
        },
        {
            "asset_name": "BTA_Makeup_Body_Cyborg",
            "asset_type": "BodyTextureAsset"
        },
        {
            "asset_name": "BTA_Makeup_Body_Diamonds",
            "asset_type": "BodyTextureAsset"
        },
        {
            "asset_name": "BTA_Makeup_Body_Freckles",
            "asset_type": "BodyTextureAsset"
        },
        {
            "asset_name": "BTA_Makeup_Body_Golden",
            "asset_type": "BodyTextureAsset"
        },
        {
            "asset_name": "BTA_Makeup_Body_Leopard",
            "asset_type": "BodyTextureAsset"
        },
        {
            "asset_name": "BTA_Makeup_Body_Lizard",
            "asset_type": "BodyTextureAsset"
        },
        {
            "asset_name": "BTA_Makeup_SeaQueen",
            "asset_type": "BodyTextureAsset"
        },
        {
            "asset_name": "BTA_Makeup_Twiggy",
            "asset_type": "BodyTextureAsset"
        },
        {
            "asset_name": "BTA_Tattoo_Bees",
            "asset_type": "BodyTextureAsset"
        },
        {
            "asset_name": "BTA_Tattoo_Hexagon",
            "asset_type": "BodyTextureAsset"
        },
        {
            "asset_name": "BTA_Tattoo_Snakes",
            "asset_type": "BodyTextureAsset"
        },
        {
            "asset_name": "80sArp",
            "asset_type": "Instrument"
        },
        {
            "asset_name": "80sBass",
            "asset_type": "Instrument"
        },
        {
            "asset_name": "80sSynth",
            "asset_type": "Instrument"
        },
        {
            "asset_name": "ArpegBell1",
            "asset_type": "Instrument"
        },
        {
            "asset_name": "Banjo",
            "asset_type": "Instrument"
        },
        {
            "asset_name": "BassElectro",
            "asset_type": "Instrument"
        },
        {
            "asset_name": "Chiptune",
            "asset_type": "Instrument"
        },
        {
            "asset_name": "ChordFlerm",
            "asset_type": "Instrument"
        },
        {
            "asset_name": "Chords02",
            "asset_type": "Instrument"
        },
        {
            "asset_name": "ChordsTechno",
            "asset_type": "Instrument"
        },
        {
            "asset_name": "DrumMayo",
            "asset_type": "Instrument"
        },
        {
            "asset_name": "DrumRock",
            "asset_type": "Instrument"
        },
        {
            "asset_name": "DrumTrapEDM",
            "asset_type": "Instrument"
        },
        {
            "asset_name": "DrumVintage",
            "asset_type": "Instrument"
        },
        {
            "asset_name": "MelCanvas1",
            "asset_type": "Instrument"
        },
        {
            "asset_name": "MelVoxAdlibs",
            "asset_type": "Instrument"
        },
        {
            "asset_name": "SaxophoneBari",
            "asset_type": "Instrument"
        },
        {
            "asset_name": "SubBass",
            "asset_type": "Instrument"
        },
        {
            "asset_name": "VinylScratch",
            "asset_type": "Instrument"
        },
        {
            "asset_name": "melfalling1",
            "asset_type": "Instrument"
        },
        {
            "asset_name": "MV_Bottom_BaggyJogger_80s02",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_BaggyJogger_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_BaggyJogger_PsychedelicBass",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_BaggyJogger_Puppy",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_Bikini_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_Bikini_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_Bikini_Tiger",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_BurningMan_BarCode",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_BurningMan_DigitalCamo",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_BurningMan_Floral",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_BurningMan_PsychedelicLoop3",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_GothRock_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_GothRock_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_GothRock_Tiger",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_Heretic_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_Heretic_SingLoop",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_JeansBaggy_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_JeansBaggy_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_JeansBaggy_JustabouttosnapBass",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_JeansSkate_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_JeansSkate_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_JeansSkinny_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_JeansSkinny_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_ShortsBaggy_80s01",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_ShortsBaggy_ColorBlock",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_ShortsBaggy_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_ShortsBaggy_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_ShortsMid_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_ShortsMid_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_ShortsMid_MsjacksonLead",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_ShortsMid_SnakeSkin",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_ShortsRipped_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_ShortsRipped_Leopard",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_ShortsRipped_PsychedelicWild",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightSkirt_FishScale",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightSkirt_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightSkirt_Snakeskin",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightSkirt_Una7Beat",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_CamoBlue",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_CamoFunky01",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_CamoFunky02",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_CamoGreen",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_CamoHamburger",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_CamoHunter",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_CamoOrange",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_CamoPurple",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_CamoRed",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_CamoSlime",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_CamoTrapper",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_CamoWhite",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_CamoYellow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_FishScale",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_GradientAqua",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_GradientBlack",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_GradientBlueGreen",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_GradientDarkRed",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_GradientGreen",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_GradientLightBlue",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_GradientMidnight",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_GradientOrange",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_GradientPink",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_GradientPurple",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_GradientSkyBlue",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_GradientWhite",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_GradientYellow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsBike_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_CamoBlue",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_CamoFunky01",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_CamoFunky02",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_CamoGreen",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_CamoHamburger",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_CamoHunter",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_CamoOrange",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_CamoPurple",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_CamoRed",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_CamoSlime",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_CamoTrapper",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_CamoWhite",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_CamoYellow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_Crush2Beat",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_GradientAqua",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_GradientBlack",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_GradientBlueGreen",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_GradientDarkRed",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_GradientGreen",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_GradientLightBlue",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_GradientMidnight",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_GradientOrange",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_GradientPink",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_GradientPurple",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_GradientSkyBlue",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_GradientWhite",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_GradientYellow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsLong_Vip1DS",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_CamoBlue",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_CamoFunky01",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_CamoFunky02",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_CamoGreen",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_CamoHamburger",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_CamoHunter",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_CamoOrange",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_CamoPurple",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_CamoRed",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_CamoSlime",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_CamoTrapper",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_CamoWhite",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_CamoYellow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_Crush3Loop",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_FishScale",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_GradientAqua",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_GradientBlack",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_GradientBlueGreen",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_GradientDarkRed",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_GradientGreen",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_GradientLightBlue",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_GradientMidnight",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_GradientOrange",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_GradientPink",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_GradientPurple",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_GradientSkyBlue",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_GradientWhite",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_GradientYellow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsMid_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsShortsHigh_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_TightsShortsHigh_Tiger",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_Track_80s01",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_Track_City1Beat",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_Track_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_Track_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_Track_Vip2DS",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_Track_Weekend3Bass",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_UrbanPants_Cow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_UrbanPants_Fasion4Loop",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_UrbanPants_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_UrbanPants_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_YogaShorts_Crush5Bass",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_YogaShorts_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bottom_YogaShorts_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bracelet_WatchMetal_Left_Palette",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Bracelet_WatchMetal_Right_Palette",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_Athletic_Fishscale",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_BootChunky_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_BootChunky_Leopard",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_ChunkySneakers_Vip1DS",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_ChunkySneakers_animals",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_ChunkySneakers_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_ChunkySneakers_snakeskin",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_CowboyBoots_Cow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_CowboyBoots_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_CowboyBoots_Leopard",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_CowboyBoots_Snake",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_CowboyBoots_Tiger",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_CowboyBoots_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_DressShoe_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_DressShoe_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_DressShoe_Snake",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_HighTops_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_HighTops_puppy",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_LeatherBoots_80s02",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_LeatherBoots_Cow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_LeatherBoots_Tiger",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_LeatherBoots_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_SandalsOutdoors_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_SandalsOutdoors_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_SandalsOutdoors_weekend2",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_Sandals_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_Sandals_una",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_Sandals_weekend",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_SlipOns_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_UrbanSneakers_80",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_UrbanSneakers_Vip2DS",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_UrbanSneakers_fashionbass",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_UrbanSneakers_glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Foot_UrbanSneakers_mvp5bass",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Glasses_ChunkyRetroSun_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Glasses_GogglesSki_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Glasses_GogglesSpiked_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Glasses_Heart_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Glasses_Oval_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Glasses_Reading_Metallic",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Glasses_Reading_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Glasses_RectangleReading_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Glasses_RectangleSun_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Glasses_SteampunkReading_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Glasses_SteampunkSun_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Glasses_StraightBrim_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Glasses_Sun_Metallic",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Glasses_Sun_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_CutOffDriving_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_CutoffDriving_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_CutoffDriving_Snakeskin",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_FaintShadowGoldBoth",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_FaintShadowGoldLeft",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_Finger_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_Finger_Leopard",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_Finger_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_GlovesLong_Cow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_GlovesLong_GLow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_GlovesLong_SnakeSkin",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_GlovesLong_Tiger",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_GlovesLong_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_GlovesMid_Cow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_GlovesMid_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_GlovesMid_SnakeSkin",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_GlovesMid_Tiger",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_GlovesMid_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_GlovesShort_Cow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_GlovesShort_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_GlovesShort_SnakeSkin",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_GlovesShort_Tiger",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hand_GlovesShort_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_BaseBall_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Baseball_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Baseball_Mixlink0009",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Baseball_Shapes0Loop",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Baseball_Vip2DS",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Beret_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Beret_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Coachella_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Coachella_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Cowboy_Cow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Cowboy_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Cowboy_Snakeskin",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Cowboy_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Knit_80s02",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Knit_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Knit_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Majorette_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Majorette_Metallic",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Majorette_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_MilitaryJeweled_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Military_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Military_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Visor_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Hat_Visor_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Headphones_Default_Vip1DS",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Headphones_DiamondDS",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Headphones_DodecahedronDS",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Headphones_KaleidoscopeDS",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Headphones_LemonsPreOrder",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Headphones_LunarDS",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Headphones_SunsetDS",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Ancient_Palette",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Bandana_City3Lead",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Bandana_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Bandana_Skull",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Bandana_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Baroque_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Baroque_Metallic",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Baroque_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Bear_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Bear_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Bear_Metallic",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Bird_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Bird_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_ChunkyRetroSun_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_ChunkyRetroSun_Metallic",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Fox_Metallic",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Fox_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_GasMask_Blackout",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_GasMask_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_GasMask_Happy",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_GasMask_Metallic",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_GasMask_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_GogglesSki_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_GogglesSpiked_Metallic",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Gorilla_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Gorilla_Metallic",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Gorilla_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Heart_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Heart_Metallic",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Horns_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Horns_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_LBH_Lover",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_LBH_VvipDS",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_MenYoroi_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_MenYoroi_Metallic",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_MenYoroi_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_MotorcycleVisor_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_MotorcycleVisor_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Motorcycle_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Oval_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Oval_Metallic",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Rabbit_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_RectangleReading_Metallic",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_RectangleSun_Metallic",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Ski_CamoBlue",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Ski_CamoFunky01",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Ski_CamoFunky02",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Ski_CamoGreen",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Ski_CamoHamburger",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Ski_CamoHunter",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Ski_CamoOrange",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Ski_CamoPurple",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Ski_CamoRed",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Ski_CamoSlime",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Ski_CamoTrapper",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Ski_CamoWhite",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Ski_CamoYellow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Ski_Clown",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Ski_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Ski_Metallic",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_Ski_iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_SpaceHelmetVisor_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_SpaceHelmetVisor_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_SpaceHelmet_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_SpaceHelmet_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_SteampunkSun_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Mask_StraightBrim_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_BaggySweatshirt_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_BaggySweatshirt_JustabouttosnapBass",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_BaggySweatshirt_Shapes0Loop",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_Bikini_Fashion4Loop",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_Bikini_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_Bikini_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_Bikini_Leopard",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_Bikini_Snakeskin",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_Blazer_80s02",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_Blazer_80s022",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_Blazer_Glow2",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_Blazer_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_Blazer_Snakeskin",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_Blazer_Snakeskin2",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_Catsuit_Palette",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_Catsuit_Tiger",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_CutOffTank_GlowingGraphic",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_CutOffTank_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_CutOffTank_Puppy",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_DressShirt_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_DressShirt_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_FurCoat_80s02",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_FurCoat_Cow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_FurCoat_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_FurCoat_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_FurCoat_Leopard",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_FurCoat_MsjacksonLead",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_FurCoat_Tiger",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_Heretic_80s02",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_Heretic_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_Heretic_Tiger",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_PatternedVNeck_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_PatternedVNeck_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_PatternedVNeck_Puppy",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_PatternedVNeck_Weekend3Bass",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_Scarves_Crush3Loop",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_Scarves_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_Scarves_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_ShortDress_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_SingLoop",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_SpikedLeather_Cow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_SpikedLeather_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_SpikedLeather_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_SpikedLeather_Snakeskin",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_SpikedLeather_Una7Beat",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_SportTop_80s02",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_SportTop_FishScale",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_SportTop_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_SportTop_Leopard",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_SportTop_TemperatureBeat",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TShirtFitted_DiamondDS",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TShirtFitted_DodecahedronDS",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TShirtFitted_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TShirtFitted_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TShirtFitted_KaleidoscopeDS",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TShirtFitted_LemonsPreOrder",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TShirtFitted_LunarDS",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TShirtFitted_SunsetDS",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TShirtFitted_Vip2DS",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TankTopTight_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TankTopTight_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TankTopTight_Psychedelic2Bass",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TankTopTight_Snakeskin",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TankTopTight_Tiger",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TightHighNeck_Crush5Bass",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TightHighNeck_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TightHighNeck_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TrackJacket_Crush2Beat",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TrackJacket_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TrackJacket_IfyougetdownBass",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TrackJacket_Leopard",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TrackJacket_Leopard2",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TrackJacket_Vip1DS",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TshirtBasic_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_TshirtBasic_Tropical1Lead",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UnbuttonShirt_80s01",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UnbuttonShirt_80s012",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UnbuttonShirt_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UnbuttonShirt_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UnbuttonShirt_Mixlink0009",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UnderShirt_CamoBlue",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UnderShirt_CamoFunky01",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UnderShirt_CamoFunky02",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UnderShirt_CamoGreen",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UnderShirt_CamoHamburger",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UnderShirt_CamoHunter",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UnderShirt_CamoOrange",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UnderShirt_CamoPurple",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UnderShirt_CamoRed",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UnderShirt_CamoSlime",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UnderShirt_CamoTrapper",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UnderShirt_CamoWhite",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UnderShirt_CamoYellow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UnderShirt_Glow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UnderShirt_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UrbanVest_80s02",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UrbanVest_Cow",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UrbanVest_GlowCube",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UrbanVest_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_UrbanVest_PsychedelicWild",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_WindBreaker_City1Beat",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_Windbreaker_80s02",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "MV_Top_Windbreaker_Iridesence",
            "asset_type": "OutfitPartVariant"
        },
        {
            "asset_name": "Barcoded",
            "asset_type": "Song"
        },
        {
            "asset_name": "CancionPorFerrer",
            "asset_type": "Song"
        },
        {
            "asset_name": "DeadMetrocard",
            "asset_type": "Song"
        },
        {
            "asset_name": "DokiDoki",
            "asset_type": "Song"
        },
        {
            "asset_name": "Fermionic",
            "asset_type": "Song"
        },
        {
            "asset_name": "FindYou",
            "asset_type": "Song"
        },
        {
            "asset_name": "Hartand12th",
            "asset_type": "Song"
        },
        {
            "asset_name": "JustAboutToSnap",
            "asset_type": "Song"
        },
        {
            "asset_name": "LarrysPlace",
            "asset_type": "Song"
        },
        {
            "asset_name": "LaserDome",
            "asset_type": "Song"
        },
        {
            "asset_name": "MoonLab",
            "asset_type": "Song"
        },
        {
            "asset_name": "MustBeNice",
            "asset_type": "Song"
        },
        {
            "asset_name": "Parlayed",
            "asset_type": "Song"
        },
        {
            "asset_name": "SillyBros",
            "asset_type": "Song"
        },
        {
            "asset_name": "Submerged",
            "asset_type": "Song"
        },
        {
            "asset_name": "ThisOneNotThatOne",
            "asset_type": "Song"
        },
        {
            "asset_name": "WishinIHadItNow",
            "asset_type": "Song"
        },
        {
            "asset_name": "abileneanddown",
            "asset_type": "Song"
        },
        {
            "asset_name": "betterwakeup",
            "asset_type": "Song"
        },
        {
            "asset_name": "breakforme",
            "asset_type": "Song"
        },
        {
            "asset_name": "dexting",
            "asset_type": "Song"
        },
        {
            "asset_name": "grimetime",
            "asset_type": "Song"
        },
        {
            "asset_name": "hardlight",
            "asset_type": "Song"
        },
        {
            "asset_name": "ifyougetdown",
            "asset_type": "Song"
        },
        {
            "asset_name": "looppack02",
            "asset_type": "Song"
        },
        {
            "asset_name": "looppack03",
            "asset_type": "Song"
        },
        {
            "asset_name": "looppack04",
            "asset_type": "Song"
        },
        {
            "asset_name": "looppack05",
            "asset_type": "Song"
        },
        {
            "asset_name": "looppack06",
            "asset_type": "Song"
        },
        {
            "asset_name": "lovetheme",
            "asset_type": "Song"
        },
        {
            "asset_name": "parabola",
            "asset_type": "Song"
        },
        {
            "asset_name": "slackjaw",
            "asset_type": "Song"
        },
        {
            "asset_name": "somatic",
            "asset_type": "Song"
        },
        {
            "asset_name": "strychninebaby",
            "asset_type": "Song"
        },
        {
            "asset_name": "takeu4aride",
            "asset_type": "Song"
        },
        {
            "asset_name": "thatunbearable",
            "asset_type": "Song"
        },
        {
            "asset_name": "watchyourstep",
            "asset_type": "Song"
        },
        {
            "asset_name": "BottleRockets",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "Candy_ScreenItem",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "CardBlast_ScreenItem",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "CardboardTotemsB",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "ColorGlow2",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "ColorGlow3",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "CorgiHologram",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "CrazyNetwork",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "CrowdConfetti",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "CrowdMoney",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "CubeNetwork",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "Dolphins",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "FireworkH",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "FireworkH_02",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "FireworkH_03",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "FireworkL",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "FireworkL_02",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "FireworkL_03",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "FireworkN",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "FireworkN_02",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "FireworkN_03",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "Firework_Multi_A",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "FlatShapes3",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "HologramCorgi",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "HologramStar",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "JumpingCubes",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "LaserArray1",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "LaserArray2",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "LaserArray3",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "LaserArray4",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "LaserPointers",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "Pyramid",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "Ripples",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "RotatingPipes",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "Sharks",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "SquarePulse1",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "StarHologram",
            "asset_type": "VenueItem"
        },
        {
            "asset_name": "Totems",
            "asset_type": "VenueItem"
        }
    ]
]`, 'art_large': 'https://api.fuserwebservices.com/api/store/elder_credit_store/art_assets/everything_large.jpg', 'art_med': 'https://api.fuserwebservices.com/api/store/elder_credit_store/art_assets/everything_medium.jpg', 'art_small': 'https://api.fuserwebservices.com/api/store/elder_credit_store/art_assets/everything_small.jpg'};

const audio_fx = {'uuid': '24cd7dca-9a19-4f54-8ba2-37340f12e820}', 'assets': `[
    {
        "asset_name": "Chorus_01",
        "asset_type": "AudioEffects"
    },
    {
        "asset_name": "Flanger_03",
        "asset_type": "AudioEffects"
    },
    {
        "asset_name": "Phaser_01",
        "asset_type": "AudioEffects"
    },
    {
        "asset_name": "Reverb_02",
        "asset_type": "AudioEffects"
    },
    {
        "asset_name": "Stutter_03",
        "asset_type": "AudioEffects"
    },
    {
        "asset_name": "Wah_01",
        "asset_type": "AudioEffects"
    }
]`};

const bodytextureasset = {'uuid': 'b01f6881-e018-4358-9327-38dde833b278', 'assets': `[
    {
        "asset_name": "BTA_Makeup_Body_Confetti",
        "asset_type": "BodyTextureAsset"
    },
    {
        "asset_name": "BTA_Makeup_Body_Cyborg",
        "asset_type": "BodyTextureAsset"
    },
    {
        "asset_name": "BTA_Makeup_Body_Diamonds",
        "asset_type": "BodyTextureAsset"
    },
    {
        "asset_name": "BTA_Makeup_Body_Freckles",
        "asset_type": "BodyTextureAsset"
    },
    {
        "asset_name": "BTA_Makeup_Body_Golden",
        "asset_type": "BodyTextureAsset"
    },
    {
        "asset_name": "BTA_Makeup_Body_Leopard",
        "asset_type": "BodyTextureAsset"
    },
    {
        "asset_name": "BTA_Makeup_Body_Lizard",
        "asset_type": "BodyTextureAsset"
    },
    {
        "asset_name": "BTA_Makeup_SeaQueen",
        "asset_type": "BodyTextureAsset"
    },
    {
        "asset_name": "BTA_Makeup_Twiggy",
        "asset_type": "BodyTextureAsset"
    },
    {
        "asset_name": "BTA_Tattoo_Bees",
        "asset_type": "BodyTextureAsset"
    },
    {
        "asset_name": "BTA_Tattoo_Hexagon",
        "asset_type": "BodyTextureAsset"
    },
    {
        "asset_name": "BTA_Tattoo_Snakes",
        "asset_type": "BodyTextureAsset"
    }
]`};

const instruments = {'uuid': '15a493b9-0034-4c0d-8477-e0a1f87188b1', 'assets': `[
    {
        "asset_name": "80sArp",
        "asset_type": "Instrument"
    },
    {
        "asset_name": "80sBass",
        "asset_type": "Instrument"
    },
    {
        "asset_name": "80sSynth",
        "asset_type": "Instrument"
    },
    {
        "asset_name": "ArpegBell1",
        "asset_type": "Instrument"
    },
    {
        "asset_name": "Banjo",
        "asset_type": "Instrument"
    },
    {
        "asset_name": "BassElectro",
        "asset_type": "Instrument"
    },
    {
        "asset_name": "Chiptune",
        "asset_type": "Instrument"
    },
    {
        "asset_name": "ChordFlerm",
        "asset_type": "Instrument"
    },
    {
        "asset_name": "Chords02",
        "asset_type": "Instrument"
    },
    {
        "asset_name": "ChordsTechno",
        "asset_type": "Instrument"
    },
    {
        "asset_name": "DrumMayo",
        "asset_type": "Instrument"
    },
    {
        "asset_name": "DrumRock",
        "asset_type": "Instrument"
    },
    {
        "asset_name": "DrumTrapEDM",
        "asset_type": "Instrument"
    },
    {
        "asset_name": "DrumVintage",
        "asset_type": "Instrument"
    },
    {
        "asset_name": "MelCanvas1",
        "asset_type": "Instrument"
    },
    {
        "asset_name": "MelVoxAdlibs",
        "asset_type": "Instrument"
    },
    {
        "asset_name": "SaxophoneBari",
        "asset_type": "Instrument"
    },
    {
        "asset_name": "SubBass",
        "asset_type": "Instrument"
    },
    {
        "asset_name": "VinylScratch",
        "asset_type": "Instrument"
    },
    {
        "asset_name": "melfalling1",
        "asset_type": "Instrument"
    }
]`};

const outfit_parts = {'uuid': '7a6cb0a6-2662-4572-84af-97c78bf760a6', 'assets': `[
    {
        "asset_name": "MV_Bottom_BaggyJogger_80s02",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_BaggyJogger_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_BaggyJogger_PsychedelicBass",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_BaggyJogger_Puppy",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_Bikini_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_Bikini_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_Bikini_Tiger",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_BurningMan_BarCode",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_BurningMan_DigitalCamo",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_BurningMan_Floral",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_BurningMan_PsychedelicLoop3",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_GothRock_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_GothRock_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_GothRock_Tiger",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_Heretic_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_Heretic_SingLoop",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_JeansBaggy_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_JeansBaggy_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_JeansBaggy_JustabouttosnapBass",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_JeansSkate_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_JeansSkate_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_JeansSkinny_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_JeansSkinny_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_ShortsBaggy_80s01",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_ShortsBaggy_ColorBlock",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_ShortsBaggy_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_ShortsBaggy_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_ShortsMid_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_ShortsMid_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_ShortsMid_MsjacksonLead",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_ShortsMid_SnakeSkin",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_ShortsRipped_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_ShortsRipped_Leopard",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_ShortsRipped_PsychedelicWild",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightSkirt_FishScale",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightSkirt_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightSkirt_Snakeskin",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightSkirt_Una7Beat",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_CamoBlue",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_CamoFunky01",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_CamoFunky02",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_CamoGreen",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_CamoHamburger",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_CamoHunter",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_CamoOrange",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_CamoPurple",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_CamoRed",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_CamoSlime",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_CamoTrapper",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_CamoWhite",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_CamoYellow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_FishScale",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_GradientAqua",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_GradientBlack",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_GradientBlueGreen",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_GradientDarkRed",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_GradientGreen",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_GradientLightBlue",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_GradientMidnight",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_GradientOrange",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_GradientPink",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_GradientPurple",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_GradientSkyBlue",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_GradientWhite",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_GradientYellow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsBike_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_CamoBlue",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_CamoFunky01",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_CamoFunky02",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_CamoGreen",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_CamoHamburger",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_CamoHunter",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_CamoOrange",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_CamoPurple",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_CamoRed",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_CamoSlime",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_CamoTrapper",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_CamoWhite",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_CamoYellow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_Crush2Beat",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_GradientAqua",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_GradientBlack",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_GradientBlueGreen",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_GradientDarkRed",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_GradientGreen",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_GradientLightBlue",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_GradientMidnight",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_GradientOrange",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_GradientPink",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_GradientPurple",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_GradientSkyBlue",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_GradientWhite",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_GradientYellow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsLong_Vip1DS",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_CamoBlue",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_CamoFunky01",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_CamoFunky02",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_CamoGreen",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_CamoHamburger",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_CamoHunter",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_CamoOrange",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_CamoPurple",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_CamoRed",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_CamoSlime",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_CamoTrapper",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_CamoWhite",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_CamoYellow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_Crush3Loop",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_FishScale",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_GradientAqua",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_GradientBlack",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_GradientBlueGreen",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_GradientDarkRed",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_GradientGreen",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_GradientLightBlue",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_GradientMidnight",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_GradientOrange",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_GradientPink",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_GradientPurple",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_GradientSkyBlue",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_GradientWhite",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_GradientYellow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsMid_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsShortsHigh_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_TightsShortsHigh_Tiger",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_Track_80s01",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_Track_City1Beat",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_Track_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_Track_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_Track_Vip2DS",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_Track_Weekend3Bass",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_UrbanPants_Cow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_UrbanPants_Fasion4Loop",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_UrbanPants_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_UrbanPants_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_YogaShorts_Crush5Bass",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_YogaShorts_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bottom_YogaShorts_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bracelet_WatchMetal_Left_Palette",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Bracelet_WatchMetal_Right_Palette",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_Athletic_Fishscale",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_BootChunky_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_BootChunky_Leopard",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_ChunkySneakers_Vip1DS",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_ChunkySneakers_animals",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_ChunkySneakers_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_ChunkySneakers_snakeskin",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_CowboyBoots_Cow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_CowboyBoots_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_CowboyBoots_Leopard",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_CowboyBoots_Snake",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_CowboyBoots_Tiger",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_CowboyBoots_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_DressShoe_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_DressShoe_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_DressShoe_Snake",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_HighTops_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_HighTops_puppy",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_LeatherBoots_80s02",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_LeatherBoots_Cow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_LeatherBoots_Tiger",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_LeatherBoots_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_SandalsOutdoors_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_SandalsOutdoors_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_SandalsOutdoors_weekend2",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_Sandals_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_Sandals_una",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_Sandals_weekend",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_SlipOns_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_UrbanSneakers_80",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_UrbanSneakers_Vip2DS",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_UrbanSneakers_fashionbass",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_UrbanSneakers_glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Foot_UrbanSneakers_mvp5bass",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Glasses_ChunkyRetroSun_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Glasses_GogglesSki_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Glasses_GogglesSpiked_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Glasses_Heart_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Glasses_Oval_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Glasses_Reading_Metallic",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Glasses_Reading_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Glasses_RectangleReading_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Glasses_RectangleSun_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Glasses_SteampunkReading_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Glasses_SteampunkSun_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Glasses_StraightBrim_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Glasses_Sun_Metallic",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Glasses_Sun_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_CutOffDriving_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_CutoffDriving_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_CutoffDriving_Snakeskin",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_FaintShadowGoldBoth",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_FaintShadowGoldLeft",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_Finger_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_Finger_Leopard",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_Finger_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_GlovesLong_Cow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_GlovesLong_GLow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_GlovesLong_SnakeSkin",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_GlovesLong_Tiger",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_GlovesLong_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_GlovesMid_Cow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_GlovesMid_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_GlovesMid_SnakeSkin",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_GlovesMid_Tiger",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_GlovesMid_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_GlovesShort_Cow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_GlovesShort_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_GlovesShort_SnakeSkin",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_GlovesShort_Tiger",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hand_GlovesShort_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_BaseBall_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Baseball_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Baseball_Mixlink0009",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Baseball_Shapes0Loop",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Baseball_Vip2DS",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Beret_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Beret_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Coachella_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Coachella_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Cowboy_Cow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Cowboy_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Cowboy_Snakeskin",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Cowboy_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Knit_80s02",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Knit_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Knit_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Majorette_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Majorette_Metallic",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Majorette_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_MilitaryJeweled_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Military_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Military_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Visor_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Hat_Visor_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Headphones_Default_Vip1DS",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Headphones_DiamondDS",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Headphones_DodecahedronDS",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Headphones_KaleidoscopeDS",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Headphones_LemonsPreOrder",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Headphones_LunarDS",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Headphones_SunsetDS",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Ancient_Palette",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Bandana_City3Lead",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Bandana_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Bandana_Skull",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Bandana_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Baroque_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Baroque_Metallic",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Baroque_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Bear_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Bear_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Bear_Metallic",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Bird_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Bird_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_ChunkyRetroSun_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_ChunkyRetroSun_Metallic",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Fox_Metallic",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Fox_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_GasMask_Blackout",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_GasMask_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_GasMask_Happy",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_GasMask_Metallic",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_GasMask_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_GogglesSki_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_GogglesSpiked_Metallic",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Gorilla_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Gorilla_Metallic",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Gorilla_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Heart_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Heart_Metallic",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Horns_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Horns_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_LBH_Lover",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_LBH_VvipDS",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_MenYoroi_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_MenYoroi_Metallic",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_MenYoroi_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_MotorcycleVisor_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_MotorcycleVisor_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Motorcycle_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Oval_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Oval_Metallic",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Rabbit_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_RectangleReading_Metallic",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_RectangleSun_Metallic",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Ski_CamoBlue",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Ski_CamoFunky01",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Ski_CamoFunky02",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Ski_CamoGreen",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Ski_CamoHamburger",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Ski_CamoHunter",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Ski_CamoOrange",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Ski_CamoPurple",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Ski_CamoRed",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Ski_CamoSlime",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Ski_CamoTrapper",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Ski_CamoWhite",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Ski_CamoYellow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Ski_Clown",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Ski_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Ski_Metallic",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_Ski_iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_SpaceHelmetVisor_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_SpaceHelmetVisor_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_SpaceHelmet_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_SpaceHelmet_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_SteampunkSun_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Mask_StraightBrim_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_BaggySweatshirt_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_BaggySweatshirt_JustabouttosnapBass",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_BaggySweatshirt_Shapes0Loop",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_Bikini_Fashion4Loop",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_Bikini_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_Bikini_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_Bikini_Leopard",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_Bikini_Snakeskin",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_Blazer_80s02",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_Blazer_80s022",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_Blazer_Glow2",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_Blazer_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_Blazer_Snakeskin",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_Blazer_Snakeskin2",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_Catsuit_Palette",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_Catsuit_Tiger",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_CutOffTank_GlowingGraphic",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_CutOffTank_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_CutOffTank_Puppy",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_DressShirt_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_DressShirt_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_FurCoat_80s02",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_FurCoat_Cow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_FurCoat_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_FurCoat_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_FurCoat_Leopard",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_FurCoat_MsjacksonLead",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_FurCoat_Tiger",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_Heretic_80s02",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_Heretic_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_Heretic_Tiger",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_PatternedVNeck_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_PatternedVNeck_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_PatternedVNeck_Puppy",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_PatternedVNeck_Weekend3Bass",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_Scarves_Crush3Loop",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_Scarves_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_Scarves_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_ShortDress_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_SingLoop",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_SpikedLeather_Cow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_SpikedLeather_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_SpikedLeather_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_SpikedLeather_Snakeskin",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_SpikedLeather_Una7Beat",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_SportTop_80s02",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_SportTop_FishScale",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_SportTop_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_SportTop_Leopard",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_SportTop_TemperatureBeat",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TShirtFitted_DiamondDS",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TShirtFitted_DodecahedronDS",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TShirtFitted_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TShirtFitted_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TShirtFitted_KaleidoscopeDS",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TShirtFitted_LemonsPreOrder",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TShirtFitted_LunarDS",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TShirtFitted_SunsetDS",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TShirtFitted_Vip2DS",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TankTopTight_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TankTopTight_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TankTopTight_Psychedelic2Bass",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TankTopTight_Snakeskin",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TankTopTight_Tiger",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TightHighNeck_Crush5Bass",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TightHighNeck_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TightHighNeck_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TrackJacket_Crush2Beat",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TrackJacket_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TrackJacket_IfyougetdownBass",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TrackJacket_Leopard",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TrackJacket_Leopard2",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TrackJacket_Vip1DS",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TshirtBasic_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_TshirtBasic_Tropical1Lead",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UnbuttonShirt_80s01",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UnbuttonShirt_80s012",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UnbuttonShirt_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UnbuttonShirt_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UnbuttonShirt_Mixlink0009",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UnderShirt_CamoBlue",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UnderShirt_CamoFunky01",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UnderShirt_CamoFunky02",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UnderShirt_CamoGreen",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UnderShirt_CamoHamburger",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UnderShirt_CamoHunter",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UnderShirt_CamoOrange",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UnderShirt_CamoPurple",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UnderShirt_CamoRed",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UnderShirt_CamoSlime",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UnderShirt_CamoTrapper",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UnderShirt_CamoWhite",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UnderShirt_CamoYellow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UnderShirt_Glow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UnderShirt_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UrbanVest_80s02",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UrbanVest_Cow",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UrbanVest_GlowCube",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UrbanVest_Iridesence",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_UrbanVest_PsychedelicWild",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_WindBreaker_City1Beat",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_Windbreaker_80s02",
        "asset_type": "OutfitPartVariant"
    },
    {
        "asset_name": "MV_Top_Windbreaker_Iridesence",
        "asset_type": "OutfitPartVariant"
    }
]`};

const songs = {'uuid': '0d471367-24b9-4b86-ac71-823d82e011ff', 'assets': `[
    {
        "asset_name": "Barcoded",
        "asset_type": "Song"
    },
    {
        "asset_name": "CancionPorFerrer",
        "asset_type": "Song"
    },
    {
        "asset_name": "DeadMetrocard",
        "asset_type": "Song"
    },
    {
        "asset_name": "DokiDoki",
        "asset_type": "Song"
    },
    {
        "asset_name": "Fermionic",
        "asset_type": "Song"
    },
    {
        "asset_name": "FindYou",
        "asset_type": "Song"
    },
    {
        "asset_name": "Hartand12th",
        "asset_type": "Song"
    },
    {
        "asset_name": "JustAboutToSnap",
        "asset_type": "Song"
    },
    {
        "asset_name": "LarrysPlace",
        "asset_type": "Song"
    },
    {
        "asset_name": "LaserDome",
        "asset_type": "Song"
    },
    {
        "asset_name": "MoonLab",
        "asset_type": "Song"
    },
    {
        "asset_name": "MustBeNice",
        "asset_type": "Song"
    },
    {
        "asset_name": "Parlayed",
        "asset_type": "Song"
    },
    {
        "asset_name": "SillyBros",
        "asset_type": "Song"
    },
    {
        "asset_name": "Submerged",
        "asset_type": "Song"
    },
    {
        "asset_name": "ThisOneNotThatOne",
        "asset_type": "Song"
    },
    {
        "asset_name": "WishinIHadItNow",
        "asset_type": "Song"
    },
    {
        "asset_name": "abileneanddown",
        "asset_type": "Song"
    },
    {
        "asset_name": "betterwakeup",
        "asset_type": "Song"
    },
    {
        "asset_name": "breakforme",
        "asset_type": "Song"
    },
    {
        "asset_name": "dexting",
        "asset_type": "Song"
    },
    {
        "asset_name": "grimetime",
        "asset_type": "Song"
    },
    {
        "asset_name": "hardlight",
        "asset_type": "Song"
    },
    {
        "asset_name": "ifyougetdown",
        "asset_type": "Song"
    },
    {
        "asset_name": "looppack02",
        "asset_type": "Song"
    },
    {
        "asset_name": "looppack03",
        "asset_type": "Song"
    },
    {
        "asset_name": "looppack04",
        "asset_type": "Song"
    },
    {
        "asset_name": "looppack05",
        "asset_type": "Song"
    },
    {
        "asset_name": "looppack06",
        "asset_type": "Song"
    },
    {
        "asset_name": "lovetheme",
        "asset_type": "Song"
    },
    {
        "asset_name": "parabola",
        "asset_type": "Song"
    },
    {
        "asset_name": "slackjaw",
        "asset_type": "Song"
    },
    {
        "asset_name": "somatic",
        "asset_type": "Song"
    },
    {
        "asset_name": "strychninebaby",
        "asset_type": "Song"
    },
    {
        "asset_name": "takeu4aride",
        "asset_type": "Song"
    },
    {
        "asset_name": "thatunbearable",
        "asset_type": "Song"
    },
    {
        "asset_name": "watchyourstep",
        "asset_type": "Song"
    }
]`};

const venue_items = {'uuid': 'ed2b7827-511a-490b-a4c8-f8ac79c2e236', 'assets': `[
    {
        "asset_name": "BottleRockets",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "Candy_ScreenItem",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "CardBlast_ScreenItem",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "CardboardTotemsB",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "ColorGlow2",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "ColorGlow3",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "CorgiHologram",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "CrazyNetwork",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "CrowdConfetti",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "CrowdMoney",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "CubeNetwork",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "Dolphins",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "FireworkH",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "FireworkH_02",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "FireworkH_03",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "FireworkL",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "FireworkL_02",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "FireworkL_03",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "FireworkN",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "FireworkN_02",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "FireworkN_03",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "Firework_Multi_A",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "FlatShapes3",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "HologramCorgi",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "HologramStar",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "JumpingCubes",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "LaserArray1",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "LaserArray2",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "LaserArray3",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "LaserArray4",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "LaserPointers",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "Pyramid",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "Ripples",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "RotatingPipes",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "Sharks",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "SquarePulse1",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "StarHologram",
        "asset_type": "VenueItem"
    },
    {
        "asset_name": "Totems",
        "asset_type": "VenueItem"
    }
]`};

diamond_store.all('/get_list', (req, res) => {
    const diamond_store_list = `
        {
        "results": {
            "featured_items": [
                {
                    "uuid": "${hmx_complete.uuid}",
                    "assets": ${hmx_complete.assets},
                    "start_date": "2022-12-12T22:30:00Z",
                    "end_date": "2999-12-31T12:59:59Z",
                    "price": 0,
                    "is_owned": false,
                    "featured_image_url": "${hmx_complete.art_large}",
                    "featured_image_medium_url": "${hmx_complete.art_med}",
                    "featured_image_small_url": "${hmx_complete.art_small}"
                },
                {
                    "uuid": "995eb756-0f49-4a2c-8275-628f132c30d3",
                    "assets": [
                        {
                            "asset_name": "EPiano",
                            "asset_type": "Instrument"
                        }
                    ],
                    "start_date": "2022-12-08T13:00:00Z",
                    "end_date": "2999-12-31T12:59:59Z",
                    "price": 0,
                    "is_owned": false,
                    "featured_image_url": null,
                    "featured_image_medium_url": null,
                    "featured_image_small_url": null
                }
            ],
            "store_items": [
                {
                    "uuid": "${audio_fx.uuid}",
                    "assets": ${audio_fx.assets},
                    "start_date": "2022-12-08T13:00:00Z",
                    "end_date": "2999-12-31T12:59:59Z",
                    "price": 0,
                    "is_owned": false,
                    "featured_image_url": null,
                    "featured_image_medium_url": null,
                    "featured_image_small_url": null
                },
                {
                    "uuid": "${bodytextureasset.uuid}",
                    "assets": ${bodytextureasset.assets},
                    "start_date": "2022-12-08T13:00:00Z",
                    "end_date": "2999-12-31T12:59:59Z",
                    "price": 0,
                    "is_owned": false,
                    "featured_image_url": null,
                    "featured_image_medium_url": null,
                    "featured_image_small_url": null
                },
                {
                    "uuid": "${instruments.uuid}",
                    "assets": ${instruments.assets},
                    "start_date": "2022-12-12T13:00:00Z",
                    "end_date": "2999-12-31T12:59:59Z",
                    "price": 0,
                    "is_owned": false,
                    "featured_image_url": null,
                    "featured_image_medium_url": null,
                    "featured_image_small_url": null
                },
                {
                    "uuid": "${outfit_parts.uuid}",
                    "assets": ${outfit_parts.assets},
                    "start_date": "2022-12-12T13:00:00Z",
                    "end_date": "2999-12-31T12:59:59Z",
                    "price": 0,
                    "is_owned": false,
                    "featured_image_url": null,
                    "featured_image_medium_url": null,
                    "featured_image_small_url": null
                },
                {
                    "uuid": "${songs.uuid}",
                    "assets": ${songs.assets},
                    "start_date": "2022-12-07T13:00:00Z",
                    "end_date": "2999-12-31T12:59:59Z",
                    "price": 20,
                    "is_owned": false,
                    "featured_image_url": null,
                    "featured_image_medium_url": null,
                    "featured_image_small_url": null
                },
                {
                    "uuid": "${venue_items.uuid}",
                    "assets": ${venue_items.assets},
                    "start_date": "2022-12-07T13:00:00Z",
                    "end_date": "2999-12-31T12:59:59Z",
                    "price": 0,
                    "is_owned": false,
                    "featured_image_url": null,
                    "featured_image_medium_url": null,
                    "featured_image_small_url": null
                }
            ]
        }
    }`;
    res.json(JSON.parse(diamond_store_list));
});

diamond_store.post('/purchase', (req, res) => {
    var uuid = req.body.uuid;
    var resultstring;
    
    switch(uuid){
        case 'cd371946-a2dd-488c-937a-5ac64560fee0':
            resultstring = hmx_complete.assets;
            break;
        case '995eb756-0f49-4a2c-8275-628f132c30d3':
            resultstring = `[
                {
                    "asset_name": "EPiano",
                    "asset_type": "Instrument"
                }
            ]`;
            break;
        case '24cd7dca-9a19-4f54-8ba2-37340f12e820':
            resultstring = audio_fx.assets;
            break;
        case 'b01f6881-e018-4358-9327-38dde833b278':
            resultstring = bodytextureasset.assets;
            break;
        case '15a493b9-0034-4c0d-8477-e0a1f87188b1':
            resultstring = instruments.assets;
            break;
        case '7a6cb0a6-2662-4572-84af-97c78bf760a6':
            resultstring = outfit_parts.assets;
            break;
        case '0d471367-24b9-4b86-ac71-823d82e011ff':
            resultstring = songs.assets;
            break;
        case 'ed2b7827-511a-490b-a4c8-f8ac79c2e236':
            resultstring = venue_items.assets;
            break;
        default:
            break;
    }

    var preamble = `{
        "results": {
            "num_elder_credits_remaining": 99999,
            "assets": `;
    var postfix = `}
        }`;
    var response_json = preamble + resultstring + postfix;
    console.log(JSON.parse(response_json));
    res.json(JSON.parse(response_json));
});

diamond_store.all('/art_assets/:file', (req, res) => {
    var options = {
        root: path.join(__dirname, 'art_assets'),
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
      };
    var reqFile = req.params.file;
    res.sendFile(reqFile, options);
});

//TODO: implement better than just copy/paste my current values
diamond_store.all('/get_claimed_assets', (req, res) => {
    res.json(`{"results":{"assets":[{"asset_name":"watchyourstep","asset_type":"Song"},{"asset_name":"MV_Bottom_TightsBike_GradientLightBlue","asset_type":"OutfitPartVariant"}],"credits":[]}}`);
});

module.exports = diamond_store;
//export { diamond_store };