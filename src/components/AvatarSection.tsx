interface AvatarSectionProps {
  caption: string;
}

const AvatarSection = ({ caption }: AvatarSectionProps) => {
  return (
    <div className="avatar-section">
      <div className="avatar-frame">
        <div className="avatar-placeholder">HDU</div>
      </div>
      <div className="avatar-caption">{caption}</div>
    </div>
  );
};

export default AvatarSection;