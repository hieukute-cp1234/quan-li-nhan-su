export const configData = (value, data) => {
  let newData = [];
  if (value.length > 0) {
    data.forEach((item) => {
      if (String(item.name).toLowerCase().indexOf(value) !== -1) {
        newData.push(item);
      }
    });
  } else {
    newData = data;
  }
  return newData;
};
