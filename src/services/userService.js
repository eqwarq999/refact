const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users'

export async function getUsers(signal) {
  const response = await fetch(USERS_API_URL, { signal })

  if (!response.ok) {
    throw new Error(`Ошибка загрузки пользователей: ${response.status}`)
  }

  const users = await response.json()

  if (!Array.isArray(users)) {
    throw new Error('Сервер вернул некорректный формат данных')
  }

  return users
}
