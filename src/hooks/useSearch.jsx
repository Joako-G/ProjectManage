import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const firstInput = useRef(true)

  useEffect(() => {
    if (firstInput.current) {
      firstInput.current = query === ''
      return
    }

    if (query === '') {
      setError('Debe ingresar nombre de proyecto')
      return
    }

    setError(null)
  }, [query])

  return { error, query, setQuery }
}
