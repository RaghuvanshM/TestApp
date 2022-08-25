import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const EditScreen = props => {
  let {navigation} = props;
  const [Id,setId] = useState('')
  const [newname, setNewName] = useState('');
  const [newEmail, setnewEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const dispatch = useDispatch();
  const EmpData = useSelector(state=>state.addEmploye.employee)
  console.log(EmpData)
  const AddEmploye = () => {
    let data ={
      id:Id,
      name:newname,
      email:newEmail,
      mobile:mobile
    }
     dispatch({type: 'AddEmplyee', payload: data});
     setId('')
     setNewName('')
     setnewEmail('')
     setMobile('')
     alert("user added")
  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TextInput
        style={{borderWidth: 1, width: '95%', borderRadius: 10, marginTop: 30}}
        placeholder="Id"
        value={Id}
        onChangeText={text => {
          setId(text);
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
        value={mobile}
        onChangeText={text => {
          setMobile(text);
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
        onPress={() => navigation.navigate('Employee List')}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 20}}>
          Show List
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
