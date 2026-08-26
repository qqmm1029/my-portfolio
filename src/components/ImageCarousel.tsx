// ============================================================
// ImageCarousel.tsx - 图片轮播组件
// 功能：显示图片缩略图轮播，点击后打开全屏弹窗
// ============================================================

// 导入 React 的 useState Hook（用于管理组件状态）
import { useState } from "react";
// 导入全屏弹窗组件 ImageModal
import ImageModal from "./ImageModal";

// ============================================================
// 定义组件 Props（属性）的类型
// images: 图片 URL 字符串数组，例如 ["/img1.png", "/img2.png"]
// ============================================================
interface ImageCarouselProps {
  images: string[];
}

// ============================================================
// 主组件定义
// ============================================================
const ImageCarousel = ({ images }: ImageCarouselProps) => {
  
  // ---------- 状态管理 ----------
  
  // currentIndex: 当前显示第几张图片（默认 0，即第一张）
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // showModal: 是否显示全屏弹窗（默认 false，不显示）
  const [showModal, setShowModal] = useState(false);
  
  // imageError: 当前图片是否加载失败（默认 false）
  const [imageError, setImageError] = useState(false);

  // ---------- 边界处理 ----------
  
  // 如果图片数组为空或没有图片，显示提示信息，不渲染轮播
  if (!images || images.length === 0) {
    return <div>暂无图片</div>;
  }

  // ---------- 功能函数 ----------
  
  // 切换到上一张图片
  // 如果当前是第一张（索引 0），则跳到最后一张
  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // 切换到下一张图片
  // 如果当前是最后一张，则跳回第一张（索引 0）
  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // 图片加载失败时的处理函数
  // 将 imageError 设为 true，显示错误提示
  const handleImageError = () => {
    setImageError(true);
  };

  // ---------- 渲染 UI ----------
  
  return (
    <>
      {/* 轮播容器 */}
      <div className="image-carousel">
        
        {/* 左箭头按钮 - 点击切换到上一张 */}
        {/* ‹ 是左箭头字符（Unicode U+2039） */}
        <button onClick={prevImage}>‹</button>
        
        {/* 如果图片加载失败，显示错误提示 */}
        {imageError ? (
          <div className="image-error">图片加载失败</div>
        ) : (
          /* 否则显示图片 */
          <img
            src={images[currentIndex]}          // 当前显示的图片地址
            alt="项目展示图片"                   // 图片加载失败时的替代文字
            onClick={() => setShowModal(true)}  // 点击图片 → 打开全屏弹窗
            onError={handleImageError}          // 图片加载失败 → 显示错误
            style={{
              width: '450px',                   // 图片宽度
              height: '300px',                  // 图片高度
              objectFit: 'cover',               // 图片裁剪方式：覆盖容器，保持比例
              borderRadius: '12px',             // 圆角
              cursor: 'pointer',                // 鼠标悬停时显示手型（可点击）
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', // 阴影
              transition: 'transform 0.3s ease' // 过渡动画：0.3秒
            }}
            // 鼠标悬停时：图片稍微放大（1.02倍）
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            // 鼠标离开时：图片恢复原大小
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        )}
        
        {/* 右箭头按钮 - 点击切换到下一张 */}
        {/* › 是右箭头字符（Unicode U+203A） */}
        <button onClick={nextImage}>›</button>
      </div>

      {/* 
        全屏弹窗 - 条件渲染
        只有当 showModal 为 true 且图片没有加载失败时才显示
      */}
      {showModal && !imageError && (
        <ImageModal
          images={images}                              // 所有图片列表
          index={currentIndex}                         // 当前显示的图片索引
          onChange={setCurrentIndex}                   // 切换图片的函数
          onClose={() => setShowModal(false)}          // 关闭弹窗的函数
        />
      )}
    </>
  );
};

// ============================================================
// 导出组件，供其他文件使用
// ============================================================
export default ImageCarousel;