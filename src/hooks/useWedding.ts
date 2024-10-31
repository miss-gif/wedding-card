import { useQuery } from '@tanstack/react-query'
import { getWedding } from '../api/wedding'
import { Wedding } from '../models/wedding'

function useWedding() {
  const { isLoading, error, data } = useQuery<Wedding>({
    queryKey: ['wedding'],
    queryFn: async () => {
      const res = await getWedding()
      if (!res.ok) throw new Error('청첩장 정보를 불러오지 못했습니다.')
      return res.json()
    },
    suspense: true,
  })

  return { wedding: data, isLoading, error }
}

export default useWedding
