class API::BeersController < ApplicationController
  before_action :get_beer, only: [:show, :update, :destroy]

  def index
    render json: Beer.all
  end

  def show
    render json: @beer
  end

  def create
    beer = Beer.find_or_new(beer_params)

    if beer && beer.save
      render json: beer
    elsif !beer
      render json: {error: "that beer already exists"}
    else
      render json: {error: "There was a problem saving your beer " + beer.errors.full_messages.to_sentence}, status: :unprocessable_entity
    end

  end

  def update
    bp = beer_params
    if bp[:upvotes]
      vote = bp[:upvotes] > 0 ? 1 : -1
      bp[:upvotes] = @beer.upvotes + vote
    end

    if @beer.update(bp)
      puts "upvotes " + @beer.upvotes.to_s
      render json: @beer
    else
      render json: {error: "There was a problem updating your beer " + @beer.errors.full_messages.to_sentence}
    end
  end

  def destroy
    if @beer && @beer.destroy
      render status: 201
    else
      render json: {error: "There was a problem deleting that beer " + @beer.errors.full_messages.to_sentence}
    end
  end

  private

  def beer_params
    params.require(:beer).permit(:name, :style, :description, :url, :image_url, :upvotes, :brewer_name)
  end

  def get_beer
    @beer = Beer.find_by(id: params[:id])
  end

end
