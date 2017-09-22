class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :beer

  def username
    u = User.where("id = #{self.user_id}").first.username
  end
end
