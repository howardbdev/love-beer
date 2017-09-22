class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :style, :description, :upvotes, :created_at, :updated_at, :image_url, :url, :brewer_id

  belongs_to :brewer
  has_many :comments
end
