class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.references :user, null: false, foreign_key: true
      t.references :pet_category, null: false, foreign_key: true
      t.string :imageId
      t.text :caption
      t.boolean :deleteFlag
      t.timestamp :deletedAt
      
      t.timestamps
    end
  end
end
