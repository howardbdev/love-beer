class ChangeBeersTypeToTypeOf < ActiveRecord::Migration[5.1]
  def change
    rename_column :beers, :type, :style
  end
end
