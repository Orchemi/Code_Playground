'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href={'/'}>Main</Link> | <Link href={'/references'}>참고자료</Link>
      메인 페이지
    </main>
  );
}
