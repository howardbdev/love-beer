class Beer < ApplicationRecord
  validates :name, :brewer, :description, presence: true
  belongs_to :brewer
  has_many :comments
  has_many :votes
end
