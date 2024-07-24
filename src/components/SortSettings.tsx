const SortSettings = ({
  setChosenSetting,
  settingValues,
}: {
  setChosenSetting: (newChosenSetting: string[]) => void;
  settingValues: string[];
}) => {
  return (
    <div className="mt-2 flex flex-wrap gap-1 text-white">
      {settingValues.map((settingValue, idx) => (
        <button
          key={`setting-${settingValue}-${idx}`}
          onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setChosenSetting([settingValue]);
          }}
          className="rounded-xl bg-[#495057] px-2 py-1 hover:cursor-pointer hover:opacity-80 active:opacity-40"
        >
          {settingValue}
        </button>
      ))}
    </div>
  );
};

export default SortSettings;
