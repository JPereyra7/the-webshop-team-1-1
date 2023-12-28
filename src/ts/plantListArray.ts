import { Plant } from "./products";
const monsteraURL = "https://www.blomsterlandet.se/globalassets/catalog-images/7/1006/2cc39c2506eb68a3c5ad93fd40b76db3.jpg?format=webp&quality=85&width=1080&height=1080&rmode=pad&rcolor=FFFFFFFF";

const alokasiaURL = "https://www.blomsterlandet.se/globalassets/catalog-images/7/165194/3fc37181a820af5490a7df9b60dfd305.jpg?format=webp&quality=85&width=1080&height=1080&rmode=pad&rcolor=FFFFFFFF";

const zamiakallaURL = "https://www.blomsterlandet.se/globalassets/catalog-images/7/1111/62edfe53068baac1fa84ec92d4c6e5b5.jpg?format=webp&quality=85&width=2560&height=2560&rmode=pad&rcolor=FFFFFFFF";

const fredskallaURL = "https://www.blomsterlandet.se/globalassets/catalog-images/7/3091/4e03b21911773ddca48832df1ed0bb73.jpg?format=webp&quality=85&width=2560&height=2560&rmode=pad&rcolor=FFFFFFFF";

export let plantList:Array <Plant> = [new Plant (monsteraURL, "Monstera", 159, 
    "Härlig grönväxt med glänsande, stora, hjärtformade blad. Större blad får karakteristiska hål. Trivs bäst i ljusa till lätt skuggiga lägen. Håll jorden lätt fuktig och låt torka lätt mellan vattningarna", 
    1,
    "Vanlig vattning när jorden känns torr, ett tips är att ofta spreja bladen då den gillar fuktigt klimat",
    "Mycket solljus men helst inte där den står direkt i den varma eftermiddagssolen"),

    new Plant (alokasiaURL, "Alokasia",
    200, "Grönväxt med mörkgrönt, exotiskt bladverk som växer snabbt. Trivs på ljusa platser.", 2,
    "Låt växten torka upp lätt mellan vattningarna. Trivs bäst i hög luftfuktighet", 
    "Placera ljust, men inte i stark sol"),

    new Plant (zamiakallaURL, "Zamiakalla", 299, 
    "Mycket tolerant och anpassningsbar bladväxt med läderartade, lätt glansiga gröna blad. Låt torka ut mellan vattningarna. Tål placering på både ljusa och mer skuggiga växtplatser. Skyddas mot direkt solljus sommartid.",
    3,
    "Låt torka ut mellan vattningarna",
    "Kan alltså stå i skugga men står också gärna ljust"),
    
    new Plant (fredskallaURL, "Fredskalla",
    149,
    "Tacksam och lättodlad växt med gröna, blanka blad och blommor med vita hölsterblad. Har luftrenande egenskaper. Trivs på ljusa till halvskuggiga växtplatser.",
    4,
    "Vattna regelbundet och se till att jorden hålls lätt fuktig hela tiden",
    "Sol till halvskugga")

    ]