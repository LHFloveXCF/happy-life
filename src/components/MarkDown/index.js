import classNames from 'classnames';
import './hljs.custom.scss';
import './index.scss';

import hljs from 'highlight.js';
import {marked} from 'marked';

hljs.configure({
  classPrefix: 'hljs-',
  languages: ['css', 'html', 'javascript', 'typescript', 'markdown'] // 注意语言名称通常是小写的
});
 
marked.setOptions({
  highlight: function(code, lang) {
    const validLanguage = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(validLanguage, code).value;
  },
  gfm: true,
  breaks: true
});

function MarkDown({content, className}) {
  const htmlContent = marked(content || '');
  return (
    <div className={classNames("markdown", className)} dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}


export default MarkDown;
