import { useEffect, useState } from 'react'

export default function useFetch(fetchFunction, initialData = []) {
  const [data, setData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true)
        setError(null)

        const result = await fetchFunction()
        setData(result)
      } catch (error) {
        setError(error.message || 'Не удалось загрузить данные')
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [fetchFunction])

  return { data, isLoading, error }
}
