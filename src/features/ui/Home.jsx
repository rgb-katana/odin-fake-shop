import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-50% flex flex-col items-center justify-center self-center">
      <h1>This is a home page!</h1>
      <Link
        to="shop/1"
        className="my-2 flex items-center justify-center rounded-full bg-sky-300 px-1.5 py-1"
      >
        Go shopping
      </Link>
    </div>
  );
}

export default Home;
