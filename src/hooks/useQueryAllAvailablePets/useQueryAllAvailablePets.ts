import { useLazyQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

// useLazyQuery хук, который загружает данные на какое-то действие.
// useQuery хук, который загружает данные сразу при первом рендере.

const queryAllAvailablePets = loader('./gql/useQueryAllAvailablePets.graphql');

export const useQueryAllAvailablePets = () => {
  // первую функцию в массиве можно назвать как угодно, далее идет объект, где последовательность важна и наименование тоже (не меняем).
  const [ getAllAvailablePets, {loading, error, data}] = useLazyQuery(queryAllAvailablePets)

  return { getAllAvailablePets, loading, error, pets: data?.allAvailablePets }
}
