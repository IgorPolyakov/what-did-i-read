# frozen_string_literal: true

class Book
  include Mongoid::Document
  belongs_to :user
  field :title, type: String
  field :url_cover, type: String
  field :description, type: String
  field :progress, type: Integer
  field :year, type: Integer
  field :genre, type: Array, default: []
  field :created_at, type: DateTime, default: Time.zone.now
  field :updated_at, type: DateTime, default: Time.zone.now

  before_create :set_created_at, :set_updated_at
  before_save :set_updated_at

  protected

  def set_created_at
    self.created_at = Time.zone.now
  end

  def set_updated_at
    self.updated_at = Time.zone.now
  end
end
