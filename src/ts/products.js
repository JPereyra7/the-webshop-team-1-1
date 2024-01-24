"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plant = void 0;
var Plant = /** @class */ (function () {
    function Plant(quantity, isAdded, image, nameInLatin, plantName, price, productInfo, plantId, watering, needOfSunlight, plantSpecifications, plantCareSpecifications) {
        this.quantity = quantity;
        this.isAdded = isAdded;
        this.image = image;
        this.nameInLatin = nameInLatin;
        this.plantName = plantName;
        this.price = price;
        this.productInfo = productInfo;
        this.plantId = plantId;
        this.watering = watering;
        this.needOfSunlight = needOfSunlight;
        this.plantSpecifications = plantSpecifications;
        this.plantCareSpecifications = plantCareSpecifications;
    }
    return Plant;
}());
exports.Plant = Plant;
