import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 5000);

  return (
    <div>
      <h1>Page Not Found</h1>
    </div>
  );
};

export default NotFoundPage;
