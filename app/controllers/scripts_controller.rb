class ScriptsController < ApplicationController

    def index
        @scripts = Script.all
        render json: @scripts
    end

end
