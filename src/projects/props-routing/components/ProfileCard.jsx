export default function ProfileCard({ name, bio, age, avatarUrl }) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        {avatarUrl && (
          <img
            src={avatarUrl}
            alt={`${name} avatar`}
            className="card-img-top"
            style={{ objectFit: "cover", height: "180px" }}
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          {age != null && (
            <h6 className="card-subtitle mb-2 text-body-secondary">Age: {age}</h6>
          )}
          <p className="card-text">{bio}</p>
        </div>
      </div>
    </div>
  );
}
