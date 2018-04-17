# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, path: '/' do
    resources :books
    resources :auth, only: :create
  end
end
