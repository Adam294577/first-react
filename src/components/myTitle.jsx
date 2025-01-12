export const Title = ({
  cont,
  className = 'text-3xl text-center pt5',
  addClass = '',
}) => {
  return <h1 className={`${className} ${addClass}`}>{cont}</h1>;
};
