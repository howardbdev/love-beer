class Comment < ApplicationRecord
  # belongs_to :user
  validates :content, presence: true
  belongs_to :beer

  # def username
  #   u = User.where("id = #{self.user_id}").first.username
  # end
end
