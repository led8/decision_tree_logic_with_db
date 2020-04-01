class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.integer :size
      t.integer :age
      t.string :gender
      t.string :color
      t.boolean :gift

      t.timestamps
    end
  end
end
