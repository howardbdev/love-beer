class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :beer

  def user_email
    u = User.where("id = #{self.user_id}").first.email
  end
end
