const getDeails = (handle) => {
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
            'repositories (first:100) {' +
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
          '}' +
        '}' +
      '}' +
    '}' +
  '}'
  return { query }
}

export default getDeails