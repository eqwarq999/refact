const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

export async function getUsers() {
  const response = await fetch(USERS_URL)

  if (!response.ok) {
    throw new Error('Не удалось загрузить пользователей')
  }

  return response.json()
}
