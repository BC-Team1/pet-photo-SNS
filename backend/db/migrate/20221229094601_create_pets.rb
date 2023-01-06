class CreatePets < ActiveRecord::Migration[7.0]
  def change
    create_table :pets do |t|
      t.references :user, null: false, foreign_key: true
      t.references :pet_category, null: false, foreign_key: true
      t.string :name
      t.text :introduction
      t.boolean :deleteFlag, default: false, null:false
      t.timestamp :deletedAt

      t.timestamps
    end
  end
end
