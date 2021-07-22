class CreateScripts < ActiveRecord::Migration[6.1]
  def change
    create_table :scripts do |t|
      t.string :name
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
