# frozen_string_literal: true

Rails.application.routes.draw do
  constraints subdomain: :api do
    namespace :api, path: '/' do
      resources :auth, only: :create
      resources :books
      resources :users
    end
  end
end
