import { useParams } from 'react-router';

function Page() {
  const { userName } = useParams();
  return (
    <div>
      <h1>user Page</h1>
      <p>Welcome {userName}!</p>
    </div>
  );
}

export default Page;
