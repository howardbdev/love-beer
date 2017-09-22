class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :style, :description, :upvotes, :created_at, :updated_at, :image_url, :url

  has_many :comments
  belongs_to :brewer
end
