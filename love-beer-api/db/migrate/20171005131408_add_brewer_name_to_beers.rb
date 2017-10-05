class AddBrewerNameToBeers < ActiveRecord::Migration[5.1]
  def change
    add_column :beers, :brewer_name, :string
  end
end
