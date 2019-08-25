import React, { useState, useEffect } from 'react';

const lukeSkywalkerData = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.co/api/planets/1/',
  films: [
    'https://swapi.co/api/films/2/',
    'https://swapi.co/api/films/6/',
    'https://swapi.co/api/films/3/',
    'https://swapi.co/api/films/1/',
    'https://swapi.co/api/films/7/',
  ],
  species: ['https://swapi.co/api/species/1/'],
  vehicles: [
    'https://swapi.co/api/vehicles/14/',
    'https://swapi.co/api/vehicles/30/',
  ],
  starships: [
    'https://swapi.co/api/starships/12/',
    'https://swapi.co/api/starships/22/',
  ],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.co/api/people/1/',
};

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(lukeSkywalkerData);
    }, 1500);
  });
};

const LukeSkywalkerData = ({ children, id }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return children({
    loading,
    data,
  });
};

export default () => {
  return (
    <LukeSkywalkerData>
      {({ loading, data }) => {
        return loading ? (
          'Please wait...'
        ) : (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        );
      }}
    </LukeSkywalkerData>
  );
};