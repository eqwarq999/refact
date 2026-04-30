import { useEffect, useState } from 'react'

export default function useFetch(fetcher, initialData = null) {
  const [data, setData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    let isActive = true

    const loadData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const result = await fetcher(controller.signal)

        if (isActive) {
          setData(result)
        }
      } catch (requestError) {
        if (!isActive || requestError?.name === 'AbortError') {
          return
        }

        setError(
          requestError instanceof Error
            ? requestError.message
            : 'Не удалось загрузить данные',
        )
      } finally {
        if (isActive) {
          setIsLoading(false)
        }
      }
    }

    loadData()

    return () => {
      isActive = false
      controller.abort()
    }
  }, [fetcher])

  return { data, isLoading, error }
}
