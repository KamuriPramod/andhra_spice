(function () {
  const section = document.getElementById("biryaniScroll");
  const viewport = document.getElementById("stickyViewport");
  const video = document.getElementById("biryaniVideo");
  if (!section || !viewport || !video) return;

  const cards = [
    document.getElementById("textStep1"),
    document.getElementById("textStep2"),
    document.getElementById("textStep3"),
  ].filter(Boolean);

  const reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let duration = 0;
  let ticking = false;
  let primed = false;

  video.addEventListener("loadedmetadata", () => {
    duration = video.duration || 0;
    render();
  });
  video.addEventListener("durationchange", () => {
    duration = video.duration || duration;
    render();
  });

  // By the time this script runs (it's loaded at the very end of the page,
  // after a large block of menu-building JS), the video -- which has
  // preload="auto" and started fetching as soon as the page was parsed --
  // has very likely already fired "loadedmetadata". A listener attached
  // after an event has already fired never runs, so without this check
  // `duration` would stay 0 forever and the scroll-scrub below would never
  // do anything. readyState >= 1 (HAVE_METADATA) means duration is already
  // known, so grab it directly instead of waiting for an event that already
  // happened.
  if (video.readyState >= 1 && video.duration) {
    duration = video.duration;
  }

  // Many browsers won't actually paint a seeked frame on a <video> that
  // has never been played -- setting currentTime alone can silently do
  // nothing. Priming with a muted play() immediately followed by pause()
  // forces the browser to start decoding, so later currentTime seeks
  // (from scroll) actually render on screen.
  function primeVideo() {
    if (primed) return;
    video.muted = true;
    const playAttempt = video.play();
    if (playAttempt && typeof playAttempt.then === "function") {
      playAttempt
        .then(() => {
          video.pause();
          primed = true;
        })
        .catch(() => {
          // Autoplay blocked -- try again on the first user interaction.
          const retry = () => {
            video.play().then(() => {
              video.pause();
              primed = true;
            }).catch(() => {});
          };
          window.addEventListener("scroll", retry, { once: true, passive: true });
          window.addEventListener("touchstart", retry, { once: true, passive: true });
        });
    } else {
      primed = true;
    }
  }

  video.addEventListener("error", () => {
    // If the video file itself fails to load (404, bad upload, unsupported
    // format, etc.) show this on-screen instead of silently sitting on
    // the poster image forever.
    const warn = document.createElement("div");
    warn.textContent = "Video failed to load (check animation.mp4 in the repo).";
    warn.style.cssText =
      "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);" +
      "background:#b23327;color:#fff;padding:14px 20px;border-radius:10px;" +
      "font-family:sans-serif;font-size:14px;z-index:200;max-width:80vw;text-align:center;";
    document.body.appendChild(warn);
  });

  function updateCards(progress) {
    const bounds = [
      [0, 0.4],
      [0.3, 0.7],
      [0.6, 1],
    ];
    cards.forEach((card, i) => {
      const [start, end] = bounds[i];
      const visible = progress >= start && progress <= end;
      card.classList.toggle("visible", visible);
    });
  }

  // Progress across the ENTIRE section height (no viewport subtraction).
  // The video wrapper is position:fixed, so it doesn't consume its own
  // scroll runway the way position:sticky does -- that's what removes the
  // dead trailing screen-height of scroll after the video finishes.
  function render() {
    ticking = false;
    const rect = section.getBoundingClientRect();
    const H = rect.height || 1;

    const pastEnd = rect.bottom <= 0;   // fully scrolled through the section
    const beforeStart = rect.top > 0;   // haven't reached the section yet

    // Unpin the instant we've scrolled past the section -- menu content
    // (which sits immediately after in the DOM) is then free to appear
    // with no leftover frozen-frame gap.
    viewport.classList.toggle("hero-exit", pastEnd || beforeStart);

    const progress = Math.min(1, Math.max(0, -rect.top / H));

    if (duration > 0) {
      const target = progress * duration;
      if (Math.abs(video.currentTime - target) > 0.03) {
        video.currentTime = target;
      }
    }

    updateCards(progress);
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(render);
  }

  if (reduceMotion) {
    // Respect reduced-motion: no scroll pinning at all, just a normal
    // inline video that autoplays once, in the page's normal flow.
    viewport.classList.add("hero-static");
    section.style.height = "auto";
    video.autoplay = true;
    video.loop = true;
    video.play().catch(() => {});
    updateCards(0);
    cards.forEach((c) => c.classList.add("visible"));
    return;
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  if (video.readyState >= 1) {
    primeVideo();
  } else {
    video.addEventListener("loadedmetadata", primeVideo, { once: true });
  }

  render();
})();
