class CreateFavs < ActiveRecord::Migration[7.0]
  def change
    create_table :favs do |t|
      t.references :post, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.boolean :favFlag
      t.boolean :deleteFlag
      t.timestamp :deletedAt

      t.timestamps
    end
  end
end
