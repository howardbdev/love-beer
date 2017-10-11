class Beer < ApplicationRecord
  validates :name, :description, presence: true
  has_many :comments

  def self.find_or_new(beer_info)
    if Beer.where('lower(name) = ? and lower(brewer_name) = ?', beer_info[:name].downcase, beer_info[:brewer_name].downcase).first
      return nil
    else
      return Beer.new(beer_info)
    end
  end

end
