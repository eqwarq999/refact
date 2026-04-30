import { useMemo, useState } from 'react'
import SearchInput from './components/SearchInput.jsx'
import UserList from './components/UserList.jsx'
import useFetch from './hooks/useFetch.js'
import { getUsers } from './services/userService.js'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const { data: users, isLoading, error } = useFetch(getUsers, [])

  const filteredUsers = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    if (!normalizedQuery) {
      return users
    }

    return users.filter((user) =>
      user.name.toLowerCase().includes(normalizedQuery),
    )
  }, [searchQuery, users])

  return (
    <main className="users-page">
      <section className="users-panel" aria-labelledby="users-title">
        <header className="users-header">
          <div>
            <p className="users-eyebrow">JSONPlaceholder API</p>
            <h1 id="users-title">Пользователи</h1>
          </div>
          {!error && (
            <p className="users-count">
              Найдено {filteredUsers.length} из {users.length}
            </p>
          )}
        </header>

        <SearchInput value={searchQuery} onChange={setSearchQuery} />

        <div className="users-content">
          {isLoading && (
            <p className="status-message">Загрузка пользователей...</p>
          )}

          {error && (
            <p className="status-message status-message--error" role="alert">
              {error}
            </p>
          )}

          {!isLoading && !error && <UserList users={filteredUsers} />}
        </div>
      </section>
    </main>
  )
}

export default App
