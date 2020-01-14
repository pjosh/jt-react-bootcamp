import capitalize from 'utils/capitalize';

export const getStatusChartData = characters =>
  characters
    .reduce((carry, item) => {
      const name = capitalize(item.status);
      const existsIndex = carry.findIndex(result => name === result.name);

      if (existsIndex !== -1) {
        carry[existsIndex].value++;
      } else {
        carry.push({
          name: capitalize(name),
          value: 1
        });
      }

      return carry;
    }, [])
    .sort((a, b) => a.name.localeCompare(b.name));

export const getSpeciesChartData = characters =>
  characters
    .reduce((carry, item) => {
      const name = capitalize(item.species);
      const existsIndex = carry.findIndex(result => name === result.name);

      if (existsIndex !== -1) {
        carry[existsIndex].value++;
      } else {
        carry.push({
          name: capitalize(name),
          value: 1
        });
      }

      return carry;
    }, [])
    .sort((a, b) => a.name.localeCompare(b.name));

export const getGenderChartData = characters =>
  characters
    .reduce((carry, item) => {
      const name = capitalize(item.gender);
      const existsIndex = carry.findIndex(result => name === result.name);

      if (existsIndex !== -1) {
        carry[existsIndex].value++;
      } else {
        carry.push({
          name: capitalize(name),
          value: 1
        });
      }

      return carry;
    }, [])
    .sort((a, b) => a.name.localeCompare(b.name));

export const getLocationChartData = characters =>
  characters
    .reduce((carry, item) => {
      const name = capitalize(item.location.name);
      const existsIndex = carry.findIndex(result => name === result.name);

      if (existsIndex !== -1) {
        carry[existsIndex].value++;
      } else {
        carry.push({
          name: capitalize(name),
          value: 1
        });
      }

      return carry;
    }, [])
    .sort((a, b) => a.name.localeCompare(b.name));
