class CatsController < ApplicationController
  def index
  end

  def new
  end

  def create
  end

  private

  def strong_params
    params.require(:cat).permit(:name, :size, :age, :gender, :color, :gift)
  end
end
