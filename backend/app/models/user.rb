class User < ApplicationRecord
  has_many :pets, dependent: :destroy
    has_many :pet_categories, through: :pets
  has_many :posts, dependent: :destroy
  
  
  
    
end
