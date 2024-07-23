"use client";

import { useState } from "react";

import Image from "next/image";

import styles from "@/styles/VideoPlayer.OptionControls.module.css";

const OptionControls = ({
  data,
  chosenEpisode,
  chosenQuality,
  setChosenEpisode,
  setChosenQuality,
  setAutoPlay,
}) => {
  const [episodeMenuHidden, setEpisodeMenuHidden] = useState(true);
  const [resolutionMenuHidden, setResolutionMenuHidden] = useState(true);

  const resolutionTable = {
    fhd: "1080p",
    hd: "720p",
    sd: "480p",
  };

  const previewPlaceholder =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/2wBDAQcHBw0MDRgQEBgUDg4OFBQODg4OFBEMDAwMDBERDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCABxAMgDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCCLSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k=";

  return (
    <div className={styles.video_controls}>
      <div className={styles.select_container}>
        <button
          className={styles.control}
          form="episode-change-form"
          onClick={(e) => {
            e.preventDefault();
            setEpisodeMenuHidden(!episodeMenuHidden);
          }}
        >
          Эпизод: {chosenEpisode}
        </button>
        <div
          className={styles.control_episode_menu}
          style={{
            display: episodeMenuHidden ? "none" : "flex",
          }}
        >
          {Object.keys(data.data.player.list).map((key, idx) => (
            <div
              id={`episode-${idx + 1}`}
              key={`episode-${idx + 1}`}
              className={styles.episode_container}
            >
              <button
                className={styles.episode_link}
                id={`ep-link-${idx}`}
                key={`ep-link-${idx}`}
                value={key}
                onClick={(e) => {
                  e.preventDefault();
                  setChosenEpisode(key);
                  setAutoPlay(false);
                }}
              >
                <Image
                  width={200}
                  height={113}
                  className={
                    key === chosenEpisode
                      ? `${styles.episode_preview} ${styles.ep_active}`
                      : styles.episode_preview
                  }
                  src={
                    data.data.player.list[key].preview
                      ? `/anilibriaPosters${data.data.player.list[key].preview}`
                      : previewPlaceholder
                  }
                  alt={
                    data.data.player.list[key].name
                      ? data.data.player.list[key].name
                      : `ep-${key}`
                  }
                />
                <h3 className={styles.episode_ordinal}>
                  {data.data.player.list[key].episode}
                </h3>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.select_container}>
        <div className={styles.quality_wrapper}>
          <button
            className={styles.control}
            onClick={(e) => {
              e.preventDefault();
              setResolutionMenuHidden(!resolutionMenuHidden);
            }}
          >
            Качество: {resolutionTable[chosenQuality]}
          </button>
          <div
            className={styles.control_resolution_menu}
            style={{
              display: resolutionMenuHidden ? "none" : "flex",
            }}
          >
            {Object.keys(data.data.player.list[chosenEpisode].hls)
              .filter(
                (quality) =>
                  data.data.player.list[chosenEpisode].hls[quality] != null,
              )
              .map((quality, idx) => (
                <button
                  className={styles.quality_link}
                  id={`q-link-${idx}`}
                  key={`q-link-${idx}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setChosenQuality(quality);
                    setAutoPlay(true);
                    setResolutionMenuHidden(!resolutionMenuHidden);
                  }}
                >
                  {resolutionTable[quality]}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionControls;
