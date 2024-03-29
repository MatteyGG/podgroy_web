import Script from "next/script";
import { useRef, useEffect } from "react";

const TelegramWidget = () => {
  const telegramWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://telegram.org/js/telegram-widget.js?22';
    scriptElement.setAttribute('data-telegram-post', 'pod_goroi/38');
    scriptElement.setAttribute('data-width', '100%');
    telegramWrapperRef.current?.appendChild(scriptElement);

    return () => {
      telegramWrapperRef.current?.removeChild(scriptElement);
    };
  }, []);

  return <div ref={telegramWrapperRef} />;
};

export default TelegramWidget;