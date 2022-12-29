class Api::V1::HelloController < ApplicationController
  def index
    render json: "Hello this is rails api"
    logger.debug "デバッグ logger コンソールに出力"
  end
end
