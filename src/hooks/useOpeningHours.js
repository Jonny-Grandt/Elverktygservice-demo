import { useState, useEffect } from 'react';

export function useOpeningHours() {
  const [status, setStatus] = useState({
    isOpen: false,
    statusText: '',
    currentDayIndex: 0
  });

  useEffect(() => {
    function calculateStatus() {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours * 60 + minutes;

      // Hours: Mon-Thu 07:30-16:30, Fri 07:30-13:00, Sat-Sun Closed
      const openTime = 7 * 60 + 30; // 07:30

      let isOpen = false;
      let statusText = '';

      if (day >= 1 && day <= 4) {
        // Mon - Thu (07:30 - 16:30)
        const closeTime = 16 * 60 + 30;
        if (currentTime >= openTime && currentTime < closeTime) {
          isOpen = true;
          statusText = 'Öppet nu! Stänger kl 16:30';
        } else if (currentTime < openTime) {
          statusText = 'Stängt nu. Öppnar kl 07:30';
        } else {
          statusText = 'Stängt för idag. Öppnar imorgon 07:30';
        }
      } else if (day === 5) {
        // Fri (07:30 - 13:00)
        const closeTime = 13 * 60;
        if (currentTime >= openTime && currentTime < closeTime) {
          isOpen = true;
          statusText = 'Öppet nu! Stänger kl 13:00';
        } else if (currentTime < openTime) {
          statusText = 'Stängt nu. Öppnar kl 07:30';
        } else {
          statusText = 'Stängt för helgen. Öppnar Måndag 07:30';
        }
      } else if (day === 6) {
        statusText = 'Stängt idag (Lördag). Öppnar Måndag 07:30';
      } else {
        statusText = 'Stängt idag (Söndag). Öppnar Måndag 07:30';
      }

      // Map day to table row index (0=Mon, 1=Tue, 2=Wed, 3=Thu, 4=Fri, 5=Sat, 6=Sun)
      const dayIndexMap = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 0: 6 };

      setStatus({
        isOpen,
        statusText,
        currentDayIndex: dayIndexMap[day]
      });
    }

    calculateStatus();
    const interval = setInterval(calculateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return status;
}
