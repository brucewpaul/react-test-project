export default () => {
  let text;
  let URL = '/randomURL';
  if (typeof window !== 'undefined') {
    text = 'CLIENT TEXT';
  } else {
    text = 'TEXT';
  }

  return (
    <a href={URL}>
      {text}
    </a>
  );
}
