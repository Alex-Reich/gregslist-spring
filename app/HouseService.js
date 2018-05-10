function HouseService(cb) {
    //This is where the data lives
    var baseUrl = "https://bcw-gregslist.herokuapp.com/api/houses"

    //PRIVATE
    var houses = []

    function House(img, year, bedrooms, bathrooms, levels, price, description) {
        this.imgUrl = img || "//placehold.it/200x200"
        this.year = year
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.levels = levels
        this.price = price
        this.description = description || "No description provided, so make up your own!"
    }



    function loadHouses() {
        $.get(baseUrl).then(res => {
            cb(res.data)
        })
    }
    loadHouses()
    //PUBLIC

    this.addHouse = function addHouse(house) {
        var newHouse = new House(house.img, house.year, house.bedrooms, house.bathrooms, house.price, house.levels, house.description)
        $.post(baseUrl, newHouse)
            .then(res => {
                loadHouses()
            })
    }
    this.deleteHouse = function deleteHouse(id) {
        $.ajax({
            method: "DELETE",
            url: baseUrl + "/" + id
        }).then(res => {
            loadHouses()
        })
    }
    this.discountHouse = function discountHouse(id, price) {
        $.ajax({
            method: "PUT",
            url: baseUrl + "/" + id,
            contentType: "application/JSON",
            data: JSON.stringify({
                price: price * .9
            })
        }).then(res => {
            loadHouses()
        })
    }



}