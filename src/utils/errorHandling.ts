export function setupErrorHandling() {
  window.addEventListener('unhandledrejection', (event) => {
    handleError(event.reason);
  });

  window.addEventListener('error', (event) => {
    handleError(event.error);
  });
}

export function handleError(error: unknown) {
  const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
  console.error('Error:', errorMessage);
  
  // You can implement custom error handling here, such as showing a toast notification
  alert(errorMessage);
}