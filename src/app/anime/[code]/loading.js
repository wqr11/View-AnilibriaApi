import Spinner from "@/components/Spinner";

const loading = () => {
  return (
    <div className="flex min-h-[100vh] flex-col items-center bg-[#212529] text-white">
      <h2 className="m-2 text-2xl font-semibold">Загрузка</h2>
      <div className="mt-[0.4rem]">
        <Spinner />
      </div>
    </div>
  );
};

export default loading;
