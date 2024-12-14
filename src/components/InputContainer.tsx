import {View} from 'react-native';
import React from 'react';
import Input from './Input';
import * as S from '../styles/InputStyles';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Footer from './Footer';

const SignupSchema = Yup.object({
  country: Yup.string().required(),
  fullName: Yup.string().required(),
  streetAddress: Yup.string().required(),
  other: Yup.string().required(),
});

const InputContainer = () => {
  const formik = useFormik({
    initialValues: {
      country: '',
      fullName: '',
      streetAddress: '',
      other: '',
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: SignupSchema,
  });

  return (
    <View>
      <S.Title>Enter your shipping address</S.Title>
      <Input
        onChangeText={formik.handleChange('country')}
        value={formik.values.country}
        label="County"
        placeholder="Add your Country"
      />
      <Input
        onChangeText={formik.handleChange('fullName')}
        value={formik.values.fullName}
        label="Full name"
        placeholder="Add your full name"
      />
      <Input
        onChangeText={formik.handleChange('streetAddress')}
        value={formik.values.streetAddress}
        label="street address"
        placeholder="Add your street address "
      />
      <Input
        onChangeText={formik.handleChange('other')}
        value={formik.values.other}
        label="Other"
        placeholder="Add a complement"
      />

      <Footer onSubmit={formik.handleSubmit} />
    </View>
  );
};

export default InputContainer;
