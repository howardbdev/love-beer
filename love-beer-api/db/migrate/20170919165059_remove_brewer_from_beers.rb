class RemoveBrewerFromBeers < ActiveRecord::Migration[5.1]
  def change
    remove_column :beers, :brewer
  end
end
