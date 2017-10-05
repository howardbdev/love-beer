class Beer < ApplicationRecord
  validates :name, :description, presence: true
  # belongs_to :brewer # DEPRECATED - TO BE REMOVED WHEN ALL ASSOCIATED REFERENCES ARE DELETED
  has_many :comments
  has_many :votes

end
