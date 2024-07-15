import { MoonLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  return (
    <div className="align-center flex justify-center">
      <MoonLoader loading={loading} color="white" />
    </div>
  );
};

export default Spinner;
