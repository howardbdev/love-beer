class AddUrlToBeers < ActiveRecord::Migration[5.1]
  def change
    add_column :beers, :image_url, :string
    add_column :beers, :url, :string
  end
end
