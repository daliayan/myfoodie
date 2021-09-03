class City {

    constructor({id, name, restaurants}){
        this.name = name;
        this.id = id;
        this.restaurants = restaurants;
    };

    getCity(){
        const cityList = document.getElementById('city-list');
        const cityDiv = document.createElement('div');
        cityDiv.classList.add('city-list');

        const cityInfo = this.getCityInfo();
        const restaurants = this.getCityRestaurants();
      
        cityDiv.appendChild(cityInfo);
        cityList.appendChild(cityDiv);
        cityList.appendChild(restaurants);

        // const cityForm = document.getElementById('city-list');
        const selectCityDropdown = document.createElement('option');
        selectCityDropdown.id = `${this.id}`;
        selectCityDropdown.classList.add('cityNames');

        // this.cityName.forEach(cityName => {
        //     const citName = new City(cityName);
        //     const listNames = citNames.getCityInfo();
        // })


        // selectCityDropdown.appendChild(cityDiv);
        // const cityForm = document.getElementById('city-list');
        
        // cityForm.classList.add('city-form-dropdown')
        // cityForm.innerHTML  = `${this.name}`;


    };

    getCityInfo(){
        const cityData = document.createElement('div');
        
        cityData.innerHTML = `${this.name}`; 
        return cityData;
    }

    getCityRestaurants(){
        const restaurantUl = document.createElement('ul');
        restaurantUl.id = `city-${this.id}`;
        restaurantUl.classList.add('restaurants');
        
        this.restaurants.forEach(restaurant => {
            const newRestaurant = new Restaurant(restaurant);

            const li = newRestaurant.getRestaurant();
            restaurantUl.appendChild(li);
        });
        return restaurantUl;
    };
};