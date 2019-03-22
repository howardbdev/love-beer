class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :style, :description, :upvotes, :created_at, :updated_at, :image_url, :url, :brewer_name, :beef

  has_many :comments

  def beef
    "BEEF"
  end
end
