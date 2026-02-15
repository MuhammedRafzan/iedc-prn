import { useCallback } from 'react';

function useConfetti() {
  const fireConfetti = useCallback(async () => {
    try {
      const confetti = (await import('canvas-confetti')).default;
      
      // Kerala green confetti
      const colors = ['#00A651', '#00D9FF', '#FFD700', '#FF6B35'];
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors,
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
      }, 200);

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });
      }, 400);
    } catch (error) {
      console.log('Confetti not available');
    }
  }, []);

  return fireConfetti;
}

export default useConfetti;