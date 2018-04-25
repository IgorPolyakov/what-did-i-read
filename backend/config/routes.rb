# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, path: '/' do
    resources :auth, only: :create
    resources :books
    resources :users
  end
end
