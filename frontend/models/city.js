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
        // const selectCityDropdown = document.createElement('option');
        // selectCityDropdown.classList.add('cityNames');
        // selectCityDropdown.appendChild(cityDiv);


        // selectCityDropdown.appendChild(cityDiv);
        // const cityForm = document.getElementById('city-list');
        // selectCityDropdown.id = `${this.id}`;
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