Rails.application.routes.draw do
  resources :users
  resources :scripts
  post('/login', { to: 'users#login' })
  get '/profile', to: 'users#profile'

end
