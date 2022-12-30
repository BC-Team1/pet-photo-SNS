class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.references :user, null: false, foreign_key: true
      t.references :pet, null: false, foreign_key: true
      t.string :imageId
      t.text :caption
      t.boolean :deleteFlag, default: false, null:false
      t.timestamp :deletedAt
      
      t.timestamps
    end
  end
end
