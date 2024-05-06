import usePlatforms from "./usePlatforms";

const usePlatformSelector = (platformId?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms.results.find(
    (platform) => platform.id === platformId
  );
}

export default usePlatformSelector