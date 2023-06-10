module.exports = {
  '**/*.{ts,tsx}': [
    "tsc-files --noEmit",
  ],
  '**/*.{ts,tsx,js}': [
    (filenames) =>`next lint --fix --file ${filenames
      .map((file) => file.split(process.cwd())[1])
      .join(' --file ')}`,
    "yarn test:ci --findRelatedTests --coverage=false"
  ],
  '**/*.css': 'stylelint --fix',
}