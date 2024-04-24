import toast from "react-hot-toast";
import { followChannel as followChanelRequest } from "../../services";

export const useFollowChannel = () =>{
    const followChannel =async (channelId, onSucces) => {
        const responseData = await followChanelRequest(channelId)

        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data ||
                'Ocurrio un error al seguir al canal'
            )
        }

        toast.success('Channel followed successfully')

        onSucces(true)

        return{
            followChannel
        }
    }
}