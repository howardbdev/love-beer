class CreateBeers < ActiveRecord::Migration[5.1]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :brewer
      t.string :type
      t.string :description
      t.integer :upvotes

      t.timestamps
    end
  end
end
