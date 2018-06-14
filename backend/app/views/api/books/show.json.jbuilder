# frozen_string_literal: true

json.set! :id, @book.id.to_s
json.set! :title, @book.title
json.set! :url_cover, @book.url_cover
json.set! :description, @book.description
json.set! :progress, @book.progress
json.set! :year, @book.year
json.set! :genre, @book.genre
json.set! :created_at, @book.created_at
json.set! :updated_at, @book.updated_at
json.set! :user_id, @book.user_id.to_s
