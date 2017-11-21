class Api::SessionController < ApplicationController

  def create
    # add capability for email login here if time
    # add capability for facebook login if time
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid username/password"], status: 401
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: { message: "Must be logged in to log out" }, status: 404
    end
  end

end
