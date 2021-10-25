module.exports = {
    "src/**/*.{js,jsx}": [
      "npm run lint",
      "prettier --write"
    ],
    "src/**/*.{ts,tsx}": [
      () => "tsc --skipLibCheck --noEmit", 
      "npm run lint",
      "prettier --write",
    ],   
    "src/**/*.{json,css,scss,md}": [
      "prettier --write"
    ]
  }