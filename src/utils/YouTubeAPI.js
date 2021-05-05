import { convertTime } from './fns';

function toVideoFromSearch(videoResult) {
  return {
    id: videoResult.id.videoId,
    title: videoResult.snippet.title,
    description: videoResult.snippet.description,
    descriptionShort:
      videoResult.snippet.description.length < 100
        ? videoResult.snippet.description
        : videoResult.snippet.description.slice(0, 100).concat('...'),
    thumbnailDefault: videoResult.snippet.thumbnails.default.url,
    thumbnailMedium: videoResult.snippet.thumbnails.medium.url,
    thumbnailHigh: videoResult.snippet.thumbnails.high.url,
    channelTitle: videoResult.snippet.channelTitle,
    channelId: videoResult.snippet.channelId,
  };
}

function toVideoFromVideoDetails(videoResult) {
  return {
    id: videoResult.id,
    title: videoResult.snippet.title,
    description: videoResult.snippet.description,
    descriptionShort:
      videoResult.snippet.description.length < 100
        ? videoResult.snippet.description
        : videoResult.snippet.description.slice(0, 100).concat('...'),
    thumbnailDefault: videoResult.snippet.thumbnails.default.url,
    thumbnailMedium: videoResult.snippet.thumbnails.medium.url,
    thumbnailHigh: videoResult.snippet.thumbnails.high.url,
    channelTitle: videoResult.snippet.channelTitle,
    duration:
      videoResult.contentDetails && convertTime(videoResult.contentDetails.duration),
    commentCount: videoResult.statistics && videoResult.statistics.commentCount,
    viewCount: videoResult.statistics && videoResult.statistics.viewCount,
    likeCount: videoResult.statistics && videoResult.statistics.likeCount,
    dislikeCount: videoResult.statistics && videoResult.statistics.dislikeCount,
  };
}

function toVideoListFromVideoDetailsList(videoList) {
  return videoList
    .filter((video) => video.snippet)
    .map((video) => toVideoFromVideoDetails(video));
}

function toVideoListFromSearch(videoList) {
  // The search result contains videos without snippet sometimes
  return videoList
    .filter((video) => video.snippet)
    .map((video) => toVideoFromSearch(video));
}

export {
  toVideoFromSearch,
  toVideoListFromSearch,
  toVideoFromVideoDetails,
  toVideoListFromVideoDetailsList,
};
