class API::BeersController < ApplicationController
  before_action :get_beer, only: [:show, :update, :destroy]

  def index
    render json: Beer.all
  end

  def show
    render json: @beer
  end

  def create

    beer = Beer.where('lower(name) = ?', params[:beer][:name].downcase).first_or_create(name: params[:beer][:name])
    brewer = Brewer.where('lower(name) = ?', params[:beer][:brewer_name].downcase).first_or_create(name: params[:beer][:brewer_name])
    beer.brewer = brewer
    beer.update(beer_params)

    if beer.save
      render json: beer
    else
      render json: {error: "There was a problem saving your beer " + beer.errors.full_messages.to_sentence}
    end

  end

  def update
    if @beer.update(beer_params)
      render json: @beer
    else
      render json: {error: "There was a problem updating your beer " + @beer.errors.full_messages.to_sentence}
    end
  end

  def destroy
    if @beer  && @beer.delete
      render status: 201
    else
      render json: {error: "There was a problem deleting that beer " + @beer.errors.full_messages.to_sentence}
    end
  end

  private

  def beer_params
    params.permit(:name, :brewer_id, :style, :description, :url, :image_url, :upvotes, :brewer_name)
  end

  def get_beer
    @beer = Beer.find_by(id: params[:id])
  end

end
