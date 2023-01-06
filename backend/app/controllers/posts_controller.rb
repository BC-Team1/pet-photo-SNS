class PostsController < ApplicationController
  # userの投稿一覧の表示
  # GET  user/:user_id/posts(.:format)
  def index
    # @post = Post.where(user_id: params[:user_id]).where(deleteFlag: false)
    @post = Post.includes(:user, :pet).where(deleteFlag: false)
    render json: @post.order(id: "DESC"), include: [:user, :pet], methods: [:image_url]
  end
  
  # すべての投稿一覧の表示
  # GET /index/posts/post_all(.:format)
  def post_all
    @post = Post.includes(:user, :pet).all
    render json: @post, include: [:user, :pet], methods: [:image_url] 
  end

  # 投稿詳細の表示
  # GET  /posts/:id(.:format)
  def show
    @post = Post.includes(:user, :pet).find(params[:id])
    render json: @post, include: [:user, :pet], methods: [:image_url]
  end

  # 新規投稿の作成
  def new
    @post = Post.new
  end

  # 新規投稿の登録
  # POST  /posts(.:format)
  def create  
      Post.transaction do  # トランザクションの開始
        if Pet.exists?(id: params[:pet_id],user_id: params[:user_id])  # バリデーション
          @post = Post.new(post_params)
          @post.image.attach(params[:image])

          @post.save!
          render json: { status: 'success', data: @post }, methods: [:image_url]
        else
          render plain: "User_id and pet_id do not match.", status: 400
        end
      end        
      rescue => e
        render plain: e.message, status: 500  # status: 500 でいいか?
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      redirect_to @post
    else
      render 'edit', status: :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.update(post_params_destroy)
      redirect_to @post
    else
      render 'edit', status: :unprocessable_entity
    end
  end

  private
  def post_params
    params.permit(:user_id, :pet_id, :caption, :imageId, :image)
  end

  def post_params_destroy
    params.permit(:deleteFlag, :deletedAt)
  end

end
