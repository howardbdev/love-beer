class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :user_email

  belongs_to :beer
  belongs_to :user
end
