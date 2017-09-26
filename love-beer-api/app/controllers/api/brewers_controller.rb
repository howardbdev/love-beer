class API::BrewersController < ApplicationController
  before_action :get_brewer, only: [:show, :update, :destroy]

  def index
    render json: Brewer.all
  end

  def show
    render json: @brewer
  end

  def create
    brewer = Brewer.new(brewer_params)

    if brewer.save
      render json: brewer
    else
      render json: {error: "There was a problem saving your brewer " + brewer.errors.full_messages.to_sentence}
    end

  end

  def update
    if @brewer.update(brewer_params)
      render json: @brewer
    else
      render json: {error: "There was a problem updating your brewer " + @brewer.errors.full_messages.to_sentence}
    end
  end

  def destroy
    if @brewer.destroy
      render json: Brewer.all
    else
      render json: {error: "There was a problem deleting that brewer " + @brewer.errors.full_messages.to_sentence}
    end
  end

  private

  def brewer_params
    params.permit(:name, :location, :established, :url)
  end

  def get_brewer
    @brewer = Brewer.where("id = #{params[:id]}")
  end

end
