'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

import { User } from './types/user';

import Gallery from './gallery';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      const res1 = fetch('https://jsonplaceholder.typicode.com/users');
      const res2 = fetch('https://dummyjson.com/users');

      Promise.all([res1, res2])
        .then(async ([res1, res2]) => {
          const users1 = await res1.json();
          const users2 = await res2.json();
          setUsers([...users1, ...users2.users]);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error:', error);
          setError(error);
          setLoading(false);
        });
    }

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        Loading Users
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        Error fetching users.
      </div>
    );
  }

  return (
    <main className={styles.main}>
      <Gallery users={users} />
    </main>
  );
}
