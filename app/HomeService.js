function HomeService() {
    //This is where the data lives

    //PRIVATE
    var homes = []
    var id = 1

    function Home(img, year, street, city, price) {
        this.id = id
        this.img = img
        this.yearBuilt = year
        this.street = street
        this.city = city
        this.price = price
        id++
    }

    var home1 = new Home('https://photos.zillowstatic.com/p_h/ISe4ke437vghf21000000000.jpg', 1994, '5734 S Flax Pl', 'Boise', 239900)
    var home2 = new Home('https://photos.zillowstatic.com/p_h/ISu8e5680la4841000000000.jpg', 1959, '512 S Franklin Park Dr', 'Boise', 215000)
    var home3 = new Home('https://photos.zillowstatic.com/p_h/IS6ue1wfo1nhgg0000000000.jpg', 2010, '7165 E Yellow Fern Rd', 'Nampa', 205000)

    homes.push(home1, home2, home3)


    //PUBLIC
    this.getHomes = function getHomes() {
        return JSON.parse(JSON.stringify(homes))
    }

    this.addHome = function addHome(home) {
        var newHome = new Home(home.img, home.year, home.street, home.city, home.price)
        homes.unshift(newHome)
    }




}