"use client";

import { useRef, useEffect, useState } from "react";

import OptionControls from "@/components/VideoPlayer/OptionControls";

import videojs from "video.js";
import "video.js/dist/video-js.css";

// // https://cache.libria.fun/videos/media/ts/413/372/720/50e8c80721f1c23b6750c35ce30ecfdd.m3u8
// // {`https://${host}${url}`}

const VideoPlayer = (data) => {
  const videoNode = useRef(null);
  const player = useRef(null);
  const initialized = useRef(false);

  const [chosenEpisode, setChosenEpisode] = useState(
    data.data.player.episodes.first,
  );

  const [chosenQuality, setChosenQuality] = useState(
    Object.keys(data.data.player.list).length &&
      Object.keys(data.data.player.list[chosenEpisode].hls).find(
        (e) => !!data.data.player.list[chosenEpisode].hls[e] === true,
      ),
  );

  const lastPlayedTimeLink = `${data.data.code}-episode-${chosenEpisode}-playedTime`;

  // const [isClient, setIsClient] = useState(false); // UNCOMMENT IF NEEDED

  const [isAutoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    // setIsClient(true); // UNCOMMENT THIS ALSO

    const initialOptions = {
      controls: true,
      fluid: true,
      controlBar: {},
      options: {
        autoplay: true,
        preload: "auto",
      },
    };

    if (videoNode.current && !initialized.current) {
      initialized.current = true; //prevent duplicate initialization
      player.current = videojs(videoNode.current, {
        ...initialOptions,
      }).ready(() => {
        console.log("Player Ready");
      });
      //clear up player on dismount
      return () => {
        if (player.current) {
          player.current.dispose();
        }
      };
    }
  }, []);

  if (initialized.current) {
    videojs.getPlayer("video-js_html5_api").src({
      type: "application/x-mpegurl",
      src: `https://${data.data.player.host}${data.data.player.list[chosenEpisode].hls[chosenQuality]}`,
    });
    videojs
      .getPlayer("video-js_html5_api")
      .poster(
        data.data.player.list[chosenEpisode].preview
          ? `/anilibriaPosters${data.data.player.list[chosenEpisode].preview}`
          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHbxSdnZhvJdPAAHWy6i0rL3IJc8eIGPXzFw&s",
      );
  }

  return (
    <>
      {Object.keys(data.data.player.list).length && (
        <div style={{ position: "relative" }}>
          <video
            id="video-js"
            ref={videoNode}
            className="video-js"
            poster={
              data.data.player.list[chosenEpisode].preview
                ? `/anilibriaPosters${data.data.player.list[chosenEpisode].preview}`
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHbxSdnZhvJdPAAHWy6i0rL3IJc8eIGPXzFw&s"
            }
            style={{ width: "100%", height: "auto", aspectRatio: "16/9" }}
            autoPlay={isAutoPlay}
            onTimeUpdate={() => {
              // no need to check for isClient as this events
              // only run on the client side :)
              videoNode.current.currentTime != 0
                ? // exclude .currentTime == 0
                  // cuz this event fires off on metadata load too
                  localStorage.setItem(
                    lastPlayedTimeLink,
                    videoNode.current.currentTime,
                  )
                : null;
            }}
            onLoadedMetadata={() => {
              videoNode.current.currentTime =
                localStorage.getItem(lastPlayedTimeLink);
            }}
          >
            <source
              type="application/x-mpegurl"
              src={`https://${data.data.player.host}${data.data.player.list[chosenEpisode].hls[chosenQuality]}`}
            ></source>
          </video>
          <OptionControls
            data={data}
            chosenEpisode={chosenEpisode}
            chosenQuality={chosenQuality}
            setChosenEpisode={setChosenEpisode}
            setChosenQuality={setChosenQuality}
            setAutoPlay={setAutoPlay}
          />
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
