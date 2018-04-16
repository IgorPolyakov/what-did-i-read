# frozen_string_literal: true

Rails.application.routes.draw do
  # constraints subdomain: 'api' do
  namespace :api, path: '/' do
    resources :materials, param: :relative_reference
    resources :auth, only: :create
  end
  # end
end
