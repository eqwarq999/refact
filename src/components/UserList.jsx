export default function UserList({ users }) {
  if (users.length === 0) {
    return <p className="status-message">Пользователи не найдены</p>
  }

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li className="user-card" key={user.id}>
          <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
          <p className="user-company">{user.company?.name}</p>
        </li>
      ))}
    </ul>
  )
}
