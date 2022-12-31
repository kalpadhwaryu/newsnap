import React, {FunctionComponent, useEffect, useState} from 'react';
import {Alert, FlatList, ActivityIndicator} from 'react-native';
import SingleNews from './SingleNews';
import tw from 'tailwind-react-native-classnames';
import {API_KEY} from '@env';

const Main: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchArticles = async () => {
      return fetch(URL)
        .then(res => res.json())
        .then(res => {
          setData(res.articles);
        })
        .catch(err => Alert.alert(err))
        .finally(() => setIsLoading(false));
    };
    fetchArticles();
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      style={[tw`px-2 py-1`]}
      data={data}
      renderItem={({item}) => <SingleNews item={item} />}
    />
  );
};

export default Main;
