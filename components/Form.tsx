import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

const Form = ({addFunc}) => {

  const [value, onChangeText] = React.useState('');
  const placeholder = 'テキストを入力してください';

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.form}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder={placeholder}
      />
      <Button
        onPress={() => { 
          addFunc(value);
          onChangeText('');
        }}
        title="Add"
        color="blue"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    margin: 'auto',
  }
})

export default Form;
