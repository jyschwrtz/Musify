Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create show index]
    resource :session, only: %i[new create destroy]
    resources :songs, only: %i[index show]
  end


end
