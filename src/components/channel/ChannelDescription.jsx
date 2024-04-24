import { followChannel } from "../../services";
import { useFollowChannel, useUserDetails } from "../../shared/hooks";

const FollowChannel = ({channelId, getChannels}) => {
    const { FollowChannel } = useFollowChannel();

    const handleFollowChannel = () =>{
        followChannel(channelId, getChannels)
    }

    return <button onClick={handleFollowChannel} className="channel-follow-button"> Follow </button>
 }

 export const ChannelDescription = ({
    username,
    title,
    description,
    channelId,
    getChannels
 }) => {
    const { isLogged } = useUserDetails()

    return (
        <div className="channel-description-container">
            <span className="channel-description-title">
                {username}
                <span>
                    {isLogged && (
                        <FollowButton
                            className='channel-follow-button'
                            channelId={channelId}
                            getChannels={getChannels}
                        />
                    )}
                </span>
                <span className="channel-description-title">
                    {title}
                </span>
                <div className="channe-description-box">
                    <span className="channel-description">{description}</span>
                </div>
            </span>
        </div>
    )
 }