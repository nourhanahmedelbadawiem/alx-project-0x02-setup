import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface JsonPlaceholderUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default function Users() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data: JsonPlaceholderUser[] = await response.json();
        // Transform the API data to match UserProps
        const transformedUsers: UserProps[] = data.map((user) => ({
          name: user.name,
          email: user.email,
          address: `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`,
        }));
        setUsers(transformedUsers);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-bold text-zinc-900 mb-4">Users Page</h1>
        <p className="text-lg text-zinc-600 mb-8">
          Users fetched from JSONPlaceholder API
        </p>

        {loading && (
          <div className="text-center py-12">
            <p className="text-zinc-600">Loading users...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800">Error: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user, index) => (
              <UserCard
                key={index}
                name={user.name}
                email={user.email}
                address={user.address}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
