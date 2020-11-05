export default {
  jsonapi: {
    data: {
      type: 'users',
      id: '1',
      attributes: {
        name: 'Steven'
      },
      relationships: {
        articles: {
          data: [
            { id: '1', type: 'articles' }
          ]
        }
      },
      meta: {
        totalBalance: 0,
        totalAdUnitsBalance: 0,
        totalCampaignsBalance: 0,
        unprocessedDepositsAmount: 28954,
        unprocessedWithdrawalsAmount: 0,
        unreadNotificationMessagesCount: 0
      }
    },

    included: [
      {
        type: 'articles',
        id: '1',
        attributes: {
          body: 'This is my article'
        }
      }
    ]
  },

  normalized: {
    result: {
      users: ['1']
    },
    entities: {
      users: {
        '1': {
          id: '1',
          name: 'Steven',
          articles: [
            { id: '1', type: 'articles' }
          ],
          meta: {
            totalBalance: 0,
            totalAdUnitsBalance: 0,
            totalCampaignsBalance: 0,
            unprocessedDepositsAmount: 28954,
            unprocessedWithdrawalsAmount: 0,
            unreadNotificationMessagesCount: 0
          }
        }
      },
      articles: {
        '1': {
          id: '1',
          body: 'This is my article'
        }
      }
    }
  }
}
