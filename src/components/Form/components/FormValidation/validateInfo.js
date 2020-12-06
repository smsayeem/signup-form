
export default function validateInfo(info) {
  let errors = {};

  if(!info.email){
    errors.email="Email address is required"
  }else if (!/\S+@\S+\.\S+/.test(info.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!info.password) {
    errors.password = 'Password is required';
  } else if (info.password.length < 8) {
    errors.password = 'Password needs to be 8 characters or more';
  }

  if(info.color===''){
    errors.color= 'Select color please'
  }

  if(info.animal.length<2){
    errors.animal= 'Select at least two animals'
  }

  if(info.animal.filter(item=>item==='tiger').length){
    if(info.tigertype === ''){
      errors.tigertype="Tiger type is required"
    }
  }
  return errors;
}
