import { useMemo, useState } from 'react';

export const useSortMotorhomes = (motorhomes = []) => {
  const [isDesc, setIsDesc] = useState(false);

  const sortedMotorhomes = useMemo(() => {
    const sortableMotorhomes = [...motorhomes];

    sortableMotorhomes.sort((a, b) => {
      if (a.price < b.price) return isDesc ? 1 : -1;
      if (a.price > b.price) return isDesc ? -1 : 1;

      return 0;
    });

    return sortableMotorhomes;
  }, [isDesc, motorhomes]);

  return [sortedMotorhomes, isDesc, setIsDesc];
};
