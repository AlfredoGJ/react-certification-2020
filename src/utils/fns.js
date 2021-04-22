function random(limit) {
  return Math.floor(Math.random() * limit);
}
function convertTime(duration) {
  let durationTemp = duration;
  let a = duration.match(/\d+/g);

  if (
    duration.indexOf('M') >= 0 &&
    duration.indexOf('H') === -1 &&
    duration.indexOf('S') === -1
  ) {
    a = [0, a[0], 0];
  }

  if (duration.indexOf('H') >= 0 && duration.indexOf('M') === -1) {
    a = [a[0], 0, a[1]];
  }
  if (
    duration.indexOf('H') >= 0 &&
    duration.indexOf('M') === -1 &&
    duration.indexOf('S') === -1
  ) {
    a = [a[0], 0, 0];
  }

  durationTemp = 0;

  if (a.length === 3) {
    durationTemp += parseInt(a[0], 10) * 3600;
    durationTemp += parseInt(a[1], 10) * 60;
    durationTemp += parseInt(a[2], 10);
  }

  if (a.length === 2) {
    durationTemp += parseInt(a[0], 10) * 60;
    durationTemp += parseInt(a[1], 10);
  }

  if (a.length === 1) {
    durationTemp += parseInt(a[0], 10);
  }

  const hours = Math.floor(durationTemp / 3600);
  durationTemp %= 3600;
  const minutes = Math.floor(durationTemp / 60);
  durationTemp %= 60;

  return `${hours}:${minutes}:${durationTemp}`;
}

export { random, convertTime };
