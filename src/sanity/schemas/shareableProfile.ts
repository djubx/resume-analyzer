export default {
  name: 'shareableProfile',
  title: 'Shareable Profile',
  type: 'document',
  fields: [
    {
      name: 'profileId',
      title: 'Profile ID',
      type: 'string',
      description: 'Unique identifier for the shareable profile',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    },
    {
      name: 'atsScoreRef',
      title: 'ATS Score Reference',
      type: 'reference',
      to: [{ type: 'atsScore' }],
      description: 'Reference to the ATS Score document',
    },
    {
      name: 'isPublic',
      title: 'Is Public',
      type: 'boolean',
      description: 'Whether the profile is publicly accessible',
    },
    {
      name: 'expiresAt',
      title: 'Expires At',
      type: 'datetime',
      description: 'When the shareable link expires (optional)',
    },
    {
      name: 'customizations',
      title: 'Customizations',
      type: 'object',
      fields: [
        {
          name: 'theme',
          title: 'Theme',
          type: 'string',
          options: {
            list: [
              { title: 'Default', value: 'default' },
              { title: 'Professional', value: 'professional' },
              { title: 'Creative', value: 'creative' },
              { title: 'Technical', value: 'technical' },
            ],
          },
        },
        {
          name: 'showContactInfo',
          title: 'Show Contact Information',
          type: 'boolean',
        },
        {
          name: 'highlightedSections',
          title: 'Highlighted Sections',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'profileId',
      subtitle: 'createdAt',
    },
    prepare({ title, subtitle }: { title: string; subtitle: string }) {
      return {
        title: `Profile: ${title}`,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : 'No date',
      };
    },
  },
} 