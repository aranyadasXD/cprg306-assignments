import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2" passHref>
          Week 2 Assignments
        </Link>
      </p>
    </main>
  );
}
