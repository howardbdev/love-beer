class Beer < ApplicationRecord
  validates :name, :brewer, :description, presence: true
  belongs_to :brewer
  has_many :comments
  has_many :votes

  def brewer_name
    self.brewer ? self.brewer.name : "no brewer listed"
  end

  def brewer_name=(name)
    @brewer_name = name
  end

end
