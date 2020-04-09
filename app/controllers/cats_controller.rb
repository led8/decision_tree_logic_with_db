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
      render :edit
    end
  end

  def edit
    render partial: "cats/partials/ajax_edit"
  end

  def update
    if @cat.update(strong_params)
      @model_params = {
        name: @cat.name,
        size: @cat.size,
        age: @cat.age,
        gender: @cat.gender,
        color: @cat.color,
        gift: @cat.gift
      }.to_json

      render partial: "cats/partials/ajax_edit", model_params: @model_params
    end


  end

  private

  def strong_params
    params.require(:cat).permit(:init, :name, :size, :age, :gender, :color, :gift)
  end

  def find_cat_id
    @cat = Cat.find(params[:id])
  end
end
