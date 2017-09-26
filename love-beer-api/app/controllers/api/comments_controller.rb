class API::CommentsController < ApplicationController
  before_action :get_comment, only: [:update, :destroy]

  def index
    comments = Comment.where("beer_id = #{params[:beer_id]}")
    render json: comments
  end

  def create
    comment = Comment.new(comment_params)

    if comment.save
      render json: comment
    else
      render json: {error: comment.errors.full_messages.to_sentence}
    end
  end

  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: {error: @comment.errors.full_messages.to_sentence}
    end
  end

  def destroy
    if @comment.destroy
      render json: {comment_was: "deleted"}
    else
      render json: {error: @comment.errors.full_messages.to_sentence}
    end
  end

  private

  def comment_params
    params.permit(:content, :user_id, :beer_id)
  end

  def get_comment
    @comment = Comment.find_by(id: params[:id])
  end
end
