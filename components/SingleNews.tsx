import React, {FunctionComponent, useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
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
        <ScrollView>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              style={styles.modalHeaderBack}
              onPress={() => setisModalVisible(!isModalVisible)}>
              <Text>{`<--`}</Text>
            </TouchableOpacity>
            <Text style={styles.modalHeaderText}>News Post</Text>
            <TouchableOpacity>
              <Text>{`...`}</Text>
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
          <View>
            <Image
              style={styles.modalIcon}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/494/494568.png',
              }}></Image>
          </View>
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
    width: 15,
    height: 20,
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
    fontSize: 20,
  },
  modalHeaderText: {
    color: 'black',
    fontFamily: 'fantasy',
    fontSize: 25,
    textAlign: 'center',
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
  },
  modalAuthorName: {
    fontSize: 15,
    textAlignVertical: 'center',
    color: 'black',
  },
  modalSubheading: {
    fontSize: 13,
  },
  modalMainContent: {
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  modalHeading: {
    fontSize: 20,
    paddingBottom: 5,
  },
  modalDescription: {
    fontSize: 16,
  },
  modalImg: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 15,
  },
  modalIcon: {
    width: 15,
    height: 20,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
});

export default SingleNews;
