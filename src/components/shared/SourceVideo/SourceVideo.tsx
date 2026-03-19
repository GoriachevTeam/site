"use client";

import React, { FC, Ref, useEffect, useRef } from "react";

import { SourceVideoProps } from "./interfaces";

const SourceVideo: FC<SourceVideoProps> = ({ mp4, webm, ...rest }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // iOS / Safari detection
    const isSafari =
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
      /iPhone|iPad|iPod/i.test(navigator.userAgent);

    // Browser claims WebM support?
    const canPlayWebM = video.canPlayType('video/webm; codecs="vp9"');

    // Only use WebM if browser supports and it's NOT Safari/iOS
    const useWebM =
      (canPlayWebM === "probably" || canPlayWebM === "maybe") && !isSafari;

    video.src = useWebM ? webm : mp4;

    video.load();
    video.play().catch(() => {});
  }, [webm, mp4]);

  return (
    <video ref={videoRef} preload="metadata" playsInline muted {...rest}>
      Your browser does not support the video tag.
    </video>
  );
};

export default SourceVideo;
