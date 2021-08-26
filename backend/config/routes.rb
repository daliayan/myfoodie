Rails.application.routes.draw do
  
  resources :cities, only: [:index, :show]
  resources :restaurants, except: [:update]

end
