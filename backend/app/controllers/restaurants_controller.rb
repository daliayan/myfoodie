class RestaurantsController < ApplicationController
    
    before_action :made_restaurant, only: [:show, :destroy]

    def index
        restaurants = Restaurant.all
        render json: restaurants
    end

    def show
        render json: @restaurant
    end

    #Not new because I'm not working with views

    def create
        restaurant = Restaurant.create(restaurant_params)
        if restaurant.save
            render json: restaurant
        else
            render json: restaurant.errors
        end
    end

    def destroy
        @restaurant.destroy
        render json: {message: "Successfully Deleted #{@restaurant.name}"}
    end

    private

    def made_restaurant
        @restaurant = Restaurant.find(params[:id])
    end

    def restaurant_params
        params.permit(:name, :nationality, :rating, :city_id)
    end

end
