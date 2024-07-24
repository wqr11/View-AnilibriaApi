import { MdBugReport as Report } from "react-icons/md";

const NotFoundPage = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#212529] text-white">
      <div className="flex flex-col items-center">
        <h3 className="text-6xl font-bold">Oops!</h3>
        <p className="mt-2 font-medium">Error 404: Page not found</p>
      </div>
      <div className="mt-4 flex justify-center gap-4 font-semibold">
        <a
          href="/"
          className="rounded-lg border-2 border-solid border-[#495057] bg-[#343a40] p-4 hover:opacity-90 active:opacity-60"
        >
          Go to home page
        </a>
      </div>
      <div className="m-auto mt-2 w-fit text-base text-[#868e96] hover:underline">
        <a href="mailto:wqr1414@gmail.com" className="flex items-center gap-1">
          Send a report
          <Report className="text-xl" />
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
