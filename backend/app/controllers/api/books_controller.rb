# frozen_string_literal: true

module Api
  class BooksController < ApplicationController
    before_action :set_books, only: %i[show update destroy]
    skip_before_action :authenticate_user

    def index
      books = Books.all
      render json: books, status: :ok
    end

    def create
      book = Books.new(parameters)
      if book.save
        render json: book, status: :created
      else
        render json:  book.errors, status: :unprocessable_entity
      end
    end

    def show
      render json: @book
    end

    def update
      if @book.update(parameters)
        render json: @book
      else
        render json: @book.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @book.destroy
    end

    private

    def set_books
      @book = Books.find_by(relative_reference: params[:relative_reference])
    end

    def parameters
      params.require(:books).permit(:title, :url_cover, :description, :progress)
    end
  end
end
