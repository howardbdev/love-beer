class RemoveBrewerIdFromBeers < ActiveRecord::Migration[5.1]
  def change
    remove_column :beers, :brewer_id
  end
end
