class PetController < ApplicationController
  # userが登録しているペット一覧の表示
  def index
    @pet = Pet.find(params[:user_id])
  end

  # ペット詳細の表示
  def show
    @pet = Pet.find(params[:id])
  end

  # ペット情報の作成
  def new
    @pet = Pet.new
  end

  # ペット情報の登録
  def create
    @pet = Pet.new(pet_params)
    if @pet.save
      redirect_to @pet
    else
      render 'new', status: :unprocessable_entity
    end
  end

  # ペット情報の編集
  def edit
    @pet = Pet.find(params[:id])
  end

  # ペット情報の更新
  def update
    @pet = Pet.find(params[:id])
    if @pet.update(pet_params)
      redirect_to @pet
    else
      render 'edit', status: :unprocessable_entity
  end

  # ペット登録の論理削除
  def destroy
    @pet = Pet.find(params[:id])
    if @pet.update(pet_params_destroy)
      redirect_to @pet
    else
      render 'edit', status: :unprocessable_entity
  end

  private
  def pet_params
    params.require(:pet).permit(:pet_category, :name, :icon, :introduction)
  end

  def pet_params_destroy
    params.require(:pet).permit(:deleteFlag, :deletedAt)
end
