class CreateBrewers < ActiveRecord::Migration[5.1]
  def change
    create_table :brewers do |t|
      t.string :name
      t.string :location
      t.integer :established

      t.timestamps
    end
  end
end
