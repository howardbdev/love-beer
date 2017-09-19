class Beer < ApplicationRecord
  belongs_to :brewer
  has_many :comments
  has_many :votes
end
