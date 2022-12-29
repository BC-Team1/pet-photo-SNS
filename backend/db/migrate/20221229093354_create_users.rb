class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :UID
      t.text :introduction
      t.string :icon
      t.boolean :deleteFlag, default: false, null:false
      t.timestamp :deletedAt

      t.timestamps
    end
  end
end
