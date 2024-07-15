import MainSearch from "@/components/MainSearch";

import styles from "@/styles/SearchPage.module.css";

const SearchPage = ({ searchParams }) => {
  return (
    <div className="min-h-[100vh] bg-slate-900 p-4">
      <MainSearch />
    </div>
  );
};

export default SearchPage;
