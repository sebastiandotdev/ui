const husky = (await import('husky')).default

if (process.env.NODE_ENV === 'production' || process.env.CI === 'true') {
  process.exit(0)
}

husky()
