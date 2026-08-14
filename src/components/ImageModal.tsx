import { useRef, useEffect, useCallback } from "react";

interface ImageModalProps {
  src: string | null;
  onClose: () => void;
}

const ImageModal = ({ src, onClose }: ImageModalProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const scaleRef = useRef(1);
  const translateRef = useRef({ x: 0, y: 0 });

  const dragState = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  const pinchState = useRef({
    startDist: 0,
    startScale: 1,
  });

  const updateTransform = useCallback(() => {
    if (imgRef.current) {
      imgRef.current.style.transform = `scale(${scaleRef.current}) translate(${translateRef.current.x}px, ${translateRef.current.y}px)`;
    }
  }, []);

  const resetTransform = useCallback(() => {
    scaleRef.current = 1;
    translateRef.current = { x: 0, y: 0 };
    updateTransform();
  }, [updateTransform]);

  // 打开时重置
  useEffect(() => {
    if (src) {
      resetTransform();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [src, resetTransform]);

  // ESC 关闭
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      scaleRef.current = Math.min(Math.max(scaleRef.current * delta, 0.5), 4);
      updateTransform();
    },
    [updateTransform]
  );

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (scaleRef.current <= 1) return;
    dragState.current = {
      isDragging: true,
      startX: e.clientX,
      startY: e.clientY,
      lastX: translateRef.current.x,
      lastY: translateRef.current.y,
    };
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!dragState.current.isDragging) return;
      const dx = e.clientX - dragState.current.startX;
      const dy = e.clientY - dragState.current.startY;
      translateRef.current = {
        x: dragState.current.lastX + dx,
        y: dragState.current.lastY + dy,
      };
      updateTransform();
    },
    [updateTransform]
  );

  const handleMouseUp = useCallback(() => {
    dragState.current.isDragging = false;
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touches = e.touches;
    if (touches.length === 1) {
      if (scaleRef.current > 1) {
        dragState.current = {
          isDragging: true,
          startX: touches[0].clientX,
          startY: touches[0].clientY,
          lastX: translateRef.current.x,
          lastY: translateRef.current.y,
        };
      }
    } else if (touches.length === 2) {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      pinchState.current = {
        startDist: Math.sqrt(dx * dx + dy * dy),
        startScale: scaleRef.current,
      };
    }
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      const touches = e.touches;
      if (touches.length === 1 && dragState.current.isDragging) {
        const dx = touches[0].clientX - dragState.current.startX;
        const dy = touches[0].clientY - dragState.current.startY;
        translateRef.current = {
          x: dragState.current.lastX + dx,
          y: dragState.current.lastY + dy,
        };
        updateTransform();
      } else if (touches.length === 2 && pinchState.current.startDist > 0) {
        const dx = touches[0].clientX - touches[1].clientX;
        const dy = touches[0].clientY - touches[1].clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const newScale =
          pinchState.current.startScale * (dist / pinchState.current.startDist);
        scaleRef.current = Math.min(Math.max(newScale, 0.5), 4);
        updateTransform();
      }
    },
    [updateTransform]
  );

  const handleTouchEnd = useCallback(() => {
    dragState.current.isDragging = false;
    pinchState.current.startDist = 0;
    if (scaleRef.current < 1) {
      resetTransform();
    }
  }, [resetTransform]);

  if (!src) return null;

  return (
    <div className="image-modal show" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close-x" onClick={onClose}>
          ✕
        </span>
        <div className="modal-image-wrapper">
          <img
            ref={imgRef}
            src={src}
            alt="预览"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;