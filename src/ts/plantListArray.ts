import { Plant } from "./products";
const monsteraURL = "https://www.blomsterlandet.se/globalassets/catalog-images/7/1006/2cc39c2506eb68a3c5ad93fd40b76db3.jpg?format=webp&quality=85&width=1080&height=1080&rmode=pad&rcolor=FFFFFFFF";

const alokasiaURL = "https://www.blomsterlandet.se/globalassets/catalog-images/7/165194/3fc37181a820af5490a7df9b60dfd305.jpg?format=webp&quality=85&width=1080&height=1080&rmode=pad&rcolor=FFFFFFFF";

const zamiakallaURL = "https://www.blomsterlandet.se/globalassets/catalog-images/7/1111/62edfe53068baac1fa84ec92d4c6e5b5.jpg?format=webp&quality=85&width=2560&height=2560&rmode=pad&rcolor=FFFFFFFF";

const fredskallaURL = "https://www.blomsterlandet.se/globalassets/catalog-images/7/3091/4e03b21911773ddca48832df1ed0bb73.jpg?format=webp&quality=85&width=2560&height=2560&rmode=pad&rcolor=FFFFFFFF";

const julstjarnaURL = "https://www.blomsterlandet.se/globalassets/catalog-images/7/49966/220c4e98d992c6e4a5f3c28f2936ed90.jpg?format=webp&quality=85&width=750&height=750&rmode=pad&rcolor=FFFFFFFF";

const alaskastjarnaURL = "https://www.blomsterlandet.se/globalassets/catalog-images/7/51164/56566cc740dc03894e5692f0ac150c42.jpg?format=webp&quality=85&width=600&height=600&rmode=pad&rcolor=FFFFFFFF";

const hostbegoniaURL = "https://www.blomsterlandet.se/globalassets/catalog-images/7/136181/a1caf89b1784b45cd1049469f0d05362.jpg?format=webp&quality=85&width=600&height=600&rmode=pad&rcolor=FFFFFFFF";

const brudorkideURL = "https://www.blomsterlandet.se/globalassets/catalog-images/7/175238/b6792da4ee8aceb2030fc4edbc10dd7f.jpg?format=webp&quality=85&width=600&height=600&rmode=pad&rcolor=FFFFFFFF";

const julstjarnaURL = "https://www.blomsterlandet.se/globalassets/catalog-images/7/49966/220c4e98d992c6e4a5f3c28f2936ed90.jpg?format=webp&quality=85&width=750&height=750&rmode=pad&rcolor=FFFFFFFF";

const alaskastjarnaURL = "https://www.blomsterlandet.se/globalassets/catalog-images/7/51164/56566cc740dc03894e5692f0ac150c42.jpg?format=webp&quality=85&width=600&height=600&rmode=pad&rcolor=FFFFFFFF";

const hostbegoniaURL = "https://www.blomsterlandet.se/globalassets/catalog-images/7/136181/a1caf89b1784b45cd1049469f0d05362.jpg?format=webp&quality=85&width=600&height=600&rmode=pad&rcolor=FFFFFFFF";

const brudorkideURL = "https://www.blomsterlandet.se/globalassets/catalog-images/7/175238/b6792da4ee8aceb2030fc4edbc10dd7f.jpg?format=webp&quality=85&width=600&height=600&rmode=pad&rcolor=FFFFFFFF";

