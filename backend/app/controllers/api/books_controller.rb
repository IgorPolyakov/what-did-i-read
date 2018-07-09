# frozen_string_literal: true

module Api
  class BooksController < ApplicationController
    before_action :set_book, only: %i[show update destroy]
    before_action :authenticate_user

    def index
      @books = current_user.book.order_by(updated_at: 'asc')
    end

    def create
      book = current_user.book.new(parameters)
      if book.save
        render status: :created
      else
        render json: book.errors, status: :unprocessable_entity
      end
    end

    def show; end

    def update
      if @book.update(parameters)
        render status: :ok
      else
        render json: @book.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @book.destroy
    end

    private

    def set_book
      @book = Book.find(params[:id])
    end

    def parameters
      params
        .require(:book)
        .permit(
          :title,
          :url_cover,
          :description,
          :progress,
          genre: []
        )
    end
  end
end
