class API::CommentsController < ApplicationController
  def index
    render json: {comments_index: "I'm the comments index"}
  end
end
