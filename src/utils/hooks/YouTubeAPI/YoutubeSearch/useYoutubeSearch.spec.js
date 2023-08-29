import { renderHook } from '@testing-library/react-hooks';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import useYouTubeSearch from './useYouTubeSearch';

import mockVideos from '../../../../mock/mockVideos';

describe('useYoutubeSearch Hook', () => {
  describe('Returns the initial values correctly', () => {
    const { result } = renderHook(() => useYouTubeSearch(['hello', 'world']));
    it('The search result is the same provided as the initial search result', () => {
      expect(result.current[0]).toEqual(['hello', 'world']);
    });

    it('The second argument is a function', () => {
      expect(typeof result.current[1]).toBe('function');
    });

    it('The third argument is a function', () => {
      expect(typeof result.current[2]).toBe('function');
    });
  });

  describe('Search by query works properly', () => {
    const maxResults = 20;
    const searchQuery = 'wizeline';

    const apiServer = setupServer(
      rest.get('https://www.googleapis.com/youtube/v3/search', (req, res, ctx) => {
        const query = req.url.searchParams;
        const maxResultsNum = query.get('maxResults');
        const q = query.get('q');

        if (q === null) return res(ctx.json({ items: mockVideos.items.slice(0, 2) }));
        return res(ctx.json({ items: mockVideos.items.slice(0, maxResultsNum) }));
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

    it('Returns results correctly when using a non empty string', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useYouTubeSearch(['abc']));
      result.current[1](searchQuery);

      await waitForNextUpdate();
      expect(Array.isArray(result.current[0])).toBe(true);
    });

    it('Returns results correctly when using an empty string', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useYouTubeSearch(['abc']));
      result.current[1]('');

      await waitForNextUpdate();
      expect(Array.isArray(result.current[0])).toBe(true);
    });

    it('Returns results equal to maxResults', async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useYouTubeSearch(['abc'], maxResults)
      );
      result.current[1](searchQuery);

      await waitForNextUpdate();
      expect(Array.isArray(result.current[0])).toBe(true);
      expect(result.current[0].length).toBe(maxResults);
    });
  });

  describe('Search related works properly', () => {
    const videoId = 'Nss3EmTDD3s';
    const maxResults = 20;

    const apiServer = setupServer(
      rest.get('https://www.googleapis.com/youtube/v3/search', (req, res, ctx) => {
        const query = req.url.searchParams;
        const maxResultsNum = query.get('maxResults');
        const relatedToVideoId = query.get('relatedToVideoId');

        if (relatedToVideoId === null) return res(ctx.status(400));
        return res(ctx.json({ items: mockVideos.items.slice(0, maxResultsNum) }));
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

    it('Returns results correctly when using a correct videoId', async () => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useYouTubeSearch(['abc'], maxResults)
      );
      result.current[2](videoId);

      await waitForNextUpdate();
      expect(Array.isArray(result.current[0])).toBe(true);
      expect(result.current[0].length).toEqual(maxResults);
    });

    it('Returns results empty array when using an invalid videoId', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useYouTubeSearch(['abc']));
      result.current[2]('');

      await waitForNextUpdate();
      expect(Array.isArray(result.current[0])).toBe(true);
      expect(result.current[0].length).toEqual(0);
    });
  });
});
