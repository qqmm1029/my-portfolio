// ============================================================
// ImageModal.tsx - 全屏图片弹窗组件
// 功能：全屏显示图片，支持缩放、切换、键盘关闭
// ============================================================

// 导入 React Hooks
import { useRef, useEffect, useCallback } from "react";
// 导入 createPortal：将组件渲染到 DOM 的不同位置
import { createPortal } from "react-dom";

// ============================================================
// 定义 Props 类型
// ============================================================
interface ImageModalProps {
  images: string[];                    // 图片列表
  index: number;                       // 当前显示第几张
  onChange: (index: number) => void;   // 切换图片
  onClose: () => void;                 // 关闭弹窗
}

// ============================================================
// 主组件
// ============================================================
const ImageModal = ({
  images,
  index,
  onChange,
  onClose
}: ImageModalProps) => {
  // 引用图片 DOM，用于缩放操作
  const imgRef = useRef<HTMLImageElement>(null);
  // 存储当前缩放比例，默认 1 = 100%
  const scaleRef = useRef(1);

  // 重置缩放为原始大小
  const resetTransform = useCallback(() => {
    scaleRef.current = 1;
    if (imgRef.current) {
      imgRef.current.style.transform = "scale(1)";
    }
  }, []);

  // 切换图片时重置缩放
  useEffect(() => {
    resetTransform();
  }, [index, resetTransform]);

  // 禁止页面滚动
  useEffect(() => {
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, []);

  // ESC 键关闭
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", key);
    return () => {
      window.removeEventListener("keydown", key);
    };
  }, [onClose]);

  // 滚轮缩放：滚轮向上放大，向下缩小
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    // 向下滚缩小 (0.9)，向上滚放大 (1.1)
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    // 限制缩放范围 0.5 ~ 4 倍
    scaleRef.current = Math.min(Math.max(scaleRef.current * delta, 0.5), 4);
    if (imgRef.current) {
      imgRef.current.style.transform = `scale(${scaleRef.current})`;
    }
  };

  // 没有图片时不渲染
  if (images.length === 0) return null;

  // 使用 Portal 渲染到 body
  return createPortal(
    // ===== 黑色背景层 =====
    // 点击背景关闭弹窗
    <div
      className="image-modal"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.9)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* ===== 内容层 ===== */}
      {/* 阻止点击冒泡，防止点击内容时关闭 */}
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* ===== 关闭按钮 ===== */}
        <button
          className="modal-close-x"
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "30px",
            color: "white",
            fontSize: "36px",
            background: "rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 30,
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(0,0,0,0.5)";
          }}
        >
          ✕
        </button>

        {/* ===== 左箭头 ===== */}
        <button
          className="modal-prev"
          onClick={() => {
            onChange(index === 0 ? images.length - 1 : index - 1);
          }}
          style={{
            position: "absolute",
            left: "30px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
            fontSize: "50px",
            background: "rgba(0,0,0,0.3)",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 20,
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(0,0,0,0.3)";
          }}
        >
          ‹
        </button>

        {/* ===== 图片 ===== */}
        <img
          ref={imgRef}
          className="modal-image"
          src={images[index]}
          alt="preview"
          onWheel={handleWheel}
          style={{
            maxWidth: "90vw",
            maxHeight: "90vh",
            objectFit: "contain",
            transform: `scale(${scaleRef.current})`,
            borderRadius: "8px",
            cursor: "grab",
            transition: "transform 0.1s ease",
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.cursor = "grabbing";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.cursor = "grab";
          }}
        />

        {/* ===== 右箭头 ===== */}
        <button
          className="modal-next"
          onClick={() => {
            onChange(index === images.length - 1 ? 0 : index + 1);
          }}
          style={{
            position: "absolute",
            right: "30px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
            fontSize: "50px",
            background: "rgba(0,0,0,0.3)",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 20,
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(0,0,0,0.3)";
          }}
        >
          ›
        </button>
      </div>
    </div>,
    document.body
  );
};

export default ImageModal;