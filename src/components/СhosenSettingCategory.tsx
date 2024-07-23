"use client";

import { MdCancel as Cancel } from "react-icons/md";

const СhosenSettingCategory = ({
  chosenCategory,
  setChosenCategory,
}: {
  chosenCategory: string[];
  setChosenCategory: (newChosenCategorySettings: string[]) => void;
}) => {
  return (
    <>
      {chosenCategory.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {chosenCategory.map((setting, idx) => (
            <div
              key={`setting-${idx}`}
              className="flex size-fit gap-1 rounded-xl bg-[#868e96] px-2 py-1 text-white"
            >
              <button
                className="text-lg hover:opacity-80 active:opacity-40"
                onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  setChosenCategory(
                    chosenCategory.filter((item) => item !== setting),
                  );
                }}
              >
                <Cancel />
              </button>
              <button className="hover:opacity-80 active:opacity-40">
                {setting}
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default СhosenSettingCategory;
