class API::CommentsController < ApplicationController
  before_action :get_comment, only: [:update, :delete]

  def create
    comment = Comment.new(comment_params)

    if comment.save
      render json: comment
    else
      render json: {error: comment.errors.full_messages.to_sentence}
    end
  end

  def update
    if comment.update(comment_params)
      render json: comment
    else
      render json: {error: comment.errors.full_messages.to_sentence}
    end
  end

  def delete
    if comment.delete
      render json: {comment_was: "deleted"}
    else
      render json: {error: comment.errors.full_messages.to_sentence}
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :user_id)
  end

  def get_comment
    comment = Comment.where("id = #{params[:id]}")
  end
end
