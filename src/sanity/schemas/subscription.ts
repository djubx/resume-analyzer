import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'subscription',
  title: 'Subscription',
  type: 'document',
  fields: [
    defineField({
      name: 'paddleSubscriptionId',
      title: 'Paddle Subscription ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'paddleCustomerId',
      title: 'Paddle Customer ID',
      type: 'string',
    }),
    defineField({
      name: 'customerEmail',
      title: 'Customer Email',
      type: 'string',
    }),
    defineField({
      name: 'auth0UserId',
      title: 'Auth0 User ID',
      type: 'string',
    }),
    defineField({
      name: 'priceId',
      title: 'Price ID',
      type: 'string',
    }),
    defineField({
      name: 'plan',
      title: 'Plan',
      type: 'string',
      options: {
        list: ['pro_monthly', 'pro_annual', 'enterprise_monthly', 'enterprise_annual'],
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['active', 'canceled', 'past_due', 'paused', 'trialing'],
      },
    }),
    defineField({
      name: 'currentPeriodEnd',
      title: 'Current Period End',
      type: 'datetime',
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'customerEmail',
      subtitle: 'status',
    },
  },
})
