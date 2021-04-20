import { renderHook } from '@testing-library/react-hooks';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import useYouTubeVideo from './useYouTubeVideo';
import mockVideos from '../../../../mock/mockVideos';

describe('useYoutubeVideo hook', () => {
  describe('Returns the initial values correctly', () => {
    const fallbackVideo = mockVideos.items[0];
    const relatedLength = mockVideos.items.length;
    const apiServer = setupServer(
      rest.get('https://www.googleapis.com/youtube/v3/search', (req, res, ctx) => {
        const query = req.url.searchParams;
        const maxResults = query.get('maxResults');
        const relatedToVideoId = query.get('relatedToVideoId');

        if (relatedToVideoId === null) return res(ctx.status(400));
        return res(ctx.json({ items: mockVideos.items.slice(0, maxResults) }));
      }),

      rest.get('https://www.googleapis.com/youtube/v3/videos', (req, res, ctx) => {
        const query = req.url.searchParams;
        const id = query.get('id');

        if (id === null) return res(ctx.status(400));
        return res(ctx.json([{ id }]));
      })
    );

    beforeAll(() => {
      apiServer.listen();
    });

    afterEach(() => {
      apiServer.resetHandlers();
    });

    afterAll(() => {
      apiServer.close();
    });

    it('The fallback video is returned  if an incorrect videoId id provided', async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useYouTubeVideo(null, fallbackVideo)
      );
      await waitForNextUpdate();
      expect(result.current[0]).toEqual(fallbackVideo);
    });

    it('The related videos list is an empty array if an incorrect videoId id provided', async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useYouTubeVideo(null, fallbackVideo)
      );
      await waitForNextUpdate();
      expect(result.current[1]).toEqual([]);
    });

    it('A correct videoId brings a video and a list of related videos', async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useYouTubeVideo('pLJwsLH_7sg', fallbackVideo)
      );
      await waitForNextUpdate();
      expect(typeof result.current[0]).toBe('object');
      expect(Array.isArray(result.current[1])).toBe(true);
      expect(result.current[1].length).toEqual(relatedLength);
    });
  });
});
