const UserInfo = ({users,showGames,toggleGameDisplay}) => {
    return(
        <>
        <h1>User Details:</h1>
        {users.length > 0 &&
        <div>
           {showGames?(<ol>{users.map((user) => <li>{user.userName} played {user.games} games <button onClick={toggleGameDisplay}>Hide Games</button></li> )}</ol>):(<ol>{users.map((user) => <li>{user.userName} <button onClick={toggleGameDisplay}>Hide Games</button> </li> )}</ol>)}
        </div>
}
        </>
    )
}

export default UserInfo