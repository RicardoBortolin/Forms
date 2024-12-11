import {View} from 'react-native';
import React from 'react';
import Input from './Input';
import * as S from '../styles/InputStyles';
import {Formik} from 'formik';
import Footer from './Footer';

const InputContainer = () => {
  return (
    <Formik
      initialValues={{country: '', fullName: '', streetAddress: '', other: ''}}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View>
          <S.Title>Enter your shipping address</S.Title>
          <Input
            onChangeText={handleChange('country')}
            onBlur={handleBlur('country')}
            value={values.country}
            label="County"
            placeholder="Add your Country"
          />
          <Input
            onChangeText={handleChange('fullName')}
            onBlur={handleBlur('fullName')}
            value={values.fullName}
            label="Full name"
            placeholder="Add your full name"
          />
          <Input
            onChangeText={handleChange('streetAddress')}
            onBlur={handleBlur('streetAddress')}
            value={values.streetAddress}
            label="street address"
            placeholder="Add your street address "
          />
          <Input
            onChangeText={handleChange('other')}
            onBlur={handleBlur('other')}
            value={values.other}
            label="Other"
            placeholder="Add a complement"
          />

          <Footer onSubmit={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default InputContainer;
