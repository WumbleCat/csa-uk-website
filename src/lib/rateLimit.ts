const WINDOW_MS = 60_000;

export function checkRateLimit(key: string): { allowed: boolean; secondsLeft: number } {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return { allowed: true, secondsLeft: 0 };
    const elapsed = Date.now() - parseInt(raw, 10);
    if (elapsed >= WINDOW_MS) return { allowed: true, secondsLeft: 0 };
    return { allowed: false, secondsLeft: Math.ceil((WINDOW_MS - elapsed) / 1000) };
  } catch {
    return { allowed: true, secondsLeft: 0 };
  }
}

export function markRateLimit(key: string) {
  try {
    localStorage.setItem(key, String(Date.now()));
  } catch {}
}
