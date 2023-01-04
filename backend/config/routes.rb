Rails.application.routes.draw do
  # user_idに紐づく情報の一覧取得用
  resources :user do
    resources :pets, only: [:index]
    resources :posts, only: [:index]
  end

  # その他のpets contoroller用
  resources :pets, only: [:show, :new, :create, :edit, :update, :destroy]

  # その他のposts contoroller用
  resources :posts, only: [:show, :new, :create, :edit, :update, :destroy]

  
  # テスト用APIのルート設定
  namespace :api do
    namespace :v1 do
      resources :hello, only:[:index]
      
    end
  end
end
