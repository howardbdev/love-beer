class AddUrlToBrewers < ActiveRecord::Migration[5.1]
  def change
    add_column :brewers, :url, :string
  end
end
