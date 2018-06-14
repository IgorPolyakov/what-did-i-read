# frozen_string_literal: true

module Api
  class UsersController < ApplicationController
    before_action :set_user, only: %i[show update destroy]
    skip_before_action :authenticate_user
    # GET /users
    def index
      @users = User.all
    end

    # GET /users/1
    def show; end

    # POST /users
    def create
      @user = User.new(user_params)

      if @user.save
        render status: :created
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /users/1
    def update
      if @user.update(user_params)
        render status: :ok
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end

    # DELETE /users/1
    def destroy
      @user.destroy
    end

    private

    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params
        .require(:user)
        .permit(
          :email,
          :name,
          :password
        )
    end
  end
end
