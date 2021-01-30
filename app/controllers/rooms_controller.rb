class RoomsController < ApplicationController
    def index
        @rooms = Room.all.order(id: "DESC")
        @room = Room.new
    end

    def create
        # room = Room.create(name: params[:name])
        # render json:{ room: room }
        @room = Room.new(room_params)
        respond_to do |format|
            if @room.save
                format.js
            else
                format.js { head :no_content
                 }
            end
        end
    end

    private
    def room_params
        params.require(:room).permit(:name)
    end
    
end
