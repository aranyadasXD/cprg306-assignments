import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2" passHref>
          Week 2 Assignment
        </Link>
      </p>
      <p>
        <Link href="/week-3" passHref>
          Week 3 Assignment
        </Link>
      </p>
      <p>
        <Link href="/week-4" passHref>
          Week 4 Assignment
        </Link>
      </p>
      <p>
        <Link href="/week-5" passHref>
          Week 5 Assignment
        </Link>
      </p>
      <p>
        <Link href="/week-6" passHref>
          Week 6 Assignment
        </Link>
      </p>
      <p>
        <Link href="/week-7" passHref>
          Week 7 Assignment
        </Link>
      </p>
      <p>
        <Link href="/week-8" passHref>
          Week 8 Assignment
        </Link>
      </p>
      <p>
        <Link href="/week-9" passHref>
          Week 9 Assignment
        </Link>
      </p>
      <p>
        <Link href="/week-10" passHref>
          Week 10 Assignment
        </Link>
      </p>
    </main>
  );
}
