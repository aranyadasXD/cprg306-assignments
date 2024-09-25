import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h1>Aranya Das</h1>
      <p>
        <Link href="https://github.com/aranyadasXD/cprg306-assignments" passHref>
        GitHub Repo
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;