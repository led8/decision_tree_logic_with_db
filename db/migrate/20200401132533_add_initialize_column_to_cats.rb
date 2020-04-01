class AddInitializeColumnToCats < ActiveRecord::Migration[6.0]
  def change
    add_column :cats, :init, :boolean
  end
end
