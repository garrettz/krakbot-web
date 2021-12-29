import * as yup from 'yup';

export const BookADemoSchema = yup.object().shape({
  fname: yup.string().required('Required'),
  lname: yup.string().required('Required'),
  cname: yup.string().required('Required'),
  cmail: yup.string().email('Invalid email').required('Required'),
});
