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
import { useDispatch, useSelector } from "react-redux";

function HomeScreen({ navigation }) {
  const EmpData = useSelector((state) => state.addEmploye.employee);
  const dispatch = useDispatch();
  const [data, setData] = useState(EmpData);
  const [searchData, setSearchData] = useState(EmpData);
  const [seletAll, setSelectAll] = useState(false);
  const [sortFilter, setSortFilter] = useState(false);

  const onPressDeleteIcon = (id) => {
    let newData = [...data];
    let remainingItem = newData.filter((item) => item.id !== id);
    setData(remainingItem);
  };
  const onSearchStart = (text) => {
    let newData = [...searchData];
    let dupli = [...searchData];
    let filterData = newData.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    console.log(filterData.length);
    if (filterData.length === 0) {
      setData(dupli);
    } else {
      setData(filterData);
    }
  };
  const onPressSort = () => {
    let newdata = [...data];
    if (sortFilter) {
      let sortedArray = newdata.sort(function (a, b) {
        if (a.name > b.name) return 1;
        else if (a.name < b.name) return -1;

        return 0;
      });
      console.log(sortedArray);
      setData(sortedArray);
    } else {
      setData(searchData);
    }
    setSortFilter(!sortFilter);
  };
  useEffect(() => {
    setData(EmpData);
    setSearchData(EmpData);
  }, [EmpData]);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder="Search by Name"
        onChangeText={(txt) => onSearchStart(txt)}
      />
      {data.length>0&&<TouchableOpacity
        style={{
          height: 40,
          width: 150,
          borderRadius: 20,
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: !sortFilter ? "#3090C7" : "white",
        }}
        activeOpacity={0.7}
        onPress={() => {
          onPressSort();
        }}
      >
        <Text
          style={{
            color: !sortFilter ? "white" : "black",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Sort by name
        </Text>
      </TouchableOpacity>}
      <FlatList
        data={data}
        keyExtractor={(_, index) => {
          String(index);
        }}
        ListFooterComponent={() => {
          return <View style={{ height: 60 }} />;
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.boxContainer}>
              <TouchableOpacity
                onPress={() => {
                  dispatch({ type: "DeleteEmp", payload: { id: item.id } });
                }}
              >
                <Text>Delet Itme</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>{"Id"}</Text>
                <Text style={{ fontSize: 15, opacity: 0.5 }}>{item?.id}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {"Name"}
                </Text>
                <Text style={{ fontSize: 15, opacity: 0.5 }}>{item?.name}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {"Email"}
                </Text>
                <Text style={{ fontSize: 15, opacity: 0.5 }}>
                  {item?.email}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {"Phone Number"}
                </Text>
                <Text style={{ fontSize: 15, opacity: 0.5 }}>
                  {item?.mobile}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 10,
                  paddingTop: 10,
                }}
              ></View>
            </View>
          );
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
    height: 120,
    elevation: 9,
    width: "90%",
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 10,
  },
});