export let plantList:Array <Plant> = [new Plant (monsteraURL,"Monstera deliciosa", "Monstera", 159, 
    "Härlig grönväxt med glänsande, stora, hjärtformade blad. Större blad får karakteristiska hål. Trivs bäst i ljusa till lätt skuggiga lägen. Håll jorden lätt fuktig och låt torka lätt mellan vattningarna", 
    1,
    "Vanlig vattning när jorden känns torr, ett tips är att ofta spreja bladen då den gillar fuktigt klimat",
    "Mycket solljus men helst inte där den står direkt i den varma eftermiddagssolen", "Monstera, även kallad hålmonstera, är en iögonfallande tropisk växt med sina stora, glänsande gröna blad och karakteristiska hålformationer. Dess förmåga att anpassa sig gör den till en populär inomhusväxt. Monstera trivs bäst i indirekt ljus, men den kan också tolerera skuggiga förhållanden. Dess jord bör hållas jämnt fuktig, och vattna endast när det översta jordlagret känns torrt. Med rätt vård kan Monstera bli en imponerande och dekorativ tillägg till ditt hem eller kontor.",
    "För att säkerställa optimal tillväxt och välmående för din Monstera, placera den i indirekt ljus eller skugga. Vattna regelbundet och låt jorden torka något mellan vattningarna. En rumstemperatur på 18-27°C är idealisk. Gödsla under växtsäsongen med en balanserad gödsel var sjätte vecka. Trimma bort eventuella gulnade blad och dammtorka bladen för att hålla växten frisk. Denna lättskötta växt är perfekt för dem som söker en tropisk atmosfär i sina inomhusutrymmen."),

    new Plant (alokasiaURL,"Alocasia macrorrhizos", "Alokasia",
    200, "Grönväxt med mörkgrönt, exotiskt bladverk som växer snabbt. Trivs på ljusa platser.", 2,
    "Låt växten torka upp lätt mellan vattningarna. Trivs bäst i hög luftfuktighet", 
    "Placera ljust, men inte i stark sol",
    "Alocasia, eller elefantöra, är en iögonfallande växt med stora hjärtformade blad och karakteristiska ådror. Trivs i ljust till skuggigt ljus, håll jorden fuktig men undvik övervattning. Kräver hög luftfuktighet och trivs vid 18-26°C. Ger en exotisk touch till ditt hem.",
    "Placera i ljust indirekt ljus eller skugga. Vattna regelbundet, undvik överdriven vattning. Håll temperaturen mellan 18-26°C och öka luftfuktigheten. Gödsla sparsamt under växtsäsongen. Ta bort gula blad, damma regelbundet för en sund tillväxt. Alocasia är en elegant växt som ger tropisk charm till ditt hem."),

    new Plant (zamiakallaURL,"Zamioculcas zamiifolia", "Zamiakalla", 299, 
    "Mycket tolerant och anpassningsbar bladväxt med läderartade, lätt glansiga gröna blad. Låt torka ut mellan vattningarna. Tål placering på både ljusa och mer skuggiga växtplatser. Skyddas mot direkt solljus sommartid.",
    3,
    "Låt torka ut mellan vattningarna",
    "Kan alltså stå i skugga men står också gärna ljust",
    "Zamiakalla, även känd som dollarväxt, är en tålig inomhusväxt med glänsande, fjäderliknande bladstrukturer. Trivs i lågt till högt ljus och är tacksam när det gäller vattning, vilket gör den perfekt för nybörjare. Jorden bör torka upp mellan vattningarna. Zamiakalla klarar sig bra i rumstemperatur och ger ett elegant grönt inslag till ditt hem eller kontor.",
    "Placera i lågt till högt ljus. Vattna sparsamt och låt jorden torka upp mellan vattningarna. Tål varierande rumstemperaturer. Undvik övervattning. En lättskött växt som kräver minimalt underhåll. Trimma bort eventuella gula blad för att upprätthålla dess friska utseende. Zamiakalla är perfekt för dem som söker en tålig och dekorativ inomhusväxt."),
   
    
    new Plant (fredskallaURL, "Spathiphyllum spp. 'Strauss'","Fredskalla",
    149,
    "Tacksam och lättodlad växt med gröna, blanka blad och blommor med vita hölsterblad. Har luftrenande egenskaper. Trivs på ljusa till halvskuggiga växtplatser.",
    4,
    "Vattna regelbundet och se till att jorden hålls lätt fuktig hela tiden",
    "Sol till halvskugga",
    "Fredskalla, eller Spathiphyllum, är en elegant inomhusväxt med sina karakteristiska vita blommor och blanka gröna blad. Trivs i skuggigt till måttligt ljus och kräver regelbunden vattning. Jorden bör hållas jämnt fuktig. Fredskallan är känd för sina luftrenande egenskaper och är lämplig för olika inomhusmiljöer.",
    "Placera i skuggigt till måttligt ljus. Håll jorden jämnt fuktig och undvik övervattning. Trivs i rumstemperatur. Gödsla sparsamt under tillväxtsäsongen. Ta bort vissna blommor och trimma vid behov. En underhålls-vänlig växt som passar både nybörjare och erfarna trädgårdsmästare. Fredskalla ger en fräsch och harmonisk atmosfär till ditt hem."),

    new Plant (julstjarnaURL,"", "Julstjärna", 
    299, 
    "Trivs på ljus plats, men skuggas i söder. Känslig för kyla och drag, kan tappa bladen om det är för kallt. Optimal temperatur är mellan 15-22 grader. Jämn vattning, inte för blött och inte för torrt. Grenad planta. Växtsaften kan ge hudretning.", 
    5, 
    "Vattna med jämna mellanrum och undvik direkt solljus", "Undvik direktsol",
     "", ""),

     new Plant (alaskastjarnaURL,"", "Alaskastjärna", 
     349, 
     "Trivs på ljus plats, men skuggas i söder. Känslig för kyla och drag, kan tappa bladen om det är för kallt. Optimal temperatur är mellan 15-22 grader. Jämn vattning, inte för blött och inte för torrt. Grenad planta. Växtsaften kan ge hudretning.", 
     6, 
     "Vattna med jämna mellanrum och undvik direkt solljus", "Undvik direktsol",
      "", ""),

      new Plant (hostbegoniaURL,"", "Höstbegonia", 
      349, 
      "Trivs på ljus plats, men skuggas i söder. Känslig för kyla och drag, kan tappa bladen om det är för kallt. Optimal temperatur är mellan 15-22 grader. Jämn vattning, inte för blött och inte för torrt. Grenad planta. Växtsaften kan ge hudretning.", 
      7, 
      "Vattna med jämna mellanrum och undvik direkt solljus", "Undvik direktsol",
       "", ""),

       new Plant (brudorkideURL,"", "Brudorkidé", 
       349, 
       "Trivs på ljus plats, men skuggas i söder. Känslig för kyla och drag, kan tappa bladen om det är för kallt. Optimal temperatur är mellan 15-22 grader. Jämn vattning, inte för blött och inte för torrt. Grenad planta. Växtsaften kan ge hudretning.", 
       7, 
       "Vattna med jämna mellanrum och undvik direkt solljus", "Undvik direktsol",
        "", "")

    ]