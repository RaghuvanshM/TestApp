import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

const EditScreen = props => {
  let {navigation} = props;

  const [newname, setNewName] = useState();
  const [newEmail, setnewEmail] = useState();
  const [newrole, setNewRole] = useState();
  const dispatch = useDispatch();
  const AddEmploye = () => {
    dispatch({type: 'ajdkfja', payload: 'afhahdfhasd'});
  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TextInput
        style={{borderWidth: 1, width: '95%', borderRadius: 10, marginTop: 30}}
        placeholder="Id"
        value={newname}
        onChangeText={text => {
          setNewName(text);
        }}
      />
      <TextInput
        style={{borderWidth: 1, width: '95%', borderRadius: 10, marginTop: 20}}
        placeholder="Name"
        value={newname}
        onChangeText={text => {
          setNewName(text);
        }}
      />
      <TextInput
        style={{borderWidth: 1, width: '95%', borderRadius: 10, marginTop: 20}}
        placeholder="Email"
        value={newEmail}
        onChangeText={text => {
          setnewEmail(text);
        }}
      />
      <TextInput
        style={{borderWidth: 1, width: '95%', borderRadius: 10, marginTop: 20}}
        placeholder="Contact No."
        value={newrole}
        onChangeText={text => {
          setNewRole(text);
        }}
      />
      <TouchableOpacity
        style={{
          height: 50,
          width: 150,
          backgroundColor: '#3f6dd9',
          alignSelf: 'center',
          marginTop: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}
        onPress={() => {
          AddEmploye();
        }}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 20}}>
          Add
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 50,
          width: 150,
          backgroundColor: '#3f6dd9',
          alignSelf: 'center',
          marginTop: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 20}}>
          Show List
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
