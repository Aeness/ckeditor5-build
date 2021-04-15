import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import InsertImage from '@aeness/ckeditor5-insert-image/src/insertimage';

export default class SimpleEditor extends ClassicEditor {}

// Plugins to include in the build.
SimpleEditor.builtinPlugins = [
    Essentials,
    Bold,
    Italic,
    Underline,
    Alignment,
    BlockQuote,
    EasyImage,
    Heading,
    Image,
    InsertImage,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    Indent,
    Link,
    LinkImage,
    List,
    Paragraph,
    PasteFromOffice,
    TextTransformation
];

// Editor configuration.
SimpleEditor.defaultConfig = {
    toolbar: {
        items: [
            'heading',
            '|', 'alignment:left', 'alignment:center', 'alignment:right', 'alignment:justify',
            '|',
            'bold',
            'italic',
            'underline',
            '|',
            'link',
            '|',
            'bulletedList',
            'numberedList',
            '|',
            'indent',
            'outdent',
            'blockQuote',
            '|',
            'insertImage',
            '|',
            'undo',
            'redo'
        ]
    },
    image: {
        toolbar: [
            'imageStyle:alignLeft',
            'imageStyle:full',
            'imageStyle:alignRight',
            '|',
            'linkImage'
        ],
        styles: [
            // This option is equal to a situation where no style is applied.
            'full',

            // This represents an image aligned to the left.
            'alignLeft',

            // This represents an image aligned to the right.
            'alignRight'
        ]
    },
    // This value must be kept in sync with the language defined in webpack.config.js.
    language: 'en'
};
