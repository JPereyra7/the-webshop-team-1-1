import { Skotsel } from "./skotselrad";
const tradgardURL = "https://www.blomsterlandet.se/contentassets/88f2eb37df9f4a77850409246d8e36e4/t2019_1920_blomsterlandet-1909024055.jpg?format=webp&quality=85&width=300&height=300&rmode=crop&rcolor=FFFFFFFF";
const perennerURL = "https://www.blomsterlandet.se/contentassets/57b0de476fc84fd1ac88cf8236b5aba7/t7629-stjarnflocka-12591.jpg?format=webp&quality=85&width=300&height=300&rmode=crop&rcolor=FFFFFFFF";
const krukvaxterURL = "https://www.blomsterlandet.se/contentassets/4ed268eeac664120a573b12d13578f54/lowres-t2021_0748_timelaps0393.jpg?format=webp&quality=85&width=300&height=300&rmode=crop&rcolor=FFFFFFFF";
const kokstradgardURL = "https://www.blomsterlandet.se/contentassets/547397eb5f944aee8041e650e567ab48/t2019_2349_blomsterlandet-reportage-1908140838.jpg?format=webp&quality=85&width=300&height=300&rmode=crop&rcolor=FFFFFFFF";
const frukttradURL = "https://www.blomsterlandet.se/contentassets/8253e37469a141e8a885e8238a0fed13/t9916-apple_mg_18311-1.jpg?format=webp&quality=85&width=300&height=300&rmode=crop&rcolor=FFFFFFFF";
const pallkrage = "https://www.blomsterlandet.se/contentassets/b2abd317b90046dc8429ab41970d7a48/t2018_0996_pallkrage_svart_img_3464.jpg?format=webp&quality=85&width=300&height=300&rmode=crop&rcolor=FFFFFFFF";
const froURL = "https://www.blomsterlandet.se/contentassets/e30216fff3f640ae97bc46ef77aa2101/lowres-t2020_6932_blomsterlandet-201105-forodling8708.jpg?format=webp&quality=85&width=300&height=300&rmode=crop&rcolor=FFFFFFFF";
const barbuskeURL = "https://www.blomsterlandet.se/contentassets/d50aee3531104deabb3bfea043dab61d/t2019_2119_vaccinium-corymbosum-dierkings-d100.jpg?format=webp&quality=85&width=300&height=300&rmode=crop&rcolor=FFFFFFFF";
const rosorURL = "https://www.blomsterlandet.se/contentassets/145cb897a16f49c79d7f8b09954c0e37/t2018_1805_rosa-constance-spry.jpg?format=webp&quality=85&width=300&height=300&rmode=crop&rcolor=FFFFFFFF";
const chilipepparURL = "https://www.blomsterlandet.se/contentassets/0ac35461f4314f0281135d9296cee846/t2016_0668_chili_img_9244.jpg?format=webp&quality=85&width=300&height=300&rmode=crop&rcolor=FFFFFFFF";

export let skotselList:Array <Skotsel> = [
    new Skotsel (tradgardURL, "Trädgårdsskötsel", "Praktiska tips och råd för att underlätta skötseln av din trädgård."),

    new Skotsel (perennerURL, "Perenner - trädgårdens smycken", "De växer upp igen varje år och sprider glädje genom sina vackra blad och underbara blommor."),

    new Skotsel (krukvaxterURL, "Krukväxter", "Man kan aldrig få nog av krukväxter. Här hittar du massor av skötselråd och tips för våra favoritblommor och gröna växter."),

    new Skotsel (kokstradgardURL, "Köksträdgården", "Att njuta av grönsaker som vi har odlat och skördat helt själva ger en oslagbar känsla. Vad är din favorit i köksträdgården?"),

    new Skotsel (frukttradURL, "Fruktträd", "En trädgård blir helt enkelt inte komplett utan fruktträd. Njut av vacker blomning och mumsig frukt."),

    new Skotsel (pallkrage, "Odla i pallkrage", "Pallkrageodling passar de flesta och möjliggör odling av egna grönsaker och blommor även på begränsad yta."),
    
    new Skotsel (froURL, "Förodlade frön", "Börja din förodling inomhus tidigt på våren och följ vägen till färdiga plantor."),

    new Skotsel (barbuskeURL, "Bärbuskar", "Det är de mest lättskötta ätbara växterna, samtidigt som de ger riklig skörd. Genom att odla olika sorter av bär förlänger du säsongen."),

    new Skotsel (rosorURL, "Rosor", "Rosen, kärlekens blomma, är kanske världens mest omtyckta och har en given plats i våra trädgårdar. Här finner du guider, tips och inspiration om våra favoritrosor."),

    new Skotsel (chilipepparURL, "Chilipeppar", "Kan lätt odlas inomhus i köksfönster, i kruka, på terassen eller i pallkragen.")
]