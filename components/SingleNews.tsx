import React, {FunctionComponent, useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import data, {dataTypeInterface as Item} from '../data/data';
import Icon from 'react-native-vector-icons/Ionicons';
import tw from 'tailwind-react-native-classnames';

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
      style={[tw`px-2 py-2 mb-3 border border-gray-400 rounded-xl`]}
      onPress={() => onPressItem(item)}>
      <View style={[tw`flex-row pb-1 items-center`]}>
        <Image
          style={[tw`h-7 w-7 rounded-2xl mr-1`]}
          source={{uri: `${item.authorImg}`}}
        />
        <Text style={[tw`text-black`]}>{item.authorName}</Text>
      </View>
      <Image
        style={[tw`w-full h-36 mb-1 rounded-xl`]}
        source={{uri: `${item.img}`}}
      />
      <Text style={[tw`pb-1 text-black font-bold text-lg`]}>
        {item.heading}
      </Text>
      <Text style={[tw`pb-1 text-gray-500`]}>{item.subheading}</Text>
      <Text style={[tw`pb-1 text-black`]}>
        {item.description.length > 50
          ? item.description.slice(0, 50) + '...'
          : item.description}
      </Text>
      <TouchableOpacity onPress={() => Alert.alert('Bookmark added')}>
        <Icon
          name="bookmark-outline"
          size={20}
          color="#000"
          style={[tw`self-end`]}
        />
      </TouchableOpacity>
      <Modal
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => setisModalVisible(!isModalVisible)}>
        <ScrollView>
          <View style={[tw`flex-row p-2 justify-between`]}>
            <TouchableOpacity
              style={[tw`justify-center`]}
              onPress={() => setisModalVisible(!isModalVisible)}>
              <Icon name="arrow-back" size={25} color="#000" />
            </TouchableOpacity>
            <Text style={[tw`text-black text-center text-2xl`]}>News Post</Text>
            <TouchableOpacity
              style={[tw`justify-center`]}
              onPress={() => Alert.alert('Options clicked')}>
              <Icon name="ellipsis-horizontal-sharp" size={25} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={[tw`px-2.5 py-1 flex-row`]}>
            <Image
              style={[tw`h-12 w-12 rounded-3xl mr-1`]}
              source={{uri: `${modal.authorImg}`}}
            />
            <View style={[tw`justify-center px-1`]}>
              <Text style={[tw`text-black text-base`]}>{modal.authorName}</Text>
              <Text
                style={[
                  tw`text-gray-600 text-sm`,
                ]}>{`Topic: ${modal.subheading}`}</Text>
            </View>
          </View>
          <View style={[tw`px-2.5 pb-1`]}>
            <Text style={[tw`text-black font-bold text-xl pb-2`]}>
              {modal.heading}
            </Text>
            <Image
              style={[tw`w-full h-56 mb-2 rounded-xl`]}
              source={{uri: `${modal.img}`}}
            />
            <Text style={[tw`text-black text-base`]}>{modal.description}</Text>
          </View>
          <TouchableOpacity onPress={() => Alert.alert('Bookmark added')}>
            <Icon
              name="bookmark-outline"
              size={20}
              color="#000"
              style={[tw`self-end mr-2 pb-2`]}
            />
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </TouchableOpacity>
  );
};

export default SingleNews;
