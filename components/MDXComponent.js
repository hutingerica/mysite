import Link from 'next/link';
import StyledImage from '../components/StyledImage'
import VideoPlayer from '../components/VideoPlayer'

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  StyledImage,
  a: CustomLink,
  VideoPlayer,

};
export default MDXComponents;

