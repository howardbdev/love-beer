class AddBrewerIdToBeers < ActiveRecord::Migration[5.1]
  def change
    add_column :beers, :brewer_id, :integer
  end
end
