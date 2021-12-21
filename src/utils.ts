export const getQueryStringByName = (name: String) => {
  var result = location.search.match(
    new RegExp('[?&]' + name + '=([^&]+)', 'i'),
  );
  if (result == null || result.length < 1) {
    return '';
  }
  return result[1];
};
