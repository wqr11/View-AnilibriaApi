import AnimeCardCarousel from "@/components/AnimeCardCarousel";

const getScheduleData = async () => {
  const res = await fetch("https://api.anilibria.tv/v3/title/schedule", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("FETCH ERROR IN getScheduleData app/schedule/page.tsx");
  }
  return await res.json();
};

const SchedulePage = async () => {
  const scheduleData = await getScheduleData();

  const daysTranscribeDict = {
    0: "Понедельник",
    1: "Вторник",
    2: "Среда",
    3: "Четверг",
    4: "Пятница",
    5: "Суббота",
    6: "Воскресенье",
  };

  return (
    <div className="text-white">
      <h3 className="mt-4 text-center text-4xl font-semibold tracking-wide">
        Расписание выхода тайтлов
      </h3>
      <div>
        {scheduleData.map((daySchedule, idx) => (
          <div key={`schedule-day-${idx}`} className="my-8 bg-[#343a40] p-4">
            <h3 className="relative z-20 mb-4 text-center text-4xl font-semibold text-white">
              {daysTranscribeDict[daySchedule.day]}
            </h3>
            <AnimeCardCarousel
              data={daySchedule.list}
              idKey={`schedule-carousel-${idx}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;
