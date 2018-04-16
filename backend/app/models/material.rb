# frozen_string_literal: true

class Material
  include Mongoid::Document
  validates_presence_of :header_announcement, :body_material, :relative_reference, :rubric, :date_of_publication
  validates_uniqueness_of :relative_reference
  field :header_announcement, type: String
  field :cover, type: String
  field :body_material, type: String
  field :relative_reference, type: String
  field :rubric, type: String
  field :tags, type: Array
  field :date_of_publication, type: Date
end
