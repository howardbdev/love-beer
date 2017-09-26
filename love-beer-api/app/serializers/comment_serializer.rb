class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :username, :beer

  # belongs_to :beer
  # belongs_to :user

  def beer
    Beer.where("id = #{self.object.beer_id}").first.name
  end
end
