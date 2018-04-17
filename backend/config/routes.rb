# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, path: '/' do
    resources :books, param: :relative_reference
    resources :auth, only: :create
  end
end
