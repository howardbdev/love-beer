class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :username

  belongs_to :beer
  belongs_to :user
end
