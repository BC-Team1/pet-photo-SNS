Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :pets
  # Defines the root path route ("/")
  # root "articles#index"

  # テスト用APIのルート設定
  namespace :api do
    namespace :v1 do
      resources :hello, only:[:index]
    end
  end
end
