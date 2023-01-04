Rails.application.routes.draw do
  # user_idからpet一覧取得用
  resources :user do
    resources :pets, only: [:index]
  end
  # その他のpet contoroller用
  resources :pets, only: [:show, :new, :create, :edit, :update, :destroy]
  
  # テスト用APIのルート設定
  namespace :api do
    namespace :v1 do
      resources :hello, only:[:index]
      
    end
  end
end
