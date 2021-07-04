/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function (config) {
  // Define changes to default configuration here.
  // For complete reference see:
  // https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html

  // The toolbar groups arrangement, optimized for two toolbar rows.
  config.toolbar = [
    {
      name: 'basicstyles',
      items: [
        'Bold',
        'Italic',
        'Underline',
        'Strike',
        'Link',
        'NumberedList',
        'BulletedList',
        'Subscript',
        'Superscript',
      ],
    },
    {
      name: 'paragraph',
      items: [
        '-',
        'Outdent',
        'Indent',
        'JustifyLeft',
        'JustifyCenter',
        'JustifyRight',
        'JustifyBlock',
      ],
    },
    { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
    { name: 'colors', items: ['TextColor', 'BGColor'] },
  ]

  // Remove some buttons provided by the standard plugins, which are
  // not needed in the Standard(s) toolbar.
  //   config.removeButtons = 'Underline,Subscript,Superscript'

  // Set the most common block elements.
  config.format_tags = 'p;h1;h2;h3;pre'
  config.extraPlugins = 'justify'
  // Simplify the dialog windows.
  //   config.removeDialogTabs = 'image:advanced;link:advanced'
}
