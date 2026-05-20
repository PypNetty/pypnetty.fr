import { useState, useRef } from "react";

interface TermProps {
  children: React.ReactNode;
  def: string;
  href?: string; // lien interne vers un article kezako/deep-dive
  extHref?: string; // lien externe vers la doc officielle
}

export default function Term({ children, def, href, extHref }: TermProps) {
  const [visible, setVisible] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function show() {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setVisible(true);
  }

  function hide() {
    hideTimer.current = setTimeout(() => setVisible(false), 200);
  }

  const hasLinks = href || extHref;

  return (
    <span
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      <span
        tabIndex={0}
        style={{
          background: "var(--color-surface)",
          border: "0.5px solid var(--color-edge)",
          borderRadius: "3px",
          padding: "1px 6px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.875em",
          cursor: "help",
          color: "var(--color-fg2)",
          outline: "none",
        }}
      >
        {children}
      </span>

      {visible && (
        <span
          onMouseEnter={show}
          onMouseLeave={hide}
          style={{
            position: "absolute",
            bottom: "calc(100% + 8px)",
            left: "50%",
            transform: "translateX(-50%)",
            width: "260px",
            background: "var(--color-surface)",
            border: "0.5px solid var(--color-edge)",
            borderRadius: "6px",
            padding: "10px 12px",
            fontFamily: "var(--font-sans)",
            fontSize: "13px",
            color: "var(--color-fg2)",
            lineHeight: "1.5",
            zIndex: 50,
            pointerEvents: "auto",
            display: "block",
          }}
        >
          {def}

          {hasLinks && (
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                marginTop: "8px",
              }}
            >
              {href && (
                <a
                  href={href}
                  style={{
                    fontSize: "12px",
                    color: "var(--color-accent)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <span style={{ fontSize: "10px", opacity: 0.7 }}>kezako</span>
                  lire l'article →
                </a>
              )}
              {extHref && (
                <a
                  href={extHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "12px",
                    color: "var(--color-subtle)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <span style={{ fontSize: "10px", opacity: 0.7 }}>doc</span>
                  documentation officielle →
                </a>
              )}
            </span>
          )}

          <span
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              borderWidth: "5px",
              borderStyle: "solid",
              borderColor:
                "var(--color-edge) transparent transparent transparent",
            }}
          />
        </span>
      )}
    </span>
  );
}
