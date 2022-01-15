import Link from 'next/link';
import StyledImage from '../components/StyledImage'
import VideoPlayer from '../components/VideoPlayer'
import Highlight from '../components/Highlight'
import HighlightwithPic from '../components/HighlightwithPic'
import StyledTippywithText from '../components/StyledTippywithText'
import StyledTippy from './StyledTippy';
import SyntaxHighlighter from './SyntaxHighlighter';
import InsightThoughts from './InsightThoughts';
import Feedbacks from './Feedbacks';

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
  Highlight,
  HighlightwithPic,
  StyledTippy,
  StyledTippywithText,
  SyntaxHighlighter,
  InsightThoughts,
  Feedbacks,
};
export default MDXComponents;

