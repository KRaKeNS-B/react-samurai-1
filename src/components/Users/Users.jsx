import React from 'react'
import styles from './Users.module.css'

let Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      { id: 1, avatarUrl: 'https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg', followed: false, fullName: 'Dimych', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
      { id: 2, avatarUrl: 'https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg', followed: true, fullName: 'Andrey', status: 'I am a boss 2', location: { city: 'Moscow', country: 'Russia' } },
      { id: 3, avatarUrl: 'https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg', followed: false, fullName: 'Mary', status: 'I am a boss too', location: { city: 'Kiev', country: 'Ukraine' } },
      { id: 4, avatarUrl: 'https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg', followed: true, fullName: 'Sveta', status: 'I am a boss 3', location: { city: 'Moscow', country: 'USA' } },
    ])
  }
  
  let usersElements = props.users.map( user =>
    <div key={ user.id }>
      <span>
        <div>
          <img src={ user.avatarUrl } alt="Ava" className={ styles.userPhoto } />
        </div>
        <div>
          { user.followed
            ? <button onClick={ () => props.unfollow(user.id) } >Unfollow</button>
            : <button onClick={ () => props.follow(user.id) } >Follow</button>
          }
        </div>
      </span>
      <span>
        <span>
          <div>
            { user.fullName }
          </div>
          <div>
            { user.status }
          </div>
        </span>
        <span>
          <div>
            { user.location.city }
          </div>
          <div>
            { user.location.country }
          </div>
        </span>
      </span>
    </div>
  )

  return <div>
    { usersElements }
  </div>
}

export default Users
