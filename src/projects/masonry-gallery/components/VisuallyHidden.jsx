export default function VisuallyHidden({ children }) {
  return (
    <span
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        margin: '-1px',
        border: 0,
        padding: 0,
        clip: 'rect(0 0 0 0)',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  );
}
