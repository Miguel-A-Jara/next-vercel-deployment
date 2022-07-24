import { useRouter } from 'next/router';
import Link from 'next/link';
import { CSSProperties, FC } from 'react';

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
}

interface IActiveLink {
  text: string;
  href: string;
}

const ActiveLink: FC<IActiveLink> = ({text, href}) => {

  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  )
}

export default ActiveLink
