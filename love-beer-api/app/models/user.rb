class User < ApplicationRecord
  has_many :comments
  # probably_loves :beer
end
