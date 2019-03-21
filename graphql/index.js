const getDeails = (handle) => {
  const query = '{' +
    `search(first: 1, type: USER, query: "${handle} in:login") {` +
      'edges {' +
        'node {' +
          '... on User {' +
            'login ' +
            'name ' +
            'avatarUrl ' +
            'pinnedRepositories (first:10) {' +
              'edges {' +
                'node {' +
                  'name ' +
                  'description ' +
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
            'repositories (first:10) {' +
              'edges {' +
                'node {' +
                  'name ' +
                  'description ' +
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