import ProfileCard from "../components/ProfileCard";

const people = [
  {
    name: "Thomas",
    age: 30,
    bio: "React developer, building cool projects.",
    avatarUrl: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Katie",
    age: 30,
    bio: "Loves fitness and healthy living.",
    avatarUrl: "https://i.pravatar.cc/400?img=45",
  },
  {
    name: "Jackson",
    bio: "Future game designer and adventurer.",
    avatarUrl: "https://i.pravatar.cc/400?img=4",
  },
  {
    name: "Antonio",
    bio: "Goofy, nurturing, very social.",
    avatarUrl: "https://i.pravatar.cc/400?img=4",
  },
  {
    name: "Lorenzo",
    bio: "Crazy, tough, loves his siblings.",
    avatarUrl: "https://i.pravatar.cc/400?img=4",
  },
  {
    name: "Rosella",
    bio: "Sweet and tough—plays football in a tutu.",
    avatarUrl: "https://i.pravatar.cc/400?img=26",
  },
];

export default function Profiles() {
  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Profiles</h1>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {people.map((p) => (
          <ProfileCard key={p.name} {...p} />
        ))}
      </div>
    </div>
  );
}
