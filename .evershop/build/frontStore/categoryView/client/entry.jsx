
      import React from 'react';
      import ReactDOM from 'react-dom';
      import Area from '@evershop/evershop/src/components/common/Area';
      import Hydrate from '@evershop/evershop/src/components/common/react/client/HydrateFrontStore';
      
Area.defaultProps.components = {
  'icon-wrapper': {
    '137dcfd8bf7950dd6201684efdcb40a1': {
      id: '137dcfd8bf7950dd6201684efdcb40a1',
      sortOrder: 5,
      component: require('/Users/prerana_vasishta/my-evershop/node_modules/@evershop/evershop/src/modules/catalog/pages/frontStore/all/SearchBox.jsx')
    },
    '5248a628c0ba0eb2edc726fbc70778f8': {
      id: '5248a628c0ba0eb2edc726fbc70778f8',
      sortOrder: 10,
      component: require('/Users/prerana_vasishta/my-evershop/node_modules/@evershop/evershop/src/modules/checkout/pages/frontStore/all/MiniCart.jsx')
    },
    fef4b1d9ae2122930f9c33edbb982d6e: {
      id: 'fef4b1d9ae2122930f9c33edbb982d6e',
      sortOrder: 30,
      component: require('/Users/prerana_vasishta/my-evershop/node_modules/@evershop/evershop/src/modules/customer/pages/frontStore/all/UserIcon.jsx')
    }
  },
  content: {
    dfd56a6872d3db810bdbc22bf64c5c23: {
      id: 'dfd56a6872d3db810bdbc22bf64c5c23',
      sortOrder: 10,
      component: require('/Users/prerana_vasishta/my-evershop/node_modules/@evershop/evershop/src/modules/catalog/pages/frontStore/categoryView/CategoryView.jsx')
    },
    f66e06409cb1c767713b5f7b6f5191a8: {
      id: 'f66e06409cb1c767713b5f7b6f5191a8',
      sortOrder: 5,
      component: require('/Users/prerana_vasishta/my-evershop/node_modules/@evershop/evershop/src/modules/catalog/pages/frontStore/categoryView/General.jsx')
    },
    '45515ab09f9ce8f561fc40ca4ffb7b2f': {
      id: '45515ab09f9ce8f561fc40ca4ffb7b2f',
      sortOrder: 0,
      component: require('/Users/prerana_vasishta/my-evershop/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/Breadcrumb.jsx')
    }
  },
  leftColumn: {
    '198226e85729dea1bdaacb793593506a': {
      id: '198226e85729dea1bdaacb793593506a',
      sortOrder: 1,
      component: require('/Users/prerana_vasishta/my-evershop/node_modules/@evershop/evershop/src/modules/catalog/pages/frontStore/categoryView/Filter.jsx')
    }
  },
  rightColumn: {
    '557291e04cb24b34b42ca386ef7d6308': {
      id: '557291e04cb24b34b42ca386ef7d6308',
      sortOrder: 30,
      component: require('/Users/prerana_vasishta/my-evershop/node_modules/@evershop/evershop/src/modules/catalog/pages/frontStore/categoryView/Pagination.jsx')
    },
    '93210b4f6297ac64487221917c364506': {
      id: '93210b4f6297ac64487221917c364506',
      sortOrder: 25,
      component: require('/Users/prerana_vasishta/my-evershop/node_modules/@evershop/evershop/src/modules/catalog/pages/frontStore/categoryView/Products.jsx')
    },
    '7809885849df0067bfe267df792ea83d': {
      id: '7809885849df0067bfe267df792ea83d',
      sortOrder: 15,
      component: require('/Users/prerana_vasishta/my-evershop/node_modules/@evershop/evershop/src/modules/catalog/pages/frontStore/categoryView/Sorting.jsx')
    }
  },
  footer: {
    '03ce62a99b643c53cea33f6fc2c573f5': {
      id: '03ce62a99b643c53cea33f6fc2c573f5',
      sortOrder: 10,
      component: require('/Users/prerana_vasishta/my-evershop/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/Footer.jsx')
    }
  },
  head: {
    '170528765f0295e4db900fd92ea387bc': {
      id: '170528765f0295e4db900fd92ea387bc',
      sortOrder: 5,
      component: require('/Users/prerana_vasishta/my-evershop/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/HeadTags.jsx')
    }
  },
  body: {
    '2aa0bf53e05360bd37f2dd0982998263': {
      id: '2aa0bf53e05360bd37f2dd0982998263',
      sortOrder: 1,
      component: require('/Users/prerana_vasishta/my-evershop/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/Layout.jsx')
    },
    '18bf66723f1e3394e1ebb5dce01e8097': {
      id: '18bf66723f1e3394e1ebb5dce01e8097',
      sortOrder: 10,
      component: require('/Users/prerana_vasishta/my-evershop/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/Notification.jsx')
    }
  },
  header: {
    a20b83833c6ae10ded5077b0943cfef5: {
      id: 'a20b83833c6ae10ded5077b0943cfef5',
      sortOrder: 10,
      component: require('/Users/prerana_vasishta/my-evershop/node_modules/@evershop/evershop/src/modules/cms/pages/frontStore/all/Logo.jsx')
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: require('@evershop/evershop/src/components/frontStore/widgets/CollectionProducts.jsx')
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: require('@evershop/evershop/src/components/frontStore/widgets/TextBlock.jsx')
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: require('@evershop/evershop/src/components/frontStore/widgets/BasicMenu.jsx')
    }
  }
} 
ReactDOM.hydrate(
        <Hydrate/>,
        document.getElementById('app')
      );