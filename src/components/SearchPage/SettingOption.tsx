const SettingOption = ({
  chosenSetting,
  setChosenSetting,
  settingValues,
}: {
  chosenSetting: string[];
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
            chosenSetting.includes(settingValue)
              ? setChosenSetting(
                  chosenSetting.filter((item) => item !== settingValue),
                )
              : setChosenSetting(chosenSetting.concat([settingValue]));
          }}
          className="rounded-xl bg-[#495057] px-2 py-1 hover:cursor-pointer hover:opacity-80 active:opacity-40"
        >
          {settingValue}
        </button>
      ))}
    </div>
  );
};

export default SettingOption;
