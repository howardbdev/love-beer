class API::BrewersController < ApplicationController
  def index
    render json: Brewer.all
  end
end
