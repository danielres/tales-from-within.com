export function SCTrack({
  id,
  track = "reefs",
  artist = "tales-from-within",
  color = "5d5c62",
  inverse = true,
  autoPlay = false,
  showUser = false,
  size = 1,
}) {
  const url = `https://soundcloud.com/${artist}/${track}`;

  return (
    <iframe
      width="100%"
      height={size === 1 ? 20 : size === 2 ? 130 : 20}
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src={`https://w.soundcloud.com/player/?url=${url}&color=%23${color}&inverse=${inverse}&auto_play=${autoPlay}&show_user=${showUser}`}
    ></iframe>
  );
}
