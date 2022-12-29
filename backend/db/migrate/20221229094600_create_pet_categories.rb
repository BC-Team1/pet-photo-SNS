class CreatePetCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :pet_categories do |t|
      t.string :category, null: false

      t.timestamps
    end
  end
end
