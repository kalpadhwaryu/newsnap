import React, {FunctionComponent, useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import data, {dataTypeInterface as Item} from '../data/data';
import Icon from 'react-native-vector-icons/Ionicons';

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
      <Text style={styles.description}>
        {item.description.length > 50
          ? item.description.slice(0, 50) + '...'
          : item.description}
      </Text>
      <TouchableOpacity onPress={() => Alert.alert('Bookmark added')}>
        <Icon
          name="bookmark-outline"
          size={20}
          color="#000"
          style={styles.icon}
        />
      </TouchableOpacity>
      <Modal
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => setisModalVisible(!isModalVisible)}>
        <ScrollView>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              style={styles.modalHeaderBack}
              onPress={() => setisModalVisible(!isModalVisible)}>
              <Icon name="arrow-back" size={25} color="#000" />
            </TouchableOpacity>
            <Text style={styles.modalHeaderText}>News Post</Text>
            <TouchableOpacity
              style={styles.modalHeaderDots}
              onPress={() => Alert.alert('Options clicked')}>
              <Icon name="ellipsis-horizontal-sharp" size={25} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.modalAuthorInfo}>
            <Image
              style={styles.modalAuthorImage}
              source={{uri: `${item.authorImg}`}}
            />
            <View style={styles.modalAuthorNameAndSub}>
              <Text style={styles.modalAuthorName}>{item.authorName}</Text>
              <Text
                style={
                  styles.modalSubheading
                }>{`Topic: ${item.subheading}`}</Text>
            </View>
          </View>
          <View style={styles.modalMainContent}>
            <Text style={styles.modalHeading}>{modal.heading}</Text>
            <Image style={styles.modalImg} source={{uri: `${modal.img}`}} />
            <Text style={styles.modalDescription}>{modal.description}</Text>
          </View>
          <TouchableOpacity onPress={() => Alert.alert('Bookmark added')}>
            <Icon
              name="bookmark-outline"
              size={20}
              color="#000"
              style={styles.modalBookmarkIcon}
            />
          </TouchableOpacity>
        </ScrollView>
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
    alignSelf: 'flex-end',
  },

  // Modal Styles
  modalHeader: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  modalHeaderBack: {
    marginRight: 10,
    justifyContent: 'center',
  },
  modalHeaderText: {
    color: 'black',
    fontFamily: 'fantasy',
    fontSize: 25,
    textAlign: 'center',
  },
  modalHeaderDots: {
    justifyContent: 'center',
  },
  modalAuthorInfo: {
    flexDirection: 'row',
    padding: 10,
  },
  modalAuthorImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  modalAuthorNameAndSub: {
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  modalAuthorName: {
    fontSize: 15,
    textAlignVertical: 'center',
    color: 'black',
  },
  modalSubheading: {
    fontSize: 13,
    color: 'grey',
  },
  modalMainContent: {
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  modalHeading: {
    fontSize: 20,
    paddingBottom: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  modalDescription: {
    fontSize: 16,
    color: 'black',
  },
  modalImg: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 15,
  },
  modalBookmarkIcon: {
    alignSelf: 'flex-end',
    marginRight: 10,
    paddingBottom: 10,
  },
});

export default SingleNews;
