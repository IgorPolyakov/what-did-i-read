# frozen_string_literal: true

json.array! @books do |book|
  json.id book.id.to_s
  json.title book.title
  json.url_cover book.url_cover
  json.description book.description
  json.progress book.progress
  json.year book.year
  json.genre book.genre.each do |genre|
    json.tag genre
  end
  json.created_at book.created_at
  json.updated_at book.updated_at
  json.user_id book.user_id.to_s
end
