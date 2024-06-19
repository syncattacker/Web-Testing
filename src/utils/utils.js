export const isMobileOrTablet = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return true;
  }

  if (/android/i.test(userAgent)) {
    return true;
  }

  if (
    /Mobile|Tablet|iPad|iPhone|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    )
  ) {
    return true;
  }

  return false;
};
