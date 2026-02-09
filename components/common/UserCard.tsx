import { UserProps } from "@/interfaces";

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-zinc-200 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-semibold text-zinc-900 mb-4">{name}</h2>
      <div className="space-y-3">
        <div>
          <span className="text-sm font-medium text-zinc-500 block mb-1">
            Email
          </span>
          <a
            href={`mailto:${email}`}
            className="text-zinc-700 hover:text-zinc-900 transition-colors break-all"
          >
            {email}
          </a>
        </div>
        <div>
          <span className="text-sm font-medium text-zinc-500 block mb-1">
            Address
          </span>
          <p className="text-zinc-700">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
