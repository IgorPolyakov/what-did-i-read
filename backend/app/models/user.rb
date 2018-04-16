# frozen_string_literal: true

class User
  include Mongoid::Document
  include ActiveModel::SecurePassword
  has_secure_password
  validates_presence_of :email
  field :email, type: String
  field :password_digest, type: String
end
