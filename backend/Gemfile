# frozen_string_literal: true

source 'https://rubygems.org'
ruby '2.5.1'
git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'bcrypt'
gem 'jwt'
gem 'mongoid'
gem 'puma'
gem 'rails'
group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
end
group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'rubocop'
  gem 'rubycritic'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
