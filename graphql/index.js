export const getDetails = (handle) => {
  const query = '{' +
    `search(first: 1, type: USER, query: "${handle} in:login type:org") {` +
      'edges {' +
        'node {' +
          '... on Organization {' +
            'login ' +
            'name ' +
            'location ' +
            'websiteUrl ' +
            'avatarUrl ' +
            'pinnedRepositories (first:10) {' +
              'edges {' +
                'node {' +
                  'name ' +
                  'description ' +
                  'url ' +
                  'licenseInfo {' +
                    'name' +
                  '}' +
                  'updatedAt ' +
                  'stargazers {' +
                    'totalCount' +
                  '}' +
                  'forks {' +
                    'totalCount' +
                  '}' +
                  'languages (first:5) {' +
                    'edges {' +
                      'node {' +
                        'name ' +
                        'color ' +
                      '}' +
                    '}' +
                  '}' +
                '}' +
              '}' +
            '}' +
            // 'repositories (first:100) {' +
            //   'edges {' +
            //     'node {' +
            //       'name ' +
            //       'description ' +
            //       'url ' +
            //       'licenseInfo {' +
            //         'name' +
            //       '}' +
            //       'updatedAt ' +
            //       'stargazers {' +
            //         'totalCount' +
            //       '}' +
            //       'forks {' +
            //         'totalCount' +
            //       '}' +
            //       'languages (first:5) {' +
            //         'edges {' +
            //           'node {' +
            //             'name ' +
            //             'color ' +
            //           '}' +
            //         '}' +
            //       '}' +
            //     '}' +
            //   '}' +
            // '}' +
          '}' +
        '}' +
      '}' +
    '}' +
  '}'
  return { query }
}

export const getRepos = (handle) => {
  const query = '{' +
    `search(first: 100, type: REPOSITORY, query: "user:${handle}") {` +
      'edges{' +
        'cursor ' +
        'node {' +
          '... on Repository {' +
            'name ' +
            'description ' +
            'stargazers {' +
              'totalCount' +
            '}' +
            'forks {' +
              'totalCount' +
            '}' +
            'url ' +
            'updatedAt ' +
            'licenseInfo {' +
              'name' +
            '}' +
            'languages (first:5) {' +
              'edges {' +
                'node {' +
                  'name ' +
                  'color ' +
                '}' +
              '}' +
            '}' +
          '}' +
        '}' +
      '}' +
    '}' +
  '}'

  return { query }
}

export const searchRepos = (search, handle) => {
  const query = '{' +
    `search(first: 1, type: REPOSITORY, query: "${search} user:${handle}"){` +
      'edges{' +
        'cursor' +
        'node {' +
          '... on Repository {' +
            'name' +
            'description' +
            'stargazers {' +
              'totalCount' +
            '}' +
            'forks {' +
              'totalCount' +
            '}' +
            'url' +
            'licenseInfo {' +
              'name' +
            '}' +
            'languages (first:5) {' +
              'edges {' +
                'node {' +
                  'name' +
                  'color' +
                '}' +
              '}' +
            '}' +
          '}' +
        '}' +
      '}' +
    '}' +
  '}'

  return query
}
