export function parseMediaUrls(input: string | null | undefined) {
  if (!input) {
    return [];
  }

  const trimmed = input.trim();

  if (!trimmed) {
    return [];
  }

  if (trimmed.startsWith('[')) {
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        return parsed.filter((item): item is string => typeof item === 'string' && item.trim().length > 0);
      }
    } catch {
      return [trimmed];
    }
  }

  if (trimmed.includes('\n')) {
    return trimmed
      .split('\n')
      .map((part) => part.trim())
      .filter(Boolean);
  }

  if (trimmed.includes(',')) {
    return trimmed
      .split(',')
      .map((part) => part.trim())
      .filter(Boolean);
  }

  return [trimmed];
}
