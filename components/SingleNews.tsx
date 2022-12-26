import React, {FunctionComponent, useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import data, {dataTypeInterface as Item} from '../data/data';

interface Props {
  item: Item;
}

const SingleNews: FunctionComponent<Props> = ({item}) => {
  const [isModalVisible, setisModalVisible] = useState(false);
  const [modal, setModal] = useState(data[0]);
  const onPressItem = (item: Item) => {
    setisModalVisible(true);
    setModal(item);
  };

  return (
    <TouchableOpacity
      style={styles.singleNews}
      onPress={() => onPressItem(item)}>
      <View style={styles.authorInfo}>
        <Image style={styles.authorImage} source={{uri: `${item.authorImg}`}} />
        <Text style={styles.authorName}>{item.authorName}</Text>
      </View>
      <Image style={styles.image} source={{uri: `${item.img}`}} />
      <Text style={styles.heading}>{item.heading}</Text>
      <Text style={styles.subheading}>{item.subheading}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View>
        <Image
          style={styles.icon}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/494/494568.png',
          }}></Image>
      </View>
      <Modal
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => setisModalVisible(!isModalVisible)}>
        <TouchableOpacity onPress={() => setisModalVisible(!isModalVisible)}>
          <Text>Back</Text>
        </TouchableOpacity>
        <View>
          <Text>{modal.heading}</Text>
          <Text>{modal.subheading}</Text>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  singleNews: {
    padding: 10,
    marginBottom: 20,
    borderColor: 'grey',
    borderWidth: 0.7,
    borderRadius: 15,
  },
  authorInfo: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  authorImage: {
    height: 28,
    width: 28,
    borderRadius: 15,
    marginRight: 5,
  },
  authorName: {
    fontSize: 13,
    textAlignVertical: 'center',
    color: 'black',
  },
  image: {
    height: 70,
    width: '100%',
    marginBottom: 5,
  },
  heading: {paddingBottom: 5, color: 'black', fontWeight: 'bold', fontSize: 19},
  subheading: {paddingBottom: 5, color: 'grey', fontSize: 15},
  description: {paddingBottom: 5, color: 'black'},
  icon: {
    width: 15,
    height: 20,
    alignSelf: 'flex-end',
  },
});

export default SingleNews;
