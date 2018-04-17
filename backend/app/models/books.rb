# frozen_string_literal: true

class Books
  include Mongoid::Document
  field :title, type: String
  field :url_cover, type: String
  field :description, type: String
  field :progress, type: Integer
end
