import "./../scss/style.scss";
import { createHtmlForProductPage } from "./createHtml";





    document.getElementById("showPlant")?.addEventListener("click", ()=>{
        createHtmlForProductPage()
    })