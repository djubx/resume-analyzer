export default {
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'file',
      title: 'Resume File',
      type: 'file',
      options: {
        accept: '.pdf'
      }
    },
    {
      name: 'formattedFileSize',
      title: 'File Size',
      type: 'string',
    },
    {
      name: 'uploadedAt',
      title: 'Uploaded At',
      type: 'datetime',
    },
  ],
}