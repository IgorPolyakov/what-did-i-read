# frozen_string_literal: true

json.array! @users do |user|
  json.id user.id.to_s
  json.name user.name
  json.email user.email
end
