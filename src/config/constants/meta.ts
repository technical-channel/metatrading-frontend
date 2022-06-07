import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MetaTrading',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MetaTrading')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('MetaTrading')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('MetaTrading')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('MetaTrading')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('MetaTrading')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('MetaTrading')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MetaTrading')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MetaTrading')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('MetaTrading')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MetaTrading')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('MetaTrading')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MetaTrading')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MetaTrading')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MetaTrading')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MetaTrading')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('MetaTrading')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('MetaTrading')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('MetaTrading')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('MetaTrading Info & Analytics')}`,
        description: 'View statistics for MetaTrading exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('MetaTrading Info & Analytics')}`,
        description: 'View statistics for MetaTrading exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('MetaTrading Info & Analytics')}`,
        description: 'View statistics for MetaTrading exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('MetaTrading')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('MetaTrading')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('MetaTrading')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('MetaTrading')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('MetaTrading')}`,
      }
    default:
      return null
  }
}
