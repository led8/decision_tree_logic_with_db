class CatsController < ApplicationController
  before_action :find_cat_id, only: [ :update ]

  def index
  end

  def new
    @cat = Cat.new
  end

  def create
    @cat = Cat.new(strong_params)

    if @cat.save
      render partial: "cats/partials/ajax_edit"
    end
  end

  def edit
    render partial: "cats/partials/ajax_edit"
  end

  def update
    if @cat.update(strong_params)
      render :edit
    end
  end

  private

  def strong_params
    params.require(:cat).permit(:name, :size, :age, :gender, :color, :gift)
  end

  def find_cat_id
    @cat = Cat.find(params[:id])
  end
end
