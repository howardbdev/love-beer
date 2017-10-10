class AddDefaultValueToUpvotesForBeers < ActiveRecord::Migration[5.1]
  def change
    change_column_default(:beers, :upvotes, 0)
  end
end
