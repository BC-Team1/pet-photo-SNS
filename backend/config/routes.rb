Rails.application.routes.draw do
  # user_idから関連テーブルの一覧取得用
  resources :user do
    resources :pets, only: [:index]
    resources :posts, only: [:index]
  end

  # その他のpet contoroller用
  resources :pets, only: [:show, :new, :create, :edit, :update, :destroy]

  # その他のpost contoroller用
  resources :posts, only: [:show, :new, :create, :edit, :update, :destroy]

end
