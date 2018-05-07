# frozen_string_literal: true

class User
  include Mongoid::Document
  include ActiveModel::SecurePassword
  has_many :book
  has_secure_password
  validates :email, presence: true
  field :email, type: String
  field :password_digest, type: String
end
