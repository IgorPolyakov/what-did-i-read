# frozen_string_literal: true

class AuthenticateUserCommand < BaseCommand
  private

  attr_reader :email, :password

  def initialize(email, password)
    @email = email
    @password = password
  end

  def user
    @user ||= User.find_by(email: email)
  end

  def password_valid?
    user&.authenticate(password)
  end

  def payload
    if password_valid?
      @result = JwtService.encode(contents)
    else
      errors.add(:base, 'User credentials invalid!')
    end
  end

  def contents
    {
      user_id: user.id,
      email: user.email,
      exp: 24.hours.from_now.to_i
    }
  end
end
