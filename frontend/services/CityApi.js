class CityApi {

    constructor(baseURL){
        this.baseURL = baseURL; //the url I'm fetching from
    };

    getCities(){
        fetch(this.baseURL)
        .then(resp => resp.json())
        .then(json => json.forEach(cityObj => {
                const cit = new City(cityObj)
                cit.getCity();
        })
    )};
};