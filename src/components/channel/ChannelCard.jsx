const imageUrl = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpic.onlinewebfonts.com%2Fsvg%2Fimg_110805.svg&tbnid=vKKlaw3Yu8Cu0M&vet=12ahUKEwiC49bVz9aFAxW6PVkFHSs1CSEQMyhXegUIARCMAg..i&imgrefurl=https%3A%2F%2Fwww.onlinewebfonts.com%2Ficon%2F110805&docid=BEpbn-GF9rJJ4M&w=800&h=800&q=Default%20avatar%20png&ved=2ahUKEwiC49bVz9aFAxW6PVkFHSs1CSEQMyhXegUIARCMAg'

const ChannelAvatar = ({url}) => {
    return (
        <div className="channels-avatar-container">
            <img src={url ? url : imageUrl} width="100%" height="100%" alt='userImage'/>
        </div>
    )
}

export const ChannelCard = ({
    title,
    id,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler
}) => {
    const handleNavigate = () => {
        navigateToChannelHandler(id)
    }

    return (
        <div className="channel-card" onClick={handleNavigate}>
            <ChannelAvatar url={avatarUrl}/>
            <span className="channel-card-title">{title}</span>
            <span className="channel-card-title">{username}</span>
            <span className="channel-card-title" style={{color: isOnline ? 'green' : 'red'}}>
                {isOnline ? 'Online' : 'Ofline'}
            </span>
        </div>
    )
}