import { useLogin } from "../hooks/useLogin.jsx";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
      <p>Welcome {username}</p>
    </div>
  );
};
export default ProfilePage;
