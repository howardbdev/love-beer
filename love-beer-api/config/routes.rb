Rails.application.routes.draw do
  namespace :api do
    resources :beers, except: [:new, :edit] do
      resources :comments, except: [:new, :edit, :show]
    end
  end
end
