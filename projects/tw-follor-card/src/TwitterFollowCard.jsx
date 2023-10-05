import { useState } from "react"

export function TwitterFollowCard({children ,userName, initialFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClaseName = isFollowing ? 'tw-card-followButton is-following' : 'tw-card-followButton'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-card-follow'>
            <header className='tw-card-followHeader'>
                <img className='tw-card-followAvatar' alt='El avatar de midu dev' src={`https://unavatar.io/${userName}`} />
                <div className='tw-card-followInfo'>
                    <strong className='tw-card-followInfo-name'>{children}</strong>
                    <span className='tw-card-followInfo-user'>@{userName}</span>
                </div>
            </header>
    
            <aside>
                <button className={buttonClaseName} onClick={handleClick}>
                    <span className="tw-followCard-follow">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}