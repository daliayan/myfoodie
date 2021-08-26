const restaurantApi = new RestaurantApi('http://localhost:3000/restaurants');

class Restaurant {

    //constructing my restaurant data
    constructor({id, name, nationality, rating, city_id}){
        this.id = id;
        this.name = name;
        this.nationality = nationality;
        this.rating = rating;
        this.cityId = city_id;
    };
    
    // getting the restaurant data from CityApi
     getRestaurant(){
         const restaurantLi = document.createElement('li');
         const deleteRes = document.createElement('button');
        
         restaurantLi.innerText = this.name;
         restaurantLi.classList.add('restaurant-data', 'restaurant-addition');

         const restdata = document.createElement('div');
         restdata.className = "hidden-restaurant-data";
         restdata.classList.add('hidden');

        restdata.innerText = `Rating: ${this.rating} 
                Nationality: ${this.nationality}`;

        restaurantLi.appendChild(restdata);

        // getting the values of nationality/rating for restaurant upon click
        restaurantLi.addEventListener('click', () => {
            if (restdata.classList.contains('hidden')){
                console.log("connected click")
                restdata.classList.remove('hidden')
            } else {
                restdata.classList.add('hidden');
                console.log("HIDDEN");
            }
             return restaurantLi;
        });

         deleteRes.classList.add('delete-btn');
         deleteRes.innerText = 'x';

        // the ability to delete a restaurant upon click
         deleteRes.addEventListener('click', () => {
             restaurantApi.deleteRestaurant(this.id);
             restaurantLi.remove();
         });

         restaurantLi.appendChild(deleteRes);
         // Adds a new child node to an element as the last child node
        return restaurantLi;
     };
}