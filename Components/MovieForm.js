import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Image,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Formik} from 'formik';
import {launchImageLibrary} from 'react-native-image-picker';
import {TextInput, IconButton, Colors} from 'react-native-paper';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Foundation';

const {width, height} = Dimensions.get('screen');

const MovieForm = ({navigation, onSubmit, initialValues, nameScreen}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [overview, setOverview] = useState(initialValues.overview);
  const [date, setDate] = useState(initialValues.date);
  const [url, setUrl] = useState(initialValues.url);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(3),
    overview: Yup.string().required().min(3),
    date: Yup.string().required(),
    url: Yup.string().required(),
  });

  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#191a1b'}}>
      <View style={{marginTop: height * 0.05}}>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View
              style={{
                marginRight: 25,
                backgroundColor: 'white',
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Icon name="x" size={21} color={'black'} />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            margin: 20,
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/Instabug-Logo.png')}
            style={{
              height: height * 0.07,
              width: width * 0.7,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: 'white',
              marginTop: 20,
            }}>
            {nameScreen}
          </Text>
        </View>

        <Formik
          enableReinitialize
          initialValues={{
            title: title,
            overview: overview,
            date: date,
            url: url,
          }}
          onSubmit={() => {
            onSubmit(title, overview, date, url);
          }}
          validationSchema={validationSchema}>
          {props => (
            <View>
              <View style={{height: height * 0.55}}>
                <TextInput
                  style={{marginTop: 10}}
                  label="Title"
                  onChangeText={setTitle}
                  onBlur={() => props.setFieldTouched('title')}
                  value={title}
                  error={props.errors.title}
                />
                <TextInput
                  style={{marginTop: 10}}
                  label="Overview"
                  onChangeText={setOverview}
                  onBlur={() => props.setFieldTouched('Overview')}
                  value={overview}
                  error={props.errors.overview}
                />
                <View style={{alignItems: 'center', margin: 5}}>
                  <DatePicker
                    date={date}
                    onDateChange={setDate}
                    textColor={'#FFFFFF'}
                    mode={'date'}
                    error={props.errors.date}
                  />
                </View>
                <TouchableOpacity
                  onPress={() =>
                    launchImageLibrary(options, response => {
                      if (response.didCancel) {
                        console.log('User cancelled image picker');
                      } else if (response.error) {
                        console.log('ImagePicker Error: ', response.error);
                      } else if (response.customButton) {
                        console.log(
                          'User tapped custom button: ',
                          response.customButton,
                        );
                      } else {
                        setUrl(response.assets[0].uri);
                      }
                    })
                  }>
                  <View
                    style={{
                      marginTop: 15,
                      backgroundColor: 'grey',
                      width: width,
                      height: height * 0.07,
                      borderRadius: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: '600',
                        fontSize: 21,
                      }}>
                      Select Photo
                    </Text>
                  </View>
                </TouchableOpacity>
                {Boolean(props.errors.url) == true ? (
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 15,
                    }}>
                    <Text
                      style={{
                        color: 'red',
                        alignItems: 'center',
                      }}>
                      Submit a Photo for movie
                    </Text>
                  </View>
                ) : null}
              </View>

              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => {
                    props.handleSubmit();
                  }}>
                  <View
                    style={{
                      backgroundColor: 'green',
                      width: width * 0.7,
                      height: height * 0.05,
                      borderRadius: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: '600',
                        fontSize: 21,
                      }}>
                      Save movie
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

MovieForm.defaultProps = {
  initialValues: {
    title: '',
    overview: '',
    date: new Date(),
    url: '',
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default MovieForm;
