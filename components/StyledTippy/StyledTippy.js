import Tippy from '@tippyjs/react'
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/dist/tippy.css' // optional

export default function StyledTippy({content,placement, children}) {
  return(
  <Tippy content={content} theme="light" arrow={false} placement={placement} animation="shift-away">
    {children}
  </Tippy>
  )}