Rails.application.routes.draw do
  root to: 'pages#home'

  post "/cats", to: "cats#create", as: "create_cat"
  get "/cat/new", to: "cats#new", as: "new_cat"
  patch "/cats/:id", to: "cats#update", as: "update_cat"
  get "/cats/:id/edit", to: "cats#edit", as: "edit_cat"
end
