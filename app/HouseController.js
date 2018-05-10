function HouseController() {
    //CONTROLLERS ARE RESPONSIBLE FOR 
    //INTERACTING WITH THE DOM/USER
    //COMMUNICATION WITH THE SERVICE

    //PRIVATE
    var houseService = new HouseService(drawHouses)

    function drawHouses(houses) {
        var houseTemplate = ''
        for (let i = 0; i < houses.length; i++) {
            const house = houses[i];
            houseTemplate += `
        <div>
            <img src="${house.imgUrl}" alt="">
            <h3>Bedrooms: ${house.bedrooms}</h3>
            <h3>Bathrooms: ${house.bathrooms}</h3>
            <h3>Year: ${house.year}</h3>
            <h3>Levels: ${house.levels}
            <h3>Price: ${house.price}</h3>
            <button onclick="app.controllers.houseController.deleteHouse('${house._id}')">Delete</button>
            <h4>Description: ${house.description}</h3>
            <button onclick="app.controllers.houseController.discountHouse('${house._id}', ${house.price})">Deep Discount</button>
        </div>
        </div>
    `
        }
        document.getElementById('houses').innerHTML = houseTemplate
    }


    //PUBLIC
    this.addHouse = function addHouse(e) {
        e.preventDefault();
        var houseData = e.target
        var newHouse = {
            imgUrl: houseData.imgUrl.value,
            bedrooms: houseData.bedrooms.value,
            bathrooms: houseData.bathrooms.value,
            year: houseData.year.value,
            levels: houseData.levels.value,
            price: houseData.price.value,
            description: houseData.description.value
        }
        houseService.addHouse(newHouse)
        houseData.reset()
    }

    this.deleteHouse = function deleteHouse(id) {
        houseService.deleteHouse(id)
    }

    this.discountHouse = function discountHouse(id, price) {
        houseService.discountHouse(id, price)
    }





}