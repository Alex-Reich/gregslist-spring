function HomeController() {
    //CONTROLLERS ARE RESPONSIBLE FOR 
    //INTERACTING WITH THE DOM/USER
    //COMMUNICATION WITH THE SERVICE

    //PRIVATE
    var homeService = new HomeService()

    function drawHomes() {
        var homes = homeService.getHomes()
        var homeTemplate = ''
        for (let i = 0; i < homes.length; i++) {
            const home = homes[i];
            homeTemplate += `
        <div>
            <img src="${home.img}" alt="">
            <h3>Street: ${home.street}</h3>
            <h3>City: ${home.city}</h3>
            <h3>Year Built: ${home.yearBuilt}</h3>
            <h3>Price: ${home.price}</h3>
        </div>
    `
        }
        document.getElementById('homes').innerHTML = homeTemplate
    }

    drawHomes()

    //PUBLIC
    this.addHome = function addHome(e) {
        e.preventDefault();
        var homeData = e.target
        var newHome = {
            img: homeData.img.value,
            street: homeData.street.value,
            city: homeData.city.value,
            year: homeData.yearBuilt.value,
            price: homeData.price.value
        }
        homeService.addHome(newHome)
        drawHomes()
    }





}