import React, { useEffect, useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";

import Feather from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";
function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [seletAll, setSelectAll] = useState(false);
  const EmpData = useSelector((state) => state.addEmploye.employee);

  const selectItem = (id) => {
    let newData = [...data];
    newData.forEach((item) => {
      if (item.id === id) {
        item.isSelected = !item.isSelected;
      }
    });
    setData(newData);
    setSearchData(newData);
    let selectedData = newData.filter((item) => item.isSelected === true);
    if (selectedData.length === data.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  };
  const onSelectAllPress = () => {
    let newData = [...data];
    newData.forEach((item) => {
      if (seletAll) {
        item.isSelected = false;
        setSelectAll(false);
      } else {
        item.isSelected = true;
        setSelectAll(true);
      }
    });
  };
  const deleteSelectedData = () => {
    let newData = [...data];
    let deleteData = newData.filter((item) => item.isSelected === false);
    setData(deleteData);

    if (deleteData.length === 0) {
      setSelectAll(false);
    }
  };
  const onPressDeleteIcon = (id) => {
    let newData = [...data];
    let remainingItem = newData.filter((item) => item.id !== id);
    setData(remainingItem);
  };
  const onSearchStart = (text) => {
    let newData = [...searchData];
    let dupli = [...searchData];
    let filterData = newData.filter(
      (item) =>
        item.email.toLowerCase().includes(text.toLowerCase()) ||
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.role.toLowerCase().includes(text.toLowerCase())
    );
    console.log(filterData.length);
    if (filterData.length === 0) {
      setData(dupli);
    } else {
      setData(filterData);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder="Search by Name, email or Role"
        onChangeText={(txt) => onSearchStart(txt)}
      />
      <FlatList
        data={EmpData}
        renderItem={({item}) => {
          return (<View style={styles.boxContainer}>
            <Text>{item?.name}</Text>
          </View>
          )
        }}
      />
    </View>
  );
}
export default HomeScreen;
const RenderRow = ({ item, onPress, onPressDeleteIcon, navigation }) => {
  return <View style={[styles.innerContainer, { flex: 1 }]}></View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  searchBox: {
    width: "95%",
    borderWidth: 1,
    height: 50,
    padding: 10,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 10,
  },
  boxContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    height: 200,
    elevation: 9,
    width: "90%",
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 10,
  },
});
