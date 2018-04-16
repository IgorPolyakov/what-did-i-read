# frozen_string_literal: true

module Api
  class MaterialsController < ApplicationController
    before_action :set_materials, only: %i[show update destroy]
    before_action :authenticate_user

    def index
      materials = Material.all
      if rubric = params[:rubric]
        materials = materials.where(rubric: rubric)
      elsif sort = params[:sort]
        materials = materials.order_by(sort.to_sym => 'desc')
      end
      render json: materials, status: :ok
    end

    def create
      material = Material.new(parameters)
      if material.save
        render json: material, status: :created
      else
        render json:  material.errors, status: :unprocessable_entity
      end
    end

    def show
      render json: @material
    end

    def update
      if @material.update(parameters)
        render json: @material
      else
        render json: @material.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @material.destroy
    end

    private

    def set_materials
      @material = Material.find_by(relative_reference: params[:relative_reference])
    end

    def parameters
      params.require(:materials).permit(:header_announcement, :cover, :body_material, :relative_reference, :rubric, :tags, :date_of_publication)
    end
  end
end
