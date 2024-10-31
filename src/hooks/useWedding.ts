import { useQuery } from '@tanstack/react-query'
import { getWedding } from '../api/wedding'
import { Wedding } from '../models/wedding'

function useWedding() {
  const { isLoading, error, data } = useQuery<Wedding>({
    queryKey: ['wedding'],
    queryFn: () =>
      getWedding().then((res) => {
        if (res.ok === false) {
          throw new Error('Network response was not ok')
        }
        return res.json()
      }),
    suspense: true,
  })

  return { wedding: data, isLoading, error }
}

export default useWedding
