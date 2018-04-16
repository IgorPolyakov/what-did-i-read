# frozen_string_literal: true

module Api
  class AuthController < ApplicationController
    skip_before_action :authenticate_user
    def create
      token_command = AuthenticateUserCommand.call(*params.slice(:email, :password).values)
      if token_command.success?
        render json: { token: token_command.result }, status: :ok
      else
        render json: { token: token_command.errors }, status: :unauthorized
      end
    end
  end
end
