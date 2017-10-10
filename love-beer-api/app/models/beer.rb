class Beer < ApplicationRecord
  validates :name, :description, presence: true
  # belongs_to :brewer # DEPRECATED - TO BE REMOVED WHEN ALL ASSOCIATED REFERENCES ARE DELETED
  has_many :comments
  has_many :votes

  def self.find_or_new(beer_info)
    if Beer.where('lower(name) = ? and lower(brewer_name) = ?', beer_info[:name].downcase, beer_info[:brewer_name].downcase).first
      return nil
    else
      return Beer.new(beer_info)
    end
  end

  def vote_count
    self.upvotes < 0 ? 0 : self.upvotes
  end

end
