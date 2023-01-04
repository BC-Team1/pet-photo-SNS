class Pet < ApplicationRecord
  belongs_to :user
  belongs_to :pet_category
  has_many :posts

  
end
