<template>
  <div class="font-sans">
    <NuxtPage />
  </div>
</template>

<style>
/* Import SF Pro from the system (macOS) or fallback */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

html {
  scroll-behavior: smooth;
  font-family:
    'SF Pro Display', 'SF Pro Text', '-apple-system', 'BlinkMacSystemFont',
    'Inter', 'Segoe UI', 'Roboto', sans-serif;
}

/* If you have SF Pro installed locally */
@font-face {
  font-family: 'SF Pro Display';
  src: local('SF Pro Display'), local('SFProDisplay-Regular');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'SF Pro Display';
  src: local('SF Pro Display Medium'), local('SFProDisplay-Medium');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'SF Pro Display';
  src: local('SF Pro Display Semibold'), local('SFProDisplay-Semibold');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'SF Pro Display';
  src: local('SF Pro Display Bold'), local('SFProDisplay-Bold');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
</style>
