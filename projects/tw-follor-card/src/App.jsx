import './App.css'
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";


export function App () {

  const users = [
    {
      userName : 'midudev',
      name : 'Miguel Heredia',
      isFollowing: true
    },
    {
      userName : 'pepe',
      name : 'Pedro Garcia',
      isFollowing: false
    },
    {
      userName : 'lautibenitez',
      name : 'Lautaro Benitez',
      isFollowing: true
    },
    {
      userName : 'cristiano',
      name : 'CR7',
      isFollowing: false
    },
    {
      userName : 'leomessi',
      name : 'Lionel messi',
      isFollowing: true
    }
  ]

  return(
    <div className='App'>
      {users.map(user => {
        const {userName , name , isFollowing} = user
        return (
          <TwitterFollowCard key={userName} userName={userName} initialFollowing={isFollowing}>
            {name}
          </TwitterFollowCard>
        )
      })}
    </div>
  )
}
