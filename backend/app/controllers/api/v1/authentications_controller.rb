class Api::V1::AuthenticationsController < ApplicationController
  def create
    render json: { message: "ログインに成功しました" } if current_user
  end
end
