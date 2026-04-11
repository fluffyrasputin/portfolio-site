"use client";

import { useEffect, useState } from "react";

export function SiteLoader() {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const closeTimer = window.setTimeout(() => setClosing(true), 850);
    const hideTimer = window.setTimeout(() => setVisible(false), 1250);

    return () => {
      window.clearTimeout(closeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`site-loader${closing ? " site-loader--closing" : ""}`}
    >
      <div className="site-loader__glass">
        <div className="site-loader__track">
          <span className="site-loader__pulse" />
        </div>
      </div>
    </div>
  );
}
