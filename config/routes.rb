Rails.application.routes.draw do
  root to:"rooms#index"
  resources :rooms, only: :create
end