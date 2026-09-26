(function () {
  const section = document.getElementById("biryaniScroll");
  const video = document.getElementById("biryaniVideo");
  if (!section || !video) return;

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

  video.addEventListener("loadedmetadata", () => {
    duration = video.duration || 0;
  });
  // Some browsers report duration only after a bit of buffering.
  video.addEventListener("durationchange", () => {
    duration = video.duration || duration;
  });

  function progressInSection() {
    const rect = section.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    if (scrollable <= 0) return 0;
    const scrolled = -rect.top;
    return Math.min(1, Math.max(0, scrolled / scrollable));
  }

  function updateCards(progress) {
    // Three roughly equal acts across the scroll, with soft overlap.
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

  function render() {
    ticking = false;
    const progress = progressInSection();

    if (duration > 0) {
      const target = progress * duration;
      // Avoid needless seeks; also keeps it smooth on scroll-jitter.
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
    // Respect reduced-motion: just play the video normally, no scrubbing.
    video.autoplay = true;
    video.loop = true;
    video.play().catch(() => {});
    updateCards(0);
    cards.forEach((c) => c.classList.add("visible"));
    return;
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  // Initial paint.
  render();
})();
