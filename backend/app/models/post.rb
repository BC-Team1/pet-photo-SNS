class Post < ApplicationRecord
  include Rails.application.routes.url_helpers

  belongs_to :user
  belongs_to :pet
  
  has_one_attached :image
  
  # 紐づいている画像のURLを取得する
  def image_url
    image.attached? ? url_for(image) : nil
  end
  
  # 画像データのバリデーション
  validate :validate_image

  def validate_image
    errors.add(:image, "画像データではありません。") unless image?
  end

  def image?
    return '' unless image.attached?

    %w[image/jpg image/jpeg image/png image/gif].include?(image.blob.content_type)
  end
end
