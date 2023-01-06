class PetsController < ApplicationController
  # userが登録しているペット一覧の表示
  # GET  user/:user_id/pets(.:format)
  def index
    @pet = Pet.where(user_id: params[:user_id])
    render json: @pet 
  end

  # ペット詳細の表示
  # GET  /pets/:id(.:format)
  def show
    @pet = Pet.find(params[:id])
    render json: { status: 'success', data: @pet }
  end

  # ペット情報の作成
  # GET /pets/new(.:format)
  def new
    @pet = Pet.new
  end

  # ペット情報の登録
  # POST  /pets(.:format)
  def create
    @pet = Pet.new(pet_params)
    if @pet.save
      render json: { status: 'success', data: @pet }
    else
      render 'new', status: :unprocessable_entity
    end
  end

  # ペット情報の編集
  # GET  /pets/:id/edit(.:format)
  def edit
    @pet = Pet.find(params[:id])
  end

  # ペット情報の更新
  # PUT  /pets/:id(.:format)
  def update
    @pet = Pet.find(params[:id])
    if @pet.update(pet_params)
      redirect_to @pet
    else
      render 'edit', status: :unprocessable_entity
    end
  end

  # ペット登録の論理削除
  # DELETE /pets/:id(.:format)
  def destroy
    @pet = Pet.find(params[:id])
    if @pet.update(pet_params_destroy)
      redirect_to @pet
    else
      render 'edit', status: :unprocessable_entity
    end
  end

  private
  def pet_params
    params.require(:pet).permit(:user_id, :pet_category_id, :name, :icon, :introduction)
  end

  def pet_params_destroy
    params.require(:pet).permit(:deleteFlag, :deletedAt)
  end
end
