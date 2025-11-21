interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const store = new Map<string, RateLimitEntry>();

/**
 * Check rate limit for an IP address
 * @param ip - IP address to check
 * @param maxAttempts - Maximum attempts allowed (default: 3)
 * @param windowMs - Time window in milliseconds (default: 1 hour)
 * @returns Object with allowed status and remaining attempts
 */
export function checkRateLimit(
  ip: string,
  maxAttempts: number = 3,
  windowMs: number = 3600000 // 1 hour
): { allowed: boolean; remaining: number; resetTime?: number } {
  const now = Date.now();
  const entry = store.get(ip);

  // No entry or expired - create new
  if (!entry || now > entry.resetTime) {
    const resetTime = now + windowMs;
    store.set(ip, { count: 1, resetTime });
    return { allowed: true, remaining: maxAttempts - 1, resetTime };
  }

  // Check if limit exceeded
  if (entry.count >= maxAttempts) {
    return { allowed: false, remaining: 0, resetTime: entry.resetTime };
  }

  // Increment count
  entry.count++;
  return {
    allowed: true,
    remaining: maxAttempts - entry.count,
    resetTime: entry.resetTime,
  };
}

/**
 * Clean up expired entries from the store
 * Call this periodically to prevent memory leaks
 */
export function cleanupExpiredEntries(): void {
  const now = Date.now();
  for (const [ip, entry] of store.entries()) {
    if (now > entry.resetTime) {
      store.delete(ip);
    }
  }
}

// Clean up expired entries every 10 minutes
setInterval(cleanupExpiredEntries, 600000);
