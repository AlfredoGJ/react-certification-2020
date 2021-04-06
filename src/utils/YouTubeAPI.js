function toVideoFromSearch(videoResult) {
  return {
    id: videoResult.id.videoId,
    title: videoResult.snippet.title,
    description: videoResult.snippet.description,
    thumbnailDefault: videoResult.snippet.thumbnails.default.url,
    thumbnailMedium: videoResult.snippet.thumbnails.medium.url,
    thumbnailHigh: videoResult.snippet.thumbnails.high.url,
    channelTitle: videoResult.snippet.channelTitle,
  };
}

function toVideoFromVideoDetails(videoResult) {
  return {
    id: videoResult.id,
    title: videoResult.snippet.title,
    description: videoResult.snippet.description,
    thumbnailDefault: videoResult.snippet.thumbnails.default.url,
    thumbnailMedium: videoResult.snippet.thumbnails.medium.url,
    thumbnailHigh: videoResult.snippet.thumbnails.high.url,
    channelTitle: videoResult.snippet.channelTitle,
  };
}

function toVideoListFromSearch(videoList) {
  // The search result contains videos without snippet sometimes
  return videoList
    .filter((video) => video.snippet)
    .map((video) => toVideoFromSearch(video));
}

export { toVideoFromSearch, toVideoListFromSearch, toVideoFromVideoDetails };
