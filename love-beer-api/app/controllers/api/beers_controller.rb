class API::BeersController < ApplicationController
  def index
    render json: Beer.all
  end

  def show
    beer = Beer.where("id = #{params[:id]}")
    render json: beer
  end

  def create

  end

  def update

  end

  def delete

  end

  private

  def beer_params
    params.require(:beer).permit(:name, :brewer_id, :style, :description, :url, :image_url, :upvotes)
  end

end
