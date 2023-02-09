
const getFirstError = (errors) => {
  if (typeof errors === 'string') {
    return errors;
  }
  return Object.keys(errors)[0] + ': ' + Object.values(errors)[0];
}

export default getFirstError
